import { useEffect, useState , useContext} from 'react'
import productData from '../../config.js'
import SingleProducts from '../SingleCart/SingleProducts.jsx';
import "./Product.css"
import { SearchContext } from '../../context/Searchcontext/Search-Context.js';
import Spinner from '../Spinner/Spinner.jsx';

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product , setProduct] = useState();
  const {filterProduct} = useContext(SearchContext);

  async function getAllData(){
    setIsLoading(true);
    try{
      const responseData = await productData;
      setProduct(responseData);
      setIsLoading(false);
    }catch(e){
      console.log(e);
    }
    setIsLoading(false);
  }

  useEffect(()=>{
      getAllData();
  },[])

  return (
    <div>
       <section>
                {
                  isLoading ? <Spinner/> :
                  filterProduct?.length > 0 ? <div
                  className='product-container'
                  >{filterProduct?.map((item)=>{
                    return <SingleProducts key={item._id} item={item} _id={item._id}/>
                  })}</div> : 
                  <h1 
                  className=' w-full absolute top-1/2 text-center text-4xl font-bold'
                  >No Product Found</h1>
                }
       </section>
    </div>
  )
}

export default Product
