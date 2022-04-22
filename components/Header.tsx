import Link from "next/link";
import React, { Component } from "react";
import Image from "next/image";
import Logo from "./../public/logo.jpg";

const Header = () => {
  const src = Logo;

  return (
    <div className="header-base">
      {/* <div className="logo">
        <Image src={src} width={130} height={130} />
      </div> */}
      <div className="header">
        <div>
          <Link href="/products"> Products </Link>
          <Link href="/cart"> Cart </Link>
          <Link href="/wishlist"> Wishlist </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
