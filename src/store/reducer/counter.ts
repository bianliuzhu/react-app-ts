/*
 * @Author: your name
 * @Date: 2021-10-21 15:03:08
 * @LastEditTime: 2021-11-17 10:54:23
 * @LastEditors: Gleason
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\store\reducer\counter.ts
 */
import { createSlice } from '@reduxjs/toolkit';

interface initState {
	value: number;
}
const initialState: initState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state: initState) => {
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
