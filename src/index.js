//Dependencias
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


//Rutas
import {AppRoutes} from './routes';


//Assets
import './index.css';


import registerServiceWorker from './registerServiceWorker';

render
(
  <Router>
	<AppRoutes>
	</AppRoutes>
  </Router>,
	document.getElementById('root')
);

registerServiceWorker();
