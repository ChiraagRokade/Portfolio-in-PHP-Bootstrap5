import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, BookOpen, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function ResearchGuidance() {
  const [expandedPhd, setExpandedPhd] = useState({ 1: false, 2: false });

  const togglePhdExpand = (id) => {
    setExpandedPhd(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedPhd = [
    {
      id: 1,
      name: 'Mr. Vijay Khanderao Kurkute',
      images: ['/images/rg1.png', '/images/rg2.jpg'],
      title: 'Modeling and Pareto optimization of burnishing process for surface roughness and Micro hardness',
      university: 'Savitribai Phule Pune University (Formerly University of Pune)',
      vivaDate: '16/04/2019',
      abstract: 'Surface roughness, microhardness, and compressive residual stresses of the component developed in the burnishing process are critical from the product performance point of view. The microhardness values depend on the compressive residual stresses induced in the workpiece. Hence the investigation concentrates on surface roughness and microhardness. Though both the properties are essential, it is observed a conflicting nature. Hence it is required to establish the framework for multi-objective optimization of surface roughness and microhardness. An empirical model is established for the surface roughness and microhardness. The model is developed using the Response Surface Methodology (RSM) with the Central Composite Design (CCD). The models are checked for the statistical significance using various statistical tools and further confirmed with Artificial Neural Network (ANN). The experiment runs are performed to confirm the model. The response surface analysis of both the models is performed. The models are optimized using a single variable optimization technique to investigate the behavior around the optimum point. The optimum point for both the model is neither minima nor maxima, it is a saddle point. Hence, further investigation is necessary to explore the region around the optimum point. A Canonical analysis and constrained optimization techniques are used. The Multiple Objective Particle Swarm Optimization (MOPSO) algorithm is implemented in MATLAB environment. The algorithm is based on the non-dominated sorting method. The solutions obtained are known as a Pareto front. By employing the Pareto front it is possible to obtain a machining parameter for a specific combination of the surface roughness and microhardness.'
    },
    {
      id: 2,
      name: 'Mrs. Archana Sachin Chavan',
      images: ['/images/rg3.jpg'],
      title: 'Awareness and Implementation of Green Supply Chain Management in Manufacturing Industries',
      university: 'Bharati Vidyapeeth (Deemed to be University) Pune',
      vivaDate: '03/05/2019',
      abstract: 'Overall globalization has made a critical impact on manufacturing. Due to more and more industrialization and advents of technology there has been an increasing concern over the environmental effects along with the customer orientation. To survive in global competition, focus should be on quality, serviceability, flexibility and cost. Thus, assurance of the continuous flow through the supply chain will enhance a good place for any industry in the competitive market. National Manufacturing Policy (NMP) of India had aspired to create 100 million jobs in the next 10 years by enhancing the Gross Domestic Product (GDP) share of the manufacturing sector from the current level of 16% to 25% by 2025. To achieve this target there is a need to focus on three dimensions i.e. the social, economical and environmental. Today’s facts and figures about the environmental issues are alarming. India is amongst top five countries throughout the world in emission of Green House Gases (GHG). An industrial process is the second largest contributor for emissions of GHG. Due to rapid economic growth, India’s Greenhouse gas emissions are growing at an accelerating pace over the years. Environmental Performance Index (EPI) and Global Green Economy Index (GGEI) which marks the environmental performance are declining over the years. Various initiatives from Government of India and international agencies [Earth Summit 1992, UN Global Compact, Carbon Disclosure Project (CDP), Twelfth Five Year Commission Plan (2012-2017) now called as NITI Aayog] have been taken to minimize the emissions hazardous to human health. In order to protect the ecosystem and also the economical system, the supply chain needs more attention. This concern gave rise to the tool called “Green Supply Chain Management” (GSCM). Thus GSCM is the integration of environmental thinking throughout the supply chain as a competitive priority incorporated to competitive strategy. The aim of GSCM is to reduce materials consumption, energy and other resources in order to minimize negative effects on the environment, and at the same time, achieve the best outcomes in productivity, profitability and customer service. In this research manufacturing industries have been considered for the awareness and implementation of GSCM. After a vast literature survey and discussion with experts from industry and academics, GSCM implementation strategies have been identified and categorized into 16 main indicators and 106 sub indicators. But practically found it difficult to implement. In order to create hierarchy, ranking and prioritisation among the indicators there was need of decision-making method, which can have multi criteria modelling capacity to develop inter-relationship between indicators’ of complex nature. Hence, tools like Analytic Hierarchy Process (AHP) and Interpretive Structural Modelling (ISM) have been used for developing the models with the experts’ opinions. Using AHP and ISM indicators were finalized for awareness and implementation of GSCM in industries. Small scale industries were selected for awareness and implementation of GSCM in and around Pune. Three observations in a span of six months were taken. With the use of questionnaire point scale, qualitative improvement of 55 % was observed after considering the suggested indicators by the industries. In order to quantify the results Carbon foot print generation was calculated. After the survey duration of twelve months it was noted that, 26% of carbon footprint was reduced. Above survey showed marginal improvement in quality, delivery time and reduction in scrap and long term profit. The validation for applicability of GSCM with obtained indicators at specific point scale and percentage of carbon footprints reduced from selected industries, along with obtained rank was necessary. So a mathematical based technique Relative Reliability Risk Index (R3I) was used to find the relative index reliabilities and their respective ranks. This research will definitely help to raise more and more awareness regarding environment hazards and remedies for the manufacturing industries, which will further help to reduce the emissions of GHG, help to optimise the productivity of organization and in context benefit to the society. Keywords: Green Supply Chain Management, Manufacturing and Sustainable, Carbon footprints, Analytic Hierarchy Process and Interpretive Structural Modelling, Relative Reliability Risk Index and Green Manufacturing.'
    }
  ];

  const pursuingPhd = [
    {
      name: 'Mr. Ganesh M. Borikar',
      title: 'Simulation Modeling and Experimental Investigation of Solidification Process for AL-Alloy Sand Casting',
      university: 'Savitribai Phule Pune University (SPPU)',
      regDate: '31/01/2015'
    },
    {
      name: 'Mr. Sunil Ramsing Patil',
      title: 'Analytical and Experimental Investigations of Aerodynamic Noise in Centrifugal Blower',
      university: 'Savitribai Phule Pune University (SPPU)',
      regDate: '31/01/2015'
    },
    {
      name: 'Mr. Omkar M. Kaulgud',
      title: 'Investigation of Cooling Process by Nitrogen Gas and Carbon dioxide Gas in Tungsten Arc Welding and its Effect on Weld Quality and Performance.',
      university: 'Dr. Vishwanath Karad MIT World Peace University',
      regDate: '2017-18'
    },
    {
      name: 'Mr. Ravindrakumar',
      title: 'Lithium-Ion battery thermal management system for electric vehicle',
      university: 'Dr. Vishwanath Karad MIT World Peace University',
      regDate: '2018-19'
    }
  ];

  const mtechStats = {
    completed: [
      { count: 8, description: 'M.Tech. (Mechanical – CAD/CAM) under Bharati Vidyapeeth Deemed University, Pune' },
      { count: 9, description: 'M.E. (Mechanical – Design Engineering) under Savitribai Phule Pune University, Pune' },
      { count: 2, description: 'M.Tech. (Mechanical – Design Engineering) under MIT World Peace University' }
    ],
    ongoing: [
      { count: 2, description: 'M.Tech. (Mechanical – Design Engineering) under MIT World Peace University' },
      { count: 1, description: 'M.Tech. (Mechanical – CAD/CAM/CAE) under MIT World Peace University' }
    ]
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
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full">
          Academic Mentorship
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Research Guidance
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Over 30 years of mentoring, guiding Ph.D. researchers and M.Tech candidates through state-of-the-art mechanical engineering design and manufacturing projects.
        </p>
      </div>

      {/* Ph.D. Completed Section */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-indigo-600" /> Ph.D. Completed Candidates
        </h2>

        <div className="space-y-8">
          {completedPhd.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-xl shadow-xs border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Text Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{candidate.name}</h3>
                    <div className="space-y-2 mb-4 text-sm text-slate-600">
                      <p><strong>Title:</strong> {candidate.title}</p>
                      <p><strong>University:</strong> {candidate.university}</p>
                      <p className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <strong>Viva Date:</strong> {candidate.vivaDate}
                      </p>
                    </div>

                    {/* Expandable Abstract Accordion */}
                    <div className="mt-4">
                      <button
                        onClick={() => togglePhdExpand(candidate.id)}
                        className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        {expandedPhd[candidate.id] ? (
                          <>
                            Hide Abstract <ChevronUp className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            View Abstract <ChevronDown className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedPhd[candidate.id] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-xs md:text-sm text-slate-600 leading-relaxed text-justify bg-slate-50 p-4 rounded-lg border border-slate-100">
                              {candidate.abstract}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Images column */}
                  <div className="lg:w-[320px] flex flex-col gap-4 items-center justify-center shrink-0">
                    {candidate.images.map((imgSrc, idx) => (
                      <div key={idx} className="relative rounded-lg overflow-hidden border border-slate-100 max-w-[280px]">
                        <img 
                          src={imgSrc} 
                          alt={`${candidate.name} Research`} 
                          className="w-full h-auto object-cover max-h-[180px] hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ph.D. Pursuing Section */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600" /> Ph.D. Candidates Pursuing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pursuingPhd.map((candidate, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-800 text-lg mb-2">{candidate.name}</h3>
              <div className="text-sm text-slate-600 space-y-2">
                <p><strong>Title:</strong> {candidate.title}</p>
                <p><strong>University:</strong> {candidate.university}</p>
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="h-3.5 w-3.5" />
                  Registered: {candidate.regDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* M.Tech & M.E. Section */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
          <Award className="h-6 w-6 text-amber-600" /> M.Tech. / M.E. Thesis Advising
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Completed Advising */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
            <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Completed (Total: 19)
            </h3>
            <ul className="space-y-4">
              {mtechStats.completed.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="font-bold text-slate-700 bg-slate-100 rounded-lg h-7 w-7 flex items-center justify-center shrink-0 text-sm mt-0.5">
                    {item.count}
                  </span>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ongoing Advising */}
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
            <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span> Ongoing (Total: 03)
            </h3>
            <ul className="space-y-4">
              {mtechStats.ongoing.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="font-bold text-slate-700 bg-slate-100 rounded-lg h-7 w-7 flex items-center justify-center shrink-0 text-sm mt-0.5">
                    {item.count}
                  </span>
                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
