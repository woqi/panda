import React from 'react'
import './footer750.scss'

export default function footer() {
  return (
    <footer className='footer'>
      <main>
        <img className='big-main-bg' src='/src/assets/pc/footer.png' />
        <img className='main-bg' src='/src/assets/app/footer.png' />

        <div className='main-wrap'>
          <img className='main-logo' src='/src/assets/app/footer-logo.png' />
          <div className='app-icon-img-wrap app-hidden flex'>
            <div className='icon-lists flex'>
              <img
                className='icon-first'
                src='/src/assets/pc/twitter.png'
                alt='twitter'
              />
              <img src='/src/assets/pc/game.png' alt='game' />
            </div>
            <div className='page-footer'>
              2022 COPY RIGHT@PANDAPUNK 2169 . BRON FOR PANDARENS
            </div>
          </div>
          <div className='icon-lists pc-hidden flex'>
            <img
              className='icon-first'
              src='/src/assets/pc/twitter.png'
              alt='twitter'
            />
            <img src='/src/assets/pc/game.png' alt='game' />
          </div>
          <div className='page-footer pc-hidden'>
            2022 COPY RIGHT@PANDAPUNK 2169 . BRON FOR PANDARENS
          </div>
        </div>
      </main>
    </footer>
  )
}
