//SCSS
import "./category-full.style.scss";
//React
import { useContext, useState, useEffect, Fragment } from "react";
//Router-dom
import { useParams } from "react-router-dom";
//Context
import { CategoriesContext } from "../../contexts/categories.context";
//Components Imported
import ProductCard from "../../components/product-card/product-card.component";

//Component Start
const CategoryFull = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  //const products = categoriesMap[category];

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (<Fragment>
  <h2 className="category-full-title">{category.toUpperCase()}</h2>

  
    <div className="category-full-conatiner">
      {products &&  products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
    </Fragment>
  );
};

export default CategoryFull;
