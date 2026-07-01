import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Footer } from './components/layout';
import {
  HomePage,
  ProgramsPage,
  TrainersPage,
  MembershipPage,
  BMIPage,
  NutritionPage,
  GalleryPage,
  TestimonialsPage,
  ContactPage,
  BlogPage,
  ShopPage,
} from './pages';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-background-dark transition-colors duration-300">
        <BrowserRouter>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/trainers" element={<TrainersPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/bmi" element={<BMIPage />} />
              <Route path="/nutrition" element={<NutritionPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/shop" element={<ShopPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
