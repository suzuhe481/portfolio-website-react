import { useState, useRef } from "react";
import { SendEmail } from "../../../functions/SendEmail";

import "./Contact.scss";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const form = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await SendEmail(form).then((response) => {
      console.log(response);

      // Email successful
      if (response.status === 200) {
        setEmailSent(true);
      }
      // Email error
      else {
        setEmailError(true);
      }
    });
  };

  const handleConfirmClose = () => {
    setEmailSent(false);
  };

  const handleErrorClose = () => {
    setEmailError(false);
  };

  const ContactForm = (
    <form ref={form} className="form" onSubmit={handleOnSubmit}>
      <div className="form__name">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form__email">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form__message">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>
      </div>
      <div className="form__submit">
        <input type="submit" value="Send" className="form__submit__button" />
      </div>
    </form>
  );

  const MessageConfirmation = (
    <div className={`contact__confirmation ${emailSent}`}>
      <p>Message Sent!</p>
      <p>Thank you. I&#39;ll respond as soon as possible.</p>
      <button onClick={handleConfirmClose}>Close</button>
    </div>
  );

  const MessageError = (
    <div className={`contact__error ${emailError}`}>
      <p>Something went wrong.</p>
      <p>Message not sent.</p>
      <button onClick={handleErrorClose}>Close</button>
    </div>
  );

  var FormResult;
  if (emailError) {
    FormResult = MessageError;
  } else if (emailSent) {
    FormResult = MessageConfirmation;
  } else {
    FormResult = ContactForm;
  }

  return (
    <section className="contact">
      <div className="contact__title">Send me a Message</div>
      <div className="contact__form-container">{FormResult}</div>
    </section>
  );
};

export default Contact;
