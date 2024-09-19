import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import Github, { gitHubInfoLoader } from "./components/github.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: "about",
        element: (
          <div>
            <About />
          </div>
        ),
      },
      {
        path: "user/:userid",
        element: (
          <div>
            <User />
          </div>
        ),
      },
      {
        path: "github",
        loader: gitHubInfoLoader,
        element: (
          <div>
            <Github />
          </div>
        ),
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="user/:userid" element={<User />} />
//       <Route loader={gitHubInfoLoader} path="github" element={<Github />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
