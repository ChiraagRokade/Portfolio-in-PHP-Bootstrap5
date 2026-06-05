import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ChevronLeft, ChevronRight, LayoutGrid, Plus } from 'lucide-react';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Generate 46 images with correct file extensions
  const images = useMemo(() => {
    const list = [];
    for (let i = 1; i <= 46; i++) {
      const ext = (i === 9 || i === 19 || i === 32) ? 'png' : 'jpg';
      list.push({
        id: i,
        src: `/assets/photo_gallery/a${i}.${ext}`,
        alt: `Gallery Image ${i}`
      });
    }
    return list;
  }, []);

  const visibleImages = useMemo(() => {
    return images.slice(0, visibleCount);
  }, [images, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, images.length));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Title section */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full">
          Media Gallery
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Photo Gallery
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          A visual collection of FDPs, workshops, awards ceremonies, lectures, and academic interactions.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        <AnimatePresence>
          {visibleImages.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group aspect-square rounded-xl overflow-hidden border border-slate-100 bg-white shadow-xs cursor-pointer"
              onClick={() => setSelectedIdx(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2.5 rounded-full bg-white/90 text-slate-850 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="flex justify-center mb-6">
          <button
            onClick={loadMore}
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="h-4 w-4" /> Load More Photos
          </button>
        </div>
      )}

      {/* Lightbox Slider Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4 select-none"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image display */}
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[80vh] overflow-hidden rounded-xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIdx].src}
                alt={images[selectedIdx].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </motion.div>

            {/* Right navigation */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-4 text-sm font-semibold text-slate-400">
              Image {selectedIdx + 1} of {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
