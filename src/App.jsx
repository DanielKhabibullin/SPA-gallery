
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {getCode} from './api/code.js';
import {Header} from './components/Header/Header.jsx';
import {Main} from './components/Main/Main.jsx';
import {updateCode} from './store/codeReducer.js';
import {updateToken} from './store/token/tokenAction.js';

const App = () => {
	const dispatch = useDispatch();
	dispatch(updateCode(getCode()));
	if (localStorage.getItem('bearer')) {
		dispatch(updateToken(localStorage.getItem('bearer')));
	}
	return (
		<Routes>
			<Route path='*' element={
				<>
					<Header />
					<Main />
				</>
			}
			/>
		</Routes>
	);
};

export default App;
