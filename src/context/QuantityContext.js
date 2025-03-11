import React,{createContext , useState ,useCallback } from 'react';

export const QuantityContext = createContext();

const QuantityProvider = ({children}) => {
    const [quantity, setQuantity] = useState({});
    const increment = useCallback((id)=>{
        console.log("increment");
         setQuantity((prev)=>({...prev,[id]:(prev[id] || 0) + 1}));
},[]);
 
    const decrement = useCallback((id) =>{ 
        setQuantity((prev)=>({...prev,[id]:(prev[id]>0? prev[id]-1:0)})); },[]);
    return (
        <QuantityContext.Provider value={{quantity,setQuantity, increment, decrement}} >
            {children}
        </QuantityContext.Provider>
    );
};

export default QuantityProvider;