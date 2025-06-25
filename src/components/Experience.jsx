import React, { useRef, useEffect } from "react";
import { experienceCards } from "../data/experienceData";
import ExperienceCard from "./cards/ExperienceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        cardsRef.current.forEach((el, idx) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: idx * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play reverse play reverse",
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
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <span className="">I have more than a year of experience in below technologies</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 my-9">
                {experienceCards.map((item, idx) => (
                    <div
                        key={item.id}
                        ref={el => (cardsRef.current[idx] = el)}
                    >
                        <ExperienceCard {...item} />
                    </div>
                ))}
            </div>
            {/* <hr /> */}
        </div>
    );
}

export default Experience;