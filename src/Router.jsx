import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App/App";
import Projects from "./pages/Projects/Projects";

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
