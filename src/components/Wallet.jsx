import React from 'react'
import './Wallet.css'
import { Link } from 'react-scroll'


const Wallet = () => {


    return (
        <>
            <section className='wallet-container'>
                <div className='contents'>
                    <h4 style={{ textDecoration: 'underline' }}> Contract Address</h4>
                    <p>0x6073F62caF5Cadc7f7d586ff04972319f32FA285</p>
                    <div className="pinklink">
                        <a href='https://www.pinksale.finance/pinklock/record/1006580?chain=ETH'> Team Wallet Lock </a>
                        <a href='https://www.pinksale.finance/pinklock/record/1006581?chain=ETH'> Market Wallet Lock </a>
                    </div>
                </div>

           

            </section>
        </>
    )
}

export default Wallet
