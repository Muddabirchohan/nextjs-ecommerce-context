import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import ProductContextProvider from "./../context/products-context";
import CartContextprovider from "./../context/cart-context";


export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ProductContextProvider>
      <CartContextprovider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </CartContextprovider>
    </ProductContextProvider>
  );
}
