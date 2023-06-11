import style from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {requestTokenAsync} from '../../../../store/token/tokenAction.js';
import {userRequestAsync} from '../../../../store/userData/userDataAction.js';
import {urlAuth} from '../../../../api/auth.js';


export const Auth = () => {
	const token = useSelector((state) => state.token.token);
	const userData = useSelector((state) => state.user.data);
	const code = localStorage.getItem('code');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(requestTokenAsync());
	}, [code]);

	useEffect(() => {
		dispatch(userRequestAsync());
	}, [token]);

	return token ? (
		Object.keys(userData).length !== 0 &&
		<div className={style.userDataWrapper}>
			<img src={userData.profile_image.small} />
			<p>{userData.name}</p>
		</div>
	) : (
			<a href={urlAuth} className={style.auth}></a>
	);
};
