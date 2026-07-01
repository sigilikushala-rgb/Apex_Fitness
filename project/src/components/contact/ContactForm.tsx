import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import type { ContactForm as ContactFormType } from '../../types';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Fitness Street, Los Angeles, CA 90001', href: '#' },
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'info@apexfitness.com', href: 'mailto:info@apexfitness.com' },
  { icon: Clock, label: 'Hours', value: 'Mon-Fri: 6AM-10PM, Sat-Sun: 8AM-8PM', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormType) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    // Show success message
    reset();
  };

  return (
    <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
      <Container>
        <SectionHeading
          badge="Get In Touch"
          title="Contact Us"
          subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          highlight="Contact"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-xl border border-secondary-100 dark:border-secondary-800 overflow-hidden">
              {/* Map */}
              <div className="h-64 bg-secondary-200 dark:bg-secondary-800 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale dark:brightness-90 dark:contrast-110"
                />
              </div>

              {/* Contact Info */}
              <div className="p-6 space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors"
                  >
                    <div className="p-3 bg-primary-500/10 rounded-xl">
                      <item.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary-500 dark:text-muted-dark mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-secondary-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 pt-0">
                <p className="text-sm font-medium text-secondary-900 dark:text-white mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-secondary-100 dark:bg-secondary-800 rounded-xl hover:bg-primary-500 text-secondary-600 dark:text-secondary-400 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-card-dark rounded-2xl shadow-xl border border-secondary-100 dark:border-secondary-800 p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Full Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border rounded-xl text-secondary-900 dark:text-white placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                      errors.name ? 'border-red-500' : 'border-secondary-200 dark:border-secondary-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border rounded-xl text-secondary-900 dark:text-white placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                        errors.email ? 'border-red-500' : 'border-secondary-200 dark:border-secondary-700'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="(555) 123-4567"
                      className={`w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border rounded-xl text-secondary-900 dark:text-white placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-secondary-200 dark:border-secondary-700'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder="How can we help?"
                    className={`w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border rounded-xl text-secondary-900 dark:text-white placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all ${
                      errors.subject ? 'border-red-500' : 'border-secondary-200 dark:border-secondary-700'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Your message here..."
                    className={`w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border rounded-xl text-secondary-900 dark:text-white placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-secondary-200 dark:border-secondary-700'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full"
                  rightIcon={<Send className="w-5 h-5" />}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
