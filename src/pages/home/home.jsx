import React from "react"
import Header from "./components/header/header"
import MainOne from "./components/mainOne/mainOne"
import MainTwo from "./components/mainTwo/mainTwo"
import MainThree from "./components/mainThree/mainThree"
import MainFour from "./components/mainFour/mainFour"
import MainFive from "./components/mainFive/mainFive"
import MainSix from "./components/mainSix/mainSix"
import MainSeven from "./components/mainSeven/mainSeven"
import Footer from "./components/footer/footer";
import "./home.scss"

export default function home() {
  return (
    <div className='home-container'>
      <Header />
      <MainOne />
      <MainTwo />
      <MainThree />
      <MainFour />
      <MainFive />
      <MainSix />
      <MainSeven />
      <Footer/>
    </div>
  )
}
