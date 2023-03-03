import React from "react";
import "./css/App.css";
import Carimg from "./assets/images/home-car.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";

const Display = () => {

  const [ theme, setTheme ] = useLocalStorage( 'theme' ? 'dark' : 'light' )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme( newTheme )
  }

  return (
    <>
      <div className="container-fluid purple-bg" data-theme={ theme }>
        <i onClick={ switchTheme } class='fas fa-toggle-on'></i>
        <div className="row disply-row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6  text-center px-0">
            <Link
              style={{ textDecoration: "none" }}
              to="/login"
              className="px-5 py-3 border-0 rounded-4 blue-bg text-white"
            >
              GET STARTED
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6  px-0">
            <img src={Carimg} className="img-fluid" alt="not-found" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Display;
