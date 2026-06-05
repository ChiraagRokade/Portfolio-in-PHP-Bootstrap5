import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, Sparkles, X, ZoomIn } from 'lucide-react';

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const awards = [
    {
      id: 1,
      title: 'Ideal Teacher Award',
      organization: 'MAEER’s Pune',
      date: '04/09/2019',
      image: '/images/aw1.jpg',
      description: 'Received the prestigious "Ideal Teacher Award" from MAEER’s group in recognition of outstanding academic contributions, teaching pedagogy, and dedication to student development.'
    },
    {
      id: 2,
      title: 'Gandhian Young Technological Innovation (GYTI) Award',
      organization: 'National Innovation Foundation-India',
      date: '13/03/2016',
      image: '/images/aw2.jpg',
      description: 'Awarded in the category of "More from Less for Many" (MLM) for the project on "Design of an innovative retrofitted tricycle for a disabled person". Presented at Rashtrapati Bhavan, New Delhi, by Dr. R. A. Mashelkar. The project was shortlisted from 2,363 entries from 276 universities and institutions.'
    },
    {
      id: 3,
      title: 'Best Paper Award in Design Engineering',
      organization: 'National Conference in Mechanical Engineering',
      date: '2005',
      image: null,
      description: 'Awarded Best Paper for "A Study of Static Characteristics of conical air bearing with feed slots" at the national conference held in Hyderabad, India.'
    },
    {
      id: 4,
      title: 'BCUD Innovation Research Grant',
      organization: 'Savitribai Phule Pune University (BCUD)',
      date: '2015-16',
      image: '/images/aw3.png',
      description: 'Received a research grant of Rs. 1.1 Lakh for the project "Mechanical Design and Fabrication of a Prototype Motorized Tricycle for the Disabled". Shortlisted for the National Award under the Department of Empowerment of Persons with Disability, Ministry of Social Justice and Empowerment.'
    },
    {
      id: 5,
      title: 'National Merit Scholarship Holder',
      organization: 'Government of India',
      date: '1982 & 1984',
      image: null,
      description: 'Scholarship awarded for academic excellence during pre-university and undergraduate studies.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Title section */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full">
          Honors & Accomplishments
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Awards & Recognition
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Honored with national and institutional accolades for research innovation, social impact engineering, and academic leadership.
        </p>
      </div>

      {/* Grid of awards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {awards.map((award) => (
          <div
            key={award.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {/* Header with icon */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 mb-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{award.date}</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                    {award.organization}
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-xl text-amber-500 shrink-0">
                  <Trophy className="h-6 w-6" />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed text-justify mb-6">
                {award.description}
              </p>

              {/* Award Image if available */}
              {award.image && (
                <div 
                  className="relative group rounded-xl overflow-hidden border border-slate-100 cursor-pointer"
                  onClick={() => setSelectedImage({ url: award.image, title: award.title })}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/90 shadow-md text-slate-800 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 font-medium flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span>National & University Level Recognition</span>
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="max-w-4xl max-h-[85vh] overflow-hidden rounded-xl bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto object-contain max-h-[75vh]"
              />
              <div className="p-4 border-t border-slate-100 text-slate-800 font-medium text-center">
                {selectedImage.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
