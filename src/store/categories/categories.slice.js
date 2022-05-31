import { createSlice } from "@reduxjs/toolkit";

const CATEGORIES_INITIAL_STATE = {
    categoriesArray: [],
    isLoading: false,
    error: null,
    category: null,
    item: null,
  };

const categoriesSlice = createSlice({
    name: 'categories',
    initialState : CATEGORIES_INITIAL_STATE,
    reducers:{
        fetchCategoriesToStart : (state, action)=>{
            state.isLoading = true;
        },
        fetchCategoriesSuccess : (state, action)=>{
            state.categoriesArray=  action.payload;
            state.isLoading= false;
        },
        fetchCategoriesFailed: (state, action)=>{
            state.isLoading= false;
            state.error= action.payload;
        }
    }

})


export const {fetchCategoriesToStart, fetchCategoriesSuccess, fetchCategoriesFailed} = categoriesSlice.actions;


export default categoriesSlice.reducer;