import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Excusive offer on Your Email</h1>
        <p>Subscribe to our NewsLetter and stay Updataed</p>

        <div className='newsletter-input'>
            <input type='email' placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter