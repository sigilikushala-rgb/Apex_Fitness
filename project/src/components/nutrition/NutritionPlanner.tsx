import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Beef, Wheat, Droplet, Clock, Plus } from 'lucide-react';
import { Container, SectionHeading, Card, Badge } from '../ui';
import { nutritionPlans } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';

const macroColors = {
  protein: 'bg-red-500',
  carbs: 'bg-yellow-500',
  fat: 'bg-blue-500',
};

export function NutritionPlanner() {
  const [activePlan, setActivePlan] = useState(nutritionPlans[0]);

  const totalMacros = {
    protein: activePlan.protein,
    carbs: activePlan.carbs,
    fat: activePlan.fat,
  };

  const macroPercentages = {
    protein: Math.round((totalMacros.protein * 4 / activePlan.calories) * 100),
    carbs: Math.round((totalMacros.carbs * 4 / activePlan.calories) * 100),
    fat: Math.round((totalMacros.fat * 9 / activePlan.calories) * 100),
  };

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
      <Container>
        <SectionHeading
          badge="Nutrition"
          title="Fuel Your Performance"
          subtitle="Proper nutrition is the foundation of fitness success. Explore our scientifically designed meal plans to optimize your results."
          highlight="Performance"
          className="mb-12"
        />

        {/* Plan Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {nutritionPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activePlan.id === plan.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700'
              }`}
            >
              <span className="block text-xs opacity-60 mb-0.5">Daily Calories</span>
              <span className="block font-bold">{plan.calories}</span>
              <span className="block text-xs opacity-60">{plan.name}</span>
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Macros Overview */}
          <Card className="p-6" hover={false}>
            <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-6">
              Daily Macronutrients
            </h3>

            {/* Calories Circle */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="12"
                    className="stroke-secondary-100 dark:stroke-secondary-800 fill-none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="12"
                    strokeDasharray={`${macroPercentages.protein * 2.51} ${251 - macroPercentages.protein * 2.51}`}
                    className="fill-none stroke-red-500"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="12"
                    strokeDasharray={`${macroPercentages.carbs * 2.51} ${251 - macroPercentages.carbs * 2.51}`}
                    strokeDashoffset={`-${macroPercentages.protein * 2.51}`}
                    className="fill-none stroke-yellow-500"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    strokeWidth="12"
                    strokeDasharray={`${macroPercentages.fat * 2.51} ${251 - macroPercentages.fat * 2.51}`}
                    strokeDashoffset={`-${(macroPercentages.protein + macroPercentages.carbs) * 2.51}`}
                    className="fill-none stroke-blue-500"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-secondary-900 dark:text-white">{activePlan.calories}</span>
                  <span className="text-sm text-secondary-500">calories</span>
                </div>
              </div>
            </div>

            {/* Macro Breakdown */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-sm text-secondary-600 dark:text-muted-dark">Protein</span>
                </div>
                <span className="font-bold text-secondary-900 dark:text-white">{totalMacros.protein}g</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-sm text-secondary-600 dark:text-muted-dark">Carbs</span>
                </div>
                <span className="font-bold text-secondary-900 dark:text-white">{totalMacros.carbs}g</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm text-secondary-600 dark:text-muted-dark">Fat</span>
                </div>
                <span className="font-bold text-secondary-900 dark:text-white">{totalMacros.fat}g</span>
              </div>
            </div>
          </Card>

          {/* Meal Plan */}
          <Card className="lg:col-span-2 p-6" hover={false}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white">
                Today's Meal Plan
              </h3>
              <button className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
                <Plus className="w-4 h-4" />
                Customize
              </button>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-4"
            >
              {activePlan.meals.map((meal) => (
                <motion.div
                  key={meal.id}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                >
                  {/* Meal Image */}
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />

                  {/* Meal Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary-500">{meal.time}</span>
                    </div>
                    <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">
                      {meal.name}
                    </h4>
                    <div className="flex items-center gap-4 text-xs text-secondary-500 dark:text-muted-dark">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-orange-500" />
                        {meal.calories} cal
                      </span>
                      <span className="flex items-center gap-1">
                        <Beef className="w-3 h-3 text-red-500" />
                        {meal.protein}g
                      </span>
                      <span className="flex items-center gap-1">
                        <Wheat className="w-3 h-3 text-yellow-500" />
                        {meal.carbs}g
                      </span>
                      <span className="flex items-center gap-1">
                        <Droplet className="w-3 h-3 text-blue-500" />
                        {meal.fat}g
                      </span>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-2 text-secondary-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{meal.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
