import React from 'react'
import './Tokendetails.css'

const Tokendetails = ({ heading }) => {
    return (
        <>
            <div className='token-detail-container' >
                <b>
                    <p>{heading} </p>
                </b>
                <p> Token Name = <span> Sarubashi  </span></p>
                <p> Ticker = <span> $BASHI </span></p>
                <p>  Total. Supply = 87,927,848,292</p>
                <p>  Max. Supply After Burn  = 7,491,872,449</p>
                <p>  Presale Supply =  3,895,775,673</p>
            </div>
          

        </>
    )
}

export default Tokendetails
