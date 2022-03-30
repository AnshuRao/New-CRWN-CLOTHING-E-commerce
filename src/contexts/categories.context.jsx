//REACT
import { createContext, useState, useEffect } from "react";
//FireBase
import {addCollectionAndDocument ,getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

//SHOP.JS file
//import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({ 
  categoriesMap: {} ,
});


export const CategoriesProvider = ({ children }) => {
  const [ categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

useEffect(()=>{
/*
  //addCollectionAndDocument('categories', SHOP_DATA);
  above code is for uploading data to firestore db...so we have to run this only once
*/

//getiing data from db
const getCategoriesMap = async () =>{
  const categoryMap = await getCategoriesAndDocuments();
  setCategoriesMap(categoryMap);
}
getCategoriesMap();

},[])
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
