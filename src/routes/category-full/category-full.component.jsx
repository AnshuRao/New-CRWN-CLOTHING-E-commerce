//SCSS
import "./category-full.style.scss";

//React
import { Fragment } from "react";

//Router-dom
import { useParams } from "react-router-dom";

//Components Imported
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

//Redux -selector
import { useSelector } from "react-redux";

//categories selector
import { selectIsLoading } from "../../store/categories/category.selector";

//Component Start
const CategoryFull = ({ itemsOnSelect }) => {
  const { category } = useParams();
  const isLoading = useSelector(selectIsLoading);
  //const products = categoriesMap[category]; Because they are already a featching data


  return (
    <Fragment>
      <h2 className="category-full-title">{category.toUpperCase()}</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-full-conatiner">
          {itemsOnSelect &&
            itemsOnSelect.map((product) => {
              return (
             
                  <ProductCard key={product.id} product={product} />
              
              );
            })}
        </div>
      )}
    </Fragment>
  );
};

export default CategoryFull;
