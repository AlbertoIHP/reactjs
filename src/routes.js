//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './components/App';
import Contact from './components/Contact';
import About from './components/About';
import Page404 from './components/Page404';

//Contenedores, estos se caracterizan por que se pueden coenctar con los distintos States
import Home from './containers/Home';
import Library from './containers/Library';

export const AppRoutes = () =>
  <App>
	<Switch>
	  <Route exact path="/about" component={About} />
	  <Route exact path="/contact" component={Contact} />
	<Route exact path="/library" component={Library} />
	<Route exact path="/library/:id" component={Library} />
	  <Route exact path="/" component={Home} />
	  <Route exact component={Page404} />
	</Switch>
  </App>;
