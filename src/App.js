import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Partner from "./components/Partner";

const App = () => {
  return (
    <>
      <header>
        <h1>HiRide</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/partner">Partner</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/partner" component={Partner} />
      </Switch>
      <footer>
        <p>&copy; 2024 HiRide. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
