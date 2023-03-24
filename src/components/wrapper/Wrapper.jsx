import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Payement Sécurisé",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Achetez en Confiance ",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title} </h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
