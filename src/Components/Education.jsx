import { Header } from "./Header";
import java from "../assets/java.png";
import schol from "../assets/schol.png";
import school from "../assets/school.png";
import web from "../assets/web.png";
import cap from "../assets/cap.png";
const Education = () => {
  const edu = [
    {
      image: web,
      title:
        "MERN Stack Web Development Course From PrepBytes (A CollegeDekho Company)",
      duration:
        " Completed 8 Months Full Stack Web Development Training in MERN Stack from PrepBytes.",
    },
    {
      image: java,
      title: "JAVA Programming Language with DSA from APNA COLLEGE",
      duration:
        " Completed 8 Months Full Stack Web Development Training in MERN Stack from PrepBytes.",
    },
    {
      image: cap,

      title:
        "Bachelor’s of Technology from Rajiv Gandhi University Bhopal(M.P.)",
      duration: "  Completed in Year 2022 [CGPA - 8.46]",
    },
    {
      image: school,

      title: "Higher Secondary School Certificate (12th) from MP Board Bhopal",
      duration: " Completed in Year 2018 [78%]",
    },
    {
      image: schol,

      title: "High School Certificate (10th) from MP Board Bhopal",
      duration: " Completed in Year 2016 [76%]",
    },
  ];
  return (
    <>
      <Header />
      <div className="edu">
        <div className="edu-container">
          <div className="box_details">
            {edu.map((edu, index) => {
              return (
                <>
                  <div className="wrap scale-in-center">
                    <div className="edu_container ">
                      <div key={index}>
                        <img
                          className="edu-image"
                          src={edu.image}
                          alt="image"
                        />
                      </div>
                      <div className="div">
                        <div className="edu-title" key={index}>
                          <h3>{edu.title}</h3>
                        </div>
                        <div className="edu-duration" key={index}>
                          <h3>{edu.duration}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
