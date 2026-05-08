import React from 'react'
import './Header.css'

function Header({ setShowAuth }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Healthy Food</h1>
        </div>
        <nav className="nav">
          <a href="#about">О нас</a>
          <a href="#menu">Меню</a>
          <a href="#price">Цены</a>
          <a href="#blog">Блог</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn-signin" onClick={() => setShowAuth(true)}>
            Вход
          </button>
          <button className="btn-signup" onClick={() => setShowAuth(true)}>
            Регистрация
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
