// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';
import LightSwitch from './components/LightSwitch';
import ButtonCounter from './components/ButtonCounter';

ReactDOM.render(
  <ul>
    <li><ClickityClick /></li>
    <li><LightSwitch /></li>
    <li><ButtonCounter /></li>
  </ul>
  , document.getElementById('root'));
