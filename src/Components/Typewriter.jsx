import { Typewriter } from "react-simple-typewriter";

const Typewriters = () => {
  return (
    <>
      <span className="intro_container ">
        <h1 className="intro slide-right">
          Hi , I am <span>Tarun </span>
          <br /> and I am passionate <br />{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Front End Developer",
                "Back End Developer",
                "FullStack MERN",
                "Web Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </span>
    </>
  );
};

export default Typewriters;
