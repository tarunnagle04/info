import Home_Image from "../assets/Full_Stack.png"
import Typewriters from "./Typewriter";

const Body = () => {
  return (
    <>
      <Typewriters />
      <div className="Buttons hovers">
        <div className="cv">
          <button>Download Resume</button>
        </div>
        <div className="github">
          <button>Visit Github</button>
        </div>
      </div>
      <div className="right_image">
        <img src={Home_Image} alt="Full_Stack_Developer" />
      </div>
    </>
  );
};

export default Body;
