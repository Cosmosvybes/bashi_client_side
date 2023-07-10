import React, { useRef } from 'react'
import './Countdown.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { gsap } from 'gsap';

const Countdown = () => {
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [Sec, setSeconds] = useState('');
    const [daysOver, setCountDays] = useState('');
    const countdownDate = new Date('2023-07-14 00:00:00').getTime();

    let timer = useRef(null);
    let countDown = useRef(null);




    useEffect(() => {

        const timeAnime = gsap.context(() => { gsap.fromTo('.timing', { y: '+=100', yoyo: true, duration: 5, repeat: -1, scale: 0.5 }, { y: '-=100', duration: 4, ease: 'bounce', yoyo: true, repeat: -1, scale: 0.7 }) }, countDown)

        var ID = setInterval(
            () => {
                const now = new Date().getTime();
                var distance = countdownDate - now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / (1000));
                setDay(days);
                setHour(hours);
                setMin(minutes);
                setSeconds(seconds)
                if (distance < 0) {
                    clearInterval(ID);
                    setCountDays("Now in stage 2 ")
                }
            }, 1000);
        return () => { timeAnime.revert() }
    }, [countdownDate])


    return (
        <>
            <div id='count-down' className='count-down' ref={countDown} >
                <div className='content'>
                    <h1>  Token pre-sale starts in </h1>
                    <p> COUNTDOWN </p>
                    <div className='timing' ref={timer}>
                        <div className='time'>
                            <h1> {day}</h1>
                            <p> days</p>
                        </div>
                        <div className='time'>
                            <h1> {hour}</h1>
                            <p> hour</p>
                        </div>
                        <div className='time'>
                            <h1> {min}</h1>
                            <p>min </p>
                        </div>
                        <div className='time'>
                            <h1> {Sec}</h1>
                            <p>sec</p>
                        </div>
                        {/* <h1> {daysOver}</h1> */}
                    </div>




                    <Link to='headline' smooth={true} duration={800}>  BUY TOKEN NOW</Link>
                </div>

            </div>
        </>
    )
}

export default Countdown
