import React from "react";
import Ride from "./assets/rided.jpg";
import Icon from "./assets/ConfirmIcon.png";

function Ridedone() {
  return (
    <>
      <div className="container-fluid purple-bg">
        <div className="container">
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-6">
              <img src={Ride} className="img-ride" alt="not-found" />
            </div>
            <div className="col-6 text-center">
              <h1 className="text-white">
                {" "}
                <span>
                  <img src={Icon} className="c-icon" alt="not-found" />
                </span>{" "}
                YOUR RIDE HAS BEEN CONFIRMED. <br /> THANK YOU FOR CHOOSING US.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ridedone;

