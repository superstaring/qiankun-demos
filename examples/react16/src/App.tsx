import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => <h1>React1 Page</h1>;
const About = () => <h1>React1 About Page</h1>;

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/react16">Home</Link>
          <br />
          <Link to="/react16/about">About</Link>
        </nav>
      </Router>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/react16" exact component={Home} />
          <Route path="/react16/about" component={About} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
