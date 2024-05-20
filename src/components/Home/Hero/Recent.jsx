import React from "react"

import "./Recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <h1>Technologies we magnificent at</h1>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent