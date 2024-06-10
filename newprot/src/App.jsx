import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './comp/Nav'
import Seps from './comp/Seps'
import Foot from './comp/Foot'
import Cards from './comp/Cards'
import Hero from './comp/Hero'

function App() {

  return (
    <>
     <Nav></Nav>
     <Hero></Hero>
     <Seps></Seps>
     <Cards></Cards>
     <Foot></Foot>
     
    </>
  )
}

export default App
