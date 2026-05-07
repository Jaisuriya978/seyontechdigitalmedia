import "../styles/about.css";

import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg"
import Img4 from "../assets/img4.jpg"

export default function AboutSection() {
  return (
    <section className="hero" id="about">
        <div className="hero-left">
          <div className="image-grid">
            <img src={Img1} alt="img1" />
            <img src={Img2} alt="img2" />
            <img src={Img3} alt="img3" />
            <img src={Img4} alt="img4" />
          </div>
        </div>

        <div className="hero-right">
          {/* ABOUT */}
          <h1>Seyon Tech is a results-driven digital media solutions dedicated to helping businesses generate quality leads, automate sales processes, and scale their operations through cutting-edge AI-powered marketing solutions</h1>
          <p>
            We combine proven digital marketing strategies with advanced automation technology to deliver measurable results. From paid advertising to AI chatbots and complete funnel development, we provide end-to-end solutions that transform your marketing efforts into a predictable revenue engine..
          </p>
          <a href="#services">
            <button className="btn btn-primary">Let’s Connect</button>
          </a>
        </div>
      </section>
  );
}