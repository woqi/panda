import React from "react"
import { avaLists } from "@pages/common/base-mock"
import "./mainThree750.scss"

export default function mainThree() {
  return (
    <main className='main-three'>
      <img className='main-bg' src='/src/assets/app/main-bg3.png' />
      <div className='main-wrap'>
        <p className='title'>Nuclear Explosion</p>
        <div className='ava-lists-wrap'>
          <div className='ava-lists flex '>
            {avaLists.map((item) => (
              <img className='ava-item' src={item} key={item} />
            ))}
          </div>
        </div>
        <div className='r-l-wrap flex'>
          <img className='left' src='/src/assets/ava/left.png' />
          <img className='right' src='/src/assets/ava/right.png' />
        </div>
      </div>
    </main>
  )
}
