import "../../css/App.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import MenuLink from "./MenuLink";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../cart/cartSlice";

const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const { dispatchh } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatchh({ type: "LOGOUT" });
    navigate("/login");
  };

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light py-5 border-0">
          <div class="container">
            <a class="navbar-brand logo text-white" href="#">
              UBER
            </a>
            <div className="d-flex justify-content-end align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src={
                    currentUser.photoURL ||
                    "https://nregsmp.org/eService/images/User.png"
                  }
                  alt=""
                />
              </div>
              <span onClick={handleLogout}>
                <MenuLink className="color-white" text="Logout" />
              </span>
              <div>
                <Link
                  style={{ textDecoration: "none" }}
                  className="d-flex align-items-center"
                  to="/cart-page"
                >
                  <i class="fa-brands fa-shopify mx-2 fa-2x text-white"></i>
                  <div className="text-white fw-bold">{totalQuantity}</div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
