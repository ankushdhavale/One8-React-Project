import React, { useState,useContext } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { LuIndianRupee } from "react-icons/lu";
import toast from 'react-hot-toast';
import { Remove } from '../../redux/Slices/CartSlice';
import { WishListContext } from '../../context/WishLishContext/WishList-context';
import { useNavigate } from 'react-router';

const CartItem = ({item}) => {
  const {addToWishList , wishItems } = useContext(WishListContext)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeHandeler = ()=>{
    dispatch(Remove(item._id))
    toast.error("Item removed sucssesfully");
  }

  const goToWishlistHandeler = () =>{
     navigate("/wishlist")
  }

  return (
    <>
      <div className='p-2 flex gap-3 border w-80 rounded my-6'>
        <div>
            <img 
            src={item.image}
            className=' w-38 h-44 rounded object-cover'
            alt="product-item" />
        </div>
        <div className='py-2'>
            <h1 className=' text-xl font-bold text-black'>{item.title}</h1>
            <h1 className='flex text-md text-blue-400 font-semibold'>Rs. {item.price} 
            <del className='flex text-slate-400 m-1 text-sm items-center'>
              <LuIndianRupee style={{width:12}}/>
              {item.originalPrice}
            </del></h1>
            <h1 className='text-red-400 font-semibold my-[3px]'>{item.discount}% OFF</h1>
             <div className='flex gap-2 text-center py-2'>
              {
                wishItems?.some((list)=>list._id === item._id) ? (
                <button 
                  onClick={goToWishlistHandeler}
                  className='bg-blue-400 py-1 px-7 rounded text-white border-x-slate-950 hover:bg
                  '
                  >go to Wishlist
                </button>) :
                  (
                  <button 
                    onClick={()=>addToWishList(item)}
                    className='bg-blue-400 py-1 px-8 rounded text-white'
                    >Add WishList
                  </button>)
              }
             </div>
            <button 
             onClick={removeHandeler}
             className='bg-blue-400 py-1 px-8 rounded text-white hover:bg-red-600'>Remove Cart</button>
        </div>
    </div>
    </>
  )
}

export default CartItem;