import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="forms puff-in-center">
        <form>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email : </label>
          <input
            onChange={handleInputChange}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <br />
          <br />
          <label htmlFor="message">Message : </label>
          <textarea
            onChange={handleInputChange}
            id="message"
            name="message"
            placeholder="Enter Your Message e.g You are Hired"
          ></textarea>
          <br />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (Object.keys(formData).length > 0) {
                alert("Thank You For Contacting Us");
              }
              console.log(formData);
            }}
            className="Home_Buttons"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
