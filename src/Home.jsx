import React from "react";
import "./App.css";
import Carimg from "./assets/images/home-car.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

const Display = () => {

    return (
        <>
            <div className="container-fluid purple-bg">
                <div className="row disply-row align-items-center">
                    <div className="col-6 text-center px-0">
                        <Link to="/login" className="px-5 py-3 border-0 rounded-4 blue-bg text-white">GET STARTED</Link>
                    </div>
                    <div className="col-6 px-0">
                        <img src={ Carimg } className="img-fluid" alt="not-found" />
                    </div>
                </div>
            </div>
        </>
    )

};

export default Display;
