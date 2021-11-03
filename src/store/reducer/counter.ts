/*
 * @Author: your name
 * @Date: 2021-10-21 15:03:08
 * @LastEditTime: 2021-11-03 14:55:31
 * @LastEditors: Gleason
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\store\reducer\counter.ts
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
