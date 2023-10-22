import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Analytics />
    </div>
  );
}

export default Layout;
