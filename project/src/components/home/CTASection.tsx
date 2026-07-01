import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import { staggerContainer, staggerItem } from '../../animations/variants';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'info@apexfitness.com', href: 'mailto:info@apexfitness.com' },
  { icon: MapPin, label: 'Address', value: '123 Fitness Street, Los Angeles, CA 90001', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-8PM', href: '#' },
];

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            Join thousands of members who have already started their fitness journey with APEX.
            Take the first step today with our 7-day free trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/membership">
              <Button
                variant="ghost"
                size="lg"
                className="bg-white text-primary-500 hover:bg-white/90"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="p-2 bg-white/10 rounded-lg">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">{item.label}</p>
                <p className="text-sm font-medium text-white">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
