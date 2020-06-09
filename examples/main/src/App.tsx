import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App(props: any) {
  // const push = (subapp: any) => {
  //   props.history.pushState(null, subapp, subapp);
  // };

  const onClick = () => {
    props.history.push("/react16");
  };
  return (
    <div className="mainapp">
      <header className="mainapp-header">
        <h1>QianKun</h1>
      </header>
      <div className="mainapp-main">
        <ul className="mainapp-sidemenu">
          {/* <li onClick={push("/react16")}>React16</li>
          <li onClick="push('/react15')">React15</li>
          <li onClick="push('/vue')">Vue</li>
          <li onClick="push('/angular9')">Angular9</li>
          <li onClick="push('/purehtml')">Purehtml</li> */}
          <Router>
            <Link to="/react16">React16</Link>
          </Router>
        </ul>

        <main id="subapp-container"></main>
      </div>
    </div>
  );
}

export default App;
