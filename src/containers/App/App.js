import React from "react";

import HeaderElementComponent from "../../components/HeaderElementComponent";

import "./App.scss";

const App = () => {
  return (
    <div className="container app">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron bg-secondary text-white text-center">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="display-3 text-center">
                  Sony Professional Accessibility Tools
                </h1>
              </div>
            </div>
            <p className="lead">Get your access ability on!</p>
            <hr className="my-4" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="btn btn-dark btn-lg"
                  href="https://github.com/sonyprofessional/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Documentation
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-dark btn-lg"
                  href="https://github.com/sonyprofessional/accessibility/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <HeaderElementComponent />
      </div>
    </div>
  );
};

export default App;
