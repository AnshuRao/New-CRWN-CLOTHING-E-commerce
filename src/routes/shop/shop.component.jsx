//React
//import { useEffect } from "react";

// Router-Dom
import { Route, Routes } from "react-router-dom";

//SCSS
import "./shop.style.scss";

//Component Imported
import CategoriesPreview from "../categories-preview/categories-preview.component";

import CategoryParent from "../categoryParent/category-parent";
//Dispatch for action
import { useDispatch } from "react-redux";
//Categories Action
import { fetchCategoriesToStart } from "../../store/categories/categories.slice";



//Component Start
const Shop = () => {

  const dispatch = useDispatch();

  
  dispatch(fetchCategoriesToStart());

  return (
    <Routes>

      <Route index element={<CategoriesPreview />} />
      <Route path=":category/*" element={<CategoryParent />} />

    </Routes>
  );
};
export default Shop;
