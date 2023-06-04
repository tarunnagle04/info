import alpha from "../assets/alpha.png";
import digiclocl from "../assets/digiclocl.png";
import ishoppe from "../assets/ishoppe.png";
import todo from "../assets/todo.png";
import vlog from "../assets/vlog.png";
import { Header } from "./Header";

const Projects = () => {
  return (
    <>
      <Header />
      <h2 className="Projects scale-in-center">
        <div className="Pro">
          <div className="Anchors">
            <a
              href="https://ishoppe.netlify.app/"
              style={{ color: "white", textDecoration: "none" }}
              target="blank"
            >
              Ishoppe
            </a>

            <a
              href="https://tarunnagle04.github.io/Project_JS/"
              style={{ color: "white", textDecoration: "none" }}
              target="blank"
            >
              DigiClock
            </a>

            <a
              href="https://tarunnagle04.github.io/Project_JS_TODO/"
              style={{ color: "white", textDecoration: "none" }}
              target="blank"
            >
              ToDoApp
            </a>

            <a
              href="https://vlog-987654321.netlify.app/"
              style={{ color: "white", textDecoration: "none" }}
              target="blank"
            >
              VlogApp
            </a>

            <a
              href="https://alpha1221.netlify.app/"
              style={{ color: "white", textDecoration: "none" }}
              target="blank"
            >
              Alpha
            </a>
          </div>
          <div className="imgs">
            <img src={ishoppe} alt="" />

            <img src={digiclocl} alt="" />

            <img src={todo} alt="" />

            <img src={vlog} alt="" />

            <img src={alpha} alt="" />
          </div>
        </div>
      </h2>
      <div className="Mobile">
        <ul type="disc">
          <li>Ishoppe</li>
          <li>DigiClock</li>
          <li>Vlog</li>
          <li>Alpha</li>
          <li>To DO App</li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
