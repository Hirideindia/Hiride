import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={BookingForm} />
      </Switch>
    </Router>
  );
}

export default App;
