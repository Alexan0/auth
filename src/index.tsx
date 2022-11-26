import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './firebase';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './App';
import './assets/styles/style.css';


const rootElem = document.getElementById('root');

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);

	root.render(
		<React.StrictMode>
			<Router>
				<Provider store={store}>
					<App />
				</Provider>
			</Router>
		</React.StrictMode>
	);
}


