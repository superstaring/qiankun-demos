import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * 渲染子应用
 */
function Render(props: any) {
  const { loading } = props;

  return (
    <>
      <App />
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading }: { loading: any }) {
  const container = document.getElementById("root");
  ReactDOM.render(<Render loading={loading} />, container);
}
