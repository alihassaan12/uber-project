import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./Main-home.jsx";
import Login from "./component/form/Login.jsx";
import Register from "./component/form/Register.jsx";
import Display from "./Home";
import Map from "./component/map/Map.jsx";
import Product from "./component/product/ProductCard";
import CartPage from "./component/cart/cartPage";
import Ridedone from "./Ridedone";

function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/main" />;
  };

  const router = createBrowserRouter([
    {
      path: "/done",
      element: <Ridedone />,
    },
    {
      path: "/cart-page",
      element: <CartPage />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/map",
      element: <Map />,
    },
    {
      path: "/main",
      element: <Display />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <AuthRoute>
          <Home />
        </AuthRoute>
      ),
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
