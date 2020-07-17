import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';
import ButtonCounter from './components/ButtonCounter';
import LightSwitch from './components/LightSwitch';

ReactDOM.render([<ClickityClick />, <ButtonCounter />, <LightSwitch />], document.getElementById('root'));
