
import React, {createContext, useReducer} from "react";


export const CartContext = createContext();


const initialState = {
    cart : []
}

const reducer = (state,action) => {
switch(action.type){
    case "Add" : 
    return {
        ...state,
        cart: [...state.cart,action.payload]
    }
}


}


const CartContextprovider = ({children}) => {

   const [state,dispatch]  = useReducer(reducer,initialState)

   const add = (data) =>{
       dispatch({type: "Add",payload: data})
   }

   const contextValues = {
       ...state,
       add
   }


    return(
        <CartContext.Provider value={contextValues}>
        {children}
    </CartContext.Provider>
    )
}


export default CartContextprovider;