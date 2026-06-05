import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Presentation, UserCheck, Eye, X } from 'lucide-react';

export default function InvitedTalks() {
  const [selectedImage, setSelectedImage] = useState(null);

  const talks = [
    {
      id: 1,
      topic: 'Advances in Fault Diagnosis of Rotating Machines and Fluid Film Bearing',
      event: 'Faculty Development Program',
      location: 'Mechanical Engineering Department, V.J.T.I. Matunga, Mumbai',
      date: '13/06/2013',
      image: null
    },
    {
      id: 2,
      topic: 'Machine Design',
      event: 'Guest Lecture to T.E. Mechanical Students',
      location: 'Universal College of Engineering, Sasewadi, Pune',
      date: '23/09/2013',
      image: null
    },
    {
      id: 3,
      topic: 'Concepts in Mechanical Engineering Design',
      event: 'Expert Session to Mechanical Engineering Students',
      location: 'MAEER’s MIT College of Engineering, Pune',
      date: '08/02/2014',
      image: null
    },
    {
      id: 4,
      topic: 'Advances in Production Engineering',
      event: 'Lecture to Post Graduate Students',
      location: 'Government College of Engineering, Karad (Satara), Pune',
      date: '04/10/2018',
      image: null
    },
    {
      id: 5,
      topic: 'Geometric Dimensioning and Tolerancing (GD&T)',
      event: 'Corporate Training to Engineers',
      location: 'SAP Parts Pvt. Ltd. Sanaswadi, Tal. Shirur, Maharashtra',
      date: '2018-19',
      image: '/images/it4.jpg'
    },
    {
      id: 6,
      topic: 'Duo Cone Seals Floating Seals SAP Parts™ Pvt Ltd',
      event: 'Industrial Seminar & Product Overview',
      location: 'SAP Parts Pvt. Ltd., Pune',
      date: '2018-19',
      image: '/images/it3.png'
    },
    {
      id: 7,
      topic: 'Training given to Engineering of SAP Parts Pvt. Ltd on GD and T',
      event: 'Specialized Engineering Workshop',
      location: 'SAP Parts Pvt. Ltd., Pune',
      date: '2018-19',
      image: '/images/it2.jpg'
    },
    {
      id: 8,
      topic: 'Advances in Tribology',
      event: 'Expert Lecture delivered to Faculty Members',
      location: 'AISSMS College of Engineering, Pune',
      date: 'November 2019',
      image: '/images/it1.jpg'
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
          Academic Outreach
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Invited Talks & Lectures
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Sharing expertise through keynotes, guest lectures at leading engineering institutes, and industrial design training for corporate engineers.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {talks.map((talk) => (
          <div
            key={talk.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 mb-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{talk.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-800 leading-snug">
                    {talk.topic}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                    {talk.event}
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-500 shrink-0">
                  <Presentation className="h-6 w-6" />
                </div>
              </div>

              {/* Location details */}
              <p className="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1">
                <span className="font-bold text-slate-700">Venue:</span> {talk.location}
              </p>

              {/* Image if exists */}
              {talk.image && (
                <div 
                  className="relative group rounded-xl overflow-hidden border border-slate-100 cursor-pointer"
                  onClick={() => setSelectedImage({ url: talk.image, title: talk.topic })}
                >
                  <img
                    src={talk.image}
                    alt={talk.topic}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/90 shadow-md text-slate-800 scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 font-medium flex items-center gap-1">
              <UserCheck className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
              <span>Expert Guest Speaker Session</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
