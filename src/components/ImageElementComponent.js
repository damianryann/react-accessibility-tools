import React from "react";

import ImageElement from "../packages/ImageElement/ImageElement";
import react from "../assets/images/react.png";

const ImageElementComponent = () => {
  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-white text-center">
            <div className="card-body">
              <h2 className="card-title display-4 pb-5">
                @sonyprofessional/ImageElement
              </h2>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <ImageElement
                    src={react}
                    alt=""
                    id=""
                    hideFromReader={false}
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<img src="./react.png" alt="" role="presentation" />`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <ImageElement
                    src={react}
                    alt="React Logo"
                    hideFromReader={false}
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<img src="./react.png" alt="React Logo" />`}</code>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <ImageElement
                    src={react}
                    alt="React Logo"
                    id="img-id102981082"
                    hideFromReader={true}
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<img src="./react.png" id="img-id102981082" alt="React Logo" aria-hidden="true" />`}</code>
                </div>
                <div className="col-md-6 pb-3">
                  <ImageElement
                    src={react}
                    alt="React Logo"
                    className="img-thumbnail"
                    hideFromReader={false}
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<img src="./react.png" class="img-thumbnail" alt="React Logo" />`}</code>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <ImageElement
                    src={react}
                    alt="React Logo with Yellow Background"
                    style={{ backgroundColor: "#ffff00", width: "25%" }}
                  />
                  <h3>Output:</h3>{" "}
                  <code>{`<img src="./react.png" alt="React Logo with Yellow Background" style="background-color: #ffff00; width: 25%;" />`}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageElementComponent;
