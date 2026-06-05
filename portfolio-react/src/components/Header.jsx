import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award, BookOpen, GraduationCap, Phone, Image, Calendar, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (menuName) => {
    if (activeDropdown === menuName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuName);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Research',
      dropdown: [
        { name: 'Publications', path: '/research-publications', icon: BookOpen },
        { name: 'Research Guidance', path: '/research-guidance', icon: GraduationCap },
        { name: 'Conferences & Workshops', path: '/seminars-workshops', icon: Calendar },
      ]
    },
    {
      name: 'Awards & Recognition',
      dropdown: [
        { name: 'Awards', path: '/awards', icon: Award },
        { name: 'Recognitions', path: '/recognitions', icon: Info },
        { name: 'Patents', path: '/patents', icon: BookOpen },
      ]
    },
    { name: 'FDP/STTP', path: '/courses' },
    {
      name: 'More',
      dropdown: [
        { name: 'Invited Talks', path: '/invited-talks', icon: GraduationCap },
        { name: 'Photo Gallery', path: '/gallery', icon: Image },
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo1.png"
                alt="MIT WPU Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="hidden md:block font-serif text-lg font-bold text-slate-800 tracking-tight">
                Dr. Sandip T. Chavan
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => {
              if (item.dropdown) {
                const isSomeSubpageActive = item.dropdown.some(sub => isActive(sub.path));
                return (
                  <div
                    key={idx}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isSomeSubpageActive
                          ? 'text-brand-accent bg-slate-50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-1 z-50 border border-slate-100"
                        >
                          {item.dropdown.map((sub, sIdx) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                                  isActive(sub.path)
                                    ? 'text-brand-accent bg-slate-50 font-medium'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                                }`}
                              >
                                <SubIcon className="h-4 w-4 text-slate-400" />
                                {sub.name}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-brand-accent bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-over */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 flex flex-col lg:hidden border-l border-slate-200"
            >
              <div className="px-5 pt-5 pb-6 flex items-center justify-between border-b border-slate-100">
                <span className="font-serif text-lg font-bold text-slate-800">Navigation</span>
                <button
                  onClick={toggleMenu}
                  className="rounded-md p-2 text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-hidden"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navItems.map((item, idx) => {
                  if (item.dropdown) {
                    const isDropdownActive = activeDropdown === item.name;
                    return (
                      <div key={idx} className="space-y-1">
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownActive ? 'rotate-180' : ''}`} />
                        </button>
                        {isDropdownActive && (
                          <div className="pl-4 space-y-1">
                            {item.dropdown.map((sub, sIdx) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sIdx}
                                  to={sub.path}
                                  onClick={toggleMenu}
                                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                                    isActive(sub.path)
                                      ? 'text-brand-accent bg-slate-50 font-semibold'
                                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                  }`}
                                >
                                  <SubIcon className="h-4 w-4 text-slate-400" />
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={toggleMenu}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                        isActive(item.path)
                          ? 'text-brand-accent bg-slate-50 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
