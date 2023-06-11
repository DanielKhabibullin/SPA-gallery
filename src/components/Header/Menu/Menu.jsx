import {Auth} from './Auth/Auth.jsx';
import {Logo} from './Logo/Logo.jsx';
import style from './Menu.module.css';

export const Menu = () => (
	<div className={style.wrapper}>
		<Logo />
		<Auth />
	</div>
);

