import React, { useRef, useEffect } from "react";
import { education, skills, mission, aboutDescription } from "../data/aboutData";
// Import gsap and ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
    // Refs for animation targets
    const aboutRef = useRef(null);
    const eduRef = useRef(null);
    const skillsRef = useRef(null);
    const missionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (aboutRef.current) {
            gsap.fromTo(
                aboutRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: aboutRef.current,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }
        if (eduRef.current) {
            gsap.fromTo(
                eduRef.current,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: eduRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }
        if (skillsRef.current) {
            gsap.fromTo(
                skillsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }
        if (missionRef.current) {
            gsap.fromTo(
                missionRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: missionRef.current,
                        start: "top 90%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        }
        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-24 bg-white rounded-lg shadow-lg p-8"
            ref={aboutRef}
        >
            <h1 className="text-3xl font-bold mb-4 text-green-700">About</h1>
            <p className="text-gray-800">{aboutDescription}</p>
            <br />
            <h1 className="text-green-600 font-bold mt-4 mb-2">Education & training</h1>
            <div className="mb-2 bg-green-50 rounded p-3" ref={eduRef}>
                <div className="font-semibold text-green-800">{education.degree}</div>
                <div className="text-green-700">{education.institute}</div>
                <div className="text-sm text-gray-600">{education.years}</div>
            </div>
            <h1 className="text-green-600 font-bold mt-4 mb-2">Skills</h1>
            <ul
                className="grid grid-cols-1 md:grid-cols-2 gap-1 list-disc list-inside mb-0"
                ref={skillsRef}
            >
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
            <p
                className="text-justify mb-20 text-gray-800 bg-green-50 rounded p-3"
                ref={missionRef}
            >
                {mission}
            </p>
        </div>
        </>
    );
}

export default About;