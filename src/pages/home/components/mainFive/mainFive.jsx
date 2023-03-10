import React from 'react'
import './mainFive750.scss'

export default function mainFive() {
  return (
    <main className='main-five'>
      <img className='main-bg' src='/src/assets/app/main-bg5.png' />
      <img className='big-main-bg' src='/src/assets/pc/main-bg5.png' />

      <div className='main-wrap'>
        <div className='vision-desc-wrap'>
          <div id='vision' className='title'>
            PALADIN'S VISION
          </div>
          <p className='desc'>
            Paladin is the leader of a mutant panda tribe, who is good at
            transforming machines with the power of technology. He has injected
            new hope into panda civilization. He is a legendary hero.
            <br />
            <br />
            He hopes to create a metaverse of Panda Punk 2169 and lead his
            pandaren to the light. Fight for Pandaren.
          </p>
        </div>
        <img
          className='big-hero app-hidden'
          src='/src/assets/pc/big-hero.png'
        />
      </div>
    </main>
  )
}
