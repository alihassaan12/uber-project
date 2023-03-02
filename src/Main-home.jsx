import React from "react";
import Navbar from "./component/navbar/Navbar.jsx";
import Map from "./component/map/Map.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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
              <div className="py-4">
                <Link
                  style={{ textDecoration: "none" }}
                  to="./product"
                  className="px-5 py-3 blue-bg text-white rounded-4"
                >
                  NEXT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
