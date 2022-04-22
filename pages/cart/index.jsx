import { useContext } from "react";
import ProductDetails from "../../components/ProductListingPage";
import { CartContext } from "../../context/cart-context";
import CLP from "../../components/cartListingPage";

function Cart({ data }) {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-base">
      <table>
        <tbody>
      {cart.map((item, index) => <CLP {...item}/> )}
      </tbody>
      </table>
    </div>
  );
}

export default Cart;
