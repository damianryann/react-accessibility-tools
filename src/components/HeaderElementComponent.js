import React from "react";

import HeaderElement from "../packages/HeaderElement/HeaderElement";

const HeaderElementComponent = () => {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4 pb-5">HeaderElement</h2>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={true}
                    title="Header 1"
                    value="h1"
                    fallBack="h2"
                  />
                  <h3>Output:</h3> <code>{`<h1>Header 1</h1>`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={false}
                    title="Header 1"
                    value="h1"
                    fallBack="h2"
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<div class="h1">Header 1</div>`}</code>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={true}
                    title="Header 2"
                    value="h2"
                    fallBack="h3"
                  />
                  <h3>Output:</h3> <code>{`<h2>Header 2</h2>`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={false}
                    title="Header 2"
                    value="h2"
                    fallBack="h3"
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<div class="h2">Header 2</div>`}</code>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={true}
                    title="Header 3"
                    value="h3"
                    fallBack="h4"
                  />
                  <h3>Output:</h3> <code>{`<h3>Header 3</h3>`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={false}
                    title="Header 3"
                    value="h3"
                    fallBack="h4"
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<div class="h3">Header 3</div>`}</code>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={true}
                    title="Header 4"
                    value="h4"
                    fallBack="h5"
                  />
                  <h3>Output:</h3> <code>{`<h4>Header 4</h4>`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={false}
                    title="Header 4"
                    value="h4"
                    fallBack="h5"
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<div class="h4">Header 4</div>`}</code>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={true}
                    title="Header 5"
                    value="h5"
                    fallBack="h6"
                  />
                  <h3>Output:</h3> <code>{`<h5>Header 5</h5>`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={false}
                    title="Header 5"
                    value="h5"
                    fallBack="h6"
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<div class="h5">Header 5</div>`}</code>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={true}
                    title="Header 6"
                    value="h6"
                    fallBack="h1"
                  />
                  <h3>Output:</h3> <code>{`<h6>Header 6</h6>`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <HeaderElement
                    isFunctional={false}
                    title="Header 6"
                    value="h6"
                    fallBack="h1"
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<div class="h6">Header 6</div>`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderElementComponent;
