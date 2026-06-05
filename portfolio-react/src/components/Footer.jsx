import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About / Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Dr. Sandip T. Chavan</h3>
            <p className="text-sm text-slate-400 leading-relaxed text-justify mb-4">
              Professor and Head, School of Mechanical Engineering at Dr. Vishwanath Karad MIT World Peace University, Pune. 
              Over 31 years of teaching and research experience in Mechanical Design, Tribology, and Advanced Manufacturing.
            </p>
          </div>

          {/* Research & Profiles */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Academic Profiles</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://scholar.google.com/citations?user=i9ThOOQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-white transition-colors duration-150 group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  Google Scholar Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57200815933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-white transition-colors duration-150 group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  Scopus Author Profile (1)
                </a>
              </li>
              <li>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57206285258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-white transition-colors duration-150 group"
                >
                  <ExternalLink className="h-4 w-4 mr-2 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  Scopus Author Profile (2)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">School of Mechanical Engineering</p>
                  <p>MIT-WPU Faculty of Engineering & Technology</p>
                  <p>S.No.124, Paud Road, Kothrud, Pune, 411038</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-slate-500 shrink-0" />
                <a href="mailto:sandip.chavan@mitpune.edu.in" className="hover:text-white transition-colors">
                  sandip.chavan@mitpune.edu.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p>Tel No: 020 – 7117 7105</p>
                  <p>Tel No: 020 – 7117 7104</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-slate-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sandip T. Chavan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center">
              Original Design by&nbsp;
              <a
                href="https://linktr.ee/ChiraagRokade"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors font-medium underline"
              >
                Chiraag Rokade
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
