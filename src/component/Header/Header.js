import React from 'react'

function Header() {
  return (
    <section className="h-wrapper">
        <div className="flexCenter padding h-container">
            <img src="logo.png" alt="logo" width={100}/>

            <div className="h-menu">

                <a href="">Recidencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button >Contact</button>
                

            </div>
        </div>
    </section>
  )
}

export default Header
