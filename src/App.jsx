import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./Main-home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Display from "./Home";
// import Map from "./Leaflet";

function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/main" />;
  };

  const router = createBrowserRouter([
    // {
    //   path: "/map",
    //   element: <Map />,
    // },
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
