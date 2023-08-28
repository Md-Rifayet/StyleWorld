import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import TShirtData from '../TShirtData/TShirtData';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
import './Home.css'
 
const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([])


  const handelAddToCart = tshirt =>{ 

    const exist = cart.find(ts => ts._id === tshirt._id);
      if(exist){
          toast("You have already a Tshirt")
      }
      else{
        const newCart = [...cart, tshirt];
        setCart(newCart)
      }
  }

const handelRemoveCart = (id) =>{
   const remaining =cart.filter(ts => ts._id !== id);
   setCart(remaining)
}

  return (
    <div className='home-container'>
    
    <div className='tshirts-container'> 
    {
      
      tshirts.map(tshirt => <TShirtData
       key={tshirt._id}
       tshirt={tshirt}
       handelAddToCart={handelAddToCart}
       ></TShirtData>)
    }
    </div>
    <div className="cart-container">
      <Cart handelRemoveCart={handelRemoveCart} cart={cart} key={cart._id}></Cart>
    </div>
    </div>
  )
}

export default Home