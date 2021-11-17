/*
 * @Author: Gleason
 * @Date: 2021-10-21 15:03:08
 * @LastEditTime: 2021-11-17 11:07:53
 * @LastEditors: Gleason
 * @Description: 测试 store
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState: initState = {
	value: 0,
	name: 'gleason',
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state: initState) => {
			state.value += 1;
		},
		decrement: (state: initState) => {
			state.value -= 1;
		},
		incrementByAmount: (state: initState, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
