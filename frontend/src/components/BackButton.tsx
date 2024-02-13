import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BackButton = ({ size = 0, destination = "/" }) => {
    return (
        <div>
            <Link to={destination}>
                <BsArrowLeft size={size} />
            </Link>
        </div>
    );
};

BackButton.propTypes = {
    size: PropTypes.number.isRequired,
    destination: PropTypes.string.isRequired,
};

export default BackButton;
