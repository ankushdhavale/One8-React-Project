import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { AiOutlineHeart } from 'react-icons/ai';
import { LuIndianRupee } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { useContext } from 'react';
import { WishListContext } from '../../context/WishLishContext/WishList-context';


import { Add} from '../../redux/Slices/CartSlice';
import './SingleProducts.css';
const SingleProducts = ({item}) =>{
    const {image , _id ,price , discount , title , originalPrice ,rating ,description} = item;
    const dispatch = useDispatch();
    const {cart} = useSelector((state)=>state);
    const {addToWishList , wishItems , removeTowishList } = useContext(WishListContext)

    const addFromCart = ()=>{
        dispatch(Add(item));
        toast.success("Sucssesfully item added to cart")
    }


    return(
        <div className="card-containert border bg-zinc-50">
            <section className='card'>
                <div className='absolute rounded-full m-3 text-xl'>
                    {
                        wishItems?.some((list)=>list._id === item._id) 
                        ? 
                        (<FcLike onClick={()=>removeTowishList(_id)} className='far fa-heart icon-sm added-wishlist-icon '/>) 
                        : 
                        (<AiOutlineHeart onClick={()=>addToWishList({ _id ,image , title , originalPrice ,rating ,description})} className="text-center text-black"/>)
                    }
                </div>
                     <NavLink> 
                       <img 
                            src={image} 
                            className="card-img bottom-[-10px]"
                            alt="product-img" 
                        />
                     </NavLink>
                   <section className='m-2'>
                        <div className='flex justify-between'>
                                <h3 className='font-bold text-lg text-sky-500'>{title}</h3>
                                <p className={`px-1 rounded text-white ${rating > 3.5?"bg-blue-400":"bg-red-500"}`}>{item.rating}⭐</p>
                                {/* <p>{item.rating}⭐</p> */}
                        </div>
                            <div className=''>
                                <p className='flex font-semibold'
                                >Rs. {price} 
                                <div className='flex items-center'>
                                    <del className='flex items-center text-slate-400 m-1 text-sm'>
                                    <LuIndianRupee style={{width:12}}/> 
                                    {originalPrice}
                                    </del>
                                    <span className=' text-sm opacity-80'>{`(${discount}% off)`}</span>
                                </div>
                                </p>
                            </div>
                   </section>
                   <section>
                        <p className='my-2 mr-1 ml-2 h-10'>{description}</p>
                        <div>
                            {
                             cart.some((p)=>p._id===_id)? 
                            (<NavLink to='/Cart'>
                                <button className='product-btn mx-[5px] text-white bg-yellow-700'
                                >Go to Cart</button>
                            </NavLink>)
                            :
                            (<button className='product-btn mx-[5px] text-white bg-blue-400'
                             onClick={addFromCart}
                            >Add to Cart</button>)
                            }
                        </div>
                   </section>
            </section>
            
        </div>
    )
}

export default SingleProducts;