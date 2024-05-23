import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.svg'
function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>To be the leading pharmaceuticals company in India in terms of expertise, innovation and responsible entrepreneurship. </h1>
            <p>To preserve and improve patients health by consistently delivering high quality, safe and effective pharmaceutical products and services that meet customer expectations across the globe through current good manufacturing practices, state of the art technology, competent workforce and efficient management.</p>
            <button className='btn'>Explore more<img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero