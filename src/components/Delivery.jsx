import React from 'react'
import './Delivery.css'

function Delivery() {
  return (
    <section className="delivery">
      <div className="container">
        <h2>Доставка</h2>
        <div className="delivery-info">
          <div className="delivery-text">
            <p>
              Мы осуществляем доставку правильного питания регулярно на ежедневной основе.
            </p>
            <ul>
              <li>✓ Каждое утро или вечер — выбор за вами</li>
              <li>✓ Доставка бесплатна</li>
              <li>✓ Действуют ограничения на некоторые районы</li>
              <li>✓ По выходным доставляем на 2 дня сразу</li>
            </ul>
            <button className="btn-primary">Заказать</button>
          </div>
          <div className="delivery-image">
            <div className="placeholder">
              <p>🚚 Доставка на дом</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery
