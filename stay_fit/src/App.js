import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div className="App">
      
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/"
            elements={<Login />} />
  
          <Route path="/register"
            elements={<Register/>} />
            console.log("clicked");
        </Routes>
      </div>
    </Router>

</div>
  );
};

export default App;
