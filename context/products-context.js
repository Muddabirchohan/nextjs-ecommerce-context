import React, { createContext, useEffect, useReducer, useState } from 'react';

export const ProductContext = createContext();


const ProductContextProvider =  ({ children }) => {

    const [products,setProducts] = useState([])
    const [loader,setLoader] = useState(false)
    const [errMsg,setErrMsg] = useState("")



    useEffect(()=>{
        setLoader(true)
try{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> {
        setProducts(json) 
        setLoader(false)
        setErrMsg("")
    })
    .catch(e =>  {

        setProducts([])
        setLoader(false)
        setErrMsg(e?.message)

    })
}catch(e){
    setLoader(false)
    setErrMsg(e?.message)


}

    },[])


    const contextValues = {
        products,
        loader,
        errMsg
    }


const [count,setCount] = React.useState(products)

return(
    
    <ProductContext.Provider value={contextValues}>
        {children}
    </ProductContext.Provider>
)}

export default ProductContextProvider;