// @flow
import * as React from "react";
import { useContext } from "react";
import { CartContext } from "./../../../context/cart-context";
import Link from "next/link";
import Image from "next/image";

const productDetails = ({ data }) => {
  const cart = useContext(CartContext);

  const addToCart = () => {
    cart.add(data);
  };

  const { category, description, id, image, price, rating, title } = data;
  return (
    <div>
      <div className="pdp-base">
        <div>
          <Image loader={() => image} src={image} width={400} height={500} />
        </div>
        <div>
          <p> <strong> {title}</strong> </p>
          <p> {price} </p>
          <p> {description} </p>
          <div>
        <button onClick={addToCart}> Add to Cart </button>{" "}
      </div>
        </div>
      </div>
    
    </div>
  );
};

export async function getStaticPaths() {
  let data = [];
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    data = await response.json();
  } catch (e) {
    console.log("e", e);
    data = [];
  }

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
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
