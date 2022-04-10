//React
import { useEffect } from "react";

// Router-Dom
import { Route, Routes } from "react-router-dom";

//SCSS
import "./shop.style.scss";

//Component Imported
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryFull from "../category-full/category-full.component";
import CategoryParent from "../categoryParent/category-parent";
//Dispatch for action
import { useDispatch } from "react-redux";
//Categories Action
import { fetchCategoriesToStart } from "../../store/categories/category.action";



//Component Start
const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
 
      dispatch(fetchCategoriesToStart());
    
  });

  return (
    <Routes>

      <Route index element={<CategoriesPreview />} />
      <Route path=":category/*" element={<CategoryParent />} />

    </Routes>
  );
};
export default Shop;
