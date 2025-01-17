import "./contact.css";

const Contact = () => {
  return (
    <>
      <h3>We’d Love to Hear from You!</h3>
      <div className="contact">
        <div className="contact-left">
          <p>
            Would you like to work with us? Feel free to reach out to us. Our
            team is here to help and ensure you have the best experience
            possible.
          </p>
          <ul>
            <li>📧 Email: revol@gmail.com </li>
            <li>📞 Phone: +2348012345678</li>
            <li>📍 Social media: Instagram FaceBook WhatsApp</li>
          </ul>
          <p>
            Alternatively, you can fill out the contact form, and we’ll get back
            to you as soon as possible. We look forward to working with you!
          </p>
        </div>
        <div className="contact-right">
          <form>
            <label>Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              type="text"
              required
            />
            <label>Email</label>
            <input
              name="contact"
              placeholder="Enter your email or phone number"
              type="text"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              type="text"
              rows={6}
              required
            />
            <button
              className="btn dark-btn"
              type="submit"
              onSubmit={(e) => {
                e.preventDefault;
                console.log(e.target);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
