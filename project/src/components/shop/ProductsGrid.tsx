import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Container, SectionHeading, Card, Badge } from '../ui';
import { products } from '../../data';
import { staggerContainer, staggerItem } from '../../animations/variants';

export function ProductsGrid() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background-dark">
      <Container>
        <SectionHeading
          badge="Shop"
          title="Premium Fitness Products"
          subtitle="Shop our curated selection of fitness equipment, supplements, and apparel."
          highlight="Products"
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <Card className="group overflow-hidden" hover>
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary-100 dark:bg-secondary-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                      <Badge variant="primary" size="sm">{product.badge}</Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="secondary" size="sm">Out of Stock</Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white dark:bg-card-dark rounded-full shadow-lg"
                    >
                      <Heart className="w-4 h-4 text-secondary-600 dark:text-secondary-300" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white dark:bg-card-dark rounded-full shadow-lg"
                    >
                      <Eye className="w-4 h-4 text-secondary-600 dark:text-secondary-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-secondary-500 dark:text-muted-dark mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.round(product.rating)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-secondary-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-secondary-500 dark:text-muted-dark">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary-500">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-secondary-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!product.inStock}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary-500 hover:bg-primary-600 disabled:bg-secondary-300 text-white font-medium rounded-xl transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
