import React from 'react'
import './Programs.css'

function Programs() {
  const programs = [
    {
      title: 'SLIM',
      description: 'Рацион для снижения веса и нормализации обмена веществ',
      color: '#FF6B6B'
    },
    {
      title: 'FIT',
      description: 'Программа для здоровья и активного образа жизни',
      color: '#4ECDC4'
    },
    {
      title: 'BALANCE',
      description: 'Сбалансированное питание для всей семьи',
      color: '#45B7D1'
    },
    {
      title: 'SPORT',
      description: 'Рационы для спорта и активного тренинга',
      color: '#96CEB4'
    }
  ]

  return (
    <section className="programs" id="menu">
      <div className="container">
        <h2>Наши программы питания</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card" style={{ borderTopColor: program.color }}>
              <h3 style={{ color: program.color }}>{program.title}</h3>
              <p>{program.description}</p>
              <button className="btn-choose">Выбрать</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
