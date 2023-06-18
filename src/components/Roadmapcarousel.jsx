import React, { useState } from 'react'
import bgImage from '../assets/pexels-daniel-putzer-633409.jpg'
import './Roadmap.css'
import Carousel from 'react-elastic-carousel'


const Roadmapcarousel = () => {
    const [items] = useState([
        {
            id: 1,
            title: <div style={{ display: 'block', textAlign: 'center' }}>
                <h1 style={{ fontSize: '18px', color: 'grey' }}> PHASE 1</h1>
                <p> Launch Website</p>
                <p> Audit Smart Contract </p>
                <p> Release Whitepaper </p>
                <p> Lock Marketing and Team Tokens </p>

            </div>
        },
        {
            id: 2,
            title: <div className='map' style={{ display: 'block', textAlign: 'center' }}>
                <h1 style={{ fontSize: '18px', color: 'grey' }}> PHASE 2</h1>
                <p> Launch Sarubashi Presale</p>
                <p>Update Etherscan Logo/ Socials/Info </p>
                <p> Listings on CMG/CG </p>
                <p> Initiate Token Burns </p>

            </div>
        },
        {
            id: 3,
            title: <div className='map' style={{ display: 'block', textAlign: 'center', color: 'green' }}>
                <h1 style={{ fontSize: '18px', color: 'grey' }}> PHASE 3</h1>
                <p> Complete all burns phases except final burn </p>
                <p> Plan listing and Marketing push </p>
                <p> Social Media push and initiate partnerships </p>
                <p> Start Designs and Sarubashi Merch </p>

            </div>
        },
        {
            id: 4,
            title: <div className='map' style={{ display: 'block', textAlign: 'center' }}>
                <h1 style={{ fontSize: '18px', color: 'grey' }}> PHASE 4</h1>
                <p> Final Burn tokens </p>
                <p>Launch on Uniswap </p>
                <p> Token Listing on Centralized Exchanges</p>
                <p> Initiate NFT Designs </p>
            </div>
        }
    ])


    return (
        <>
            <section id='roadmap' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                <h1 style={{ fontSize: '16px', textAlign: 'center', color: 'lightgrey' }}> Road map </h1>
                <div className="container">
                    <Carousel isRTL={false} itemPosition='center' verticalMode={false} enableSwipe={true} itemsToShow={1.5} outerSpacing={0} initialActiveIndex={3}>
                        {items.map(item => <div className='roadmap-box' key={item.id}> <p>{item.title} </p></div>)}
                    </Carousel>
                </div>


            </section>
        </>

    )
}

export default Roadmapcarousel
