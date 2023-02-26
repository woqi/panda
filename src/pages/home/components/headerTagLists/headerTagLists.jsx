import React, { useEffect, useState } from "react"
import "./headerTagLists750.scss"
export default function headerTagLists({ show }) {
  const [clientWidth, setClientWidth] = useState(0)
  useEffect(() => {
    setClientWidth(document.documentElement.clientWidth)
  }, [clientWidth])

  return (
    <ul className={`tag-lists ${clientWidth > 760 ? "" : show ? "show" : "hidden"}`}>
      <li>
        <a href='#about'>ABOUT</a>
      </li>
      <li>
        <a href='#revelation'>REVELATION</a>
      </li>
      <li>
        <a href='#vision'>VISION</a>
      </li>
      <li>
        <a href='#ecosystem'>ECOSYSTEM</a>
      </li>
      <li>
        <a href='#heros'>HEROS</a>
      </li>
      <li>
        <a href='#faq'>FAQ</a>
      </li>
    </ul>
  )
}
