import React from 'react';
import {NavLink} from "react-router-dom";
import {FcNightPortrait} from "react-icons/fc"
import {AiOutlineHeart , AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { WishListContext } from '../../context/WishLishContext/WishList-context';

import "./NavLinks";


const NavLinks= () =>{
    
  const {cart} = useSelector((state)=>state);
  const {wishItems} = useContext(WishListContext);
    return (
        <div className="NavLinks flex gap-x-8 items-center">
        <NavLink to = "/Product">
          <div className='Explore text-2xl font-semibold'>Explore</div>
        </NavLink> 
        <NavLink to = "/WishList">
          <div className='WishList relative text-2xl'>
            <span className={`text-sm absolute w-5 h-5 left-3 bottom-3 text-center text-white rounded-full ${wishItems.length && 'bg-blue-600'}`}>{wishItems.length > 0 ? wishItems.length : ""}</span>
            <AiOutlineHeart />
          </div>
        </NavLink> 
        <NavLink to="/Cart">
          <div className='Cart relative text-2xl'>
          <span className={`text-sm absolute w-5 h-5 left-3 bottom-3 text-center text-white rounded-full ${cart.length && 'bg-blue-600'}`}>{cart.length > 0 ? cart.length : ''}</span>
            <AiOutlineShoppingCart/>
          </div>
        </NavLink>
        <NavLink to="">
            <div className='Home text-2xl'>
              <FcNightPortrait/>
            </div>
        </NavLink>
    </div>
    )
}

export default NavLinks;