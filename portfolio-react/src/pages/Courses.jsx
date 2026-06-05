import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Layers, Clipboard, ShieldCheck } from 'lucide-react';

export default function Courses() {
  const [filter, setFilter] = useState('all'); // 'all', 'organized', 'attended'

  const courses = useMemo(() => [
    {
      type: 'attended',
      role: 'Participant',
      text: 'Faculty Development Programme - Attended FDP organized by Faculty of Education, MIT World Peace University from 14th to 16th Nov. 2018',
      year: '2018'
    },
    {
      type: 'organized',
      role: 'Co-convener',
      text: 'AICTE sponsored Faculty Development Programme on “Instructional Methodology for Outcome Based Education in Mechanical Engineering” organized at MAEER’s MIT, Pune, December 4th to 15th, 2017',
      year: '2017'
    },
    {
      type: 'organized',
      role: 'Organizer',
      text: 'Faculty Development Programme on “Co-creating Innovation for Society” organized at MAEER’s MIT, Pune, by VU University, Amsterdam and MITWPU, April 23 to 27, 2018',
      year: '2018'
    },
    {
      type: 'organized',
      role: 'Organizer',
      text: 'Faculty Training Programme on “DOE-MiniTAB” organized at MAEER’s MIT, Pune, August 19 and 26, 2017',
      year: '2017'
    },
    {
      type: 'organized',
      role: 'Course Coordinator',
      text: 'Add-on Course on ‘Finance and costing for Engineers’ at MIT, Pune, 15 Feb. to 31 March 2017',
      year: '2017'
    },
    {
      type: 'organized',
      role: 'Workshop Coordinator',
      text: 'Workshop on ‘Tolerance Stack-up’ and ‘Design for Manufacturing’ in collaboration with Geometric Ltd. Pune, at MIT, Pune, February 10, 2016 and March 22, 2016',
      year: '2016'
    },
    {
      type: 'organized',
      role: 'Workshop Coordinator',
      text: 'Workshop on “Finance Management and costing” at M.I.T., Pune, September 11, 2015',
      year: '2015'
    },
    {
      type: 'organized',
      role: 'Workshop Coordinator',
      text: 'Workshop on “Product Design and Development” in collaboration with MIT Institute of Design, Loni-Kalbhor, Pune, September 16-17, 2014',
      year: '2014'
    },
    {
      type: 'organized',
      role: 'Workshop Coordinator',
      text: 'National Level Workshop on ‘Recent Trends in Industrial Tribology’, MAEER’s MIT, Pune, March 20, 2013',
      year: '2013'
    },
    {
      type: 'organized',
      role: 'Workshop Coordinator',
      text: 'Workshop on ‘Teaching Engineering Effectively’, BVDUCOE, Pune, August 11-12, 2006',
      year: '2006'
    },
    {
      type: 'organized',
      role: 'Workshop Coordinator',
      text: 'Workshop on ‘Academic Monitoring’ for Principals and senior faculties of various institutes, Bharati Vidyapeeth Deemed University College of Engineering, Pune, August 20-22, 2007 (in association with NITTTR Bhopal)',
      year: '2007'
    },
    {
      type: 'organized',
      role: 'Course Coordinator',
      text: 'Short Term Training Programme on ‘Self-Assessment for Improving Quality of Learning’ BVDUCOE, Pune, August 6-10, 2007 (in association with NITTTR Bhopal)',
      year: '2007'
    },
    {
      type: 'attended',
      role: 'Participant',
      text: 'Faculty Development Programme on “MSC Nastran, Patran and Adams, Level –1” at MAEER’s MIT, Pune, December 25-29, 2013',
      year: '2013'
    },
    {
      type: 'attended',
      role: 'Participant',
      text: 'Faculty Development Programme on “Product Design and Surface Engineering” at Sinhgad College of Engineering from 19th November 2013 to 24th November 2014.',
      year: '2013-14'
    }
  ], []);

  const filteredCourses = useMemo(() => {
    if (filter === 'all') return courses;
    return courses.filter(c => c.type === filter);
  }, [courses, filter]);

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
          Courses & Programs
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Short Term Courses (FDP / STTP)
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Overview of faculty development training, specialized engineering programs, and technical workshops organized and attended.
        </p>
      </div>

      {/* Stats Counter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
          <p className="text-3xl font-bold text-slate-800 tracking-tight">{courses.length}</p>
          <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Total Courses</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
          <p className="text-3xl font-bold text-indigo-600 tracking-tight">10</p>
          <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Organized</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
          <p className="text-3xl font-bold text-emerald-600 tracking-tight">4</p>
          <p className="text-xs text-slate-500 font-semibold uppercase mt-1">Attended</p>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex justify-center mb-8 pb-4 border-b border-slate-200">
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Courses
          </button>
          <button
            onClick={() => setFilter('organized')}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              filter === 'organized'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Organized
          </button>
          <button
            onClick={() => setFilter('attended')}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              filter === 'attended'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Attended
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((c, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
            >
              {/* Icon / status */}
              <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                c.type === 'organized' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-emerald-600 bg-emerald-50'
              }`}>
                {c.type === 'organized' ? (
                  <Layers className="h-5 w-5" />
                ) : (
                  <ShieldCheck className="h-5 w-5" />
                )}
              </div>

              {/* Course info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                    c.type === 'organized' 
                      ? 'text-indigo-700 bg-indigo-50/50' 
                      : 'text-emerald-700 bg-emerald-50/50'
                  }`}>
                    {c.type === 'organized' ? 'Organized' : 'Attended'}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    {c.role}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <Calendar className="h-3 w-3" /> {c.year}
                  </span>
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                  {c.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
