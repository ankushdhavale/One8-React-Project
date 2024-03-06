import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

const WishListContext = createContext();

const WishListProvider = ({children}) =>{
    const [wishItems , setWishItems] = useState([]);

    const addToWishList = (addToTheWishList) =>{
        var addWishList = [...wishItems , addToTheWishList]
        setWishItems(addWishList)
        toast.success("Sucssesfully item Added to WishList")
    }

    const removeTowishList = (wishListId) =>{
        const updateWishListToRemove = wishItems.filter((wishList) => wishList._id !== wishListId)
        setWishItems(updateWishListToRemove);
        toast.error("Sucssesfully item Remove From WishList")
    }

    return(
        <WishListContext.Provider value={{wishItems , addToWishList , removeTowishList}}>
            {children}
        </WishListContext.Provider>
    )
}

export {WishListProvider , WishListContext}