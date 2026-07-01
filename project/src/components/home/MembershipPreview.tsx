import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import { getMembershipPlans } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';

const billingOptions = [
  { label: 'Monthly', value: 'monthly' as const },
  { label: 'Quarterly', value: 'quarterly' as const },
  { label: 'Yearly', value: 'yearly' as const },
];

export function MembershipPreview() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const plans = getMembershipPlans(billingPeriod);

  return (
    <section className="py-20 md:py-32 bg-secondary-900 dark:bg-background-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeading
          badge="Membership"
          title="Choose Your Fitness Journey"
          subtitle="Flexible membership plans designed to fit your lifestyle and goals. Start your transformation today."
          highlight="Journey"
          className="mb-16"
        />

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          {billingOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setBillingPeriod(option.value)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                billingPeriod === option.value
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
              }`}
            >
              {option.label}
              {option.value === 'yearly' && (
                <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full">
                  Save 25%
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={`relative group ${plan.isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Best Value
                  </div>
                </div>
              )}

              <motion.div
                whileHover={{ y: -5 }}
                className={`h-full p-6 md:p-8 rounded-2xl border transition-colors ${
                  plan.isPopular
                    ? 'bg-primary-500/10 border-primary-500 dark:bg-primary-500/5'
                    : 'bg-white dark:bg-card-dark border-secondary-100 dark:border-secondary-800'
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-secondary-500 dark:text-muted-dark">
                      /{billingPeriod === 'monthly' ? 'mo' : billingPeriod === 'quarterly' ? 'qtr' : 'yr'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.slice(0, 5).map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.isPopular ? 'text-primary-500' : 'text-green-500'
                      }`} />
                      <span className="text-sm text-secondary-600 dark:text-muted-dark">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 5 && (
                    <li className="text-sm text-secondary-500 dark:text-muted-dark">
                      +{plan.features.length - 5} more features
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link to="/membership">
                  <Button
                    variant={plan.isPopular ? 'primary' : 'outline'}
                    size="md"
                    className="w-full"
                  >
                    {plan.isPopular ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Get Started
                      </>
                    ) : (
                      'Learn More'
                    )}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-secondary-400 mt-12"
        >
          All plans include a 7-day free trial. No credit card required to start.
        </motion.p>
      </Container>
    </section>
  );
}
