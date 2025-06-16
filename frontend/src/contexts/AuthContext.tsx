import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<{
    isAuthorized: boolean;
    setIsAuthorized: (auth: boolean) => void;
}>({
    isAuthorized: false,
    setIsAuthorized: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthorized, setIsAuthorized] = useState(
        sessionStorage.getItem("authToken") !== null
    );

    return (
        <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
