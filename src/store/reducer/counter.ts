/*
 * @Author: your name
 * @Date: 2021-10-21 15:03:08
 * @LastEditTime: 2021-10-21 15:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\store\reducer\counter.ts
 */
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })
  
  export const { increment, decrement, incrementByAmount } = counterSlice.actions

  export default counterSlice.reducer