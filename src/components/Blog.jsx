import React from 'react'
import './Blog.css'

function Blog() {
  const articles = [
    {
      title: 'Сбалансированное питание',
      description: 'Как питаться правильно, не ограничивая себя и достигая поставленной цели'
    },
    {
      title: 'Правильное питание',
      description: 'Советы и рецепты для здорового питания в домашних условиях'
    },
    {
      title: 'Питание для похудения',
      description: 'Как вкусно и правильно питаться и худеть одновременно'
    },
    {
      title: 'Рационы для спорта',
      description: 'Спортивное питание и программы для активного образа жизни'
    }
  ]

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2>Направления</h2>
        <p className="blog-intro">
          Мы постоянно ищем новые возможности, как сделать ежедневное питание всё более разнообразным, полезным и вкусным
        </p>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href="#read" className="read-more">Читать далее →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
