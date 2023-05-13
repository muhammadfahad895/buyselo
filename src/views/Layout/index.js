import React from "react";
import { Outlet } from "react-router-dom";
import { Cta, Footer, Header, Navbar, UseSection } from "../../components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <UseSection />
      <Cta />
      <Footer />
    </>
  );
};

export default Layout;
