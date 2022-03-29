//REACT
import { useContext, Fragment } from "react";

//CONTEXT
import { CategoriesContext } from "../../contexts/categories.context";
//SCSS
import "./shop.style.scss";
//Component Imported
import ProductCard from "../../components/product-card/product-card.component";

//Component Start
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment>
            <h2>{title.toUpperCase()}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product, index) => {
                if (index < 4) {
                  return <ProductCard key={product.id} product={product} />;
                }
              })}
            </div>
          </Fragment>
        );
      })}
    </Fragment>

    /**

    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
     */
  );
};
export default Shop;
