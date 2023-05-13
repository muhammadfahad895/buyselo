import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/Layout";
import {
  AboutUs,
  AdDetails,
  AddPost,
  ContactUs,
  Dashboard,
  Login,
  MyAds,
  Signin,
  Signup,
} from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "/addetail/:docId",
        element: <AdDetails />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "addpost",
    element: <AddPost />,
  },
  {
    path: "myads",
    element: <MyAds />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
