import type { MembershipPlan } from '../types';

const monthlyMultipliers = { monthly: 1, quarterly: 0.9, yearly: 0.75 };

export const getMembershipPlans = (period: 'monthly' | 'quarterly' | 'yearly'): MembershipPlan[] => {
  const multiplier = monthlyMultipliers[period];

  return [
    {
      id: '1',
      name: 'Basic',
      price: Math.round(49 * multiplier),
      billingPeriod: period,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free parking',
        '2 guest passes per month',
        'Access during staffed hours',
      ],
    },
    {
      id: '2',
      name: 'Standard',
      price: Math.round(79 * multiplier),
      billingPeriod: period,
      features: [
        'All Basic features',
        'Unlimited group classes',
        'Fitness assessment',
        'Personalized workout plan',
        '10% discount on merchandise',
        '5 guest passes per month',
      ],
    },
    {
      id: '3',
      name: 'Premium',
      price: Math.round(129 * multiplier),
      billingPeriod: period,
      isPopular: true,
      features: [
        'All Standard features',
        '2 personal training sessions/month',
        'Nutrition consultation',
        '24/7 gym access',
        'Free towel service',
        '15% discount on merchandise',
        'Priority class booking',
      ],
    },
    {
      id: '4',
      name: 'Elite',
      price: Math.round(199 * multiplier),
      billingPeriod: period,
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Recovery zone access (sauna, steam)',
        'VIP locker room',
        'Monthly massage included',
        '20% discount on all services',
        'Private training area access',
        'Complimentary protein shakes',
        'Dedicated locker',
      ],
    },
  ];
};
