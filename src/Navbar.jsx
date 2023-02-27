import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
import MenuLink from "./MenuLink";

const Navbar = () => {
  const { dispatch } = useContext( AuthContext );
  const navigate = useNavigate();

  const handleLogout = ( e ) => {
    dispatch( { type: "LOGOUT" } );
    navigate( "/login" );
  };

  const { currentUser } = useContext( AuthContext );

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light py-5 border-0">
          <div class="container">
            <a class="navbar-brand logo text-white" href="#">
              UBER
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-end align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src={
                    currentUser.photoURL || "https://nregsmp.org/eService/images/User.png"
                  }
                  alt=""
                />
              </div>
              <span onClick={ handleLogout }>
                <MenuLink text="Logout" />
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
