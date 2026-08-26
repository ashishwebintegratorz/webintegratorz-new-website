'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  ChevronRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  FileText,
  Clock,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactUsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact-us' }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Custom Development',
    message: ''
  });

  const [activeField, setActiveField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectOptions = [
    'Custom Development',
    'Mobile Application',
    'Enterprise SaaS',
    'AI & Automation',
    'E-Commerce Hub',
    'UI/UX Consulting'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const whatsappMsg = `*🌟 NEW PROJECT INQUIRY*%0A` +
      `----------------------------%0A` +
      `*👤 Client Name:* ${formData.name}%0A` +
      `*📧 Email:* ${formData.email}%0A` +
      `*📞 Phone:* ${formData.phone}%0A` +
      `*🛠️ Interest:* ${formData.projectType}%0A` +
      `*📝 Brief:* ${formData.message}%0A` +
      `----------------------------%0A` +
      `_Inquiry generated via Webintegratorz Portal_`;

    const whatsappUrl = `https://wa.me/918989944488?text=${whatsappMsg}`;

    setIsSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20 selection:bg-[#50a2ff] selection:text-[#030712] relative overflow-hidden font-inter">

      {/* Ambient Glows */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-[#155dfc]/5 rounded-full blur-[150px] -z-10 opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#50a2ff]/5 rounded-full blur-[120px] -z-10 opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">

          {/* Left Side: Strategic Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[45%] flex flex-col justify-between py-4"
          >
            <div className="space-y-10">
              <div>
                <Breadcrumbs items={breadcrumbItems} />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#030712] rounded-full border border-[#155dfc]/30 mb-8"
                >
                  <Zap className="w-4 h-4 text-[#50a2ff]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#50a2ff] uppercase">Strategic Consulting</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 text-white">
                  Connect with <br />
                  <span className="bg-gradient-to-r from-[#155dfc] to-[#50a2ff] bg-clip-text text-transparent">
                    Webintegratorz.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-normal">
                  Experience a partnership built on transparency, technical excellence, and rapid scaling. Fill the form to initiate a high-priority discussion.
                </p>
              </div>

              {/* High-End Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-7 bg-[#030712] border border-white/[0.08] rounded-2xl shadow-2xl hover:border-[#50a2ff]/40 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                  <Clock className="w-8 h-8 text-[#50a2ff] mb-4" />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] mb-1">Response Time</h4>
                  <p className="text-2xl font-bold text-white tracking-tight">Under 2 Hours</p>
                </div>

                <div className="p-7 bg-[#030712] border border-white/[0.08] rounded-2xl shadow-2xl hover:border-[#50a2ff]/40 transition-all relative overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-60 group-hover:opacity-100 group-hover:via-[#50a2ff] transition-opacity" />
                  <ShieldCheck className="w-8 h-8 text-[#50a2ff] mb-4" />
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#50a2ff] mb-1">Priority Support</h4>
                  <p className="text-2xl font-bold text-white tracking-tight">Active Team</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Support Central</p>
                <p className="text-2xl font-bold text-[#50a2ff] tracking-tight">+91 89899 44488</p>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030712] bg-[#030712] shadow-xs overflow-hidden relative">
                    <Image
                      src={`https://i.pravatar.cc/100?u=${i}`}
                      alt="user"
                      fill
                      sizes="40px"
                      className="object-cover grayscale opacity-80"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-[#155dfc] flex items-center justify-center text-[10px] font-black text-white">
                  +12
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Re-engineered Form */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:w-[55%] relative"
          >
            <div className="bg-[#030712] border border-white/[0.08] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />

              {/* Submission Animation */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#030712] z-50 flex flex-col items-center justify-center text-center p-10"
                  >
                    <div className="w-24 h-24 bg-[#155dfc]/15 rounded-full flex items-center justify-center mb-8 relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-[#155dfc]/10 rounded-full"
                      />
                      <CheckCircle2 className="w-12 h-12 text-[#50a2ff]" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3 tracking-tight text-white">Syncing with WhatsApp</h2>
                    <p className="text-gray-400 font-medium max-w-xs leading-relaxed">
                      Handshaking with our priority support channel...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Inquiry Form</h2>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#155dfc]" />
                  <span className="w-4 h-2 rounded-full bg-[#50a2ff]" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6" aria-label="Contact and Consultation Form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="contact-name" className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                      <User size={14} className="text-[#50a2ff]" /> Full Name <span className="text-[#50a2ff]" aria-hidden="true">*</span>
                    </label>
                    <input
                      required
                      id="contact-name"
                      type="text"
                      name="name"
                      aria-required="true"
                      placeholder="e.g. John Anderson"
                      value={formData.name}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 bg-white/[0.04] border rounded-xl focus:outline-none transition-all font-medium text-white placeholder:text-gray-500 ${activeField === 'name' ? 'border-[#50a2ff] ring-4 ring-[#155dfc]/10' : 'border-white/[0.08]'
                        }`}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="contact-email" className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                      <Mail size={14} className="text-[#50a2ff]" /> Business Email <span className="text-[#50a2ff]" aria-hidden="true">*</span>
                    </label>
                    <input
                      required
                      id="contact-email"
                      type="email"
                      name="email"
                      aria-required="true"
                      placeholder="john@company.com"
                      value={formData.email}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 bg-white/[0.04] border rounded-xl focus:outline-none transition-all font-medium text-white placeholder:text-gray-500 ${activeField === 'email' ? 'border-[#50a2ff] ring-4 ring-[#155dfc]/10' : 'border-white/[0.08]'
                        }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                      <Phone size={14} className="text-[#50a2ff]" /> Phone Number <span className="text-[#50a2ff]" aria-hidden="true">*</span>
                    </label>
                    <input
                      required
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      aria-required="true"
                      placeholder="+91 89899 44488"
                      value={formData.phone}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 bg-white/[0.04] border rounded-xl focus:outline-none transition-all font-medium text-white placeholder:text-gray-500 ${activeField === 'phone' ? 'border-[#50a2ff] ring-4 ring-[#155dfc]/10' : 'border-white/[0.08]'
                        }`}
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="contact-project-type" className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                      <FileText size={14} className="text-[#50a2ff]" /> Project Nature
                    </label>
                    <div className="relative">
                      <select
                        id="contact-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onFocus={() => setActiveField('projectType')}
                        onBlur={() => setActiveField(null)}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 bg-[#030712] border rounded-xl focus:outline-none transition-all font-medium appearance-none cursor-pointer text-white ${activeField === 'projectType' ? 'border-[#50a2ff] ring-4 ring-[#155dfc]/10' : 'border-white/[0.08]'
                          }`}
                      >
                        {projectOptions.map(option => (
                          <option key={option} value={option} className="bg-[#030712] text-white">{option}</option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                    <Send size={14} className="text-[#50a2ff]" /> Detailed Message <span className="text-[#50a2ff]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    id="contact-message"
                    name="message"
                    aria-required="true"
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    onChange={handleInputChange}
                    className={`w-full px-5 py-4 bg-white/[0.04] border rounded-xl focus:outline-none transition-all font-medium text-white placeholder:text-gray-500 resize-none ${activeField === 'message' ? 'border-[#50a2ff] ring-4 ring-[#155dfc]/10' : 'border-white/[0.08]'
                      }`}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-16 bg-[#155dfc] hover:bg-[#50a2ff] hover:text-[#030712] text-white font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-between px-8 md:justify-center md:gap-4 group cursor-pointer"
                  >
                    <span className="flex-1 md:flex-none text-left md:text-center">Connect via WhatsApp</span>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>

                  <div className="mt-6 flex items-center justify-center gap-8 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Globe size={13} className="text-[#50a2ff]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Global Ops</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#50a2ff]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">256-Bit Secure</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
