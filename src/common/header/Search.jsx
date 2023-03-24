import React from "react"
// import logo23 from "../../components/assets/images/logo23.jpeg"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {/* <img src={logo23} alt='' /> */}
            <a href="/">
            <h1 className="fhn">Pearl-Tech</h1>
            </a>
          </div>

          <div className='search-box f_flex'>
            <input type='text' placeholder='Rechercher un Objet...' />
            <span>Rechercher</span>
            <i className='fa fa-search'></i>
          </div>

          <div className='icon f_flex width'>
            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
