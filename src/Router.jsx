import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App/App";
import ErrorPage from "./components/ErrorPage/ErrorPage";

import AppProvider from "./context/AppContext";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default Router;
