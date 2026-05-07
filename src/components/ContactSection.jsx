import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
        <div className="contact-header">
          <h2 className="fade-up">Let’s Build Something Great Together</h2>
          <p className="fade-up delay-1">
            Have a project in mind? Get in touch and we’ll help you grow your business.
          </p>
        </div>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Contact Details</h3>

            <p>📧 Email: info@seyontech.com</p>
            <p>📞 Phone: +91-86104 99770</p>
            <p>📍 Location: Thousand Lights West, Chennai - 600006, Tamil Nadu.</p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918610499770"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
              />
              Chat on WhatsApp
            </a>
            <br />
            <a
              href="https://www.linkedin.com/company/seyon-technology-digital-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              <FaLinkedin size={22} color="#0A66C2" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="contact-image">
            <img
              src="https://i.pinimg.com/736x/5d/65/c7/5d65c7e38c952c234a871d6c6635ec8a.jpg"
              alt="Contact Seyon Tech"
            />
          </div>

        </div>
      </section>
  );
}