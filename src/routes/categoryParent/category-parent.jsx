import CategoryFull from "../category-full/category-full.component";
import DetailOfItem from "../detailed/detailed-category-item";
//Router dom
import { Routes , Route ,useParams } from "react-router-dom";
//Selector
import { useSelector } from "react-redux";
//Category-selector
import { selectCategoriesMap } from "../../store/categories/category.selector";

//Componet start
const CategoryParent = ()=>{
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const itemsOnSelect = categoriesMap[category];
 
    return(
        <Routes>
            <Route index element={<CategoryFull itemsOnSelect={itemsOnSelect}/>} />
            <Route path=":item" element={<DetailOfItem itemsOnSelect={itemsOnSelect}/>}/>
        </Routes>
    )


}
export default CategoryParent;