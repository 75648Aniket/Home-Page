import React from "react"

import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <h1>Our Solutions</h1>
          <h3>We begin to serve you before you know it</h3>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured