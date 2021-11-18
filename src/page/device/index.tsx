import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { vote } from 'api';
import './index.less';
import './index.d';

const DevicePage = () => {
	const history = useHistory();
	const [msg, setMsg] = useState<any>();

	const getDataHandle = async () => {
		const res = await vote();
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
