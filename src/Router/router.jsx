import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";
import HomeLayout from "../LayOuts/homeLayout";
import About from "../Pages/About";
import Clients from "../Pages/Clients";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Programs from "../Pages/Programs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/Home",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/About",
    element: <About></About>,
  },
  {
    path: "/Programs",
    element: <Programs></Programs>,
  },
  {
    path: "/Clients",
    element: <Clients></Clients>,
  },
  {
    path: "/Blog",
    element: <Blog></Blog>,
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
]);


export default router;