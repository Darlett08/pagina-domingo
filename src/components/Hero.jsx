import React from 'react'
import '../App.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">¡Hola, Darlert! 👋</h1>
        <p className="hero-subtitle">Bienvenida a tu página de prueba — creada con cariño.</p>
        <button className="hero-cta" onClick={() => alert('¡Saludos, Darlert!')}>Saludar</button>
      </div>
    </section>
  )
}

export default Hero
