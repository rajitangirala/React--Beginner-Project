import products from './Products.json';
import {Header} from './Header';
import React,{ useEffect, useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {

 
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 🔹 Filter products based on search input
  const filteredProducts = searchTerm.trim()? products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ): products;
  useEffect(()=>{

  },[])
  const gotoproducts = (productid) =>{
    console.log(productid)
 navigate(`/product/${productid}`);
  }
  return (

    <div className="my-app">
      
      <Header onSearch={setSearchTerm} showsearch = "true" />

      <ul className="flex flex-row  flex-wrap justify-start px-2 gap-6 py-2">
      {filteredProducts.length > 0 ? (
      filteredProducts.map(product => {
      
       return(
        <li  key={product.id} className='m-5 p-3 '> 
        
           <div><img loading="lazy" className='max-h-48 cursor-pointer' src={product.image} onClick={()=> gotoproducts(product.id)} height= {250}  width={250} alt ="img"/></div>
           <div className='w-52 text-center'>
            <div className="product-title text-red-500">{product.title}</div>
            <div >  Price: <span className='price'>${product.price}</span></div>
              <div className="text-xs text-wrap"> {product.description}</div>
              
       </div>
     
        </li>
       )
      })): <p>No products found</p>}
      </ul>

           
             
    </div>
  );
}

export default App;