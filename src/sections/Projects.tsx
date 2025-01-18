import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Spice Caves",
    image: image1,
  },
  {
    name: "Kir.AI",
    image: image2,
  },
  {
    name: "Catherine de Sienne",
    image: image3,
  },

];

const Projects: FC = () => {
  return <div>Projects</div>;
};

export default Projects;
