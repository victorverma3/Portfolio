import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";

import Header from "../../frontend/src/components/Header/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Analytics />
    </div>
  );
}

export default Layout;
