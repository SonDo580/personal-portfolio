import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";

import ProjectCard from "@/components/ProjectCard";
import { getSettings } from "./config";

export default function Carousel({ items }) {
  const settings = getSettings(items.length);

  return (
    <Slider {...settings} className="slider">
      {items.map((item, index) => (
        <ProjectCard key={index} project={item} />
      ))}
    </Slider>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      stack: PropTypes.arrayOf(PropTypes.string).isRequired,
      code: PropTypes.string.isRequired,
      live: PropTypes.string,
    })
  ).isRequired,
};
