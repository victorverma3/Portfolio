import React, { CSSProperties } from "react";
import { PuffLoader } from "react-spinners";

const Spinner = () => {
    const override: CSSProperties = {
        display: "block",
        margin: "auto",
    };
    return <PuffLoader cssOverride={override} color="#60a5fa" />;
};

export default Spinner;
