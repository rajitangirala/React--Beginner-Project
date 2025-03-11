import React, { useEffect, useContext,useState } from 'react';
import { useParams } from 'react-router-dom';
import products from "./Products.json";
import { QuantityContext } from './context/QuantityContext';
import useCart from './customhooks/useCart';
import useWishlist from './customhooks/useWishlist';
import Header from './Header';
const Products =()=>{
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null); // State to store the selected size

      const { quantity, increment, decrement } = useContext(QuantityContext);
   const { wishlist,addToWishList,removeFromWishList }=useWishlist();
    const {  addToCart } = useCart();
    // Fetch product details based on the product ID
    useEffect(() => {
      // Find the product by IDx
      const foundProduct = products.find((product) => product.id === id); // Assuming id is an integer
      setProduct(foundProduct);
    }, [id]);
    
    if (!product) {
      return <div>Loading...</div>; // If product is not found, show loading state
    }
    const isInWishlist = Array.isArray(wishlist) && wishlist.some((item) => item.id === product.id);

    return(
        <div>
            <Header showsearch = "false"/>
            
       <div  className='flex justify-center mt-12 ml-20'>
        <div>
     
       <img src={product.image} alt={product.title} className='mx-8' height={350} width={340} />
       </div>
       <div className='mx-12'>

    <div className='flex justify-between'>
      <h1 className=' font-serif
 text-7xl'>{product.title}</h1>
 {!isInWishlist? <button  onClick={() => addToWishList(product)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
        </button> : <button  onClick={() => removeFromWishList(product.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
 </button>}
 </div>
<p  className='mt-2'><span className=' bg-green-700 text-xl  text-white'>${product.price}</span></p>
      <p className=' mt-12'>{product.description}</p>
      
      {/* Add any other product details here */}
       < div className='mt-6 text-3xl'>Quantity <button type="button" class=" mx-10 text-2xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => increment(product.id)} >+</button> {quantity[product.id] || 0}  <button type="button" class=" text-2xl text-gray-900 bg-white ml-2 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => decrement(product.id)}>-</button></div>
                <div >
                    <p className='mt-12 text-2xl'> Size </p>
                   <div className='mt-4'>
                    {/* <button type="button" class=" text-2xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  >12 </button> 
                    <button type="button" class=" mx-5 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  >14 </button> 
                    <button type="button" class=" mx-5 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  >16 </button> 
                    <button type="button" class=" mx-5 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  >18 </button> 
                    <button type="button" class=" mx-5 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"  >20 </button>  */}
                    {["12", "14", "16", "18", "20"].map((size) => (
        <button
            key={size}
            type="button"
            className={`mx-5 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-2 py me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${selectedSize === size ? "bg-green-500 text-white" : ""}`}
            onClick={() => setSelectedSize(size)} // Update state when size is selected
        >
            {size}
        </button>
    ))}
</div>
                <button type="button" class="mt-12 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  onClick={() => addToCart(product, quantity[product.id] || 0,selectedSize)} >Add to cart</button>
    </div>
    </div>
    </div>
        </div>
    )
}
export default Products;