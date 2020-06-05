import React from 'react';
//
import './styles.scss';
import Topbar from '../../components/Topbar';
import Routes from '../../routes';

function App() {
  return (
    <div data-testid="app">
      <Topbar/>
      <Routes/>
    </div>
  );
}

export default App;
