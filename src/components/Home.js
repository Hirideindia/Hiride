import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to HiRide</h2>
      <Link to="/bookdriver"><button>Book a Driver</button></Link>
      <Link to="/driver-dashboard"><button>Driver Dashboard</button></Link>
      <Link to="/admin-panel"><button>Admin Panel</button></Link>
    </div>
  );
};

export default Home;
