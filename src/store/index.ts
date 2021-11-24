/*
 * @Author: your name
 * @Date: 2021-10-21 14:59:46
 * @LastEditTime: 2021-11-17 11:05:44
 * @LastEditors: Gleason
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\store\index.tsx
 */
import './index.d';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counter';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
