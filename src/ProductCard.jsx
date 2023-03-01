import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import Navbar from "./Navbar";

export default function Product() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <>
    <header>
        <Navbar/>
    </header>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div className="col-3" key={item.id} size="md">
              <div className="card border-0 rounded-0 my-3">
                <img src={item.img} position="top" alt="not-found" />
                <div className="p-4">
                  <div>{ item.title }</div>
                  <div>{ item.price }</div>
                  <button className="bg-dark" onClick={ () => dispatch( addToCart( item ) ) }>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
