import React from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";

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
