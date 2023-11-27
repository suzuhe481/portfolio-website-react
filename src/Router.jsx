import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Projects from "./Projects";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
