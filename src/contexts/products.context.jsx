//REACT
import { createContext, useState } from "react";

//SHOP.JSOn file
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {

    
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };


  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
