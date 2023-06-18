import React, { useEffect, useRef } from 'react'
import './Customer.css';
import { gsap } from 'gsap';
import { FaUser, FaDelicious, FaSmileBeam , FaCity} from 'react-icons/fa';

const Customer = ({ h1, p, h2, p2, h3, p3, h4, p4 }) => {

    const contain = useRef(null);
    const details = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.detail-info', { ease: "bounce.out", stagger: 0.4, rotation: 360, duration: 5, repeat: -1, yoyo: true, repeatDelay: 2 })
        }, contain)
        return () => { ctx.revert() }
    })
    return (
        <>
            <section className='container' ref={contain} >
                <div className='details'>
                    <div className='detail-info' ref={details}>
                        <FaUser style={{ fontSize: "30px", color: 'lightgray' }} />
                        <h1 style={{ fontSize: "32px", color: "lightgrey" }}> {h1} </h1>
                        <p style={{ color: "lightgrey" }}> {p}</p>
                    </div>

                    <div className='detail-info' >
                        <FaSmileBeam style={{ fontSize: "30px", color: 'lightgray' }} />
                        <h1 style={{ fontSize: "32px", color: "lightgrey" }}>{h2}</h1>
                        <p style={{ color: "lightgrey" }}>{p2}</p>
                    </div>


                    <div className='detail-info' >
                        <FaDelicious style={{ fontSize: "30px", color: 'lightgray' }} />
                        <h1 style={{ fontSize: "32px", color: "lightgrey" }}>{h3}</h1>
                        <p style={{ color: "lightgrey" }}>{p3}</p>
                    </div>

                    <div className='detail-info' >
                        <FaCity style={{ fontSize: "30px", color: 'lightgray' }} />
                        <h1 style={{ fontSize: "32px", color: "lightgrey" }}>{h4}</h1>
                        <p style={{ color: "lightgrey" }}>{p4}</p>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Customer
