import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, Download, ExternalLink } from 'lucide-react';
import './Certificates.css';
import bccCert from '../assets/images/breketecert.jpg';
import learnableCert from '../assets/images/LearnableCert.jpg';
import iotCert from '../assets/images/IoT_Coursera_Certificate.jpeg';

const Certificates = ({ isDarkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);
  const certificates = [
    {
      id: 1,
      title: "Brekete Code Camp Certificate",
      issuer: "TECHPATRIATE x Brekete Family",
      date: "2022",
      image: bccCert,
      description: "Frontend Development Fundamentals - HTML, CSS & JavaScript",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Learnable Program Certificate",
      issuer: "Genesys Tech Hub",
      date: "2022-2023",
      image: learnableCert,
      description: "Product Development Internship - Web Development & Team Collaboration",
      skills: ["React", "Team Collaboration", "Product Development", "User Research"]
    },
    {
      id: 3,
      title: "Internet of Things (IoT) Certificate",
      issuer: "Coursera",
      date: "2026",
      image: iotCert,
      description: "Foundational IoT concepts covering connected devices, sensors, architectures, and data flow with emphasis on cloud integration and web applications",
      skills: ["IoT Fundamentals", "Cloud Integration", "Data Flow", "API Consumption"]
    }

  ];

    const openCertificate = (cert) => {
    setSelectedCert(cert);
    };

    const closeCertificate = () => {
    setSelectedCert(null);
    };

  const downloadCertificate = (image, title) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`certificates-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="cert-header">
        <div className="cert-header-content">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="cert-page-title">My Certificates</h1>
          <p className="cert-page-subtitle">Professional achievements and learning milestones</p>
        </div>
      </header>

      <main className="cert-main">
        <div className="cert-container">
          {certificates.length === 0 ? (
            <div className="no-certificates">
              <p>No certificates available yet.</p>
            </div>
          ) : (
            <div className="certificates-grid">
              {certificates.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-image-wrapper" onClick={() => openCertificate(cert)}>
                    <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
                    <div className="cert-overlay">
                      <button className="view-cert-btn">
                        <ExternalLink size={24} />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="cert-info">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-date">{cert.date}</p>
                    <p className="cert-description">{cert.description}</p>
                    
                    <div className="cert-skills">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="cert-skill-tag">{skill}</span>
                      ))}
                    </div>
                    
                    <div className="cert-actions">
                      <button 
                        onClick={() => openCertificate(cert)} 
                        className="cert-action-btn view-btn"
                      >
                        View Full
                      </button>
                      <button 
                        onClick={() => downloadCertificate(cert.image, cert.title)} 
                        className="cert-action-btn download-btn"
                      >
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {selectedCert && (
        <div className="cert-modal" onClick={closeCertificate}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeCertificate}>
              <X size={24} />
            </button>
            
            <div className="cert-modal-header">
              <h2>{selectedCert.title}</h2>
              <button 
                onClick={() => downloadCertificate(selectedCert.image, selectedCert.title)}
                className="cert-modal-download"
              >
                <Download size={20} />
                <span>Download</span>
              </button>
            </div>
            
            <div className="cert-modal-image-wrapper">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="cert-modal-image"
              />
            </div>
            
            <div className="cert-modal-info">
              <div className="cert-modal-detail">
                <strong>Issued by:</strong>
                <span>{selectedCert.issuer}</span>
              </div>
              <div className="cert-modal-detail">
                <strong>Date:</strong>
                <span>{selectedCert.date}</span>
              </div>
              <div className="cert-modal-detail">
                <strong>Description:</strong>
                <span>{selectedCert.description}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;