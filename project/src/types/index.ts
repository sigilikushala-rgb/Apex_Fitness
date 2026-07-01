export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  caloriesBurned: number;
  category: string;
  sessions: number;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: number;
  specialization: string[];
  achievements: string[];
  rating: number;
  bio: string;
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'quarterly' | 'yearly';
  features: string[];
  isPopular?: boolean;
  discount?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  role: string;
  rating: number;
  review: string;
  transformation?: {
    before: string;
    after: string;
  };
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  badge?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WorkoutPlan {
  id: string;
  day: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  duration?: string;
  calories: number;
  difficulty: string;
  image: string;
}

export interface NutritionPlan {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  meals: Meal[];
}

export interface Meal {
  id: string;
  name: string;
  time: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  image: string;
}

export interface GalleryImage {
  id: string;
  before: string;
  after: string;
  name: string;
  category: string;
  duration: string;
  weightLost?: string;
}

export interface BMIResult {
  bmi: number;
  category: string;
  idealWeight: { min: number; max: number };
  recommendation: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export type Theme = 'light' | 'dark' | 'system';

export interface NavItem {
  label: string;
  href: string;
}
