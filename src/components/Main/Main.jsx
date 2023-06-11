import {Route, Routes} from 'react-router-dom';
import {Layout} from '../Layout/Layout.jsx';
import {FullScreenPhoto} from './FullScreenPhoto/FullScreenPhoto.jsx';
import {Gallery} from './Gallery/Gallery.jsx';
import style from './Main.module.css';


export const Main = () => (
	<main className={style.main}>
		<Layout>
			<Routes>
				<Route path='/photos/:id' element={<FullScreenPhoto />} />
				<Route path='*' element={<Gallery />} />
			</Routes>
		</Layout>
	</main>
);

