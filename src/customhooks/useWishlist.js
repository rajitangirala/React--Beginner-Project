import {useReducer,useEffect } from 'react';
const wishlistReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_WISHLIST":
            return state.some((item) => item.id === action.payload.id)
            ? state // Don't add duplicate items
            : [...state, action.payload];
        case "REMOVE_FROM_WISHLIST":
            return state.filter((item) => item.id !== action.payload);
        case "CLEAR_WISHLIST":
            return [];
        default:
            return state;
    }
}
const useWishlist = () =>{
    const loadWishlistFromStorage = () => {
        const storedWishlist = localStorage.getItem('wishlist');
        console.log('Stored wishlist from localStorage:', storedWishlist);
        try {
            const parsedWishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
            // Check if the parsedWishlist is an array
            console.log('Parsed wishlist:', parsedWishlist);
            return Array.isArray(parsedWishlist) ? parsedWishlist : [];
        } catch (error) {
            console.error('Error parsing wishlist from localStorage:', error);
            return [];
        }
    };
    
    const [wishlist, dispatch] = useReducer(wishlistReducer, loadWishlistFromStorage());
    const addToWishList = (product)=>{
        const exists = wishlist?.some((item) => item.id === product.id);
        if(exists){
            alert("Product already exists in wishlist");
        }
        else {
dispatch({type: "ADD_TO_WISHLIST", payload: product});
alert(`Product "${product.title}" added to wishlist!`);
        }
    };
    const removeFromWishList = (id) =>{
dispatch({type:"REMOVE_FROM_WISHLIST", payload: id});
    };
    const clearWishList = ()=>{
        dispatch({type:"CLEAR_WISHLIST"});

    }
         useEffect(() => {
                // Save the current cart state to localStorage
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
            }, [wishlist]); // This will run every time `cart` changes
    return { wishlist, addToWishList, removeFromWishList, clearWishList };
}
export default useWishlist;