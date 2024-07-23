// src/App.js
import React, { useState } from "react";
import Auth from "./components/Auth";
import LoginSignup from './components/LoginSignup';
import Booking from "./components/Booking";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? <Auth setUser={setUser} /> : <Booking user={user} />}
    </div>
  );
};

export default App;