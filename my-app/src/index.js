import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GameContainer } from './components/GameContainer';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GameContainer />
		</Provider>
	</React.StrictMode>,
);
