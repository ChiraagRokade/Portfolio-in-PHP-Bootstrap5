import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, ArrowRight, Star, Heart } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const stats = [
    { label: 'Years Experience', value: '31+', icon: Star, color: 'text-amber-500 bg-amber-50' },
    { label: 'Research Publications', value: '41+', icon: BookOpen, color: 'text-blue-500 bg-blue-50' },
    { label: 'Ph.D. & M.Tech Guided', value: '25+', icon: GraduationCap, color: 'text-emerald-500 bg-emerald-50' },
    { label: 'National Innovations', value: 'GYTI', icon: Award, color: 'text-rose-500 bg-rose-50' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Banner / Hero Slider replacement */}
      <motion.div 
        variants={itemVariants} 
        className="relative rounded-2xl overflow-hidden shadow-xl mb-12 bg-linear-to-r from-slate-900 via-slate-800 to-brand-primary text-white h-[260px] md:h-[320px] flex items-center"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 px-8 md:px-16 max-w-2xl">
          <span className="text-xs uppercase font-semibold tracking-widest text-slate-300 bg-white/10 px-3 py-1 rounded-full">
            Welcome to the Academic Portfolio
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mt-4 mb-2">
            Prof. Dr. Sandip T. Chavan
          </h1>
          <p className="text-sm md:text-lg text-slate-300 font-light">
            Professor & Head, School of Mechanical Engineering at MIT World Peace University, Pune.
          </p>
        </div>
        <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-slate-500/10 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Stats Counter Section */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className={`p-3 rounded-lg ${stat.color} shrink-0`}>
                <IconComp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800 tracking-tight">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Cards Layout */}
      <div className="space-y-12">
        {/* Personal Details Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-slate-50 flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-primary rounded-2xl rotate-3 scale-102 opacity-10 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src="/images/a.png" 
                  alt="Dr. Sandip T. Chavan" 
                  className="relative h-72 w-auto object-cover rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </div>
            <div className="lg:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs text-indigo-600 font-semibold tracking-wider uppercase mb-1">Academic Leader</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-6">Personal Details</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                <p>
                  <strong>Prof. Dr. Sandip T. Chavan</strong> is Professor and Head, School of Mechanical Engineering in Dr. Vishwanath Karad MIT World Peace University. He has total 31 years of teaching and research experience. He is recipient of prestigious GYTI (Gandhian Young Technology Innovation) award given by National Innovation Foundation-India at Rashtrapati Bhavan, New Delhi. He has also received “Ideal Teacher Award” from MAEER’s Pune.
                </p>
                <p>
                  Blessed with a studious nature and a rich educational background of his parents, he topped the matriculation exam from Karmala tehsil in Maharashtra in 1982. Thereafter, he completed his graduation in Mechanical Engineering from Government College of Engineering, Karad and joined Bajaj Auto Ltd as Trainee Engineer. In his relentless pursuit of knowledge, he later acquired three post graduate degrees in his credit, two in engineering and one in management from University of Pune. He completed his doctoral research in Mechanical Engineering under the guidance of Dr. B. B. Ahuja, Director, College of Engineering, Pune.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* School of Mechanical Engineering Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col lg:flex-row-reverse">
            <div className="lg:w-1/3 bg-slate-50 flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-l border-slate-100">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl -rotate-3 scale-102 opacity-10 group-hover:-rotate-6 transition-transform duration-300"></div>
                <img 
                  src="/images/a.webp" 
                  alt="School of Mechanical Engineering" 
                  className="relative h-60 w-auto object-cover rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </div>
            <div className="lg:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs text-blue-600 font-semibold tracking-wider uppercase mb-1">Education & Programs</span>
              <p className="text-sm font-medium text-slate-500 mb-1">Pioneer in Mechanical Engineering Education</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-6">School of Mechanical Engineering</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                MIT-WPU offers a state-of-the-art UG program in Mechanical Engineering and a specialized UG program in Robotics and Automation. We also offer three PG M.Tech. degrees in Design, Thermal, and CAD/CAM/CAE as well as a robust Doctoral (Ph.D.) programme in Mechanical Engineering.
              </p>
              <div>
                <a 
                  href="https://mitwpu.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-900 px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Find out More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MIT WPU University Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-slate-50 flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-500 rounded-2xl rotate-3 scale-102 opacity-10 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src="/images/MIT WPU.png" 
                  alt="Dr. V. D. Karad MIT World Peace University" 
                  className="relative h-48 w-auto object-contain rounded-2xl p-2 transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </div>
            <div className="lg:w-2/3 p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs text-amber-600 font-semibold tracking-wider uppercase mb-1">Affiliation</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Dr. V. D. Karad MIT World Peace University <sup>©</sup>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                MIT-World Peace University (MIT-WPU) is known to be among the top education institutions in India since the establishment of the MIT Group of Institutes in 1983. The ‘MIT World Peace University’ is recognised by the UGC under the <a href="/assets/pdf/Mahrashtra-Govt-Act-2017.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-0.5 font-medium">Govt. of Maharashtra Act XXXV 2017 <ArrowRight className="h-3.5 w-3.5 shrink-0" /></a>, since 2017. Today MIT-WPU is at the epicentre for imparting a holistic value-based education for the promotion of a universal culture of peace and welfare among the youth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
