// @flow
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";

const CLP = (data) => {
  const router = useRouter();
  const { title, image, price, id, description } = data;

  const src = image;

  return (
    <>
      <p> {id} </p>
      <p> {description} </p>
      <p>
        <Image loader={() => src} src={src} width={300} height={300} />
      </p>
    </>
  );
};

export default CLP;
