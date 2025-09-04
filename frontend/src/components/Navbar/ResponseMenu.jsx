import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarMenu } from '../../mockData/data';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiX } from 'react-icons/hi'; // Import HiX for the close button
import './ResponseMenu.css';

const ResponseMenu = ({ open, setOpen }) => {
  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'afterChildren',
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 200 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-[99] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="response-menu-container"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="response-menu-header">
              <span className="text-white text-xl font-bold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/30 focus:outline-none shadow-lg transition-all duration-200"
                aria-label="Close menu"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
            <motion.ul className="response-menu-list">
              {NavbarMenu.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  {item.SevaMenu ? (
                    <div className="response-menu-dropdown">
                      <span className="response-menu-link">{item.title}</span>
                      <ul className="response-menu-submenu">
                        {item.SevaMenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={`/Seva/${subItem.slug}`}
                              className="response-menu-sublink"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className="response-menu-link"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="response-menu-footer" variants={itemVariants}>
              <div className="response-menu-socials">
                {[FaInstagram, FaFacebook, FaLinkedinIn, BsTelephoneFill].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="/contact"
                    className="response-menu-social-link"
                    whileHover={{ scale: 1.18, color: '#a78bfa' }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponseMenu;
