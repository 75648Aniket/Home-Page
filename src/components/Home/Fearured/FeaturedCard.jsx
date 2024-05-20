import React from "react"
import { featured } from "../../data/data"


const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} style={{height:'200px', width:'200px'}} alt='' />
            <h4>{items.name}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard