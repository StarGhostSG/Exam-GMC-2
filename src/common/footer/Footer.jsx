import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Pearl-Tech</h1>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span className="appl">Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span className="appl">App Store</span>
              </div>
            </div>
          </div>

          
          
          <div className='box opp'>
            <h2>Nous Contactez</h2>
            <ul>
              <li>Avenue Charle de Gaul</li>
            <li>Email: anisbenyahia2537@gmail.com</li>
              <li>Phone: +213 540 45 19 08</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
