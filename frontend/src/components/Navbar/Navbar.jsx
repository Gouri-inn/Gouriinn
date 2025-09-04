import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarMenu } from '../../mockData/data';
import logo from '../../assets/logo.png';
import './Navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import ResponseMenu from './ResponseMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-logo">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Gouri-inn Logo" className="h-8 w-8 mr-2" />
              <span className="logo-text">Gouri-inn</span>
            </Link>
          </div>
          <div className="nav-links hidden md:flex">
            {NavbarMenu.map((item) => (
              <div key={item.id} className="nav-item">
                {item.SevaMenu ? (
                  <div className="dropdown">
                    <button className="nav-link dropbtn">{item.title}</button>
                    <div className="dropdown-content">
                      {item.SevaMenu.map((subItem) => (
                        <Link key={subItem.id} to={`/Seva/${subItem.slug}`}>
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={item.link} className="nav-link">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/room-booking" className="contact-link">
              Book Now
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl z-50"
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.12 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ scale: 0.7, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.7, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                  >
                    <HiX />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ scale: 0.7, rotate: 90, opacity: 0 }}
                    animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.7, rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3, type: 'spring' }}
                  >
                    <HiMenu />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>
      <ResponseMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
