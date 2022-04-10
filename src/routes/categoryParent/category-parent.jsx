import CategoryFull from "../category-full/category-full.component";
import DetailOfItem from "../detailed/detailed-category-item";
//Router dom
import { Routes , Route ,useParams } from "react-router-dom";
//Selector
import { useSelector } from "react-redux";
//Category-selector
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/category.selector";

//Componet start
const CategoryParent = ()=>{
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const productOnSelect = categoriesMap[category];
 
    return(
        <Routes>
            <Route index element={<CategoryFull productOnSelect={productOnSelect}/>} />
            <Route path=":item" element={<DetailOfItem productOnSelect={productOnSelect}/>}/>
        </Routes>
    )


}
export default CategoryParent;