import React from 'react'
import './Footer.css'

function Footer({ setShowAuth }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Healthy Food</h4>
            <p>Сервис доставки здорового питания</p>
          </div>
          <div className="footer-section">
            <h4>Навигация</h4>
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#menu">Меню</a></li>
              <li><a href="#price">Цены</a></li>
              <li><a href="#blog">Блог</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <ul>
              <li><a href="tel:+998998550003">+998 99 855 00 03</a></li>
              <li><a href="tel:+998998550004">+998 99 855 00 04</a></li>
              <li><a href="#telegram">Telegram</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Учетная запись</h4>
            <button className="footer-link" onClick={() => setShowAuth(true)}>Вход</button>
            <button className="footer-link" onClick={() => setShowAuth(true)}>Регистрация</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2016-2025 «Healthy Food» - Сервис доставки здорового питания</p>
          <p>Указывая номер телефона на сайте, вы соглашаетесь с <a href="#privacy">условиями</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
