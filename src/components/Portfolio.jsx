import React from "react";
import ProjectCard from "./cards/ProjectCard";
import projects from "../data/projects";

function Portfolio() {
    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-24">
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className="underlined font-semibold">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-9 items-start">
                {projects.map(item => (
                    <ProjectCard key={item.id} {...item} />
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Portfolio;