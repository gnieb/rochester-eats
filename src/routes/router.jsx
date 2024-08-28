import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "./error-page";
import Login from "../pages/login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children : [
        {
            path: "/login",
            element: <Login />,
        }
      ]
    },
    {
        path: '/reviews',
        element: <div>REVIEWS</div>,
    },
    {
        path: '/friends',
        element: <div>THEY WILL BE HERE</div>
    }
  ]);

  export default router;