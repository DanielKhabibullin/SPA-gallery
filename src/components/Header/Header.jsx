import style from './Header.module.css';
import {Menu} from './Menu/Menu.jsx';

export const Header = () => (
	<header className={style.header}>
		<Menu />
	</header>
);
