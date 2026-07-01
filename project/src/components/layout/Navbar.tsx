import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, Dumbbell } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Membership', href: '/membership' },
  { label: 'BMI Calculator', href: '/bmi' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, actualTheme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const ThemeIcon = () => {
    if (theme === 'system') return <Monitor className="w-5 h-5" />;
    return actualTheme === 'dark' ? (
      <Sun className="w-5 h-5" />
    ) : (
      <Moon className="w-5 h-5" />
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl shadow-lg shadow-secondary-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-primary-500 rounded-xl shadow-lg shadow-primary-500/30"
              >
                <Dumbbell className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-secondary-900 dark:text-white">
                APEX<span className="text-primary-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) => `
                    relative px-4 py-2 text-sm font-medium transition-colors
                    ${isActive
                      ? 'text-primary-500'
                      : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-1 right-1 h-0.5 bg-primary-500 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={cycleTheme}
                className="p-2 rounded-xl text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                aria-label={`Current theme: ${theme}. Click to change.`}
              >
                <ThemeIcon />
              </motion.button>

              {/* Join Button */}
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:flex"
              >
                Join Now
              </Button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-background-dark shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-secondary-100 dark:border-secondary-800">
                  <Link to="/" className="flex items-center gap-2">
                    <div className="p-2 bg-primary-500 rounded-xl">
                      <Dumbbell className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-secondary-900 dark:text-white">
                      APEX<span className="text-primary-500">.</span>
                    </span>
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-secondary-100 dark:hover:bg-secondary-800"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-secondary-600 dark:text-secondary-300" />
                  </motion.button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="space-y-1 px-3">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <NavLink
                          to={link.href}
                          className={({ isActive }) => `
                            flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors
                            ${isActive
                              ? 'bg-primary-500/10 text-primary-500'
                              : 'text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800'
                            }
                          `}
                        >
                          {link.label}
                        </NavLink>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Drawer Footer */}
                <div className="p-4 border-t border-secondary-100 dark:border-secondary-800 space-y-3">
                  <Button variant="primary" size="lg" className="w-full">
                    Join Now
                  </Button>
                  <Button variant="outline" size="md" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
