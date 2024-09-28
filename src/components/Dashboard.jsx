import React from 'react';
import { removeToken } from '../utils/auth';

const Dashboard = ({ history }) => {
  const handleLogout = () => {
    removeToken();
    history.push('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
