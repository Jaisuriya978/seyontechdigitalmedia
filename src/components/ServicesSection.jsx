import { Bot, Target, Share2, Layout } from "lucide-react";
import aiAutomationImg from "../assets/AI Automation.avif";
import paidAdsImg from "../assets/AI Automation.avif";
import socialMediaImg from "../assets/AI Automation.avif";
import websiteFunnelsImg from "../assets/AI Automation.avif";

import "../styles/ServiceSection.css";

const services = [
  {
    icon: <Bot size={38} />,
    title: "AI Automation Marketing",
    desc: "Automate your sales and customer engagement using AI-powered workflows.",
    image: aiAutomationImg,
    color: "purple",
     bgClass: "ai-bg",
  },
  {
    icon: <Target size={38} />,
    title: "Paid Ads Management",
    desc: "Run high-converting Google, Meta & YouTube advertising campaigns.",
    image: paidAdsImg,
    color: "purple",
      bgClass: "ads-bg",
  },
  {
    icon: <Share2 size={38} />,
    title: "Social Media Marketing",
    desc: "Build a strong online brand with creative content and strategy.",
    image: socialMediaImg,
    color: "purple",
      bgClass: "social-bg",
  },
  {
    icon: <Layout size={38} />,
    title: "Website & Funnels",
    desc: "Modern websites and lead funnels designed for conversions.",
    image: websiteFunnelsImg,
    color: "purple",
      bgClass: "funnels-bg",
  },
];

export default function ServicesModern() {
  return (
    <>
      <section className="services" id="services">
        <div className="services-header">
          <h2 className="fade-up">Our Services</h2>
          <p className="fade-up delay-1">
            Everything you need to grow your business with digital & AI solutions
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              className={`service-card ${service.bgClass}`}
              key={service.title}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="service-overlay"></div>
              <div className="service-card-inner">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

