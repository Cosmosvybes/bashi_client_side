import React, { useEffect, useRef } from 'react'
import './Video.css'
import VideoFile from "../assets/Sarunashi.mp4"
import { gsap } from 'gsap'

const Video = ({ video }) => {
    const videoContainer = useRef(null);

    useEffect(() => {
        let vdx = gsap.context(() => { gsap.fromTo('.vdo', { x: '+=100', duration: 2, ease: 'bounce.out' }, { x: '-=100', duration: 2, ease: 'bounce.out' }) }, videoContainer);
        return () => { vdx.revert() }
    }, [])
    return (
        <>
            <section ref={videoContainer} className='video-container'>
                <div className='video-details' style={{ height: video ? '520px' : '0', transition: "0.6s" }}>
                    <p> Whitepaper</p>
                    <h1> Introduction to sarubashi </h1>
                    <video className='vdo' controls loop >
                        <source src={VideoFile} type='video/mp4'>
                        </source>
                    </video>
                </div>

            </section>

        </>
    )
}

export default Video
