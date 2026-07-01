import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading, Card, Badge } from '../ui';
import { galleryImages } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { ArrowRight, Clock, Weight } from 'lucide-react';

export function ImageComparison({ before, after, name, duration, weightLost }: {
  before: string;
  after: string;
  name: string;
  duration: string;
  weightLost?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-secondary-900 rotate-180" />
            <ArrowRight className="w-4 h-4 text-secondary-900 -ml-2" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">Before</span>
        </div>
        <div className="absolute top-4 right-4 bg-primary-500 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">After</span>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
            {weightLost && (
              <div className="flex items-center gap-1">
                <Weight className="w-4 h-4" />
                {weightLost}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))];
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
      <Container>
        <SectionHeading
          badge="Transformations"
          title="Real Transformation Stories"
          subtitle="Witness incredible journeys of our members who have transformed their bodies and lives with dedication and our expert guidance."
          highlight="Transformation"
          className="mb-12"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredImages.map((image) => (
            <motion.div key={image.id} variants={staggerItem}>
              <Card hover={false} className="overflow-hidden">
                <ImageComparison
                  before={image.before}
                  after={image.after}
                  name={image.name}
                  duration={image.duration}
                  weightLost={image.weightLost}
                />
                <div className="p-4">
                  <Badge variant="primary">{image.category}</Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
