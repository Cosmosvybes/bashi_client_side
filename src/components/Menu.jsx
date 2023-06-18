import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { FaList, FaTelegram, FaTwitter, FaTimes, FaInstagram } from 'react-icons/fa'
import logo from '../assets/mobilelogo.jpg';




const Menu = () => {
  const [switch_, setSwitch] = useState(false);

  return (
    <>
      {!switch_ &&
        <div className='bars_' >
          <button style={{ border: 'unset', backgroundColor: 'black' }}> <img src={logo} alt='logo' width={'120px'} height={'60px'} style={{ position: 'relative' }} />  </button>
          <FaList style={{ float: 'right', fontSize: "20px", color: 'rgba(89, 205, 153, 0.682)', marginTop: '5px', marginRight: '10px' }} onClick={() => { setSwitch(!switch_) }} />

        </div>
      }

      <div className={switch_ ? 'overlay_' : 'overlay'}>

        <nav className='content'>
          <Link className="link" to={'roadmap'} smooth={true} duration={800}> Roadmap</Link>
          <Link className="link" to={'referral'} smooth={true} duration={800}> Referral </Link>
          <Link className="link" to={'why-us'} smooth={true} duration={800}> Why us </Link>
          <Link className="link" to={'faqs'} smooth={true} duration={800}> FAQs </Link>
          <FaTimes onClick={() => { setSwitch(!switch_) }} style={{ color: 'red', fontSize: '18px', marginTop: '3px' }} />
        </nav>
      </div >

      <div className='_container'>
        <img src={logo} alt='logo' width={'110px'} height={'40px'} style={{ position: 'relative', marginTop: '5px', borderRadius: '3px' }} />

        <nav className='bars'>
          <Link className='link' to={'roadmap'} smooth={true} duration={800}>  Roadmap </Link>
          <Link className="link" to={'referral'} smooth={true} duration={800}> Referral </Link>
          <Link className="link" to={'why-us'} smooth={true} duration={800}> Why us </Link>
          <Link className='link' to={'faqs'} smooth={true} duration={800}> FAQs
          </Link>
        </nav>



        <div className='bars'>
          <Link className='link' to={'https://t.me/SARUBASHITOKEN'} smooth={true} duration={800}>   <FaInstagram /> </Link>
          <Link className='link' to={'https://twitter.com/bashi_token'} smooth={true} duration={800}>  <FaTwitter /></Link>
          <Link className='link' to={'https://instagram.com/bashi_token'} smooth={true} duration={800}> <FaTelegram /> </Link>
        </div>
      </div >
    </>
  )
}

export default Menu
