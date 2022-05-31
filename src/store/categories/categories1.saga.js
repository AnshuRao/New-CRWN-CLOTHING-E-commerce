import { takeLatest , all , call , put } from "redux-saga/effects";

import { fetchCategoriesToStart,fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.slice";
 import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";




//watcher for Satrt 1
 export function* onFetchCategories(){
     console.log( fetchCategoriesToStart.type)
    yield  takeLatest( fetchCategoriesToStart.type, fetchCategoriesAsync);

 }
 //next performer 1
 function* fetchCategoriesAsync(){
     try{
const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
yield put( fetchCategoriesSuccess(categoriesArray));
     }catch(error){
         put(fetchCategoriesFailed(error));
     }

 }
 //accumulator 
 export function* categoriesSaga(){
     yield all([call(onFetchCategories)])
 }