import Login from './Login';
import './Login.module.css';
import { Routes, Route } from "react-router-dom"  

import User from './User';
import './User.module.css';

import Dashboard from './Dashboard';
import './Dash.module.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Dasboard" element={<Dashboard />}/>
        <Route path="user" element={<User />} />
        
      </Routes>
    </div>
  );
}

export default App;