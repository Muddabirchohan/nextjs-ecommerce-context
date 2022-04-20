// @flow
import * as React from "react";
import { useContext } from "react";
import {CartContext} from "./../../../context/cart-context"
import Link from "next/link";
import Image from "next/image";


const productDetails = ({ data }) => {

    const cart = useContext(CartContext)


    const addToCart = () => {
        cart.add(data)
    }


  const { category, description, id, image, price, rating, title } = data;
  return <div>
           <p> {id} </p>
        <p> {description} </p>
        <p>
          {" "}
          <Image loader={() => image} src={image} width={300} height={300}/>
        </p>
        <button onClick={addToCart}>  Add to Cart </button>
        <Link href="/cart"> cart </Link>

  </div>;
};

export async function getStaticPaths() {

    let data = [];
    try {
        const response = await fetch('https://fakestoreapi.com/products');
     data = await response.json()
    } catch (e) {
      console.log("e", e);
      data = [];
    }



  const paths = data.map(item => {
      return {
          params : {
              id : item.id.toString()
          }
      }
  })

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  let data = [];
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    data = await response.json();
  } catch (e) {
    console.log("e", e);
    data = [];
  }
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
}

export default productDetails;
