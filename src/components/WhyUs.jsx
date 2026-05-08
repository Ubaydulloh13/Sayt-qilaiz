import React from 'react'
import './WhyUs.css'

function WhyUs() {
  const reasons = [
    {
      icon: '✓',
      title: 'Контроль качества',
      description: 'Только проверенные поставщики. Все продукты подтверждены сертификатом качества'
    },
    {
      icon: '❄',
      title: 'Технология Smart Frost',
      description: 'Сохраняем максимум полезности и витаминов при охлажденном хранении'
    },
    {
      icon: '👤',
      title: 'Индивидуальный подход',
      description: 'Мы заботимся о каждом клиенте и предоставляем индивидуальную программу питания'
    }
  ]

  return (
    <section className="why-us" id="about">
      <div className="container">
        <h2>Почему именно мы?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
