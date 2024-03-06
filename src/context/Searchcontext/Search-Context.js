import { createContext, useState } from "react";
import productData from '../../config.js'

const SearchContext = createContext();


const SearchProvider = ({children}) =>{
    const [inputFilter , setInputFilter] = useState('');
    const [filterProduct , setFilterProduct] = useState(productData);

    const changeFilterHandeler = (e) =>{
        setInputFilter(e.target.value)
        const productFilterList = productData.filter((productItem)=>{
            return productItem.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFilterProduct(productFilterList);
    }

    return(
        <SearchContext.Provider value={{changeFilterHandeler , filterProduct , inputFilter}}>
            {children}
        </SearchContext.Provider>
    )
}


export {SearchProvider , SearchContext}