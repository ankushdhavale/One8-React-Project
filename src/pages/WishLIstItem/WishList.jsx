import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { WishListContext } from '../../context/WishLishContext/WishList-context';
import SingleProducts from '../../components/SingleCart/SingleProducts';

const WishList = () => {
  const {wishItems } = useContext(WishListContext)
  console.log(wishItems);
  return (
    <div className="justify-center">
      {
        wishItems.length > 0 
        ? 
        (<div>
          <p className='text-center text-lg font-bold my-4'>MY WISHLIST ({wishItems.length})</p>
          <div className='flex justify-center flex-wrap gap-10'>
             {
              wishItems.map((item)=>{
                return <SingleProducts item={item}/>
              })
             }
          </div>
        </div>) 
        : 
        (<div className='text-center my-[10%]'>
        <p className='text-2xl font-semibold'>Your WishList is empty</p>
        <NavLink to="/product">
          <button className='my-4 py-1 px-4 bg-blue-600 rounded text-white'>
            Shop Now
          </button>
        </NavLink>
      </div>)
      }
    </div>
  )
}

export default WishList
