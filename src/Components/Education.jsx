import { Header } from "./Header";

const Education = () => {
  return (
    <>
      <Header />
      <div className="Education text-focus-in">
        <br />
        <h2 className="Edu_Detailts">Trainings</h2>
        <br />
        <dl>
          <dt>
            <h2>
              <span className="course">MERN Stack Web Development</span> Course
              From PrepBytes (A CollegeDekho Company)
            </h2>
          </dt>
          <dd>
            Completed 8 Months Full Stack Web Development Training in MERN Stack
            from PrepBytes.
          </dd>
          <br />
          <dt>
            <h2>
              <span className="course">JAVA Programming Language with DSA</span>{" "}
              from APNA COLLEGE
            </h2>
          </dt>
          <dd> Completed 4 Months Alpha 2.0 Course from APNA COLLEGE.</dd>
          <br />
          <dt>
            <h2>
              <span className="course">
                Bachelor’s of Technology from Rajiv Gandhi University Bhopal
                (M.P.)
              </span>
            </h2>
          </dt>
          <dd> Completed in Year 2022 [CGPA - 8.46]</dd>
          <br />
          <dt>
            <h2>
              <span className="course">
                Higher Secondary School Certificate (12th) from MP Board Bhopal
              </span>
            </h2>
          </dt>
          <dd> Completed in Year 2018 [78%]</dd>
          <br />
          <dt>
            <h2>
              <span className="course">
                High School Certificate (10th) from MP Board Bhopal
              </span>
            </h2>
          </dt>
          <dd> Completed in Year 2016 [76%]</dd>
        </dl>
      </div>
    </>
  );
};

export default Education;
