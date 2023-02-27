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
  // console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">DesignMediaX</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="profileImg"
            src={
              currentUser.photoURL
                ? currentUser.photoURL
                : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            }
            alt=""
          />
          <span className="navbarName">{ currentUser.displayName }</span>
          <span onClick={ handleLogout }>
            <MenuLink text="Logout" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
