import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Presentation, Calendar, Award } from 'lucide-react';

export default function ResearchPublications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'journals', 'conferences'

  const publications = useMemo(() => [
    // Journals
    {
      id: 1,
      type: 'journal',
      subType: 'International',
      authors: 'Chavan S.T. and Ahuja B. B.',
      title: 'Effect of cone angle and length of the slot on the performance of feed slot conical air bearing',
      venue: 'International Journal of Design Engineering, Inderscience Enterprises Ltd. UK., Issue No. 2, Vol. 2.',
      year: '2009',
      details: 'Inderscience UK'
    },
    {
      id: 2,
      type: 'journal',
      subType: 'International',
      authors: 'Chavan S.T. and Rajapure D. M.',
      title: 'Power Train Torsional Vibration’s Simulation and Correlation with Physical Measurement',
      venue: 'International Journal of Engineering and Research Technology, Vol. 1(02)',
      year: '2012',
      details: 'ISSN 2278-0181'
    },
    {
      id: 3,
      type: 'journal',
      subType: 'International',
      authors: 'Shiva Gurule, Chavan S. T. and Pathak S. K.',
      title: 'Capacity Evaluation and Modal Analysis of Lubricating Oil Sump of V-10 Diesel Engine',
      venue: 'International Journal for Research in Technological Studies, Vol. 1, Issue 3',
      year: '2014',
      details: 'ISSN (online): 2348-1439'
    },
    {
      id: 4,
      type: 'journal',
      subType: 'International',
      authors: 'Tatyaso Garande, P.D.Sonawane, Chavan S. T. and G.S.Barpande',
      title: 'Review of Motorized Tricycle for the Disabled Person',
      venue: 'International Journal of Science and Research, Vol. 4, Issue 2',
      year: '2015',
      details: 'ISSN (online): 2319-7064'
    },
    {
      id: 5,
      type: 'journal',
      subType: 'International',
      authors: 'Vitthal Dharmashale, S.T. Chavan and Ajit Pawar',
      title: 'Study & Design Of Fire Detecting and Fire Extinguishing Robot',
      venue: 'International Journal of Advance Research and Innovative Ideas in Education, Vol-1 Issue-2',
      year: '2015',
      details: 'ISSN(O)-2395-4396'
    },
    {
      id: 6,
      type: 'journal',
      subType: 'International',
      authors: 'Ajit A. Mohekar, Savita V. Kendre, Tanmay N. Shah, P. D. Sonawane, S. T. Chavan',
      title: 'Design of An Innovative Retrofitted Tricycle For A Disabled Person',
      venue: 'International Journal Advance Research in Science and Engg. Vol-4 Issue-07',
      year: '2015',
      details: 'ISSN(O)-2319-8354'
    },
    {
      id: 7,
      type: 'journal',
      subType: 'International',
      authors: 'Pratik P. Puppal, Sandip T. Chavan, Ragunathan Kaliraj',
      title: 'GPS Guided Live Tracking to Hike Productivity of ASN (Advance Shipment Notification) – A framework',
      venue: 'Technical Journal of Institute of Engineers (India), Vol. 39',
      year: '2015',
      details: 'ISBN No.: 978-81-924990-3-1'
    },
    {
      id: 8,
      type: 'journal',
      subType: 'International',
      authors: 'S.S. Kulkarni, V.K. Kurkute and S.T. Chavan',
      title: 'Experimental and Finite Element Analysis of Tribological Behavior of Heat Treated 40C8 Steel in Dry Sliding Test Using Pin on Disc Apparatus',
      venue: 'International Journal of Advanced Research, Vol. 3, Issue 8, pp 684-690',
      year: '2015',
      details: 'ISSN 2320-5407'
    },
    {
      id: 9,
      type: 'journal',
      subType: 'International',
      authors: 'Sanjay T. Kakulate, Sandip T. Chavan, Swapnil S. Kulkarni',
      title: 'Deploying Analytical Methodology For Experimental Data Over Wear Recorded For Brake Liner While Attempting Optimization',
      venue: 'International Journal of Scientific Research and Management Studies, Volume 2 Issue 7, pp: 294-299',
      year: '2015',
      details: '(IJSRMS) ISSN: 2349-3771'
    },
    {
      id: 10,
      type: 'journal',
      subType: 'International',
      authors: 'Sanjay T. Kakulate, Sandip T. Chavan, Swapnil S. Kulkarni',
      title: 'Experimental Investigation of Friction and Wear Behavior of Brake Pads and Parametric study using Taguchi Techniques',
      venue: 'International Journal of Informative and Futuristic Research, Volume 3, Issue 8',
      year: '2016',
      details: 'ISSN: 2347-1697'
    },
    {
      id: 11,
      type: 'journal',
      subType: 'International',
      authors: 'Shivaraj S. Vadgeria, Sunil R. Patil, Sandip T. Chavan',
      title: 'Static and Fatigue Analysis of Lathe spindle for Maximum Cutting Force',
      venue: 'Proceedings of materials today, Elsevier, with International Conference on Material Processing and Characterization',
      year: '2017',
      details: 'Elsevier Materials Today'
    },
    {
      id: 12,
      type: 'journal',
      subType: 'International',
      authors: 'Sunil R. Patil, Sandip T. Chavan, Nitin S. Jadhav, Shivaraj S. Vadgeria',
      title: 'Effect of Volute Tongue Clearance Variation on Performance of Centrifugal Blower by Numerical and Experimental Analysis',
      venue: 'Proceedings of materials today, Elsevier, with International Conference on Material Processing and Characterization',
      year: '2017',
      details: 'Elsevier Materials Today'
    },
    {
      id: 13,
      type: 'journal',
      subType: 'International',
      authors: 'Kurkute Vijay and Chavan S. T.',
      title: 'Modeling and Optimization of Surface roughness and microhardness for roller burnishing process using response surface methodology for Aluminum 63400 alloy',
      venue: 'Science Direct, Procedia Manufacturing, Volume 20',
      year: '2018',
      details: 'ISSN: 2351-9789'
    },
    {
      id: 14,
      type: 'journal',
      subType: 'International',
      authors: 'Kurkute Vijay and Chavan S. T.',
      title: 'A Review Burnishing Process for Surface Roughness and Microhardness',
      venue: 'International Journal of Mechanical Engineering and Technology, IAEME Pub., Scopus Indexed, Volume 9',
      year: '2018',
      details: 'ISSN: 0976-6340'
    },
    {
      id: 15,
      type: 'journal',
      subType: 'International',
      authors: 'Kurkute Vijay and Chavan S. T.',
      title: 'Experimental investigation of roller burnishing process for Surface Roughness using Taguchi Orthogonal Array',
      venue: 'International Research Journal of Natural and Applied Sciences, Associated Asia Research Foundation, (UGC Approved) Volume 05, Issue 3',
      year: '2018',
      details: 'ISSN: 2349-4077'
    },
    {
      id: 16,
      type: 'journal',
      subType: 'International',
      authors: 'Kurkute Vijay and Chavan S. T.',
      title: 'Experimental investigation of roller burnishing process for micro-hardness of aluminum 63400 using Taguchi',
      venue: 'International Journal of Advanced Research in Engineering and Technology, (UGC Approved) Volume 09, Issue 2',
      year: '2018',
      details: 'ISSN: 0976-6480'
    },
    {
      id: 17,
      type: 'journal',
      subType: 'International',
      authors: 'Kurkute Vijay and Chavan S. T.',
      title: 'Modeling the process parameters of roller burnishing using RSM and prediction of Microhardness using Artificial Neural Network',
      venue: 'International Journal of Computer Sciences and Engineering, Vol. 06, Issue 4, pp 43-50',
      year: '2018',
      details: 'ISSN: 2347-2693, Indexing: ICI'
    },
    {
      id: 18,
      type: 'journal',
      subType: 'International',
      authors: 'Mrs. A. S. Chavan, Dr. S. T. Chavan, Dr. R. N. Patil and Nitin Kulkarni',
      title: 'Need of Green Supply Chain Management for Indian Manufacturing Industries',
      venue: 'International Journal of Basic and Applied Research (UGC Approved), Volume 8, Issue 9, pp. 242-256',
      year: '2018',
      details: 'ISSN: 2249-3352'
    },
    {
      id: 19,
      type: 'journal',
      subType: 'International',
      authors: 'Shubham Agnihotri, Shaunak Vaze, Rajat Nampalliwar and Dr. S. T. Chavan',
      title: 'Design and Development of drop Test Rig and Test Analysis of Handheld Electronic Devices',
      venue: 'International Journal of Innovative Research in Technology, Volume 5, Issue 6',
      year: '2018',
      details: 'ISSN: 2349-6002'
    },
    {
      id: 20,
      type: 'journal',
      subType: 'International',
      authors: 'Mrs. A. S. Chavan, Dr. R. N. Patil and Dr. S. T. Chavan',
      title: 'Prioritization of Green Supply Indicators with Analytic Hierarchy Process (AHP) Model',
      venue: 'International Journal of Mechanical Engineering and Technology (Scopus Indexed), Volume 9, Issue 10, pp. 1444-1460',
      year: '2018',
      details: 'ISSN: 0976-6340'
    },
    {
      id: 21,
      type: 'journal',
      subType: 'International',
      authors: 'Sachin S. Chavan, Avinash M. Pawar, D.S. Bilgi and S.T. Chavan',
      title: 'An Innovative Simulation Approach to improve the electrochemical Machining Performance',
      venue: 'International Journal of Mechanical Engineering and Technology (Scopus Indexed), Volume 9, Issue 13, pp. 1357-1377',
      year: '2018',
      details: 'ISSN: 0976-6340'
    },
    {
      id: 22,
      type: 'journal',
      subType: 'International',
      authors: 'Mrs. A. S. Chavan, Dr. R. N. Patil, Dr. S. T. Chavan, Mr. Nitin Kulkarni & Sachin Chavan',
      title: 'Relative Reliability Risk Index for Green supply chain management',
      venue: 'International Journal of Mechanical Engineering and Technology (Scopus Indexed), Volume 9, Issue 13, pp. 1264-1273',
      year: '2018',
      details: 'ISSN: 0976-6340'
    },
    {
      id: 23,
      type: 'journal',
      subType: 'International',
      authors: 'Borikar Ganesh and Chavan S. T.',
      title: 'Optimization of Casting Yield in Multi-cavity Sand Moulds of Al-alloy Components',
      venue: 'Materials Today, Elsevier',
      year: '2020',
      details: 'Elsevier Materials Today'
    },

    // Conferences
    {
      id: 24,
      type: 'conference',
      subType: 'International',
      authors: 'Sunil R. Patil, Sandip T. Chavan',
      title: 'Experimental Performance Analysis of Centrifugal Blower for Different Impeller Diameters',
      venue: 'International Conference on Mechanical Engineering for Sustainable Development-2020, Mechanical Engg. Dept, AISSMSCOE, Pune, Maharashtra, India',
      year: '2020',
      details: 'International Conference'
    },
    {
      id: 25,
      type: 'conference',
      subType: 'National',
      authors: 'Mrs. A. S. Chavan, Dr. R. N. Patil, Dr. S. T. Chavan and Mr. Nitin Kulkarni',
      title: 'Indicators for implementation of Green Supply Chain Management in Manufacturing Industries',
      venue: 'Proceedings of National Conference on Recent trends in Engineering and Technology, Department of Mech. Engg., K.B. Patil College of Engineering, Satara',
      year: '2018',
      details: 'National Conference'
    },
    {
      id: 26,
      type: 'conference',
      subType: 'International',
      authors: 'Borikar Ganesh, Chavan S. T. and Mahesh Kulkarni',
      title: 'Simulating the effect of gating design and pouring temperature on LM4 casting quality',
      venue: 'Transactions of 65th Indian Foundry Congress, Kolkata, pp: 54-60',
      year: '2017',
      details: 'International Conference'
    },
    {
      id: 27,
      type: 'conference',
      subType: 'National',
      authors: 'Borikar Ganesh and Chavan S. T.',
      title: 'Design and Simulation of Gating System for Aluminium Alloy Sand Casting',
      venue: 'National Conference on Recent Advances in Manufacturing (RAM), Dept. of Mech. Engg., S.V.N.I.T., Surat, Gujarat, India',
      year: '2016',
      details: 'ISBN 978-93-5265-309-6'
    },
    {
      id: 28,
      type: 'conference',
      subType: 'International',
      authors: 'Kurkute Vijay and Chavan S. T.',
      title: 'Modeling and Optimization of Surface Layer Characteristics of Burnished Component using Artificial Neural Network',
      venue: 'International Conference on Technological Advancements in Materials and Manufacturing for Industrial Environment, Dept. of Mech. Engg., KPR Institute of Technology in Association with Mokpo National University, South Korea',
      year: '2016',
      details: 'International Conference'
    },
    {
      id: 29,
      type: 'conference',
      subType: 'International',
      authors: 'Chavan S.T. and Ahuja B. B.',
      title: 'Effect of cone angle and length of the slot on the performance of externally pressurized feed slot conical air bearing',
      venue: 'International Proc. On Advances in Mechanical Engineering, S.V.N.I.T. Surat, Gujarat, India',
      year: '2008',
      details: 'International Conference'
    },
    {
      id: 30,
      type: 'conference',
      subType: 'International',
      authors: 'Chavan S.T. and Ahuja B. B.',
      title: 'Optimization of film thickness and depth of slot for Aerostatic Conical Bearing with feed slots',
      venue: 'International Proc. On Advances in Machine Design and Industry Automation, Govt. College of Engineering, Pune, Maharashtra, India',
      year: '2007',
      details: 'International Conference'
    },
    {
      id: 31,
      type: 'conference',
      subType: 'National',
      authors: 'Chavan S.T. and Bhosale V. V.',
      title: 'Computer Simulation and effect of Supply Pressure on characteristics of Feed Slot Aerostatic Conical Bearing',
      venue: '14th ISME International Conference on Mechanical Engineering in Knowledge Age, Delhi College of Engineering, Delhi, India',
      year: '2005',
      details: 'National Conference'
    },
    {
      id: 32,
      type: 'conference',
      subType: 'National',
      authors: 'Chavan S.T. and Ahuja B. B.',
      title: 'A Study of Static Characteristics of conical air bearing with feed slots',
      venue: 'National Conference on Advances in Mechanical Engineering, Vasavi College of Engineering, Hyderabad, Andhra Pradesh, India (Best Paper Award)',
      year: '2005',
      details: 'Best Paper Award'
    },
    {
      id: 33,
      type: 'conference',
      subType: 'National',
      authors: 'Chavan S.T. and Kurkute V.K.',
      title: 'Stiffness and force characteristics of Active Magnetic Bearing',
      venue: 'National Conference on ZEITGEIST- The Spirit of Age in Mech. Engineering, Institute of Technology Banaras Hindu University, Varanasi, Uttar Pradesh',
      year: '2004',
      details: 'National Conference'
    },
    {
      id: 34,
      type: 'conference',
      subType: 'International',
      authors: 'Chavan A. S., Chavan S. S. and Chavan S.T.',
      title: 'Review: Green supply chain management – Needs, Practices, Theories and Models',
      venue: 'International Conference on Advances in Mech. Engineering, College of Engineering, Pune, Maharashtra, India',
      year: '2013',
      details: 'International Conference'
    },
    {
      id: 35,
      type: 'conference',
      subType: 'International',
      authors: 'Birari A.B. and Chavan S.T.',
      title: 'Design and analysis of door fitment fixture for an automobile',
      venue: 'International Proc. On Advances in Mechanical Engineering, S.V.N.I.T. Surat, Gujarat, India',
      year: '2010',
      details: 'International Conference'
    },
    {
      id: 36,
      type: 'conference',
      subType: 'National',
      authors: 'Kulkarni Mandar and Chavan S.T.',
      title: 'CFD Analysis of Air Bearing',
      venue: 'National Proc. On Advancements and Futuristic Trends in Mechanical and Materials Engineering, Yadavindra College of Engineering, Talwandi, Bathinda, Punjab',
      year: '2010',
      details: 'National Conference'
    },
    {
      id: 37,
      type: 'conference',
      subType: 'International',
      authors: 'Kumbhar D. G., Chavan S.T. and Sane N. K.',
      title: 'Finite element analysis and experimental study of convective heat transfer augmentation from horizontal rectangular fin by triangular perforations',
      venue: 'International Proc. On Advances in Mechanical Engineering, S.V.N.I.T. Surat, Gujarat',
      year: '2009',
      details: 'International Conference'
    },
    {
      id: 38,
      type: 'conference',
      subType: 'National',
      authors: 'Kadam M. A. and Chavan S. T.',
      title: 'Study & Comparison of different properties and Performance of Bio Diesel & Petroleum diesel',
      venue: 'National Conference on Recent Trends in Energy Engineering & Management, Tatyasaheb Kore Institute of Engineering & Technology, Warananagar, Kolhapur, Maharashtra',
      year: '2007',
      details: 'National Conference'
    },
    {
      id: 39,
      type: 'conference',
      subType: 'National',
      authors: 'S. S. and Chavan S.T.',
      title: 'Design and Evaluation of cutter Assembly of Sugarcane Harvester using FEM',
      venue: 'National Proc. On Recent Trends in Mech. Engineering, Sri Jayachamarajendra College of Engineering, Mysore, Karnataka, India',
      year: '2006',
      details: 'National Conference'
    },
    {
      id: 40,
      type: 'conference',
      subType: 'National',
      authors: 'Wani Kiran and Chavan S. T.',
      title: 'Advanced Design of an Acoustic Enclosure for a Diesel Generator having an Air Cooled Engine',
      venue: 'National Proc. On Recent Development in Mechanical Engineering, S.V.E.R.I.’s College of Engineering, Pandharpur, Solapur, Maharashtra, India',
      year: '2005',
      details: 'National Conference'
    },
    {
      id: 41,
      type: 'conference',
      subType: 'National',
      authors: 'Desai Satish and Chavan S. T.',
      title: 'Study and Analysis of B.S.R. (BUZZ, SQUEAK, RATTLE) four poster test Rig used for vehicle Testing',
      venue: 'National Conference on Computational Methods in Mechanical Engineering, University College of Engineering, Osmania University, Hyderabad, Andhra Pradesh, India',
      year: '2005',
      details: 'National Conference'
    }
  ], []);

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      // Tab filter
      if (activeTab === 'journals' && pub.type !== 'journal') return false;
      if (activeTab === 'conferences' && pub.type !== 'conference') return false;

      // Search filter
      const search = searchQuery.toLowerCase().trim();
      if (!search) return true;

      return (
        pub.title.toLowerCase().includes(search) ||
        pub.authors.toLowerCase().includes(search) ||
        pub.venue.toLowerCase().includes(search) ||
        pub.year.includes(search) ||
        pub.subType.toLowerCase().includes(search)
      );
    });
  }, [publications, activeTab, searchQuery]);

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
          Academic Research
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Research Publications
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Browse peer-reviewed journal papers and conference presentations, representing contributions to mechanical design, tribology, and manufacturing.
        </p>
      </div>

      {/* Stats and filters row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-slate-200">
        {/* Tab triggers */}
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All ({publications.length})
          </button>
          <button
            onClick={() => setActiveTab('journals')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'journals'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Journals (23)
          </button>
          <button
            onClick={() => setActiveTab('conferences')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'conferences'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Conferences (18)
          </button>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800/20 focus:border-slate-800 transition-all"
          />
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
              >
                {/* Icon wrapper */}
                <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                  pub.type === 'journal' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-emerald-600 bg-emerald-50'
                }`}>
                  {pub.type === 'journal' ? (
                    <BookOpen className="h-5 w-5" />
                  ) : (
                    <Presentation className="h-5 w-5" />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      pub.type === 'journal' 
                        ? 'text-blue-700 bg-blue-50/50' 
                        : 'text-emerald-700 bg-emerald-50/50'
                    }`}>
                      {pub.type === 'journal' ? 'Journal' : 'Conference'}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {pub.subType}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <Calendar className="h-3 w-3" /> {pub.year}
                    </span>
                    {pub.venue.includes('Best Paper') && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                        <Award className="h-3 w-3" /> Best Paper
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-snug mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mb-1">
                    <span className="font-semibold text-slate-700">{pub.authors}</span>
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    {pub.venue}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-slate-500"
            >
              No publications matched your search criteria.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
