import React, { useContext } from 'react'
import {GoSearch} from "react-icons/go"
import {NavLink , useNavigate, useLocation} from "react-router-dom"
import { SearchContext } from '../../context/Searchcontext/Search-Context'
import NavLinks from '../NavLinks/NavLinks'
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const { changeFilterHandeler , inputFilter } = useContext(SearchContext);

  return (
    <div className={``}>
     <nav className="NavBar">
      <div className='flex p-4 justify-between items-center text-center gap-4'>
         <div className='logo-image'>
            <NavLink to="/">
               <img className=' w-24' src="https://www.one8.com/img/home/logo-yellow.png" alt="8one-Logo" /> 
            </NavLink>
         </div>
      <div>
         <NavLinks/>
      </div>
      </div>
      <div className=" flex justify-center">
        <div className='flex border w-50 rounded'>
            <p className="p-2"><GoSearch/></p>
            <input 
               value={inputFilter}
               className="p-1 w-50"
               placeholder="Type to Search ex-Nike"
               onChange={changeFilterHandeler} 
               onKeyDown={(e)=>{
                  if(e.key === 'Enter' && path !== '/product') {
                  navigate("/product")
                  }
                  if(e.target.value === '' && path === '/product') {
                  }
               }}
               />
        </div>
      </div>
     </nav>
     <hr className="shadow-md my-1" />
    </div>
  )
}

export default Navbar
