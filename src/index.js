import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';
import ButtonCounter from './components/ButtonCounter'
import LightSwitch from './components/LightSwitch'

ReactDOM.render(<ClickityClick />, document.getElementById('root'));
ReactDOM.render(<ButtonCounter />, document.getElementById('root'));
ReactDOM.render(<LightSwitch />, document.getElementById('root'));
