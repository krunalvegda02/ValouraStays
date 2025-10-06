import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet /> {/* yaha child routes render honge */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
