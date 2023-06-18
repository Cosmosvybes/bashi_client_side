import React, { useState } from 'react'
import './Intro.css'
import bgImage from '../assets/pexels-daniel-putzer-633409.jpg'
import { FaExclamationCircle, FaLightbulb, FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import Video from './Video';
import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi'


const Introduction = ({ userBalance }) => {
    const introduction = useRef(null);
    const para = useRef(null);
    const [video, setVideo] = useState(false);

    const { isConnected } = useAccount()
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(para.current, { y: '+=100', duration: 2.5 }, { y: '-=100', duration: 2.5, ease: 'bounce.out', opacity: 1 });
            gsap.fromTo('.h2', { x: '-=80', duration: 2 }, { x: '+=80', duration: 2, opacity: 1 });
            gsap.fromTo('.heading', { x: '+=100', duration: 2 }, { x: '-=100', duration: 2 });
            gsap.fromTo('.my-p', { y: '-=100', duration: 1.5 }, { y: '+=100', duration: 1.4, ease: 'bounce.out' })
            gsap.fromTo('.whitepaper', { y: '-=100', duration: 4 }, { y: '+=100', duration: 3, ease: 'bounce' })

        }, introduction)
        return () => { ctx.revert() }
    }, []);


    return (
        <>
            <div ref={introduction} id='introduction' className='introduction' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', display: 'block', backgroundRepeat: 'no-repeat' }}>
                {isConnected ? <div className="wallet-balance"> <span> <Web3Button />  $BASHI  {userBalance}  <FaExclamationCircle style={{ color: !isConnected && "green", marginBottom:'-2px',position:'relative' }} /> </span>  </div> : <div className="walletsignal"><h1> Wallet not connected   <FaExclamationCircle style={{ color: !isConnected && "red", position: 'absolute', marginLeft: '4px', marginTop: '3px' }} /> </h1></div>}

                <div className='container_'>
                    <p className='heading'> Empower Your  Daily Transaction With Sarubashi </p>
                    <h1 ref={para}> Get Started Today! </h1>
                    <h2 className='h2'> Take your transaction with digital token to the next level. </h2>
                    <p id='my-p' className='my-p'> Our user friendly and feature-packed token makes it easy to create and manage your own finances . With smart contract integration , KYC verification certificate , you'll have everything you need to use Sarubashi token seamlessly for wide range of financial transactions , including investment purchases and merchandise .</p>
                    <div className='whitepaper-btn'>
                        <button className='whitepaper' onClick={() => { setVideo(!video) }}>
                            Whitepaper
                        </button>

                    </div>
                </div>
            </div>
            <Video video={video} />

        </>
    )
}



export default Introduction
