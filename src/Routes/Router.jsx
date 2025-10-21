import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Components/Page/Home";
import CatagoryNews from "../Components/Page/CatagoryNews";



const router = createBrowserRouter([
    {
      path: "/",
     element: <HomeLayout></HomeLayout>,
     children:[
      {
        path:"",
        element:<Home></Home>,
      },
      {
        path:"/category/:id",
        element:<CatagoryNews></CatagoryNews>
      },
     ]
    },
    {
      path: "/auth",
      element: <div>Authentication layout</div>,
    },
    {
      path: "/news",
      element: <div>News layout</div>,
    },
    {
      path: "/*",
      element: <div>Error 404</div>,
    },
]);

export default router