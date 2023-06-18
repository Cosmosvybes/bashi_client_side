import React from 'react';
import './Pie.css'
import piechart from '../assets/map.jpg'

const Pie = () => {
    return (
        <>
            <section className='pie-container'>
                <div className="piebox">
                    <img src={piechart} alt="pie" />
                </div>

            </section>

        </>
    )
}

export default Pie
