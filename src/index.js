
//Esto permitira correr es6 y es7 como assync
import 'babel-polyfill';

//Dependencias
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bluebird from 'bluebird';
import {Provider } from 'react-redux';


//Rutas
import {AppRoutes} from './routes';


//Assets
import './index.css';


import registerServiceWorker from './registerServiceWorker';

// Redux Store
import configureStore from './lib/configureStore';

//Reducers
import rootReducer from './reducers';


// Configuracion del bluebird par alas promesas reescribiendo el por defecto
window.Promise = Bluebird;
window.addEventListener('unhandledrejection', error => {
	error.preventDefault();

	if(process.env.NODE_ENV != 'production'){
		console.warn('Unhandled promise rejection warning ', error.detail);
	}
});


// Mandamos a llamar el STORE
const store = configureStore({
	initialState: window.initialState
}, rootReducer);



render
(
	<Provider store={store}>
	<Router>
	<AppRoutes>
	</AppRoutes>
	</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
