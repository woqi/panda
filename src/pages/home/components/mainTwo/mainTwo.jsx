import React from 'react'
import './mainTwo750.scss'
export default function mainTwo() {
  return (
    <main className='main-two'>
      <img className='main-bg' src='/src/assets/app/main-bg2.png' />
      <img className='big-main-bg' src='/src/assets/pc/main-bg2.png' />

      <div className='main-wrap main-float flex flex-col items-center'>
        <p className='f-title'>JION THE PANDA UNIVERSE</p>
        <p className='s-title'>ARE YOU MUTANT PANDA?</p>
        <div className='btn-wrap app-hidden'>
          <img className='twitter-btn' src='/src/assets/pc/twitter-btn.png' />
          <img src='/src/assets/pc/discord-btn.png' />
        </div>
        <img className='twitter-btn pc-hidden' src='/src/assets/pc/twitter-btn.png' />
        <img className='pc-hidden' src='/src/assets/pc/discord-btn.png' />
      </div>
    </main>
  )
}
