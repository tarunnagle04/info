import ContactForm from "./ContactForm";
import { Header } from "./Header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="scale-in-center ">
        <div className="contacts color-change-5x">
          <a href="mailto:tarunnagle04@gmail.com.com">
            Email : tarunnagle04@gmail.com
          </a>{" "}
          <br />
          <br />
          <br />
          <a href="tel:7693843899">Phone : +91 7693843899</a>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
