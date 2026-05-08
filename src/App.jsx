import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Promo from './components/Promo'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import MenuExample from './components/MenuExample'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Delivery from './components/Delivery'
import Footer from './components/Footer'
import Auth from './components/Auth'
import './App.css'

function App() {
  const [showAuth, setShowAuth] = useState(false)

  return (
    <div className="app">
      {showAuth && <Auth setShowAuth={setShowAuth} />}
      <Header setShowAuth={setShowAuth} />
      <Hero />
      <Promo />
      <Programs />
      <WhyUs />
      <MenuExample />
      <Blog />
      <FAQ />
      <Delivery />
      <Footer setShowAuth={setShowAuth} />
    </div>
  )
}

export default App
