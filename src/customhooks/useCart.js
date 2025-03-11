import { useReducer, useCallback , useEffect,useContext} from "react";
import { QuantityContext } from "../context/QuantityContext";

// 🛠 Define cart actions
const cartReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case "ADD_TO_CART":
            return state.some((item) => item.id === action.payload.id)
                ? state.map((item) =>
                      item.id === action.payload.id
                          ? { ...item, quantity: item.quantity + action.payload.quantity }
                          : item
                  )
                : [...state, action.payload];

        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload);

        case "CLEAR_CART":
            return [];

        default:
            return state;
    }
};

const useCart = () => {
    const loadCartFromStorage = () => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    };
    const [cart, dispatch] = useReducer(cartReducer, loadCartFromStorage());
    const { setQuantity } = useContext(QuantityContext);

    // 🛒 Add product to cart
    const addToCart = useCallback((product, quantity,size) => {
        if (quantity === 0 || !size) {
            alert("Please select quantity and size before adding to cart!");
            return;
        }
        dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity,size } });
        setQuantity((prev) => ({ ...prev, [product.id]: 0 }));
    }, [setQuantity]);

    // 🗑 Remove product from cart
    const removeFromCart = useCallback((id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
        setQuantity((prev) => ({ ...prev, [id]: 0 })); // Reset quantity for removed item
    }, [setQuantity]);

    // 🧹 Clear the entire cart
    const clearCart = useCallback(() => {
        dispatch({ type: "CLEAR_CART" });
        setQuantity({}); // Reset all quantities
    }, [setQuantity]);
        // Persist the cart state to localStorage whenever the cart changes
        useEffect(() => {
            // Save the current cart state to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        }, [cart]); // This will run every time `cart` changes
    

    return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;