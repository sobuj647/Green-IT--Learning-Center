import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Root/Root";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);


export default router;