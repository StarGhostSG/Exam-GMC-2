import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Voiture",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Maison",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Cadeaux",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Musique",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Soins et beautés",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Animaux ",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Joué pour Enfant",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Léssive",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Livres",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
