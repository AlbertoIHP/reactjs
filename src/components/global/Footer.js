import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './css/Footer.css';

class Footer extends Component
{
  static propTypes = {
    copy: PropTypes.string
  };

    render()
    {
      const {copyright = '$copy; React 2017'} = this.props;
        return (
            <div className="Footer">
                <p>Hola soy un footer</p>
                <p dangerouslySetInnerHTML={{__html: copyright}} />
            </div>
        );
    }
}

export default Footer;
