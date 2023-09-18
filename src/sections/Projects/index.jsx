import Carousel from "@/components/Carousel";
import { reactjsProjects } from "./projects";

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <h2>ReactJS</h2>
      <Carousel items={reactjsProjects} />
    </section>
  );
}
