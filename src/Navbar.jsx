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
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-5">
          <div class="container">
            <a class="navbar-brand logo" href="#">
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
            <div className="d-flex justify-content-end">
              <div className="col-1">
                <img
                  className="img-fluid"
                  src={
                    currentUser.photoURL
                      ? currentUser.photoURL
                      : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
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
