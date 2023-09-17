import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        Please get in touch if you think our work could be mutually beneficial.
        I hope we will have a chance to work together.
      </p>

      <h3>Do Minh Son</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <FaLocationDot />
            </td>
            <td>Location</td>
            <td>Hoang Mai, Hanoi, Vietnam</td>
          </tr>

          <tr>
            <td>
              <FaPhoneAlt />
            </td>
            <td>Phone</td>
            <td>(+84) 352-356-767</td>
          </tr>

          <tr>
            <td>
              <MdEmail />
            </td>
            <td>Email</td>
            <td>
              <a href="mailto:sondm1410@gmail.com">sondm1410@gmail.com</a>
            </td>
          </tr>

          <tr>
            <td>
              <FaLinkedin />
            </td>
            <td>LinkedIn</td>
            <td>
              <a
                href="https://www.linkedin.com/in/son-do-0b641211a/"
                target="_blank"
                rel="noreferrer"
              >
                @sondm
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <FaGithub />
            </td>
            <td>GitHub</td>
            <td>
              <a
                href="https://github.com/SonDo580"
                target="_blank"
                rel="noreferrer"
              >
                @sondm
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
