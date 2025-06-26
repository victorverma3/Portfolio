import React from "react";

interface Edu {
    subtitle: string;
    bullets: string[];
}

interface EduDetailsProps {
    details: Edu[];
}

const EduDetails = ({ details }: EduDetailsProps) => {
    return (
        <div className="w-fit my-4 mx-auto space-y-4">
            {details.map((item, index) => (
                <div
                    className="w-72 sm:w-96 2xl:w-[30rem] p-4 flex flex-column rounded-3xl transition-shadow duration-200 ease-in-out hover:shadow hover:shadow-blue-400 bg-white "
                    key={index}
                >
                    <details>
                        <summary className="w-fit mx-4 my-auto text-xl sm:text-2xl">
                            {item.subtitle}
                        </summary>
                        <div className="my-2">
                            <ul>
                                {item.bullets.map((bullet, index) => (
                                    <li key={index}> {bullet}</li>
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
