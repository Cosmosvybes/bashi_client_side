import React from 'react'
import { useState, useEffect } from 'react'
import { FaCopy } from 'react-icons/fa'
import { useAccount } from 'wagmi';
import img from '../assets/binance-earn.webp'
import './Faq.css'
import './Referrrallevel'
import Referrrallevel from './Referrrallevel';

const Referral = () => {
    const { isConnected, address } = useAccount()

    const copyText = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(link);
    }
    var [referralCode, setReferralCode] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('referralCode');
        const userCode = address
        setReferralCode(userCode)
        if (code) {
            setReferralCode(code)
        }
    }, [location.search]);

    useEffect(() => {
        const currentURL = window.location.href;
        const seperator = currentURL.includes('?') ? '&' : '?';
        const referralLink = `${currentURL}${seperator}referralCode=${referralCode}`;
        setLink(referralLink);
    }, [referralCode])
    return (
        <>
            <section id='referral'>
                <h1 style={{ fontSize: '16px', textAlign: 'center' }}> How to earn $BASHI  </h1>
                <h1 style={{ textAlign: 'center', color: 'grey', fontSize: '16px' }}> Connect your wallet, buy $BASHI to generate your referral code, share with friends to earn 10% of <h1 style={{ color: ' rgba(89, 205, 153, 0.682)', fontSize: '20px' }}>$BASHI  </h1>on every transaction . </h1>
                <div className='referral-page'>
                    <div className='ref-image'>
                        <img src={img} alt='img' ></img>
                    </div>
                    {isConnected && <div className='link-input'>
                        <input type='text' title='link' value={link} onChange={(e) => { setLink(e.target.value) }} />  <FaCopy className='icon' onClick={copyText} />
                    </div>}

                </div >
                <Referrrallevel />
            </section >

        </>

    )
}

export default Referral
