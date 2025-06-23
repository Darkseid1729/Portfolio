import React from "react";
function About() {
    return (
        <>
        <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-24">
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <p>I am a passionate developer with a strong background in Information Technology. With a deep curiosity for how things work and a drive to create innovative solutions, I thrive in building and improving software that makes a real impact. Whether it's writing clean, efficient code or exploring new technologies, I’m always eager to learn and take on new challenges. My IT foundation gives me a solid grasp of both development and systems, allowing me to approach problems with a well-rounded perspective.</p>
            <br />
            <h1 className="text-green-600 font-bold mt-4">Education & training</h1>
            <span>
                [B.Tech in Information Technology, 2020-2024, XYZ University, City, Country]
            </span>
            <h1 className="text-green-600 font-bold mt-4 ">Skills</h1>
            <span>
                [JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Git, Agile Methodologies]
            </span>

            <h1 className="text-green-600 font-bold mt-4">Mission & Goals</h1>
            <p className="text-justify mb-20">
                I aim to continuously improve my skills and contribute to projects that have a positive impact on society. My goal is to become a full-stack developer, mastering both front-end and back-end technologies, and to work on innovative projects that challenge my abilities and expand my knowledge.
            </p>

        </div>
        </>
    );
}

export default About;