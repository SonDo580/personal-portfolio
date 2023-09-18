import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  const { image, title, desc, stack, code, live } = project;

  return (
    <div className="card">
      <img src={image} alt={`${title} photo`} />
      <h6>{title}</h6>
      <p>{desc}</p>
      <ul className="stack">
        {stack.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ul className="links">
        <li>
          <a href={code}>Source Code</a>
        </li>
        {live && (
          <li>
            <a href={live}>Live Preview</a>
          </li>
        )}
      </ul>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    code: PropTypes.string.isRequired,
    live: PropTypes.string,
  }).isRequired,
};
