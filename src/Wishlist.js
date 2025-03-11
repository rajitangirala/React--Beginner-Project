import useWishlist  from "./customhooks/useWishlist";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
const Wishlist = () =>{
    const navigate = useNavigate();
     const { wishlist,removeFromWishList,clearWishList }=useWishlist();
     const gotoproductpage = (productid) =>{
        console.log(productid)
     navigate(`/product/${productid}`);
      }
    return(
        <div>
               <Header showsearch = "false"/>
             {/*  wishlist Summary */}
             <div className="wishlist">
                <div className="p-4 flex justify-between">

              
                <h2 className="m-6  uppercase font-mono text-2xl">My Shopping wishlist</h2>
                <button type="button" className="m-6 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => clearWishList()}>clear WishList</button>
                </div>
                {wishlist.length === 0 ? <p>No items in wishlist</p> : (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
    <th scope="col" class="px-6 py-3" >Product</th>
    <th scope="col" class="px-6 py-3" >Price</th>
    <th scope="col" class="px-6 py-3">Remove from wishlist</th>

</tr>
</thead>
<tbody>
{wishlist.map((item) => (
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={item.id}>
    <td className="px-6 py-4">
  
        <div className="flex flex-wrap p-2" key={item.id}>

     <div>   <img src= {item.image} height={200} width={150}  className="cursor-pointer" onClick={()=>{gotoproductpage(item.id)}}/> </div>
     <div className=" m-2">
     <p> {item.title}</p>
     <p className="text-wrap">{item.description}</p>
     </div>
     </div>

      
    </td>

    <td className="px-6 py-4">
        
            <div key={item.id}>
             <p> $ {item.price}</p>
            </div>
    
    </td>
    <td className="px-6 py-4"> 
      
            <div key={item.id}>
            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => removeFromWishList(item.id)}>Remove</button>
            </div>
     
    </td>
</tr>
  ))}
</tbody>


{/* <ul className="mt-12">
  {cart.map((item) => (
      <li key={item.id}>
          {item.title} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </li>
  ))}
</ul>
<button onClick={clearCart}>Clear Cart</button> */}
</table>
                )}
            </div>
        </div>
    )
}
export default Wishlist;
// import useCart from "./customhooks/useCart";
// import Header from "./Header";
// const Cart = ()=>{
//      const { cart, addToCart, removeFromCart, clearCart } = useCart();
//      console.log(cart)
//     return(
//         <div>
//    <Header showsearch = "false"/>
      
//                       {/* 🛒 Cart Summary */}
//                       <div className="cart">
//                       <p className=" m-6  uppercase font-mono text-2xl"> My Shopping Bag</p>
//                       {cart.length === 0 ? <p>No items in cart</p> : (
//                           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                 <tr>
//                                     <th scope="col" class="px-6 py-3" >Product</th>
//                                     <th scope="col" class="px-6 py-3" >Price</th>
//                                     <th scope="col" class="px-6 py-3">Total</th>

//                                 </tr>
//                             </thead>
//                             <tbody>
//                             {cart.map((item) => (
//                                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={item.id}>
//                                     <td className="px-6 py-4">
                                  
//                                         <div className="flex flex-wrap p-2" key={item.id}>

//                                      <div>   <img src= {item.image} height={200} width={150} /> </div>
//                                      <div className=" m-2">
//                                      <p> {item.title}</p>
//                                      <p className="text-wrap">{item.description}</p>
//                                      <p>QTY <span className="text-lg">{item.quantity} </span></p>
//                                      <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => removeFromCart(item.id)}>Remove</button>
//                                      </div>
//                                      </div>
                                
                                      
//                                     </td>
                               
//                                     <td className="px-6 py-4">
                                        
//                                             <div key={item.id}>
//                                              <p> $ {item.price}</p>
//                                             </div>
                                    
//                                     </td>
//                                     <td className="px-6 py-4"> 
                                      
//                                             <div key={item.id}>
//                                              <p> {item.quantity} x ${item.price} = ${item.quantity * item.price} </p>
//                                             </div>
                                     
//                                     </td>
//                                 </tr>
//                                   ))}
//                             </tbody>

                                
//                               {/* <ul className="mt-12">
//                                   {cart.map((item) => (
//                                       <li key={item.id}>
//                                           {item.title} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
//                                           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                                       </li>
//                                   ))}
//                               </ul>
//                               <button onClick={clearCart}>Clear Cart</button> */}
//                           </table>
//                       )}
//                   </div>
//                   </div>
//     )
// }
// export default Cart;