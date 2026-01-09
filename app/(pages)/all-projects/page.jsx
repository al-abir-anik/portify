"use client";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import GetInTouch from "@/components/GetInTouch";
import StartProject from "@/components/StartProject";

const AllProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setAllProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <section className="w-full px-[15px] sm:px-[30px] pt-[176px] pb-[30px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
          <h2 className="w-fit h-fit font-medium text-5xl sm:text-[64px]">
            Selected Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {loading
              ? // Skeleton loader for work cards
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[400px] bg-zinc300 rounded-3xl animate-pulse"
                  />
                ))
              : allProjects.map((p, index) => (
                  <ProjectCard key={index} project={p} />
                ))}
          </div>
        </div>
      </section>

      <StartProject />
      <GetInTouch />
    </>
  );
};

export default AllProjectsPage;
