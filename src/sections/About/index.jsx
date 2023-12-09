import { FaGithub, FaLinkedin } from "react-icons/fa";
import MyPhoto from "./myPhoto.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="photo">
        <img src={MyPhoto} alt="my photo" />
      </div>

      <div className="text">
        <h1>
          Hi! I&#39;m <strong>Do Minh Son</strong> - a Front End Developer
        </h1>
        <p>
          I&#39;m passionate about software development, especially web
          development. I want to create websites and apps that are used and
          loved by people.
        </p>
        <p>
          Web development is a constantly evolving field, so I&#39;m still
          learning every day. I also practice by building projects. Take a look
          at some of them!
        </p>

        <ul className="links">
          <li>
            <a
              href="https://github.com/SonDo580"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/son-do-minh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="/resume.html" target="_blank" className="resume">
              My Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
