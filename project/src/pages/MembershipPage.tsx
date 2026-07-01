import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading, Button, Card } from '../components/ui';
import { getMembershipPlans } from '../data';
import { Check, Sparkles, Zap, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const billingOptions = [
  { label: 'Monthly', value: 'monthly' as const },
  { label: 'Quarterly', value: 'quarterly' as const, discount: '10%' },
  { label: 'Yearly', value: 'yearly' as const, discount: '25%' },
];

export function MembershipPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const plans = getMembershipPlans(billingPeriod);

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="pt-20"
    >
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary-900 dark:bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Membership Plans
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Choose the perfect membership plan for your fitness journey. All plans include a 7-day free trial.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
        <Container>
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
                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  billingPeriod === option.value
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white dark:bg-card-dark text-secondary-600 dark:text-secondary-400 border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-800'
                }`}
              >
                {option.label}
                {option.discount && (
                  <span className="text-xs bg-accent-500 text-white px-2 py-0.5 rounded-full">
                    Save {option.discount}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative ${plan.isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}
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

                <Card
                  className={`p-6 ${plan.isPopular ? 'border-2 border-primary-500' : ''}`}
                  hover={false}
                >
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-secondary-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-secondary-500 dark:text-muted-dark">
                        /{billingPeriod === 'monthly' ? 'mo' : billingPeriod === 'quarterly' ? 'qtr' : 'yr'}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.isPopular ? 'text-primary-500' : 'text-green-500'
                        }`} />
                        <span className="text-sm text-secondary-600 dark:text-muted-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.isPopular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.isPopular ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Get Started
                      </>
                    ) : (
                      'Choose Plan'
                    )}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-secondary-500 dark:text-muted-dark mt-12"
          >
            No contracts required. Cancel anytime. 30-day money-back guarantee.
          </motion.p>
        </Container>
      </section>
    </motion.main>
  );
}
