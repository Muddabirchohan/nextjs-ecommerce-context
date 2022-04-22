import { useContext } from "react"
import ProductsListing from "../../components/ProductListingPage";
import { ProductContext } from "../../context/products-context"
import { globalErrors } from "../../utilites/errorCodes";

function Products({data}) {

  const {products,loader,errMsg} = useContext(ProductContext);


  if(!products){
    return <> Products Not Found </>
  }

  if(loader){
    return <div className="loader-parent"><div className="loader"></div></div>
  }

  if(errMsg){

    if(globalErrors.find(item => item.msg.toLowerCase() === errMsg.toLowerCase())){
      const msg = globalErrors.find(item => item.msg.toLowerCase() === errMsg.toLowerCase());
      return <> {msg.description} </>
    }

   
  }

  
    return <div className="plp-base"> 
      {products.map((item,index) => <ProductsListing key={index} {...item}/>)}
    </div>
  
    }

  
  
  export default Products