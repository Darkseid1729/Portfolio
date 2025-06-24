import React from "react";
import { education, skills, mission, aboutDescription } from "../data/aboutData";
function About() {
    return (
        <>
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-24 bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-700">About</h1>
            <p className="text-gray-800">{aboutDescription}</p>
            <br />
            <h1 className="text-green-600 font-bold mt-4 mb-2">Education & training</h1>
            <div className="mb-2 bg-green-50 rounded p-3">
                <div className="font-semibold text-green-800">{education.degree}</div>
                <div className="text-green-700">{education.institute}</div>
                <div className="text-sm text-gray-600">{education.years}</div>
            </div>
            <h1 className="text-green-600 font-bold mt-4 mb-2">Skills</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 list-disc list-inside mb-0">
                {skills.map((skill, idx) => (
                    <li
                        key={idx}
                        className="font-semibold px-2 py-1 mb-1 inline-block"
                        style={{
                            background: "linear-gradient(to right, #bbf7d0 2%, #bbf7d0 5%, #fff 30%)",
                            color: "#166534",
                            borderRadius: "0.375rem"
                        }}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
            <h1 className="text-green-600 font-bold mt-4">Mission & Goals</h1>
            <p className="text-justify mb-20 text-gray-800 bg-green-50 rounded p-3">
                {mission}
            </p>
        </div>
        </>
    );
}

export default About;