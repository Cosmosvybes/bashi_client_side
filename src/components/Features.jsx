import React, { useRef, useEffect } from 'react'
import './Features.css'
import { FaFileInvoiceDollar, FaHandHoldingUsd, FaRegMoneyBillAlt } from 'react-icons/fa'
import { gsap } from 'gsap'

const Features = ({ header, subheading }) => {

    const container = useRef();
    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('.content-box_', { scale: 0.8, duration: 1, yoyo: true, stagger: 0.4, repeat: -1 }, { scale: 0.9, duration: 1, yoyo: true, repeat: -1, stagger: 0.4, })
        }, container)
    })
    return (
        <>
            <section className='features-container' ref={container}>
                <div className='content_'>
                    <p> {header} </p>
                    <h1>{subheading} </h1>

                    <div className='content-detail_'>

                        <div className='content-box_'>
                            <FaFileInvoiceDollar style={{ fontSize: "60px", color: 'lightgrey' }} />
                            <p> Real Time Price </p>

                        </div>

                        <div className='content-box_'>
                            <FaRegMoneyBillAlt style={{ fontSize: "60px", color: 'lightgrey' }} />
                            <p> Low cost padelity  </p>

                        </div>
                        <div className='content-box_'>
                            <FaHandHoldingUsd style={{ fontSize: "60px", color: 'lightgrey' }} />
                            <p> Earn Extra </p>
                        </div>


                    </div>
                </div>


            </section>
        </>
    )
}

export default Features
