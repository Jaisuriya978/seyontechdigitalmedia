import { Bot, Target, Share2, Layout } from "lucide-react";
import aiAutomationImg from "../assets/service-ai-automation.png";
import paidAdsImg from "../assets/service-pais-ads.png";
import socialMediaImg from "../assets/service-social-media.png";
import websiteFunnelsImg from "../assets/service-website-funnels.png";


const services = [
  {
    icon: <Bot size={32} />,
    title: "AI Automation Marketing",
    description:
      "Leverage AI to automate your marketing and sales processes for maximum efficiency.",
    image: aiAutomationImg,
    featuresTitle: "Key Features:",
    features: [
      "WhatsApp Automation for engagement",
      "AI Chatbot for 24/7 support",
      "CRM & Lead Management",
      "AI-Based Follow-up Systems",
    ],
  },
  {
    icon: <Target size={32} />,
    title: "Paid Ads Management",
    description: "Data-driven advertising campaigns that deliver measurable ROI.",
    image: paidAdsImg,
    featuresTitle: "Channels & Strategy:",
    features: [
      "Google Ads for high-intent search",
      "YouTube Lead Generation",
      "Facebook & Instagram Precision",
      "Transparent ROI Reporting",
    ],
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media Marketing",
    description: "Build a powerful brand presence across all social platforms.",
    image: socialMediaImg,
    featuresTitle: "Brand Growth:",
    features: [
      "Tailored Content Strategy",
      "Professional Poster & Video",
      "Strategic Brand Positioning",
      "Complete Page Management",
    ],
  },
  {
    icon: <Layout size={32} />,
    title: "Website & Funnels",
    description: "High-converting systems that turn visitors into customers.",
    image: websiteFunnelsImg,
    featuresTitle: "Web Solutions:",
    features: [
      "Professional Business Sites",
      "Smart Lead Capture Systems",
      "E-commerce Solutions",
      "Conversion Optimization",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <h2 className="fade-up">Our Services</h2>
      <p className="fade-up delay-1">
        Everything you need to grow your business with digital & AI solutions
      </p>

      <div className="services-grid main-services">
        {services.map((service) => (
          <div className="service-card interactive" key={service.title}>
            <div className="card-inner">
              <div className="card-media">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                />
              </div>

              <div className="card-content">

                <div className="icon-box blue">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p className="main-desc">
                  {service.description}
                </p>

                <div className="card-features">
                  <h4>{service.featuresTitle}</h4>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
