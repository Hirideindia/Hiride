import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import BookDriver from './components/BookDriver';
import DriverDashboard from './components/DriverDashboard';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/bookdriver" component={BookDriver} />
        <Route path="/driver-dashboard" component={DriverDashboard} />
        <Route path="/admin-panel" component={AdminPanel} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
