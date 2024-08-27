import { createBrowserRouter } from "react-router-dom";
import Root from "./root";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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