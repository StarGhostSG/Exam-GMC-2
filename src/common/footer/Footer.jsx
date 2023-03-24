import React from "react"
import "./style.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Pearl-Tech</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>CGU</li>
              <li>CGV</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Services</h2>
            <ul>
              <li>Help Center </li>
              <li>Comment ça marche</li>
              <li>Blog</li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
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
