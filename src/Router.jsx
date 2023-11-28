import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Projects from "./Projects";

import AppProvider from "./context/AppContext";

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

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default Router;
