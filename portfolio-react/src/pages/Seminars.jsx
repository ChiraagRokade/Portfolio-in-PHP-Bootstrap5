import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Search, MapPin, ClipboardList } from 'lucide-react';

export default function Seminars() {
  const [searchQuery, setSearchQuery] = useState('');

  const seminars = useMemo(() => [
    { text: 'Participated in Two days Professional Development Program on ‘Advance Powertrain for Mobility’ organized by SAEINDIA on 18th and 19th Feb. 2019.', year: 2019 },
    { text: 'Participated in Two days conference on ‘Two and Three Wheeler conference’ organized by SAEINDIA on 30th and 31st Aug 2018.', year: 2018 },
    { text: 'Participated in Seminar on ‘How to write for and get published in International Scientific journals’ organized by Team from Springer (Nature) on 18 April, 2018', year: 2018 },
    { text: 'Participated in Two day workshop on ‘Strategic vision summit for Industry Partnerships’ organized by MITWPU, Pune on 6th and 7th December, 2017', year: 2017 },
    { text: 'Participated in Seminar on ‘Safety in Paint Industry’ organized by Spectrum Safety Council, Pune on 11 March, 2017', year: 2017 },
    { text: 'Participated in One day workshop on ‘Syllabus revision of M.E.(Mechanical)’ organized by BCUD, Savitribai Phule Pune University and Pimpri Chinchwad College of Engineering, Pune on 15 February, 2017', year: 2017 },
    { text: 'Participated in International Conference on Design and Reliability of Mechanical System held at MIT, Pune on 3-4 August, 2016', year: 2016 },
    { text: 'Participated in one day workshop on ‘Tolerance Stack-up’ and ‘Design for Manufacture’ by Geometric Ltd., Pune on 10 February and 22 March, 2016', year: 2016 },
    { text: 'Participated in One day workshop on ‘Syllabus implementation of B.E.(Mechanical) organized by BCUD, Savitribai Phule Pune University and Bharati vidyapeeth College of Engineering for Women, Pune on 1 August, 2015', year: 2015 },
    { text: 'Participated in International Conference on Design and Reliability of Mechanical System held at MIT, Pune on 23-24 July 2015', year: 2015 },
    { text: 'Organized and attended two days’ Workshop on ‘Product Design and Development’ on Sept. 16-17, 2015 for B.E. (Mechanical) students in MIT School of Design, Loni, Pune.', year: 2015 },
    { text: 'Attended two days’ workshop on ‘Subsea Engineering’ organized by Aker Solution on July 4 and August 27, 2015', year: 2015 },
    { text: 'Participated in one day Regional Research Conference (Innovation-2015) organized by BCUD (Savitribai Phule Pune University) Pune on July 1, 2015', year: 2015 },
    { text: 'Attended Syllabus formation workshop of CAD/CAM, FEM and Product Design and Development organized by SPPU and Zeal Dnyanganga COE, Narhe on March 20, 2015', year: 2015 },
    { text: 'Participated one day workshop on ‘Project/Problem Based Learning’ at MIT, Pune on March 3, 2015', year: 2015 },
    { text: 'Organized and attended two days’ Workshop on ‘Product Design and Development’ on 13th and 16th September 2013 for B.E.(Mechanical) students in MIT School of Design, Loni, Pune.', year: 2013 },
    { text: 'Attended Three days’ Workshop on ‘Metallurgy for Non-Metallurgist’ on September 12-14, 2013 at ARAI, Pune.', year: 2013 },
    { text: 'One day Workshop on Syllabus revision and restructuring of M.E. (Mechanical) – Heat Power Engg./Automotive Engg./ Energy Engg. Organized by Board of studies Mechanical Engineering, University of Pune at MAEER’s MIT Pune on December 4, 2012', year: 2012 },
    { text: 'One day Workshop on Syllabus revision and restructuring of M.E. (Mechanical) – Design Engg. / Mechatronics Organized by Board of studies Mechanical Engineering, University of Pune at Flora Institute of technology, Pune on December 2, 2012', year: 2012 },
    { text: 'One day Workshop on Syllabus revision and restructuring of S.E./T.E./B.E. (Mechanical) Organized by Board of studies Mechanical Engineering, University of Pune at Cummins College of Engineering for Women, Pune on November 27, 2012', year: 2012 },
    { text: 'One day orientation workshop on ‘Outcome based accreditation Process and Parameters for the Evaluators and stakeholders’ in MIT College of Engineering, Pune on 23rd October, 2012. The workshop was organized by MITCOE in collaboration with National Board of Accreditation, New Delhi.', year: 2012 },
    { text: 'Seminar on ‘Seamless Integration of Engineering Design and simulation tools in Mechanical Engineering studies’ on 26th September 2012. The seminar was organised by Design Tech. System Ltd. Pune.', year: 2012 },
    { text: 'Accent Neutralization, BVUCOE, Pune, October 1-3, 2009', year: 2009 },
    { text: 'Micro and Nanotechnology, Govt. College of Engineering, Pune, February 4, 2008', year: 2008 },
    { text: 'Academic Monitoring, NITTTR, Bhopal & BVUCOE, Pune, August 20-22, 2007', year: 2007 },
    { text: 'Vehicle Familiarization, Tata Motors Ltd. Pune, January 16-17, 2007', year: 2007 },
    { text: 'Effective Engineering Teaching, Great Foundation and BVDUCOE, Pune, Aug. 11-12, 2006', year: 2006 },
    { text: 'Latest Trends in Mechatronics, Cyber motion, Hyderabad & BVDUCOE, Pune, February 28, 2006', year: 2006 },
    { text: 'UGC – INFONET Awareness Programme on Access to Scholarly Journals/Databases, Bharati Vidyapeeth Deemed University Dental College and Hospital, Pune, Oct. 21, 2005', year: 2005 },
    { text: 'Techno Business Opportunities in emerging Technologies, IndiaCo icenter, Pune and CII India, March 17-18, 2005', year: 2005 },
    { text: 'Advances in Manufacturing Technology in the Era of Globalization (AMTEG), Pune Institute of Engineering & Technology, Pune and Indian Institution of Production Engineers Pune, January 21-22, 2005', year: 2005 },
    { text: 'Recent Advances in Bearings and Lubricants, Sinhgad College of Engineering, Pune, July 5, 2004', year: 2004 },
    { text: 'Writing your Thesis, Great Foundation, Pune, October 5, 2003', year: 2003 },
    { text: 'Recent Development in ‘Computer Aided Manufacturing Engineering’ Deccan College of Engineering and Technology, Hyderabad (A.P.), January 2-3, 2003.', year: 2003 },
    { text: 'Implementation of Syllabus of CAD/CAM & Automation at B.E. Mech./ Prod., A.I.S.S.M.S.’s College of Engineering, Pune, July 9, 2000', year: 2000 },
    { text: 'Evolution and Measurement, ISTE Chapter BVCOE, Pune, December 26-29, 1992', year: 1992 },
    { text: 'Machine Drawing and Computer Graphics, D.Y.Patil College of Engineering, Pune, August 30-31, 1991', year: 1991 }
  ], []);

  const filteredSeminars = useMemo(() => {
    return seminars.filter(item => {
      const search = searchQuery.toLowerCase().trim();
      if (!search) return true;
      return (
        item.text.toLowerCase().includes(search) ||
        item.year.toString().includes(search)
      );
    });
  }, [seminars, searchQuery]);

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
          Professional Activities
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Conferences / Seminars / Workshops
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          A record of active participation and organization of professional training events, academic workshops, and national level technical conferences.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div className="text-slate-600 text-sm font-medium">
          Total Participation: <span className="font-bold text-slate-800">{seminars.length} Events</span>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by topic or year..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800/20 focus:border-slate-800 transition-all"
          />
        </div>
      </div>

      {/* Events timeline / list */}
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredSeminars.length > 0 ? (
            filteredSeminars.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Timeline circle point */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-600 shadow-xs"></div>

                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-indigo-600">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Year {item.year}</span>
                  </div>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-slate-500 -ml-10"
            >
              No events matched your search query.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
