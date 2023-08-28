import React from 'react'
import './TShirtData.css'


const TShirtData = ({tshirt, handelAddToCart}) => {

const {picture, name, price, _id} = tshirt;

  return (
    <div className='t-shirt'>
        <img src={picture} alt="" />
        <h4 className='text-7xl'>{name}</h4>
        <p>Price: ${price}</p>
        <button onClick={() =>{handelAddToCart(tshirt)}}>Buy Now</button>
    </div>
  )
}

export default TShirtData