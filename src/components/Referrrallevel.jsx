import React from 'react'
import './Referral.css'

const Referrrallevel = () => {
    return (
        <>
            <section className='ref-level-container'>
                <div className='bonus-level'>
                    <p style={{ color: 'rgba(89, 205, 153, 0.682)' }}> Get On First Level of Referral Commission</p>
                    <h1 style={{ fontSize: '16px', color: 'grey' }}> Referral Bonus Level On First Purchase </h1>
                    <div className='level-box'>
                        <div className='level'>
                            <h1> 2% </h1>
                            <p> level 1</p>
                        </div>
                        <div className='level'>
                            <h1> 4%</h1>
                            <p> level 2</p>
                        </div>
                        <div className='level'>
                            <h1> 6%</h1>
                            <p>Level 3</p>
                        </div>
                        <div className='level'>
                            <h1> 8%</h1>
                            <p>level 4</p>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Referrrallevel
