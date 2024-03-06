import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import { NavLink } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
  const {cart} = useSelector((state)=> state)
  const [totalAmount , setTotalAmount] = useState(0);


  useEffect(()=>{
    setTotalAmount(cart.reduce((acc ,curr)=> acc + curr.price , 0));
  },[cart])
  return (
    <div>
      {
        cart.length >0 && <p className='text-center text-lg font-bold'>MY CART ({cart.length})</p>
      }
      <div className='flex justify-center my-6'>  
      {
          cart.length > 0 ? (
          <div className='gap-20 md:flex sm:flex'>
              <div className='bottom-10'>
                  {
                    cart.map((item , index)=>{
                      return <CartItem key={item._id} item={item} index={index}/>
                    })
                  }
              </div>
           <div>
               {
                cart.length > 0 && (
                  <div className='border px-10 w-80'>
                    <p className='text-2xl my-2 font-semibold'>Prices Details</p>
                    <hr className='my-2'/>
                    {
                      cart.map(({title ,price , quantity})=>{
                        return(
                          <div className=''>
                            <div className='flex gap-16'>
                              <p>{title}</p>
                              <p className='text-right'>{quantity}</p>
                              <p>Rs.{quantity * price}</p>
                            </div>
                          </div>
                        );
                      })
                    }
                <hr className='my-2'/>
              <div>
                <div className='flex gap-16 '>
                  <p>Total Amount</p>
                  <p>Rs.{totalAmount}</p>
                </div>
                <button className='px-10 py-2 rounded bg-blue-400 my-2 text-white font-semibold'>Proceed To Checkout</button>
              </div>
            </div>
                )
               }
            </div>
          </div>
          ) 
          : 
          (<div className='text-center my-[10%]'>
            <p className='text-2xl font-semibold'>Cart Is Empty</p>
            <NavLink to="/product">
              <button className='my-4 py-1 px-4 bg-blue-600 rounded text-white'>
                Shop Now
              </button>
            </NavLink>
          </div>)
        }
      </div>
    </div>
  )
}

export default Cart


// {
//   cart.map((item)=>(
//     <CartItem key={item._id} item={item} />
//   ))
// }
// <div className='flex justify-between'>
//   <p className='text-2xl font-semibold'>Total Amount</p>
//   <p className='text-2xl font-semibold'>Rs. {totalAmount}</p>
// </div>
// <div className='flex justify-center'>
//   <NavLink to="/product">
//     <button className='my-4 py-1 px-4 bg-blue-600 rounded text-white'>
//       Continue Shopping
//     </button>
//   </NavLink>
// </div>
// </div>
// ) 