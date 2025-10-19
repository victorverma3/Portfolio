import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

import Auth from "../Auth";

import { supabase } from "../../utils/Supabase";

import useIsScreenLg from "../../hooks/useIsScreenLg";
import useIsScreenMd from "../../hooks/useIsScreenMd";
import useIsScrolled from "../../hooks/useIsScrolled";

const Header = () => {
    const isScrolled = useIsScrolled();
    const isScreenLg = useIsScreenLg();
    const isScreenMd = useIsScreenMd();
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    useEffect(() => {
        if (isScreenMd) {
            setNavDrawerOpen(false);
        }
    }, [isScreenMd]);

    useEffect(() => {
        const body = document.body;

        if (navDrawerOpen) {
            const scrollBarCompensation =
                window.innerWidth - document.documentElement.clientWidth;
            body.style.overflow = "hidden";
            if (scrollBarCompensation > 0) {
                body.style.paddingRight = `${scrollBarCompensation}px`;
            }
        } else {
            body.style.overflow = "";
            body.style.paddingRight = "";
        }

        return () => {
            body.style.overflow = "";
            body.style.paddingRight = "";
        };
    }, [navDrawerOpen]);

    const [resumeURL, setResumeURL] = useState("");
    useEffect(() => {
        const { data: publicData } = supabase.storage
            .from("files")
            .getPublicUrl("VictorVermaResume.pdf");
        setResumeURL(publicData.publicUrl);
    }, []);
    const openResume = () => {
        window.open(resumeURL);
    };

    const logoItems = [
        {
            url: "https://www.linkedin.com/in/victorverma/",
            logo: "images/linkedinlogo.png",
        },
        {
            url: "https://github.com/victorverma3",
            logo: "images/githublogo.png",
        },
        { url: "mailto:vpverm@bu.edu", logo: "images/maillogo.png" },
    ];
    const navItems = [
        { url: "/", text: "Home" },
        { url: "/experience", text: "Experience" },
        { url: "/education", text: "Education" },
        { url: "/projects", text: "Projects" },
        { url: resumeURL, click: openResume, text: "Resume", id: "resume" },
        { url: "/about", text: "About Me" },
    ];
    return (
        <div
            className={`sticky top-0 z-[1500] h-16 ${
                isScrolled && "shadow-md"
            } bg-white`}
        >
            {/* Navbar */}
            {isScreenMd && (
                <div className="h-full max-w-[1080px] m-auto flex justify-between">
                    <div className="h-full ml-2 flex items-center gap-3">
                        <div className="h-full flex items-center">
                            <Auth />
                            <a
                                className="p-2 text-lg lg:text-xl hover:opacity-75 text-black no-underline"
                                href="/"
                            >
                                Victor Verma
                            </a>
                        </div>
                        {isScreenLg && (
                            <div className="h-full flex items-center gap-3">
                                {logoItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        className="rounded-md hover:scale-105 hover:opacity-75"
                                    >
                                        <img className="w-7" src={item.logo} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="h-full mr-4 flex items-center gap-2">
                        {navItems.map((item, index) =>
                            item?.id === "resume" ? (
                                <Link
                                    key={index}
                                    className="p-2 text-lg lg:text-xl text-black no-underline hover:underline hover:decoration-blue-400 hover:opacity-75 duration-200 ease-in-out"
                                    to={item.url}
                                    target="_blank"
                                >
                                    {item.text}
                                </Link>
                            ) : (
                                <Link
                                    key={index}
                                    className="p-2 text-lg lg:text-xl text-black no-underline hover:underline hover:decoration-blue-400 hover:opacity-75 duration-200 ease-in-out"
                                    to={item.url}
                                >
                                    {item.text}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            )}

            {!isScreenMd && (
                <div className="h-full m-auto flex items-center justify-between">
                    <div className="h-full ml-2 flex items-center">
                        <Auth />
                        <a
                            className="p-2 text-lg lg:text-xl hover:opacity-75 text-black no-underline"
                            href="/"
                        >
                            Victor Verma
                        </a>
                    </div>

                    {navDrawerOpen ? (
                        <AiOutlineClose
                            className="mr-4 hover:cursor-pointer hover:text-palette-darkbrown"
                            size={32}
                            onClick={() => setNavDrawerOpen(false)}
                        />
                    ) : (
                        <AiOutlineMenu
                            className="mr-4 hover:cursor-pointer hover:text-palette-darkbrown"
                            size={32}
                            onClick={() => setNavDrawerOpen(true)}
                        />
                    )}
                </div>
            )}

            {/* Navbar Dropdown */}
            <AnimatePresence>
                {!isScreenMd && navDrawerOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-white border-2 border-t border-gray-200"
                    >
                        <div className="flex flex-col items-start px-6 py-4 space-y-3">
                            {navItems.map((item, index) =>
                                item?.id === "resume" ? (
                                    <Link
                                        key={index}
                                        className="p-2 text-lg lg:text-xl text-black no-underline hover:underline hover:decoration-blue-400 hover:opacity-75 duration-200 ease-in-out"
                                        to={item.url}
                                        target="_blank"
                                        onClick={() => {
                                            setNavDrawerOpen(false);
                                        }}
                                    >
                                        {item.text}
                                    </Link>
                                ) : (
                                    <Link
                                        key={index}
                                        className="p-2 text-lg lg:text-xl text-black no-underline hover:underline hover:decoration-blue-400 hover:opacity-75 duration-200 ease-in-out"
                                        to={item.url}
                                        onClick={() => {
                                            setNavDrawerOpen(false);
                                        }}
                                    >
                                        {item.text}
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
