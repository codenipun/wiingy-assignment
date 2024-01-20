import React from 'react'
import './cardcontainer.css'

const CardContainer = ({cards}) => {
  return (
    <div className='cardContainer'>
        <h2>Our Python tutoring offerings</h2>
        <div className='cards'>
            {
                cards.map((card, index)=>(
                    <div key={index} className='card'>
                        <div className='cardLeft'>
                            <h2 className='heading'>{card.heading}</h2>
                            <p className='description'>{card.description}</p>
                        </div>
                        <div className='cardRight'>
                            <img className='cardImg' alt='jjkjkj' src={card.imgSrc}/>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CardContainer