import React from "react";

import "./Demo.css";
import HeaderElement from "../packages/HeaderElement/HeaderElement";

function Demo() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">This is a demo</div>
            <HeaderElement
              title="Hello world"
              className="some-class"
              isFunctional={false}
              value="h1"
              style={{ color: "red" }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Demo;
