// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component{
	static propTypes ={
		isMobile: PropTypes.bool
	};


	render() {
		const { isMobile } = this.props;

		return(
				<div className="Home">

					<p>
						{isMobile ? 'Mobile Device' : 'Desktop device'}
					</p>

				</div>
			);
	}
}


// function mapStateToProps(state){
//   return {
//     isMobile: state.device.isMobile
//   };
// }


// export default connect(mapStateToProps, null)(Home);
// SON LO MISMO SOLO QUE ABAJO ESTA EN ES6

export default connect(state => ({
	isMobile: state.device.isMobile
}), null)(Home);
