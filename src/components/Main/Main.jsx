import {Layout} from '../Layout/Layout.jsx';
import {Gallery} from './Gallery/Gallery.jsx';
import style from './Main.module.css';

export const Main = () => (
	<main className={style.main}>
		<Layout>
			<Gallery />
		</Layout>
	</main>
);

