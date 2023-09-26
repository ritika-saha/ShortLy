import './Style.css'

import React from 'react'
import TypingText from './TypingText'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-title'><TypingText text="ShortLy...." /></div>
        <p className='header-desc'>Enter your long URL and shorten it with ease 🎉</p>
    </div>

  )
}

export default Header