"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NestJs Authorization REST API",
    description: "Simple CRUD app with authorization using NestJS, Prisma, PostgreSQL",
    image: "/images/projects/6.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/meselghea/w14-my-authorized-api-meselghea",
    previewUrl: "https://mesel14.onrender.com/api",
  },
  {
    id: 2,
    title: "Backend Infra Deployment",
    description: "Development & Deploy graphQL CRUD API, using Artifact Registry and Compute Engine",
    image: "/images/projects/7.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/meselghea/w16-my-backend-infra-meselghea",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "NestJs Warteg API",
    description: "My role as a Backend Engineer: Development menus & categories endpoint, Development generate menu-images with Unsplash, Development Authorization by role, Management Database",
    image: "/images/projects/8.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/meselghea/web-api1",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Web Testing (Playwright & Vitest)",
    description: "Write 2 scenarios testing, End-to-end testing with Playwright and unit integration test with vitest",
    image: "/images/projects/9.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/meselghea/w21-my-testing-meselghea",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NextJs App Teledoc API",
    description: "Development website that enables patients to look for, reserve, and schedule appointments with doctors online.",
    image: "/images/projects/10.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/Teledoc-App/teledoc-app",
    previewUrl: "https://www.teledoc.tech",
  },
  {
    id: 6,
    title: "Photo Club Gallery App",
    description: "Feature: Photo List, Photo Filter, Like / Unlike Photo Button, Display Counter of Liked Photos, Registration Form Popup with Outside Click Close, Registration Form Email Validation, Success Registration Snackbar, Styling with Tailwind CSS",
    image: "/images/projects/11.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/meselghea/w18-react-page-meselghea",
    previewUrl: "https://react-page.meselghea.site/",
  },
  {
    id: 7,
    title: "Gae-Pets Salon React Page",
    description: "Feature: Implementing Styling (Tailwind CSS), Generate a token by multiplying UUID4 x 3, user ID, and a 12-hour expired token in session storage, Implementing validation registration and login forms with react-hook-form",
    image: "/images/projects/12.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/meselghea/w19-react-features-meselghea",
    previewUrl: "https://gae-petssalon.meselghea.site",
  },
  {
    id: 8,
    title: "Wareg NextJs Page",
    description: "In today's fast-paced world, finding time for nutritious home-cooked meals can be challenging. Wareg is our solution, providing varied, healthy, and easy-to-access meals delivered right to your doorstep",
    image: "/images/projects/13.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/meselghea/w22-group-react-group-e",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Feastival NextJs Page ",
    description: "Ultimate Music Event Tracker platform, where simplicity and user-friendliness converge to bring you a seamless event discovery experience like never before!",
    image: "/images/projects/14.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/feastival/feastival-frontend",
    previewUrl: "https://feastival.fun",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;