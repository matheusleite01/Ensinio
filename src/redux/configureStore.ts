import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import resources from "./reducers/apiResources";
import language from "./reducers/language";
import localStorage from "./middleware/localStorage";


const reducer = combineReducers({resources, language})
const store = configureStore({reducer, middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorage) })


export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;