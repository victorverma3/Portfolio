import React from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Header from "./components/layout/Header";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow bg-gradient-to-b from-sky-100 to-gray-100">
                <Outlet />
            </div>
            <Analytics />
        </div>
    );
}

export default Layout;
