import React from 'react'

const Cart = ({cart, handelRemoveCart}) => {

  let message;

  if(cart.length === 0){
    message = <div><p>Please add Some Product</p> 
    <h5 className='text-red-500'>Bye more than 500USD, get special discount</h5>
    </div>
    }
    else{
      message = <h5 className='text-red-500'>Bye more than 500USD, get special discount</h5>;
    }

  return (
    <div className=''>
        <h2>Order Summary:{cart.length}</h2>
        {message}
        {
          cart.map(tshirt => <p key={tshirt._id}>
            {tshirt.name}
            <button onClick={() => handelRemoveCart(tshirt._id)}>X</button>
          </p> )
        }
    </div>
  )
}

export default Cart