import React, { useEffect, useRef } from 'react'
import './Whyus.css'
import { FaEthereum, FaChartBar, FaSalesforce, FaUserLock } from 'react-icons/fa'
import { gsap } from 'gsap'
const Whyus = () => {
    const whyUs = useRef(null);
    useEffect(() => {
        const wxt = gsap.context(() => {
            gsap.from('.eth', { rotation: 360, duration: 1, repeatDelay: 4, yoyo: true, ease: 'bounce.out', repeat: -1 });
            gsap.from('.chtbr', { rotation: 360, duration:1 , repeatDelay: 3, yoyo: true, ease: 'bounce.out', repeat: -1 })
            gsap.from('.lck', { rotation: 360, duration: 1, repeatDelay: 2, yoyo: true, ease: 'bounce.out', repeat: -1 })
            gsap.from('.sfc', { rotation: 360, duration: 1, repeatDelay: 1, yoyo: true, ease: 'bounce.out', repeat: -1 })
        }, whyUs);
        return () => { wxt.revert() }
    }, [])


    return (
        <>
            <section id='why-us' className='why-us' ref={whyUs}>
                <div className="why-us-block">
                    <p> Why us</p>
                    <h1> Why Choose Us ?</h1>
                    <p>
                        Sarubashi is a powerful and customizable token for initiating seamless transaction.
                        With advanced features and customizable token economics, and ethereum cryptocurrency support and secure storage.
                    </p>

                    <div className="logo-box-container">
                        <div className="logo-box">
                            <FaEthereum className='eth' style={{ color: 'rgba(89, 205, 153, 0.682)', fontSize: "18px" }} />
                            <h1> 01 </h1>
                            <p style={{ textDecoration: 'underline' }}> Reason one</p>
                            <p> Sarubashi token , like many other tokens is built is bult on Ethereum blockchain and operates as an ERC-20 token </p>

                        </div>

                        <div className="logo-box">
                            <FaChartBar className='chtbr' style={{ color: 'rgba(89, 205, 153, 0.682)', fontSize: "18px" }} />
                            <h1> 02 </h1>
                            <p style={{ textDecoration: 'underline' }}> Reason Two</p>
                            <p> Sarubash is listed under Ethereum's Blockchain system which is designed as a decentralized platform for building decentralized Application/ Tokens</p>

                        </div>
                        <div className="logo-box">
                            <FaUserLock className='lck' style={{ color: 'rgba(89, 205, 153, 0.682)', fontSize: "18px" }} />
                            <h1> 03 </h1>
                            <p style={{ textDecoration: 'underline' }}> Reason Three</p>
                            <p> By building Sarubashi on Ethereum's Blockchainas an ERC-20 token, the token inherits the security, reliability, and interoperability of the Ethereum's Blockchain </p>

                        </div>
                        <div className="logo-box">
                            <FaSalesforce className='sfc' style={{ color: 'rgba(89, 205, 153, 0.682)', fontSize: "18px" }} />
                            <h1> 04 </h1>
                            <p style={{ textDecoration: 'underline' }}> Reason Four</p>
                            <p> Sarubashi is on presale and selling at the rate of (1 BASHI = 0.00065 ETH) </p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Whyus
