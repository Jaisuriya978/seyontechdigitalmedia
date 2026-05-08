import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { MdSend, MdSecurity, MdCalendarToday } from "react-icons/md";
import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <h2>Let's Build Something Great Together</h2>
        <p>Have a project in mind? Get in touch and we'll help you grow your business.</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Contact Details</h3>

          <div className="info-item">
            <div className="info-icon icon-mail"><FaEnvelope /></div>
            <div className="info-text"><strong>Email</strong><span>info@seyontech.com</span></div>
          </div>
          <div className="info-item">
            <div className="info-icon icon-phone"><FaPhone /></div>
            <div className="info-text"><strong>Phone</strong><span>+91 86104 99770</span></div>
          </div>
          <div className="info-item">
            <div className="info-icon icon-loc"><FaMapMarkerAlt /></div>
            <div className="info-text"><strong>Location</strong><span>Thousand Lights West, Chennai - 600006, Tamil Nadu</span></div>
          </div>
          <div className="info-item">
            <div className="info-icon icon-clock"><FaClock /></div>
            <div className="info-text"><strong>Working Hours</strong><span>Mon – Sat : 9AM – 7PM</span></div>
          </div>

          <div className="btn-row">
            <a href="https://wa.me/918610499770" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <FaWhatsapp size={20} /><span>WhatsApp Us</span>
            </a>
            <a href="https://www.linkedin.com/company/seyon-technology-digital-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
              <FaLinkedin size={20} /><span>LinkedIn Us</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — APPOINTMENT FORM */}
        <div className="appt-card">
          <div className="appt-header">
            <div className="appt-icon-box"><MdCalendarToday /></div>
            <div>
              <h4>Book an Appointment For AI Automation Software</h4>
              <p>Fill in the form below to book your slot.</p>
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

         <div className="form-group">
  <label>Select Service</label>
  <div className="custom-select-wrapper">
    <select defaultValue="">
      <option value="" disabled>Choose a service</option>
      <option>AI Automation Software Demo</option>
      <option>AI Callling Software Demo </option>
     
    </select>
  </div>
</div>

          <div className="form-grid-2">
            <div className="form-group">
              <label>Select Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Select Time</label>
               <div className="custom-select-wrapper">
              <select defaultValue="">
                <option value="" disabled>Select a time</option>
                <option>9:00 AM</option><option>10:00 AM</option>
                <option>11:00 AM</option><option>12:00 PM</option>
                <option>2:00 PM</option><option>3:00 PM</option>
                <option>4:00 PM</option><option>5:00 PM</option>
              </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Your Message (Optional)</label>
            <textarea placeholder="Write your message..."></textarea>
          </div>

          <button className="book-btn">
            <MdSend /> Book Appointment
          </button>
          <div className="secure-note">
            <MdSecurity /> Your information is secure and confidential.
          </div>
        </div>

      </div>
    </section>
  );
}