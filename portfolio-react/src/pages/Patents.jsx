import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, CheckCircle2, Calendar } from 'lucide-react';

export default function Patents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-[60vh] flex flex-col justify-center"
    >
      {/* Title section */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full">
          Intellectual Property
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Patents Filed
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Filing and documentation of advanced mechanical engineering and industrial management research patents.
        </p>
      </div>

      {/* Patent Card */}
      <div className="max-w-3xl mx-auto w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10 hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shrink-0">
            <FileText className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 items-center mb-3">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Patent Filed
              </span>
              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> Filed: 24th December 2018
              </span>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-4">
              “Management of Green Supply Chain Indicators for Manufacturing Industries and thereof”
            </h2>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-sm text-slate-600">
              <p><strong>Application Number:</strong> Indian Patent Application Number: 201821048839</p>
              <p><strong>Date of Filing:</strong> 24/12/2018</p>
              <p><strong>Region:</strong> Indian Patent Office, Government of India</p>
              <p className="text-justify text-slate-500 mt-4 leading-relaxed italic text-xs">
                *Note: The patent relates to system architectures and management indicator models to measure, evaluate, and implement green supply chain practices across small and medium scale manufacturing enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
