import React, { useRef, useEffect } from "react";
import ProjectCard from "./cards/ProjectCard";
import projects from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        cardsRef.current.forEach((el, idx) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: idx * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-24">
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className="underlined font-semibold">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-9 items-start">
                {projects.map((item, idx) => (
                    <div
                        key={item.id}
                        ref={el => (cardsRef.current[idx] = el)}
                        className="gsap-card"
                    >
                        <ProjectCard {...item} />
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Portfolio;