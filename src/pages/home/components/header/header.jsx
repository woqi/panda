import React, { useState } from 'react'
import HeaderTagLists from '../headerTagLists/headerTagLists'
import './header750.scss'

export default function header() {
  const [showTitle, setShowTitle] = useState(false)
  const handleClick = () => {
    const cur = showTitle
    setShowTitle(!cur)
  }
  return (
    <header className='header'>
      <div className='header-left'>
        <img className='img' src='/src/assets/pc/logo.png' alt='logo' />
        <div className='title'>PANDA PUNK 2169</div>
        {showTitle}
      </div>
      <div className='header-right'>
        <img
          className='title-btn'
          src={`/src/assets/pc/${!showTitle ? 'more.png' : 'more-green.png'}`}
          onClick={handleClick}
        />
        <HeaderTagLists show={showTitle} setShowTitle={setShowTitle} />

        <ul className='icon-lists'>
          <li>
            <img src='/src/assets/pc/twitter.png' alt='twitter' />
          </li>
          <li>
            <img src='/src/assets/pc/game.png' alt='game' />
          </li>
          <li>
            <img src='/src/assets/pc/wallet.png' alt='wallet' />
          </li>
        </ul>
      </div>
    </header>
  )
}
