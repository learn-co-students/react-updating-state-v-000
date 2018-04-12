import React from 'react';
import ReactDOM from 'react-dom';

import ClickityClick from './components/ClickityClick';
import AddressInfo from './components/AddressInfo';

ReactDOM.render(
  <div>
    <ClickityClick />
    <AddressInfo />
  </div>,
  document.getElementById('root')
);
