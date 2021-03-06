//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes (Son mas bien directivas que compoenntes en si pero en React se manejan bajo el mismo concepto)
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';


//Informacion
import items from '../data/menu';

class App extends Component {
  static propTypes = {
	children: PropTypes.object.isRequired
  };



	render() {
	const {children} = this.props;
		return (
			<div>
				<Header
		title="Codejobs"
		items={items}
		/>

				<Content body={children}/>

				<Footer copyright="&copy; Codejobs 2017"/>

			</div>
		);
	}
}

export default App;
