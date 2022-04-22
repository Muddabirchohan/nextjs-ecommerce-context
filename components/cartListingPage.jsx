// @flow
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "../context/cart-context";
import DustbinIcon from "./../public/dustbin.png"

const CLP = (data) => {
  const router = useRouter();
  const { title, image, price, id, description } = data;

  const src = image;

  const cart = useContext(CartContext);

  const addToCart = () => {
    cart.add(data);
  };

  const deleteItems = () =>{
    cart.deleteItem(id)
  }

  return (
    <tr className="cart-child">
      <td> <Image loader={() => src} src={src} width={130} height={130} /> </td>

      <td> 
        <span>
        {title}   
        </span>   
        <span>   {price}
        </span>
</td>
    
      <td> 
        <div className="delete-icon-container delete-icon"> 
        <Image onClick={deleteItems} src={DustbinIcon} />

        </div>
      </td>
    </tr>
  );
};

export default CLP;
