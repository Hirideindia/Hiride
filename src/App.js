import React from 'react';
import DriverList from './components/DriverList';
import HireDriverForm from './components/HireDriverForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to HiRide</h1>
      </header>
      <DriverList />
      <HireDriverForm />
    </div>
  );
};

export default App;
