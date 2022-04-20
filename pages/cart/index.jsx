import { useContext } from "react";
import ProductDetails from "../../components/ProductListingPage";
import { CartContext } from "../../context/cart-context";
import Image from "next/image";
import CLP from "../../components/cartListingPage";

function Cart({ data }) {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item, index) => <CLP {...item}/> )}
    </div>
  );
}

export default Cart;
