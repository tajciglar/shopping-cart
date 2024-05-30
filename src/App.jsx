import { useState } from 'react'
import reactLogo from './assets/react.svg'  
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ItemPage from './components/ItemPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <ItemPage></ItemPage>
      <Footer></Footer>
    </>
  )
}

export default App
