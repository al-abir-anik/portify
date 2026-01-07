import { works } from "@/data/data";
import ProjectCard from "../cards/ProjectCard";
import Button from "../Button";

const Projects = () => {
  return (
    <section className="w-full px-[15px] sm:px-[30px] py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-20">
        <h2 className="w-fit font-medium text-5xl sm:text-[64px]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {works.slice(0, 4).map((w, index) => (
            <ProjectCard key={index} work={w} />
          ))}
        </div>

        <Button
          id="view-all-projects"
          title="View All Projects"
          containerClass="text-zinc800 bg-white"
          btnIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M4.27748 14.9723L4.27734 13.028H20L16.16 9.18791L17.535 7.81299L23.7222 14.0002L17.535 20.1874L16.16 18.8124L20.0001 14.9724L4.27748 14.9723Z"
                fill="#f64617"
              />
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
