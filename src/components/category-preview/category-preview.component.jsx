//SCSS
import "./category-preview.style.scss";
//Components Imported
import ProductCard from "../product-card/product-card.component";
//Router-Dom
import { Link } from "react-router-dom";


//Component Start
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">{title.toUpperCase()} &nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
