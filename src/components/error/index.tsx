/*
 * @Description: 捕获错误边界组件
 * @Author: Gleason
 * @Date: 2021-11-01 14:43:52
 * @LastEditors: Gleason
 * @LastEditTime: 2021-11-01 14:59:32
 */
import { Component } from "react";

interface IProps {}
interface IState {
	hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// 你同样可以将错误日志上报给服务器
		// logErrorToMyService(error, errorInfo);
		throw new Error(`捕获UI错误: ${errorInfo}`);
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return <h1>这是一个边界错误!</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
