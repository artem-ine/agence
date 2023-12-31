import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page";
import About from "./routes/about.jsx";
import Works from "./routes/works";
import studyCases from "./studyCasesData";
import StudyCase from "./components/StudyCase";
import Home from "./routes/home";
import DarkModeSwitch from "./components/modeSwitch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works/",
        element: <Works studyCases={studyCases} />,
        children: [
          {
            path: ":workId",
            element: <StudyCase studyCases={studyCases} />,
          },
        ],
      },
    ],
  },
]);

const darkModePref = window.matchMedia("(prefers-color-scheme: dark)").matches;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <DarkModeSwitch defaultDarkMode={darkModePref} />
    </RouterProvider>
  </React.StrictMode>
);
