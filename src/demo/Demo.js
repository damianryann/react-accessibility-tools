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
                className="some-class another-class"
                isFunctional={true}
                heading="h2"
                style={{ color: 'red' }}
              >
                Functional Heading
              </HeaderElement>
            </div>
            <div className="col">
              <HeaderElement
                className="some-class"
                id="decorative-h1"
                isFunctional={false}
                heading="h1"
              >
                Decorative Heading
              </HeaderElement>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Demo;
