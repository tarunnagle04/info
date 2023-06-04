import Home_Image from "../assets/Full_Stack.png";
import Typewriters from "./Typewriter";
import Tarun_Resume from "../assets/Tarun_Resume.pdf";

const Body = () => {
  return (
    <>
    <div className="body">
    <Typewriters /> <br /><br />
      <div className="Buttons hovers ">
        <div className="cv bounce-top">
          <a
            className="Home_Buttons "
            href={Tarun_Resume}
            download="Tarun_Resume"
          >
            Download Resume
          </a>
        </div>
        <div className="github">
          <a className="Home_Buttons" href="https://github.com/tarunnagle04" target="blank">
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
      <div className="right_image">
        <img className="slide-in-bck-center" src={Home_Image} alt="Full_Stack_Developer" />
      </div>
    </>
  );
};

export default Body;
