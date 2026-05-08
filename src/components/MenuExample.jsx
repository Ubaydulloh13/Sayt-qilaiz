import React from 'react'
import './MenuExample.css'

function MenuExample() {
  const menu = [
    { time: 'ЗАВТРАК', dish: 'Овсяная каша на молоке с изюмом' },
    { time: 'ПЕРЕКУС', dish: 'Салат Цезарь с Курицей' },
    { time: 'ОБЕД', dish: 'Куриные шашлычки с овощами гриль' },
    { time: 'ПОЛДНИК', dish: 'Жаркое из говядины с овощами' },
    { time: 'ПЕРЕКУС', dish: 'Блинчики с куриным фаршем' },
    { time: 'УЖИН', dish: 'Куриное филе "Кватро Формаджи"' }
  ]

  return (
    <section className="menu-example">
      <div className="container">
        <h2>Пример меню на день</h2>
        <div className="menu-grid">
          {menu.map((item, index) => (
            <div key={index} className="menu-item">
              <h4>{item.time}</h4>
              <p>{item.dish}</p>
            </div>
          ))}
        </div>
        <button className="btn-primary">Нужна консультация</button>
      </div>
    </section>
  )
}

export default MenuExample
