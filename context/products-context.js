import React, { createContext, useEffect, useReducer, useState } from 'react';

export const ProductContext = createContext();


const ProductContextProvider =  ({ children }) => {

    const [products,setProducts] = useState([])
    const [loader,setLoader] = useState(false)


    useEffect(()=>{
        setLoader(true)

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> {
            setProducts(json) 
            setLoader(false)

        })
        .catch(err =>  {
            setProducts([])
            setLoader(false)

        })
    },[])


    const contextValues = {
        products,
        loader
    }


const [count,setCount] = React.useState(products)

return(
    
    <ProductContext.Provider value={contextValues}>
        {children}
    </ProductContext.Provider>
)}

export default ProductContextProvider;