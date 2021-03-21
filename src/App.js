import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header'
import './css/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
