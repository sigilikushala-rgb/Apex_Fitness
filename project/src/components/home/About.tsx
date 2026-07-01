import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants';

const features = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Our team consists of internationally certified fitness professionals.',
  },
  {
    icon: Target,
    title: 'Personalized Programs',
    description: 'Custom workout and nutrition plans tailored to your specific goals.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a supportive community of like-minded fitness enthusiasts.',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Advanced analytics and tracking to monitor your transformation.',
  },
];

const reasons = [
  '15+ years of excellence in fitness training',
  'State-of-the-art equipment and facilities',
  'Personalized approach for every member',
  'Flexible membership plans to fit your lifestyle',
  'Recovery zones with sauna and steam room',
  'Free parking and premium amenities',
];

export function About() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
      </div>

      <Container className="relative">
        {/* Section Heading */}
        <SectionHeading
          badge="About Us"
          title="Where Passion Meets Performance"
          subtitle="For over 15 years, we've been transforming lives through fitness. Our mission is to empower every individual to become their strongest, healthiest self."
          highlight="Passion"
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Side - Image Grid */}
          <motion.div variants={fadeUp} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Gym training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl mt-8"
              >
                <img
                  src="https://images.pexels.com/photos/416249/pexels-photo-416249.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Personal training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl -mt-8"
              >
                <img
                  src="https://images.pexels.com/photos/3820328/pexels-photo-3820328.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Yoga session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.pexels.com/photos/6551169/pexels-photo-6551169.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Group fitness"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-2xl shadow-xl shadow-primary-500/30"
            >
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={staggerContainer}>
            <motion.h3
              variants={staggerItem}
              className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white mb-6"
            >
              Transforming Lives Through Strength And Dedication
            </motion.h3>

            <motion.p variants={staggerItem} className="text-secondary-600 dark:text-muted-dark mb-8 leading-relaxed">
              At APEX Fitness, we believe that everyone deserves access to world-class fitness facilities
              and expert guidance. Our state-of-the-art gym is equipped with the latest technology and
              staffed by certified professionals who are passionate about helping you achieve your goals.
            </motion.p>

            {/* Why Choose Us List */}
            <motion.div variants={staggerItem} className="space-y-3 mb-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-secondary-700 dark:text-secondary-300">{reason}</span>
                </div>
              ))}
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-secondary-50 dark:bg-card-dark rounded-xl border border-secondary-100 dark:border-secondary-800"
                >
                  <feature.icon className="w-8 h-8 text-primary-500 mb-2" />
                  <h4 className="font-semibold text-secondary-900 dark:text-white text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-secondary-500 dark:text-muted-dark mt-1">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
