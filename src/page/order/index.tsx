import { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {} from 'api';
import './index.less';
import './index.d';

const OrderPage = () => {
	const history = useHistory();
	const [state, setState] = useState<unknown>(0);
	useLayoutEffect(() => {
		setState(1);
	}, []);
	return (
		<>
			<div>{state}</div>
			<button onClick={() => history.push('/index')}>跳转</button>
		</>
	);
};

export default OrderPage;
