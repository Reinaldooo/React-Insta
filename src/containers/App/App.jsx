import React from 'react';
//
import Topbar from '../../components/Topbar';
import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div data-testid="app">
    <Topbar/>
    <Routes/>
  </div>
);

export default App;
