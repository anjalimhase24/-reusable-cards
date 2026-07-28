import './Contact.css'

function Contact() {
  return (
    <div className="page-box contact-page">
      <h1>📞 Contact Us</h1>
      <p>We’d love to hear from you. Reach out with any questions or feedback.</p>

      <div className="contact-list">
        <div className="contact-item">
          <strong>Email</strong>
          <a href="mailto:contact@roadtocode.com">contact@roadtocode.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone</strong>
          <span>+91 98765 43210</span>
        </div>
        <div className="contact-item">
          <strong>Address</strong>
          <span>Chedgaon, Tal. Rahuri</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
