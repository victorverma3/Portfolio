import React from "react";

import "./EduDetails.css";

interface Edu {
    subtitle: string;
    bullets: string[];
}

interface EduDetailsProps {
    details: Edu[];
}

const EduDetails = ({ details }: EduDetailsProps) => {
    return (
        <div>
            {details.map((item) => (
                <div className="eduDetail-display-item" key={item.subtitle}>
                    <details>
                        <summary className="eduDetail-display-subtitle">
                            {item.subtitle}
                        </summary>
                        <div className="eduDetail-display-body">
                            <ul>
                                {item.bullets.map((bullet) => (
                                    <li>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </details>
                </div>
            ))}
        </div>
    );
};

export default EduDetails;
