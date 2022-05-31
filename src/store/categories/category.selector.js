import { createSelector } from "reselect";

//main state
const selectCategoryReducer = (state) => state.categories;

//categoriesArray
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

//convertig categoriesArray --CategoriesMap
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const {title, items } = category;
      const newItems = items.map((item) => {
        return {
          ...item,
          title,
        };
      });

      acc[title.toLowerCase()] = newItems;
      return acc;
    }, {})
);

//isLoading selctor
export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
