/*
 * @Author: Gleason
 * @Date: 2021-10-21 15:03:08
 * @LastEditTime: 2021-11-17 11:07:53
 * @LastEditors: Gleason
 * @Description: 计数store
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const initialState: initState = {
	value: 0,
	name: 'gleason',
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState, // `createSlice` 将从 `initialState` 参数推断状态类型
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		// 使用 PayloadAction 类型声明 `action.payload` 的内容
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 其他代码如选择器可以使用导入的`RootState`类型
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
