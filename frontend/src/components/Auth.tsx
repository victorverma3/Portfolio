import React, { useState } from "react";
import axios from "axios";
import { LockOpenOutlined, LockOutlined } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { enqueueSnackbar } from "notistack";

import { useAuth } from "../contexts/AuthContext";

const backend = import.meta.env.VITE_BACKEND_URL;

const Auth = () => {
    const { isAuthorized, setIsAuthorized } = useAuth();

    const [open, setOpen] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setPassword("");
        setOpen(false);
    };

    const handleLogin = () => {
        axios
            .post(`${backend}/auth-collection/login`, { password })
            .then((res) => {
                const token = res.data.token;
                if (!token) {
                    enqueueSnackbar("No authorization token received", {
                        variant: "error",
                    });
                    return;
                }
                enqueueSnackbar("Successfully authorized", {
                    variant: "success",
                });
                sessionStorage.setItem("authToken", token);
                setIsAuthorized(true);
            })
            .catch((error) => {
                if (error.response) {
                    const status = error.response.status;
                    const message =
                        error.response.data?.message || "Unknown error";

                    if (status === 401) {
                        enqueueSnackbar("Invalid password or user not found", {
                            variant: "error",
                        });
                    } else {
                        enqueueSnackbar(`${message}`, {
                            variant: "error",
                        });
                    }
                }
                console.log(error);
            });
        handleClose();
    };

    const handleLogout = () => {
        sessionStorage.removeItem("authToken");
        setIsAuthorized(false);
        setPassword("");
        enqueueSnackbar("Successfully logged out", { variant: "success" });
    };

    return (
        <div>
            {isAuthorized ? (
                <button
                    className="m-2 p-2 text-black hover:opacity-75"
                    onClick={handleLogout}
                >
                    <LockOpenOutlined />{" "}
                </button>
            ) : (
                <button
                    className="m-2 p-2 text-black hover:opacity-75"
                    onClick={handleOpen}
                >
                    <LockOutlined />
                </button>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="login-modal"
                aria-describedby="login-modal"
            >
                <div className="w-fit m-auto p-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 justify-center shadow border-2 border-solid border-black bg-white">
                    <h2 className="mt-2 mx-auto">Admin Mode</h2>
                    <input
                        className="mx-2 p-1 text-center rounded-md bg-gray-200"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-fit flex mb-2 mx-auto px-2 text-xl text-green-500 hover:text-white border-2 border-solid border-green-500 hover:bg-green-500"
                        onClick={handleLogin}
                    >
                        Authorize
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Auth;
