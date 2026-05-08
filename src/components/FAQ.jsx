import React, { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Как выбрать калорийность?',
      answer: 'Калорийность подбирается индивидуально в зависимости от вашего возраста, веса, физической активности и целей. Наши специалисты помогут вам выбрать оптимальный вариант.'
    },
    {
      question: 'Можно ли заменять блюда/ингредиенты?',
      answer: 'Да, конечно! Диетолог предложит варианты замены и согласует с вами меню при необходимости.'
    },
    {
      question: 'Какие условия хранения блюд?',
      answer: 'Все блюда хранятся при постоянной температуре используя технологию Smart Frost. Это обеспечивает максимум полезности и витаминов.'
    },
    {
      question: 'Как осуществляется доставка?',
      answer: 'Мы осуществляем доставку правильного питания регулярно на ежедневной основе. Доставка бесплатна (кроме субботы и воскресенья, на выходные доставляем на 2 дня сразу).'
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <h2>Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
