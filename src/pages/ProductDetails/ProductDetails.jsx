import React from 'react'
import { useParams } from 'react-router'
import { useReducer } from 'react'

const ProductDetails = () => {

    const {product_Id , title} = useParams();
    console.log(title);

   
  return(
    <div>
    </div>
  )
}

export default ProductDetails
