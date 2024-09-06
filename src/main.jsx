import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./firebase/AuthProvider.jsx";
import Signup from "./pages/Signup.jsx";
import SignIn from "./pages/SignIn.jsx";
import AddSpot from "./pages/AddSpot.jsx";
import Spots from "./pages/Spots.jsx";
import PrivetRoute from "./routes/PrivetRoute.jsx";
import UpdateSpot from "./pages/UpdateSpot.jsx";
import Spot from "./pages/Spot.jsx";
import MyList from "./pages/MyList.jsx";
import MyProfile from "./pages/MyProfile/MyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return fetch("https://travel-app-server.vercel.app/spots");
        },
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/addtouristspot",
        element: (
          <PrivetRoute>
            <AddSpot />
          </PrivetRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivetRoute>
            <MyList />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-spots/:id",
        element: <UpdateSpot />,
        loader: ({ params }) => {
          return fetch(
            `https://travel-app-server.vercel.app/spots/${params.id}`
          );
        },
      },
      {
        path: "/spots/:id",
        element: (
          <PrivetRoute>
            <Spot />
          </PrivetRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://travel-app-server.vercel.app/spots/${params.id}`
          );
        },
      },
      {
        path: "/spots",
        element: <Spots />,
        loader: () => {
          return fetch("https://travel-app-server.vercel.app/spots");
        },
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <MyProfile />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
