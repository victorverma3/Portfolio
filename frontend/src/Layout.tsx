import React from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function Layout() {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                <div className="grow bg-gradient-to-b from-sky-100 to-gray-100">
                    <Outlet />
                    <Footer />
                </div>
                <Analytics />
            </div>
        </>
    );
}

export default Layout;
