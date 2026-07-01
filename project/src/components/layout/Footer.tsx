import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Heart,
} from 'lucide-react';
import { Container } from '../ui';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Membership', href: '/membership' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
];

const programLinks = [
  { label: 'Strength Training', href: '/programs#strength' },
  { label: 'CrossFit', href: '/programs#crossfit' },
  { label: 'Yoga & Pilates', href: '/programs#yoga' },
  { label: 'Weight Loss', href: '/programs#weight-loss' },
  { label: 'Personal Training', href: '/programs#personal' },
];

const contactInfo = [
  { icon: MapPin, text: '123 Fitness Street, Los Angeles, CA 90001' },
  { icon: Phone, text: '(555) 123-4567' },
  { icon: Mail, text: 'info@apexfitness.com' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-secondary-900 dark:bg-background-dark border-t border-secondary-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />

      <Container className="relative">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-secondary-800">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white mb-3"
            >
              Subscribe to Our Newsletter
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-secondary-400 mb-6"
            >
              Get the latest fitness tips, exclusive offers, and updates delivered to your inbox.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary-800 border border-secondary-700 text-white placeholder:text-secondary-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors disabled:bg-green-600"
              >
                {isSubscribed ? (
                  <>
                    <Heart className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary-500 rounded-xl">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                APEX<span className="text-primary-500">.</span>
              </span>
            </Link>
            <p className="text-secondary-400 mb-6 leading-relaxed">
              Transform your body and mind with our world-class fitness programs. Join the APEX family today.
            </p>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-white font-medium">Mon - Fri: 6AM - 10PM</p>
                <p className="text-secondary-400 text-sm">Sat - Sun: 8AM - 8PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-secondary-400">
                  <item.icon className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary-800 hover:bg-primary-500 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary-400 hover:text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-secondary-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary-500 text-sm text-center sm:text-left">
              {new Date().getFullYear()} APEX Fitness. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-secondary-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-500 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
