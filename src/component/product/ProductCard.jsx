import { useEffect, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import Navbar from "../navbar/Navbar.jsx";
import "../../css/App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Product() {
  useEffect(() => {
    AOS.init();
  }, []);

  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();


  return (
    <>
      <div className="purple-bg">
        <header className="blue-bg">
          <Navbar />
        </header>
        <div className="container-fluid purple-bg py-5">
          <div className="container">
            <h1 className="text-center text-white">SELECT YOUR RIDE</h1>
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
                        Select Your Ride
                      </button>
                    </div>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
    </div>
    </>
  );
}
