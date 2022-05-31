import { all,call } from "redux-saga/effects";
//Sagas
import { categoriesSaga } from "./categories/categories1.saga";
import {userSagas} from './user/user.saga1';

export function* rootSaga1(){
yield all([call(categoriesSaga) , call(userSagas)])
};