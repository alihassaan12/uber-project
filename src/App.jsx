import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./Home.jsx";
import Login from "./component/form/Login.jsx";
import Register from "./component/form/Register.jsx";
import Welcom from "./Welcom";
import Map from "./component/map/Map.jsx";
import Product from "./component/product/ProductCard";
import CartPage from "./component/cart/cartPage";
import Ridedone from "./Confirm";
import RootLayout from "./layouts/RootLayout";

function App () {
  const { currentUser } = useContext( AuthContext );

  const AuthRoute = ( { children } ) => {
    return currentUser ? children : <Navigate to="/welcom" />;
  };

  const router = createBrowserRouter( [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: "confirm",
          element: <Ridedone />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "map",
          element: <Map />,
        },
        {
          path: "welcom",
          element: <Welcom />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "",
          element: (
            <AuthRoute>
              <Home />
            </AuthRoute>
          ),
        },
      ]
    }
  ] );
  return (
    <div className="app">
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
