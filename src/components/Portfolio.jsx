import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, Linkedin, Instagram, Github, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import './Portfolio.css';
// import Spotify from "../assets/images/spotify.jpg";
import Shopify from "../assets/images/Shopify.jpg";
import victorImg from "../assets/images/picture.jpg.jpeg";
import savoraImg from "../assets/images/savora.jpg";
import lmsImg from "../assets/images/lms.jpg";
import shophubImg from "../assets/images/ShopHub.jpg";
import chatBotImg  from "../assets/images/bank-assistantImg.jpg";
import res from "../assets/images/Victor_Anyadiegwu_Resume.pdf";


function Star() {
  const [style] = useState(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`, 
    opacity: Math.random() * 0.7 + 0.3,
  }));

  return <div className="star" style={style} />;
}
const Portfolio = ({ isDarkMode, setIsDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'intro', 'about', 'skills', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  
  const projects = [
    // {
    //   title: "Spotify Clone",
    //   description: "A Spotify-inspired music player clone built using HTML, CSS, JavaScript, and React. Play to enjoy! Remember to connect a device first",
    //   image: Spotify,
    //   links: { page: "https://a-spotify-clone.vercel.app/", github: "https://github.com/Anyadiegwu/a-spotify-clone" },
    //   tech: ["Vite + React", "CSS", "HTML", "JavaScript", "Spotify API"]
    // },
    {
      title: "Lms Page",
      description: "A modern, full-stack Learning Management System with secure Google & email/password authentication, built with React, Vite, and Express.",
      image: lmsImg,
      links: { page: "https://lms-silk-phi.vercel.app/", github: "https://github.com/Anyadiegwu/lms" },
      tech: ["Vite + React", "Node.js", "Express" ]
    },
    {
      title: "Bank AI Assistant",
      description: "AI-powered banking assistant that intelligently handles customer inquiries through smart categorization and conversational flow.",
      image: chatBotImg,
      links: { page: "https://bank-ai-react-assistant.vercel.app/", github: "https://github.com/Anyadiegwu/bank-ai-react-assistant" },
      tech: ["HTML", "CSS", "JavaScript", "React", "Python", "FastAPI", "Gemini API"]
    },
    {
      title: "ShopHub",
      description: "A modern e-commerce app with category filtering, dark mode, and sidebar cart for product browsing and shopping.",
      image: shophubImg,
      links: { page: "https://shophub-wine.vercel.app/", github: "https://github.com/Anyadiegwu/shophub" },
      tech: ["Vite + React", "CSS", "HTML"]
    },
    {
      title: "Savora Restaurant",
      description: "Exquisite fine dining experience in Lagos offering premium international cuisine crafted with the finest ingredients.",
      image: savoraImg,
      links: { page: "https://savora-restaurant-beta.vercel.app/", github: "https://github.com/Anyadiegwu/savora-restaurant" },
      tech: ["TypeScript", "Vite + React"]
    },
    {
      title: "Shopify Dashboard Clone",
      description: "A Spotify-inspired music player clone built using HTML, CSS, JavaScript, and React. Play to enjoy! Remember to connect a device first",
      image: Shopify,
      links: { page: "https://shopify-challenge-xi.vercel.app/", github: "https://github.com/Anyadiegwu/shopify-challenge-" },
      tech: ["CSS", "HTML", "JavaScript"]
    }
  ];

  const skills = {
    technical: ["HTML", "CSS", "JavaScript", "React", "Vite+React", "Git", "Tailwind", "Node.js", "TypeScript", "Python"],
    nonTechnical: ["Empathizing", "Presentation", "Flexibility", "Time Management", "Continuous Learning", "Analytical Thinking", "Communication", "Collaboration"]
  };

  return (
    <div className={`portfolio ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="progress-bar-container">
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-inner">
            <h1 className="logo">Victor</h1>
            
            <ul className="desktop-menu">
              {['Home', 'Intro', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  >
                    {item}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="theme-toggle"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>

            <div className="mobile-controls">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mobile-menu">
              <ul>
                {['Home', 'Intro', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`mobile-nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="section home-section">
        <div className="stars-container">
            {Array.from({ length: 100 }).map((_, i) => (
                <Star key={i} index={i} />
            ))}
        </div>
        
        <div className="container home-content">
          <h1 className="home-title">Welcome</h1>
          <p className="home-subtitle">To my Portfolio</p>
          <button 
            onClick={() => scrollToSection('intro')}
            className="explore-btn"
          >
            Explore
          </button>
        </div>
      </section>

      <section id="intro" className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="gradient-title center">Hello, I'm Victor</h2>
            <p className="gradient-subtitle">A Frontend Developer</p>
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img 
                  src={victorImg} 
                  alt="Victor" 
                />
              </div>
            </div>
            <div className="buttons-container">
              <div className="buttons-wrapper">
                <a
                  href={res}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn resume-btn"
                >
                  Resume
                </a>
                <Link
                  to="/certificates"
                  className="btn hire-btn"
                >
                  Certificates
                </Link>
              </div>
            </div>
            {/* <p className="intro-text">
                I'm a passionate frontend developer with a keen eye for crafting clean, intuitive, and visually stunning web experiences. 
                Inspired by <span className="highlight-green">nature's seamless harmony</span>, I build user-centered interfaces that feel natural and effortless to use. 
                Specializing in modern technologies like <span className="highlight-yellow">React, Tailwind CSS, and responsive design</span>, I turn ideas into interactive realities that delight users and drive results.
            </p>             */}
            <p className="intro-text">
              I'm a passionate frontend developer focused on crafting clean, intuitive, and visually engaging web experiences. 
              Inspired by <span className="highlight-green">nature's seamless harmony</span>, I design user-centered interfaces that feel natural and effortless to use. 
              With experience in <span className="highlight-yellow">React, Tailwind CSS, and responsive design</span> and a growing foundation in <span className="highlight-blue">Internet of Things (IoT) systems and data integration</span>, I build modern web applications that connect ideas, devices, and users into interactive realities.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="gradient-title">About Me</h2>
            
            <div className="about-text">
            {/* <p>
                I'm a dedicated frontend developer skilled in building responsive, performant web applications using modern tools and frameworks. 
                Proficient in <span className="highlight-blue">React, JavaScript (ES6+), TypeScript, Python, HTML/CSS, Tailwind</span>, and version control with <span className="highlight-yellow">Git</span>, I focus on creating seamless user experiences through clean code and thoughtful design.
            </p>               */}
              <p>
                I'm a dedicated frontend developer skilled in building responsive, performant web applications using modern tools and frameworks. 
                Proficient in <span className="highlight-blue">React, JavaScript (ES6+), TypeScript, Python, HTML/CSS, Tailwind</span>, and version control with <span className="highlight-yellow">Git</span>, I focus on creating seamless user experiences through clean code and thoughtful design. 
                I also have foundational knowledge in <span className="highlight-green">Internet of Things (IoT) architectures and connected systems</span>, enabling me to understand how real-world device data integrates with cloud platforms and web applications.
              </p>
              <div className="background-section">
                <h3 className="section-subtitle">Background</h3>
                
                <div className="background-cards">
                  <div className="background-card">
                    <h4 className="card-title">Brekete Code Camp (2022)</h4>
                    <p>
                        My entry into frontend development through <span className="highlight-green">TECHPATRIATE and the Brekete Family</span>. 
                        Here, I mastered the fundamentals of <span className="highlight-blue">HTML and CSS</span>, building my first static webpages and gaining a strong foundation in web structure and styling.
                    </p>
                  </div>
                  
                  <div className="background-card">
                    <h4 className="card-title">Genesys Tech Hub (2022-2023)</h4>
                    <p>
                        A transformative <span className="highlight-pink">product development internship</span> where I <span className="highlight-green">collaborated with cross-functional teams</span> to build a full-fledged 
                        <span className="highlight-blue"> Learning Management System app</span>. I conducted user research, usability testing, and contributed to iterative design—experiences that sharpened my skills in real-user-focused development.
                    </p>
                  </div>
                  <div className="background-card">
                    <h4 className="card-title">Coursera IoT Program (2026)</h4>
                    <p>
                      Completed a structured program in <span className="highlight-green">Internet of Things (IoT)</span>, exploring how 
                      <span className="highlight-blue"> connected devices, sensors, and cloud platforms</span> exchange and process data. 
                      This experience expanded my understanding of how real-world systems integrate with 
                      <span className="highlight-pink"> modern web applications</span>, strengthening my ability to design data-driven user interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="skills-content">
            <h2 className="gradient-title center">My Skills</h2>
            
            <div className="skills-grid">
              <div className="skills-category">
                <h3 className="section-subtitle">Technical Skills</h3>
                <div className="skills-tags">
                  {skills.technical.map((skill) => (
                    <div key={skill} className="skill-tag">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <h3 className="section-subtitle">Non-Technical Skills</h3>
                <div className="skills-tags">
                  {skills.nonTechnical.map((skill) => (
                    <div key={skill} className="skill-tag">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="container">
          <h2 className="gradient-title center">Portfolio Highlights</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay" />
                </div>
                
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a
                      href={project.links.page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link code-link"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">Anyadiegwu Victor - Frontend Developer</p>
            
            <div className="contact-image-wrapper">
              <div className="contact-image">
                <img 
                  src={victorImg}
                  alt="Victor" 
                />
              </div>
            </div>
            
            <div className="contact-info">
              <div className='contact-info-wrapper'>
                <a href="tel:+2348102680872" className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  (+234) 08102680872
                </a>
                <a href="mailto:victoranyadiegwu610@gmail.com" 
                className="contact-item"
                >
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  victoranyadiegwu610@gmail.com
                </a>
              </div>
            </div>
            
            <div className="social-links">
              {[
                { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/victor-anyadiegwu-8286a9238', label: 'LinkedIn' },
                { icon: <Instagram size={24} />, url: 'https://www.instagram.com/veek__thor', label: 'Instagram' },
                { icon: <Github size={24} />, url: 'https://www.github.com/Anyadiegwu', label: 'Github' },
                { icon: <Camera size={24} />, url: 'http://www.x.com/iam_veek_thor', label: 'X (Twitter)' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <div className="social-icon">{social.icon}</div>
                  <span className="social-label">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Victor Anyadiegwu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;


