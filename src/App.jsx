import React, { useState } from "react";
import {
  Menu,
  Play,
  BookOpen,
  Layers,
  Zap,
  Workflow,
  LayoutGrid,
  Cloud,
  ShieldCheck,
  Activity,
  LineChart,
  BrainCircuit,
  MessageSquare,
  Network,
  Box,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Send,
  X,
} from "lucide-react";

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSubmitSuccess, setDemoSubmitSuccess] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitSuccess(true);
  };

  const openDemoModal = (e) => {
    if (e) e.preventDefault();
    setIsDemoModalOpen(true);
    setDemoSubmitSuccess(false);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Header */}
      <nav>
        <div className="container nav-container">
          <div className="logo text-gradient">TriffidAI</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#solutions">Solutions</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a
            href="https://triffidaidemo.netlify.app/"
            className="btn btn-primary"
            style={{ display: "flex", gap: "0.5rem" }}
          >
            <span>Launch App</span> <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              Build, Deploy, and Scale Software —{" "}
              <span className="text-gradient">Powered by AI</span>
            </h1>
            <p>
              An AI-driven Platform-as-a-Service that automates the entire
              software development lifecycle, from idea to production. Simplify
              development with intelligent automation, visual DevOps workflows,
              and cloud-agnostic deployment.
            </p>
            <div className="hero-buttons">
              <a
                href="https://triffidaidemo.netlify.app/"
                className="btn btn-primary"
              >
                <Play size={18} style={{ marginRight: "0.5rem" }} /> Launch App
              </a>
              <a
                href="#demo"
                onClick={openDemoModal}
                className="btn btn-secondary"
              >
                <LayoutGrid size={18} style={{ marginRight: "0.5rem" }} />{" "}
                Request Demo
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="/hero_image.png"
              alt="TriffidAI Platform"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section container">
        <div className="glass problem-card">
          <h2
            className="section-title text-gradient"
            style={{ fontSize: "2rem" }}
          >
            The Challenges of Modern Software Development
          </h2>
          <p>
            Modern software development is fragmented and complex. Teams rely on
            multiple tools for coding, deployment, infrastructure, and
            monitoring, leading to inefficiencies and delays. Deployment
            requires specialized DevOps expertise, increasing operational costs
            and slowing down delivery.
          </p>
          <p>
            Low-code platforms often fail to support enterprise-level
            scalability, while cloud-specific setups create vendor lock-in and
            limit flexibility. As a result, organizations struggle to maintain
            speed, scalability, and control in their development processes.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solutions" className="section container">
        <div className="solution-flex">
          <h2 className="section-title">
            A Unified <span className="text-gradient">AI-Powered</span>{" "}
            Development Platform
          </h2>
          <p className="section-desc">
            TriffidAI provides a single platform that integrates development,
            DevOps, and cloud management into one seamless environment. By
            leveraging AI-driven automation, it enables teams to build, deploy,
            and manage applications efficiently without the need for complex
            infrastructure or large DevOps teams.
          </p>
          <p className="section-desc">
            The platform streamlines the entire software lifecycle, reduces
            costs, and ensures scalability, reliability, and faster delivery.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section container">
        <div className="section-header">
          <h2 className="section-title">Core Platform Capabilities</h2>
          <p className="section-desc">
            Everything you need to ship world-class software at unparalleled
            speed.
          </p>
        </div>
        <div className="cards-grid">
          <div className="card glass">
            <div className="card-icon">
              <BrainCircuit />
            </div>
            <h3>AI-powered Development</h3>
            <p>
              Automate frontend, backend, APIs, and databases development with
              our advanced AI orchestrator.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <Zap />
            </div>
            <h3>Automated CI/CD</h3>
            <p>
              Set up zero-config continuous integration and delivery pipelines
              that automatically scale with your needs.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <Workflow />
            </div>
            <h3>Visual DevOps Builder</h3>
            <p>
              Drag and drop components to design complex backend workflows
              without writing heavy infrastructure code.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <Cloud />
            </div>
            <h3>Multi-cloud Deployment</h3>
            <p>
              Deploy to AWS, GCP, Azure or your own bare-metal servers from a
              centralized management portal.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <Activity />
            </div>
            <h3>Real-time Monitoring</h3>
            <p>
              Gain actionable performance insights, track error rates, and
              monitor resource usage across your stack.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <ShieldCheck />
            </div>
            <h3>Enterprise Security</h3>
            <p>
              Built-in security audits, role-based access control, and
              compliance-ready scalable architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            We offer a comprehensive range of AI and software solutions designed
            to support modern business needs.
          </p>
        </div>
        <div
          className="cards-grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div className="card glass">
            <div className="card-icon">
              <LineChart />
            </div>
            <h3>Predictive Analytics</h3>
            <p>
              Machine Learning solutions for predictive analytics and
              data-driven decision making tailored to your market.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <Box />
            </div>
            <h3>Computer Vision</h3>
            <p>
              Advanced systems for high-performance real-time image and video
              analysis and object recognition.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <MessageSquare />
            </div>
            <h3>AI Chatbots</h3>
            <p>
              Intelligent, context-aware conversational bots for seamless,
              automated customer interactions.
            </p>
          </div>
          <div className="card glass">
            <div className="card-icon">
              <Network />
            </div>
            <h3>AI Agents</h3>
            <p>
              Autonomous agents for complex workflow automation and high-level
              decision support tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section container">
        <div className="section-header">
          <h2 className="section-title">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="section-desc">
            Scale your software without worrying about complex infrastructure
            costs. Choose the plan that fits you.
          </p>
        </div>
        <div className="cards-grid">
          <div className="card glass pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price">
                $49<span>/mo</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> 5
                AI-generated projects
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Standard
                Support
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Community
                Access
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> 10GB Cloud
                Storage
              </li>
            </ul>
            <a href="#demo" className="btn btn-secondary">
              Get Started
            </a>
          </div>
          <div className="card glass pricing-card featured">
            <div className="pricing-header">
              <h3>Professional</h3>
              <div className="price">
                $149<span>/mo</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Unlimited
                AI projects
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Priority
                24/7 Support
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Custom
                DevOps workflows
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> 100GB Cloud
                Storage
              </li>
            </ul>
            <a
              href="https://triffidaidemo.netlify.app/"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
            >
              Start Free Trial
            </a>
          </div>
          <div className="card glass pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
            </div>
            <ul className="pricing-features">
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Dedicated
                Infrastructure
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> SLA &
                Security Compliance
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Custom AI
                Models
              </li>
              <li>
                <CheckCircle2 size={18} className="text-gradient" /> Unlimited
                Cloud Storage
              </li>
            </ul>
            <a href="#contact" className="btn btn-secondary">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container">
        <div className="section-header">
          <h2 className="section-title">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-desc">
            Have questions or want to learn more? Our team is ready to help you
            scale.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">
                <Mail size={24} />
              </div>
              <div className="contact-item-text">
                <h4>Email Support</h4>
                <p>triffidai@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <Phone size={24} />
              </div>
              <div className="contact-item-text">
                <h4>Call Us</h4>
                <p>+91 8624070110</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-item-text">
                <h4>Location</h4>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </div>
          <div className="glass contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              className="btn btn-primary"
              style={{
                marginTop: "0.5rem",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
              }}
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container cta-section">
        <div className="glass">
          <div className="cta-content">
            <h2>Start Building Smarter Software Today</h2>
            <p>
              Accelerate your development process with an AI-powered platform
              designed for speed, efficiency, and scalability.
            </p>
            <div className="cta-buttons">
              <a
                href="https://triffidaidemo.netlify.app/"
                className="btn btn-primary"
                style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}
              >
                Launch App Now{" "}
                <ChevronRight style={{ marginLeft: "0.25rem" }} />
              </a>
              <a
                href="#demo"
                onClick={openDemoModal}
                className="btn btn-secondary"
                style={{ padding: "1rem 2rem", fontSize: "1.125rem" }}
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo text-gradient">TriffidAI</div>
              <p className="footer-desc">
                Simplifying the software development lifecycle through
                intelligent automation and unified cloud operations.
              </p>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#solutions">Solutions</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources & Contact</h4>
              <ul>
                <li>
                  <a href="#docs">Documentation</a>
                </li>
                <li>
                  <a href="#support">Support</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </ul>
              <div className="footer-contact" style={{ marginTop: "1rem" }}>
                <p>
                  Email:{" "}
                  <a href="mailto:triffidai@gmail.com">triffidai@gmail.com</a>
                </p>
                <p>Phone: +91 8624070110</p>
                <p>Location: Maharashtra, India</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 TriffidAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="modal-overlay" onClick={closeDemoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDemoModal}>
              <X size={24} />
            </button>

            {demoSubmitSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <CheckCircle2 size={64} />
                </div>
                <h3>Request Submitted!</h3>
                <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
                  Your demo request has been submitted successfully. Our team
                  will contact you shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={closeDemoModal}
                  style={{ marginTop: "2rem" }}
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h2 style={{ marginBottom: "1.5rem" }}>
                  Book a <span className="text-gradient">Demo</span>
                </h2>
                <form
                  onSubmit={handleDemoSubmit}
                  className="contact-form"
                  style={{ padding: "0" }}
                >
                  <div className="form-group">
                    <label htmlFor="demo-name">Full Name</label>
                    <input
                      type="text"
                      id="demo-name"
                      className="form-control"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-email">Email Address</label>
                    <input
                      type="email"
                      id="demo-email"
                      className="form-control"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-company">Company Name</label>
                    <input
                      type="text"
                      id="demo-company"
                      className="form-control"
                      placeholder="Your Company Ltd."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="demo-phone"
                      className="form-control"
                      placeholder="+91 00000-00000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="demo-message">Message / Requirements</label>
                    <textarea
                      id="demo-message"
                      className="form-control"
                      placeholder="Tell us what you're looking for..."
                      style={{ minHeight: "80px" }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginTop: "1rem", justifyContent: "center" }}
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
