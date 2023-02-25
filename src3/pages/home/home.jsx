import React from 'react'
import './home.scss'
export default function home() {
  return (
    <div className='home-container'>
      <header className='header'>
        <div className='header-left'>
          <img className='img' src='/src/assets/pc/logo.png' alt='logo' />
          <div className='title'>PANDA PUNK 2169</div>
        </div>
        <div className='header-right'>
          <img className='title-btn' src='/src/assets/pc/more.png'></img>
          <ul className='tag-lists'>
            <li>ABOUT</li>
            <li>REVELATION</li>
            <li>VISION</li>
            <li>ECOSYSTEM</li>
            <li>HEROS</li>
            <li>FAQ</li>
          </ul>
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
      <main className='main-one'>
        <img className='main-bg' />
        <div className='title-wrap'>
          <img
            className='main-logo'
            src='/src/assets/pc/logo-big.png'
            alt='logo'
          />
          <p className='main-title'>PANDAPUNK 2169 MINT YOUR HEROS</p>
          <p className='main-sub-title'>TOTAL SUPPLY PANDARENs: 10,000 NFTs</p>
          <div className='main-th-title-wrap'>
            <p className='main-th-title'>
              CONTRACT ADDRESS : XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
            <img src='/src/assets/pc/copy.png' />
          </div>
        </div>
        <ul className='time-wrap'>
          <li>
            <p className='title'>WHITELIST</p>
            <p className='coin'>0.025 ETH PER WALLET</p>
            <div className='time-item'>
              <ul className='left'>
                <li className='left-li'>June</li>
                <li className='left-li'>01</li>
                <li className='left-li'>2023</li>
              </ul>
              <ul className='right'>
                <li className='left-li'>10</li>:<li className='left-li'>10</li>:
                <li className='left-li'>01</li>
              </ul>
            </div>
          </li>
          <li>
            <p className='title'>PUBLIC</p>
            <p className='coin'>0.03 ETH PER WALLET</p>
            <div className='time-item'>
              <ul className='left'>
                <li className='left-li'>June</li>
                <li className='left-li'>01</li>
                <li className='left-li'>2023</li>
              </ul>
              <ul className='right'>
                <li className='left-li'>10</li>:<li className='left-li'>10</li>:
                <li className='left-li'>01</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className='board-wrap'>
          <div className='board flex flex-col'>
            <div className='top flex flex-col'>
              <div className='count-reg-wrap flex justify-between'>
                <div className='count-wrap flex'>
                  <div className='reduce'>-</div>
                  <div className='num'>10</div>
                  <div className='add'>+</div>
                </div>
                <p className='reg'>10 Max</p>
              </div>
              <p className='total flex'>
                TOTAL : <p className='green-num'>0.1</p>
                ETH
              </p>
            </div>
            <div className='bottom flex flex-col items-center'>
              <p className='opt flex'>
                OPPORTUNITY :<p className='green-t'>X</p>
                Legendary &<p className='green-t'>X</p>
                Holy
              </p>

              <p className='awa flex'>
                AWARDS :<p className='green-t'>XXXX</p> PPT
              </p>
            </div>
          </div>
        </div>
        <img className='c-w-btn' src='/src/assets/pc/connect-wallet.png' />
        <div className='end-text-desc'>
          PANDAREN MINTED:
          <span className='green-t'>10,000</span>/ 10,000
        </div>
      </main>
      <main className='main-two'>
        <img src='/src/assets/app/main-bg2.png' />
        <div className='main-float flex flex-col items-center'>
          <p className='f-title'>JION THE PANDA UNIVERSE</p>
          <p className='s-title'>ARE YOU MUTANT PANDA?</p>
          <img className='twitter-btn' src='/src/assets/pc/twitter-btn.png' />
          <img src='/src/assets/pc/discord-btn.png' />
        </div>
      </main>
      <main className='main-three'>
        <img className='main-bg' src='/src/assets/app/main-bg3.png' />
      </main>
      <footer></footer>
    </div>
  )
}
