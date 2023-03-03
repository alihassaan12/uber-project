import React from "react";
import Ride from "./assets/rided.jpg";
import Icon from "./assets/ConfirmIcon.png";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Ridedone() {

  const showToast = () => {
    toast( "HAVE A SAFE JOURENY" );
  }
  return (
    <>
      <div className="container-fluid purple-bg" >
        <ToastContainer />
        <button className="bg-transparent border-0 text-white m-4" onClick={ showToast }>Click Here</button>
        <div className="container">
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
              <img src={Ride} className="img-ride" alt="not-found" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 text-center">
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

