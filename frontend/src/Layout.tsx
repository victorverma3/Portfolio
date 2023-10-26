import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../frontend/src/components/footer/Footer";
import Header from "../../frontend/src/components/Header/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
