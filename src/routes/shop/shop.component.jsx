

// Router-Dom
import { Route, Routes } from "react-router-dom";

//SCSS
import "./shop.style.scss";
//Component Imported
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryFull from "../category-full/category-full.component";
//Component Start
const Shop = () => {


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryFull/>}/>
    </Routes>
  );
};
export default Shop;
