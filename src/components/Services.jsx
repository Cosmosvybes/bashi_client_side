import React from 'react'
const Services = () => {
    return (
        <>

            <section id='how-to-buy'>


                <h1 style={{ fontSize: '16px', textAlign: 'center', color: 'lightgrey' }}> How to buy  </h1>

                <div className='services'>
                    <div className='service'>
                        <div style={{
                            backgroundColor: ' black', border: "1px solid  rgba(89, 205, 153, 0.682)",
                            borderEndEndRadius: '10px', padding: '8px 8px', width: '70px', height: '70px', fontSize: '50px', color: 'lightgrey'
                        }}>  1 </div>
                        <p style={{ lineHeight: '1.5' }}>
                            Click the buy button  to open the wallet connect modal .
                        </p>
                    </div>

                    <div className='service'>
                        <div style={{ backgroundColor: ' black', border: "1px solid  rgba(89, 205, 153, 0.682)", borderEndEndRadius: '10px', padding: '8px 8px', width: '70px', height: '70px', fontSize: '45px', color: 'lightgrey' }}>  2</div>
                        <p>
                            CLick the wallet connect  modal button to link your wallet to be able to buy the $BASHI with your ETHEREUM wallet.
                        </p>
                    </div>

                    <div className='service'>
                        <div style={{ backgroundColor: ' black', border: "1px solid  rgba(89, 205, 153, 0.682)", borderEndEndRadius: '10px', padding: '8px 8px', width: '70px', height: '70px', fontSize: '50px', color: 'lightgrey' }}>  3 </div>
                        <p>
                            After the transaction is  successfully initiated, your transaction hash key will be generated, and will be displayed to your screen, wait for for the ethereum blockchain to validate the transaction, or verify your your transacton on etherscan.io !
                        </p>
                    </div>

                    <div className='service'>
                        <div style={{ backgroundColor: ' black', border: "1px solid  rgba(89, 205, 153, 0.682)", borderEndEndRadius: '10px', padding: '8px 8px', width: '70px', height: '70px', fontSize: '50px', color: 'lightgrey' }}>  4</div>
                        <p>
                            Grab a glass of water and relax, you are now a $BASHI token owner! Cheers!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
