import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      111
      <Router>
        <nav>
          <Link to="/react16">Home</Link>
          <br />
          <Link to="/react16/about">About</Link>
        </nav>
      </Router>
    </div>
  );
}

export default App;
