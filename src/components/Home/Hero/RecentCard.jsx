import React from "react"
import { list } from "../../data/data"


const RecentCard = () => {
    return (
        <>
            <div className='content grid3 mtop'>
                {list.map((val, index) => {
                    const { cover,  name, } = val
                    return (
                        <div className='box shadow' key={index}>
                            <div className='img'>
                                <img src={cover} alt='' />
                            </div>
                            <div className='text'>
                                <h4>{name}</h4>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RecentCard