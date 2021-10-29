/*
 * @Author: your name
 * @Date: 2021-10-22 10:15:48
 * @LastEditTime: 2021-10-22 10:30:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app-ts\src\typeings\custom.d.ts
 */

declare module "StoreType" {
	export const CounterType: {
		value: number;
		text: string;
	};
	export const Store: () => void;
}
