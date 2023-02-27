import React from "react";
import Navbar from "./Navbar.jsx";
import Map from "./Map.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  return (
    <>
      <div className="purple-bg">
        <header>
          <Navbar />
        </header>
        <div className="container-fluid p-5">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <h1 className="text-white">Select Your Location</h1>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Home;
