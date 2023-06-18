import React from 'react'
import './Welcome.css'
import { useState, useEffect } from 'react';
import { Web3Button } from '@web3modal/react'
import kyc from '../assets/Kyc.jpg'
import { FaCopy, FaTimes } from 'react-icons/fa';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'


import { useAccount } from 'wagmi';
import { ethers, parseEther } from 'ethers';
import Button from './Button';

import { Link } from 'react-scroll';

import Tokendetails from './Tokendetails';



const chains = [arbitrum, mainnet, polygon]
const projectId = '1028e6cd70d9e451d11275c9cda97e19';
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient
});


const ethereumClient = new EthereumClient(wagmiConfig, chains);

const Welcome = () => {
    const [copyHash, setCopyHash] = useState(false);
    const [receipt, setReceipt] = useState(false);
    const { isConnected, address } = useAccount();

    const showKyc = () => {
        return window.location.href = kyc;
    }
    useEffect(() => {
        fetch(`https://sarubashi-app.onrender.com/signup`, { method: 'POST', mode: 'cors', headers: { "Content-Type": "Application/json" }, body: JSON.stringify({ wallet: address }) })
            .then((response) => response.json())
            .then((res) => {

            });
    }, []);

    var [bal, setBal] = useState('')
    var [eth, setEth] = useState(0);
    const [bashi, setBashi] = useState('');
    const [hash, setHash] = useState('');
    const [qty, setQty] = useState(8)
    const [response, setResponse] = useState('');
    const [buybtn, setBuyBtn] = useState(false);
    const [canBuy, setCanbuy] = useState(false)
    useEffect(() => {
        function validateBuy() {
            if (!eth) {
                setResponse(`Enter the amount of $BASHI`);
                return;
            }
            else if (!Number(eth)) {
                setBashi(' Specify a valid ETH value ');
                setCanbuy(false)
            }
            else if (isConnected && Number(eth) < 0.00065) {
                setBashi('1 BASHI is 0.00065 ETH increase purchase value');
                setCanbuy(false)
            }
            else if (isConnected && Number(eth) >= 0.00065) {
                var bsh = eth / 0.00065;
                setBashi(`Buying ${bsh.toFixed(2)} $BASHI token`);
                setQty(bsh);
                setCanbuy(true)
            }

        };
        validateBuy();
    }, [eth]);



    const copyCallback = (e) => {
        e.preventDefault();
        window.navigator.clipboard.writeText(hash);
    }

    const sendETH = async (e) => {
        e.preventDefault();
        if (canBuy) {
            try {

                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                const hash = await signer.sendTransaction({
                    to: '0x18751AcA515fea5F331A7D38C689b45E1429CAa5',
                    value: parseEther(eth)
                });
                setResponse(`Transaction successfully initiated`);
                setCopyHash(true);
                setReceipt(true)
                setHash(hash.hash);
                fetch(`https://sarubashi-app.onrender.com/buytoken`, { method: 'POST', mode: 'cors', headers: { "Content-Type": "Application/json" }, body: JSON.stringify({ wallet: address, amount: qty }) })
                    .then((response) => response.json())
                    .then((res) => {
                        setBal(res.balance)
                    });

            } catch (error) {
                if (error) {
                    setResponse(`Check your ethereum balance.`);
                    setTimeout(() => { setResponse('') }, 2000)
                }

            }

        }
        else { return }

        setEth('')


    }

    const showWalletConnect = () => {
        setBuyBtn(!buybtn);




    }

    return (
        <>
            <section className='coin-details'>
                <div className="headline">
                    <h1 style={{ color: 'rgb(89, 205, 153, 0.682)' }}>SARUBASHI </h1>
                    <h1 style={{ color: "grey" }}> Is 100% secure token, embracing the wisdom of its namesake. </h1>
                    <p style={{ color: 'rgb(89,205,153,0.682)' }}>this multi-purpose token is committed to  providing a secure , reliable & trustworthy  blockchain </p>
                    <h1 style={{ color: 'rgb(89,205,153,0.682)' }}> Powerful and fast for its vibrant community</h1>
                    <Button value='KYC certificate' color='lightgrey' backgorund={'rgb(89,205,153,0.682)'} width={'125px'} callback={showKyc} />
                </div>

                <div className="connect-wallet" style={{ height: buybtn ? '150px' : '0' }}>
                    <Web3Button />
                </div>

                <div className="tokendetails" >
                    <h1 style={{ color: 'rgb(89,205,153,0.682)', textDecoration: 'underline', padding: '10px 10px' }}> Token Sale Proceeds</h1>
                    <Tokendetails heading='Token Details' />
                    <div className='buy-earn-btn'>
                        <Button value={!buybtn ? 'BUY $BASHI' : 'close'} color={'lightgrey'} backgorund={!buybtn ? 'rgb(89,205,153,0.682)' : 'red'} callback={showWalletConnect} /> <Link to={'referral'} smooth={true} duration={800} style={{ textDecoration: 'none', backgroundColor: 'rgb(89,205,153,0.682)', height: "40px", padding: '10px 10px', color: 'lightgrey', border: "1px solid rgb(89,205,153,0.682)", borderEndEndRadius: '10px', marginTop: '5px' }}> EARN $BASHI</Link>
                    </div>
                    <WagmiConfig config={wagmiConfig}>
                    </WagmiConfig>
                    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
                </div>



            </section>


            {isConnected && <div id='purchase-modal'>

                <div className='modal-reciept-container'>
                    <div className='buying-modal'>
                        <form onSubmit={sendETH} >
                            <label>
                                <b style={{ textAlign: 'center', color: 'lightgrey' }}> $BASHI wallet will be generated soon as you purchase your your first token </b>
                            </label>
                            <label>
                                <input type='number' name='eth' value={eth} placeholder='ETH AMOUNT' onChange={(e) => { setEth(e.target.value) }} style={{ border: '1px solid rgba(89, 205, 153, 0.682) ', color: 'green' }} step='0.01' required />
                            </label>


                            <input type='submit' value={'PAY NOW'} style={{ color: 'lightgrey', backgroundColor: ' rgba(89, 205, 153, 0.682)', border: '1px solid  rgba(89, 205, 153, 0.682)' }} />
                            <label>
                                {eth && <p style={{ textAlign: 'center', color: canBuy ? "green" : 'red' }}>{bashi}</p>}
                            </label>
                            <label>
                                {!eth && <p style={{ textAlign: 'center', color: 'lightgreen' }}>{response}</p>}
                                {copyHash && <div> <input type='text' value={hash} onChange={(e) => { setHash(e.target.value) }} /><br /> <span style={{ color: "lightgrey" }}> Copy hash to verify on <Link to='https://etherscan.io'> etherscan.io </Link> </span> <FaCopy onClick={copyCallback} style={{ color: 'green', position: 'relative', marginTop: '15px' }} /> </div>}
                            </label>
                        </form>
                    </div>
                    {receipt && <div className="wallet-connect_">
                        <p> Purchase reciept ; </p>
                        <p> Hurray🎊🎉 you have successfully purchase  <span style={{ color: "green" }}> {qty}</span>  sarubashi token 🤑 </p>
                        <div style={{ borderRadius: '50%' }}> <FaTimes style={{ color: 'red', fontSize: '24px', position: 'absolute', right: '2', top: '2' }} onClick={() => { setReceipt(!receipt) }} /></div>
                        <b> Your Referrals </b>
                        <p> {0}</p>
                        <b> Bashi Token amount </b>
                        <p> {qty}</p>
                        <b>Earnings from Referrals </b>
                        <p> {0.00}</p>
                        <b>Value on Launch </b>
                        <p>$ {qty * 4}</p>
                        <b>Connected Wallet </b>
                        <p> <Web3Button /></p>
                        <b>$ BASHI Balance </b>
                        <p> {bal}</p>
                        <b>Bashi wallet</b>
                        <p> Generating...</p>
                    </div>}

                </div>
            </div >
            }

        </>
    )
}

export default Welcome
