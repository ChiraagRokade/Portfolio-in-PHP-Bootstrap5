import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate API form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto hide toast
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
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
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-2">
          Contact Information
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Have research inquiries or collaboration ideas? Reach out by filling the form or via the official academic contact channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-slate-800 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800 transition-all ${
                    errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  }`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-500 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800 transition-all ${
                    errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-500 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800 transition-all ${
                  errors.subject ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
              {errors.subject && (
                <span className="text-xs text-rose-500 font-semibold flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.subject}
                </span>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800 transition-all ${
                  errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                }`}
              />
              {errors.message && (
                <span className="text-xs text-rose-500 font-semibold flex items-center gap-1 mt-1">
                  <AlertCircle className="h-3 w-3" /> {errors.message}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold text-sm hover:bg-slate-900 transition-colors cursor-pointer disabled:bg-slate-400"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h2 className="font-serif text-xl font-bold text-slate-800 pb-2 border-b border-slate-100">
              Department Details
            </h2>

            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  <p className="font-bold text-slate-800">School of Mechanical Engineering</p>
                  <p>MIT-WPU Faculty of Engineering & Technology</p>
                  <p>S.No.124, Paud Road, Kothrud, Pune, 411038</p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-bold text-slate-800">Telephone Lines</p>
                  <p>Tel No: 020 – 7117 7105</p>
                  <p>Tel No: 020 – 7117 7104</p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-bold text-slate-800">Email Address</p>
                  <a href="mailto:sandip.chavan@mitpune.edu.in" className="text-indigo-600 hover:underline">
                    sandip.chavan@mitpune.edu.in
                  </a>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-xl shrink-0 mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-bold text-slate-800">Working Hours</p>
                  <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-4 rounded-xl shadow-2xl border border-slate-800 max-w-sm"
          >
            <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm">Message Sent Successfully</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Thank you! Dr. Chavan will get back to you shortly.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="p-1 text-slate-400 hover:text-white rounded-md transition-colors shrink-0 cursor-pointer ml-2"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
