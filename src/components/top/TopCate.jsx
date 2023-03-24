import React from "react"
import "./style.css"
import TopCart from "./TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <h2>Top Categories</h2>
            </div>
            <div className='heading-right row '>
              <span>Tous Voir</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
