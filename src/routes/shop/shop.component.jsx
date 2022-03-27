//REACT
import { useContext } from "react";

//CONTEXT
import { ProductsContext } from "../../contexts/products.context";
//SCSS
import './shop.style.scss';
//Component Imported
import ProductCard from "../../components/product-card/product-card.component";


//Component Start
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
     
      {products.map((product) => {
        return (
            <ProductCard key={product.id} product={product}/>
     
        );
      })}
    </div>
  );
};
export default Shop;
