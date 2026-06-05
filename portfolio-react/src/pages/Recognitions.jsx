import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Shield, Users, CheckSquare, Bookmark } from 'lucide-react';

export default function Recognitions() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'councils', 'reviewers', 'others'

  const recognitions = useMemo(() => [
    {
      text: 'Member of Academic Council, MIT World Peace University, Pune (since November 2019)',
      category: 'councils',
      icon: Users
    },
    {
      text: 'Chairman of Board of Studies (BOS), MIT World Peace University, Pune',
      category: 'councils',
      icon: Shield
    },
    {
      text: 'Member of Academic Council, Bharati Vidyapeeth Deemed University, Pune (February 2009 - January 2011)',
      category: 'councils',
      icon: Users
    },
    {
      text: 'Chairman, Board of Studies of Mechanical and Production Engineering, Bharati Vidyapeeth Deemed University, Pune (April 2011 - March 2013)',
      category: 'councils',
      icon: Shield
    },
    {
      text: 'Member of Research and Recognition (R & R) Committee, Bharati Vidyapeeth Deemed to be University, Pune',
      category: 'councils',
      icon: Users
    },
    {
      text: 'Assessor for National Research Development Corporation [An Enterprise of DSIR, Ministry of Science and Technology, Govt. of India] Meritorious Invention Award',
      category: 'reviewers',
      icon: Star
    },
    {
      text: 'Peer reviewer at the 2nd International and 17th National Conference on Machines and Mechanisms (iNaCoMM 2015) held at Indian Institute of Technology, Kanpur',
      category: 'reviewers',
      icon: Bookmark
    },
    {
      text: 'Reviewer of extended abstracts for oral and poster presentation in the International Conference on Advances in Mechanical Engineering conducted by Department of Mechanical Engineering, College of Engineering, Pune',
      category: 'reviewers',
      icon: Bookmark
    },
    {
      text: 'Subject expert in University of Pune Ph.D. research proposal presentation in Mechanical Engineering at Government College of Engineering, Pune and Sinhgad College of Engineering, Pune',
      category: 'reviewers',
      icon: Star
    },
    {
      text: 'Coordinator of NBA (National Board of Accreditation) for Department of Mechanical Engineering, MAEER’s MIT, Pune',
      category: 'others',
      icon: CheckSquare
    },
    {
      text: 'Member of ‘Local Inquiry Committee’ in Savitribai Phule Pune University, Pune',
      category: 'others',
      icon: Users
    },
    {
      text: 'Worked as a Judge in Projex 2014 in Sinhgad Academy of Engineering, Kondhwa, Pune on 14th March 2014',
      category: 'others',
      icon: Star
    }
  ], []);

  const filteredRecognitions = useMemo(() => {
    if (activeFilter === 'all') return recognitions;
    return recognitions.filter(item => item.category === activeFilter);
  }, [recognitions, activeFilter]);

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
          Academic Standing
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Academic Recognitions
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Representing key positions in academic councils, boards of studies, national research assessments, and journal reviews.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-8 pb-4 border-b border-slate-200">
        <div className="flex bg-slate-100 p-1 rounded-xl flex-wrap justify-center gap-1 sm:gap-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Recognitions
          </button>
          <button
            onClick={() => setActiveFilter('councils')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'councils'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Councils & Boards
          </button>
          <button
            onClick={() => setActiveFilter('reviewers')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'reviewers'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Peer Review & Expert
          </button>
          <button
            onClick={() => setActiveFilter('others')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'others'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Accreditation & Judging
          </button>
        </div>
      </div>

      {/* Recognitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredRecognitions.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0 mt-0.5">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
