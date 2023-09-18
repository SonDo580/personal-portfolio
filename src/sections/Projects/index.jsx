import Carousel from "@/components/Carousel";
import { PROJECTS } from "./projects";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      {PROJECTS.map(({ heading, items }, index) => (
        <div key={index} className="projectsContainer">
          <h2>{heading}</h2>
          <Carousel items={items} />
        </div>
      ))}
    </section>
  );
}
