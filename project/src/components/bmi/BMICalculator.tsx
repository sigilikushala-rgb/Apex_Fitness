import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Heart, Activity } from 'lucide-react';
import { Container, SectionHeading, Button, Card } from '../ui';

type Gender = 'male' | 'female';

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  idealWeight: { min: number; max: number };
  recommendation: string;
}

export function BMICalculator() {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<Gender>('male');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);

    let category: string;
    let color: string;
    let recommendation: string;

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-500';
      recommendation = 'Consider increasing your caloric intake with nutrient-dense foods. Our Strength Training program can help you build muscle mass.';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal Weight';
      color = 'text-green-500';
      recommendation = 'Great job! Maintain your healthy lifestyle with our fitness programs and proper nutrition.';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-500';
      recommendation = 'Consider our Weight Loss or HIIT programs. Focus on balanced nutrition and regular exercise.';
    } else {
      category = 'Obese';
      color = 'text-red-500';
      recommendation = 'We recommend consulting with our trainers for a personalized plan. Start with low-impact exercises and gradually increase intensity.';
    }

    // Calculate ideal weight range (BMI 18.5 to 25)
    const idealMin = Math.round(18.5 * heightM * heightM);
    const idealMax = Math.round(25 * heightM * heightM);

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      color,
      idealWeight: { min: idealMin, max: idealMax },
      recommendation,
    });
  };

  const bmiGaugePosition = useMemo(() => {
    if (!result) return 50;
    const percentage = Math.min(Math.max((result.bmi - 15) / 20 * 100, 0), 100);
    return percentage;
  }, [result]);

  return (
    <section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-950">
      <Container>
        <SectionHeading
          badge="Health Tools"
          title="Calculate Your BMI"
          subtitle="Use our BMI calculator to understand your current health status and get personalized recommendations."
          highlight="BMI"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Calculator Form */}
          <Card className="p-6 md:p-8" hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-500/10 rounded-xl">
                <Calculator className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                BMI Calculator
              </h3>
            </div>

            <div className="space-y-6">
              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['male', 'female'] as Gender[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`py-3 px-4 rounded-xl font-medium capitalize transition-all ${
                        gender === g
                          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                          : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                    Height
                  </label>
                  <span className="text-sm font-semibold text-primary-500">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-200 dark:bg-secondary-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-secondary-400 mt-1">
                  <span>120 cm</span>
                  <span>220 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                    Weight
                  </label>
                  <span className="text-sm font-semibold text-primary-500">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-secondary-200 dark:bg-secondary-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
                />
                <div className="flex justify-between text-xs text-secondary-400 mt-1">
                  <span>30 kg</span>
                  <span>150 kg</span>
                </div>
              </div>

              {/* Age Input */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
                  Age
                </label>
                <input
                  type="number"
                  min="15"
                  max="100"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-xl text-secondary-900 dark:text-white focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Calculate Button */}
              <Button variant="primary" size="lg" className="w-full" onClick={calculateBMI}>
                Calculate BMI
              </Button>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-6 md:p-8" hover={false}>
            {result ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col"
              >
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                  Your Results
                </h3>

                {/* BMI Gauge */}
                <div className="mb-6">
                  <div className="relative h-4 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ left: '0%' }}
                      animate={{ left: `${bmiGaugePosition}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-secondary-900 rounded-full shadow-lg"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-secondary-400 mt-2">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>

                {/* BMI Value */}
                <div className="text-center py-6 bg-secondary-50 dark:bg-secondary-800/50 rounded-2xl mb-6">
                  <div className={`text-5xl font-bold ${result.color} mb-2`}>
                    {result.bmi}
                  </div>
                  <div className="text-lg font-medium text-secondary-700 dark:text-secondary-300">
                    {result.category}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl">
                    <div className="flex items-center gap-2 text-secondary-500 dark:text-muted-dark mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-medium">Ideal Weight Range</span>
                    </div>
                    <div className="text-lg font-bold text-secondary-900 dark:text-white">
                      {result.idealWeight.min} - {result.idealWeight.max} kg
                    </div>
                  </div>
                  <div className="p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl">
                    <div className="flex items-center gap-2 text-secondary-500 dark:text-muted-dark mb-1">
                      <Activity className="w-4 h-4" />
                      <span className="text-xs font-medium">Weight Difference</span>
                    </div>
                    <div className="text-lg font-bold text-secondary-900 dark:text-white">
                      {weight < result.idealWeight.min
                        ? `${result.idealWeight.min - weight} kg to gain`
                        : weight > result.idealWeight.max
                        ? `${weight - result.idealWeight.max} kg to lose`
                        : 'In range'}
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="flex-1 p-4 bg-primary-500/5 border border-primary-500/20 rounded-xl">
                  <div className="flex items-center gap-2 text-primary-500 mb-2">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-semibold">Recommendation</span>
                  </div>
                  <p className="text-secondary-600 dark:text-muted-dark text-sm leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-secondary-100 dark:bg-secondary-800 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="w-8 h-8 text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  No Results Yet
                </h3>
                <p className="text-secondary-500 dark:text-muted-dark">
                  Enter your information and click calculate to see your BMI results.
                </p>
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}
