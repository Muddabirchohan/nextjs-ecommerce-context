import React, {
    createContext,
    useReducer
} from "react";


export const CartContext = createContext();


const initialState = {
    cart: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
            case "Delete":
                const {
                    payload
                } = action

                const filteredCart = state.cart.filter(item => item.id !== payload);

                return {
                    ...state,
                    cart: [...filteredCart]
                }
    }


}


const CartContextprovider = ({
    children
}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const add = (data) => {
        dispatch({
            type: "Add",
            payload: data
        })
    }

    const deleteItem = (data) => {
        dispatch({
            type: "Delete",
            payload: data
        })
    }

    const contextValues = {
        ...state,
        add,
        deleteItem
    }


    return ( <
        CartContext.Provider value = {
            contextValues
        } > {
            children
        } <
        /CartContext.Provider>
    )
}


export default CartContextprovider;