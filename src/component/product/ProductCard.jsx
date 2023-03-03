import { useEffect, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import Navbar from "../navbar/Navbar.jsx";
import "../../css/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import useLocalStorage from "use-local-storage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Product() {
  useEffect(() => {
    AOS.init();
  }, []);

  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  const [ theme, setTheme ] = useLocalStorage( 'theme' ? 'dark' : 'light' )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme( newTheme )
  }

  const showToast = () => {
    toast( "Toast Example" );
  }
  return (
    <>
      <div className="purple-bg" data-theme={ theme } >
        <header className="blue-bg" data-theme={ theme }>
          <Navbar />
        </header>
        <div className="container-fluid purple-bg py-5">
          <div className="container">
            <div className="row">
              { items.map( ( item ) => (
                <div
                  className="col-sm-12 col-md-12 col-lg-3"
                  key={ item.id }
                  size="md"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  <div className="card border-0 my-3 car-card">
                    <img
                      className="car-img"
                      src={ item.img }
                      position="top"
                      alt="not-found"
                    />
                    <div className="p-4">
                      <div>{ item.title }</div>
                      <div>{ item.price }</div>
                      <button
                        className="blue-bg text-white px-4 py-2 my-3 border-0"
                        onClick={ () => dispatch( addToCart( item ) ) }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
        <i onClick={ switchTheme } class='fas fa-toggle-on'></i>
        <ToastContainer />
        <Link onClick={ showToast }>show toast </Link>
    </div>
    </>
  );
}
