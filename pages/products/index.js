import { useContext } from "react"
import ProductsListing from "../../components/ProductListingPage";
import { ProductContext } from "../../context/products-context"

function Products({data}) {

  const {products,loader} = useContext(ProductContext);


  if(!products){
    return <> Products Not Found </>
  }

  if(loader){
    return <div className="loader-parent"><div className="loader"></div></div>
  
  }

  
    return <div className="plp-base"> 
      {products.map((item,index) => <ProductsListing key={index} {...item}/>)}
    </div>
  
    }

  
  
  export default Products