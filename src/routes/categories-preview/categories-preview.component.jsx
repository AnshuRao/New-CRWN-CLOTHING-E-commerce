//REACT
import { Fragment, useContext } from "react";

//CONTEXT
import { CategoriesContext } from "../../contexts/categories.context";

//Component Imported
 //import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";

//Component Start
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
   <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>

    // <Fragment>
    //   {Object.keys(categoriesMap).map((title) => {
    //     return (
    //       <Fragment>
    //         <h2>{title.toUpperCase()}</h2>
    //         <div className="products-container">
    //           {categoriesMap[title].map((product, index) => {
    //             if (index < 4) {
    //               return <ProductCard key={product.id} product={product} />;
    //             }
    //           })}
    //         </div>
    //       </Fragment>
    //     );
    //   })}
    // </Fragment>
  );
};
export default CategoriesPreview;
