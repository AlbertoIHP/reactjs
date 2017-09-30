//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './components/App';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';

export const AppRoutes = () =>
  <App>
	<Switch>
	  <Route path="/about" component={About} />
	  <Route path="/contact" component={Contact} />
	  <Route path="/" component={Home} />
	  <Route component={Page404} />
	</Switch>
  </App>;
