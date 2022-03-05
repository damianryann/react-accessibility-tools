import React from 'react';

import './Demo.css';
import HeaderElement from '../packages/HeaderElement/HeaderElement';

function Demo() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col">
              <HeaderElement
                title="Hello world"
                className="some-class another-class"
                isFunctional={true}
                value="h2"
                style={{ color: 'red' }}
              />
            </div>
            <div className="col">
              <HeaderElement
                title="Hello world"
                className="some-class"
                id="decorative-h1"
                isFunctional={false}
                value="h1"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Demo;
