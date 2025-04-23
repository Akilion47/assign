import React, { useState } from 'react';
import './Sidebar.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import logo from '../assets/tc-logo.svg'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <IoMdMenu size={20} />
        </div>
        <img src={logo} alt="Logo" className="topbar-logo-img" />
      </div>

      {/* Sidebar for desktop only */}
      <div className="sidebar-fixed">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <IoMdMenu size={24} />
        </div>

        <div className="sidebar-left">
          <div className="sidebar-line"></div>

          <div className="sidebar-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          <div className="sidebar-line"></div>
        </div>

        <p className="sidebar-footer-vertical">© Technical Chowkidar 2025</p>
      </div>

      {/* Slide-out Menu */}
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li><span>01</span><a href="#home">Home</a></li>
            <li><span>02</span><a href="#about">About</a></li>
            <li><span>03</span><a href="#pricing">Pricing</a></li>
            <li><span>04</span><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
