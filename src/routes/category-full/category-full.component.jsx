//SCSS
import "./category-full.style.scss";

//React
import { Fragment } from "react";

//Router-dom
import { useParams, useNavigate } from "react-router-dom";

//Components Imported
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import Button from "../../components/button/button.component";
//Redux -selector
import { useSelector } from "react-redux";

//categories selector
import { selectIsLoading } from "../../store/categories/category.selector";

//Component Start
const CategoryFull = ({ productOnSelect }) => {
  const { category } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  //const products = categoriesMap[category]; Because they are already a featching data

  const products = productOnSelect;

  return (
    <Fragment>
      <h2 className="category-full-title">{category.toUpperCase()}</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-full-conatiner">
          {products &&
            products.map((product) => {
              return (
                <div >
                  <ProductCard key={product.id} product={product} />{" "}
                </div>
              );
            })}
        </div>
      )}
    </Fragment>
  );
};

export default CategoryFull;
