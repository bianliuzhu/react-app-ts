/*
 * @Author: your name
 * @Date: 2021-10-21 14:59:46
 * @LastEditTime: 2021-10-21 16:04:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\store\index.tsx
 */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
