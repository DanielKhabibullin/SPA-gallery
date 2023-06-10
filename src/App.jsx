
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header.jsx';
import {Main} from './components/Main/Main.jsx';

// const dispatch = useDispatch();
// dispatch(updateToken(getToken()));

const App = () => (
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
export default App;
