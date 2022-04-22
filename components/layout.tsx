import Head from "next/head";
import Footer from "./footer";
import Header from "./Header";
import SliderCustom from "./slider";

export default function Layout({ children }) {
  console.log("children", children);

  return (
    <>
      <SliderCustom />
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
