/*
 * @Description:
 * @Author: Gleason
 * @Date: 2021-11-18 21:09:14
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-11 23:41:14
 */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { vote } from 'api';
import './index.less';
import './index.d';

const DevicePage = () => {
	const history = useHistory();
	const [msg, setMsg] = useState<any>();

	const getDataHandle = async () => {
		const res = await vote({});
		setMsg(res);
	};

	return (
		<>
			<div>{msg}</div>
			<button onClick={() => history.push('/index')}> go index page </button>
			<button onClick={getDataHandle}> send request </button>
		</>
	);
};

export default DevicePage;
