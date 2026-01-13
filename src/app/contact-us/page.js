'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  MessageSquare,
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

    // Professional Message Formatting for WhatsApp
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

    // Small delay to show success state before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 pt-32 pb-20 selection:bg-[#25ccad]/30 relative overflow-hidden font-inter">

      {/* Premium Design Accents - Minimal & Pure */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-[#E9FAF6] rounded-full blur-[150px] -z-10 opacity-70" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#25ccad]/5 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row gap-20 items-stretch">

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
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#25ccad]/10 rounded-2xl border border-[#25ccad]/20 mb-8"
                >
                  <Zap className="w-4 h-4 text-[#25ccad] fill-[#25ccad]" />
                  <span className="text-[11px] font-black tracking-[0.25em] text-[#25ccad] uppercase">Strategic Consulting</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-10">
                  Connect with <br />
                  <span className="text-[#25ccad] relative">
                    Webintegratorz.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#25ccad]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                    </svg>
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                  Experience a partnership built on transparency, technical excellence, and rapid scaling. Fill the form to initiate a high-priority discussion.
                </p>
              </div>

              {/* High-End Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#E9FAF6]/30 border border-[#25ccad]/10 rounded-[2rem]">
                  <Clock className="w-8 h-8 text-[#25ccad] mb-4" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#25ccad] mb-2">Response Time</h4>
                  <p className="text-2xl font-black text-slate-800 tracking-tight">Under 2 Hours</p>
                </div>

                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2rem]">
                  <ShieldCheck className="w-8 h-8 text-slate-400 mb-4" />
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Priority Support</h4>
                  <p className="text-2xl font-black text-slate-800 tracking-tight">Active Team</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-3">Support Central</p>
                <p className="text-2xl font-black text-[#25ccad] tracking-tight">+91 89899 44488</p>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#25ccad] flex items-center justify-center text-[10px] font-black text-white">
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
            <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(37,204,173,0.12)] border border-slate-50 relative overflow-hidden group">

              {/* Submission Animation */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/98 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-10"
                  >
                    <div className="w-24 h-24 bg-[#25ccad]/10 rounded-full flex items-center justify-center mb-8 relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-[#25ccad]/10 rounded-full"
                      />
                      <CheckCircle2 className="w-12 h-12 text-[#25ccad]" />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tight">Syncing with WhatsApp</h2>
                    <p className="text-slate-500 font-bold max-w-xs leading-relaxed">
                      Handshaking with our priority support channel...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-black tracking-tight">Inquiry Form</h2>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#25ccad]" />
                  <span className="w-4 h-2 rounded-full bg-[#25ccad]/30" />
                  <span className="w-2 h-2 rounded-full bg-[#25ccad]/30" />
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <User size={14} className="text-[#25ccad]" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. John Anderson"
                      value={formData.name}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      onChange={handleInputChange}
                      className={`w-full px-7 py-5 bg-slate-50 border-2 rounded-[1.5rem] focus:outline-none transition-all font-bold placeholder:text-slate-300 ${activeField === 'name' ? 'border-[#25ccad] bg-white ring-8 ring-[#25ccad]/5' : 'border-transparent'
                        }`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Mail size={14} className="text-[#25ccad]" /> Business Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      onChange={handleInputChange}
                      className={`w-full px-7 py-5 bg-slate-50 border-2 rounded-[1.5rem] focus:outline-none transition-all font-bold placeholder:text-slate-300 ${activeField === 'email' ? 'border-[#25ccad] bg-white ring-8 ring-[#25ccad]/5' : 'border-transparent'
                        }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Phone size={14} className="text-[#25ccad]" /> Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+91 89899 44488"
                      value={formData.phone}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      onChange={handleInputChange}
                      className={`w-full px-7 py-5 bg-slate-50 border-2 rounded-[1.5rem] focus:outline-none transition-all font-bold placeholder:text-slate-300 ${activeField === 'phone' ? 'border-[#25ccad] bg-white ring-8 ring-[#25ccad]/5' : 'border-transparent'
                        }`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <FileText size={14} className="text-[#25ccad]" /> Project Nature
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onFocus={() => setActiveField('projectType')}
                        onBlur={() => setActiveField(null)}
                        onChange={handleInputChange}
                        className={`w-full px-7 py-5 bg-slate-50 border-2 rounded-[1.5rem] focus:outline-none transition-all font-black appearance-none cursor-pointer ${activeField === 'projectType' ? 'border-[#25ccad] bg-white ring-8 ring-[#25ccad]/5' : 'border-transparent'
                          }`}
                      >
                        {projectOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Send size={14} className="text-[#25ccad]" /> Detailed Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    name="message"
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    onChange={handleInputChange}
                    className={`w-full px-7 py-5 bg-slate-50 border-2 rounded-[1.5rem] focus:outline-none transition-all font-bold placeholder:text-slate-300 resize-none ${activeField === 'message' ? 'border-[#25ccad] bg-white ring-8 ring-[#25ccad]/5' : 'border-transparent'
                      }`}
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full h-20 bg-[#25ccad] hover:bg-[#1fa98d] text-black font-black text-xl rounded-[1.8rem] shadow-[0_30px_60px_-15px_rgba(37,204,173,0.4)] hover:shadow-[0_40px_80px_-20px_rgba(37,204,173,0.5)] hover:-translate-y-1.5 transition-all duration-500 flex items-center justify-between px-8 md:justify-center md:gap-4 group"
                  >
                    {/* Desktop WhatsApp Icon (Left) */}
                    <div className="hidden md:block">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.119.553 4.187 1.602 6.007L0 24l6.123-1.606a11.845 11.845 0 005.683 1.448h.005c6.632 0 12.029-5.394 12.035-12.031a11.77 11.77 0 00-3.517-8.417" />
                      </svg>
                    </div>

                    <span className="flex-1 md:flex-none text-left md:text-center">Connect via WhatsApp</span>

                    {/* Mobile WhatsApp Icon (Right) */}
                    <div className="md:hidden">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.119.553 4.187 1.602 6.007L0 24l6.123-1.606a11.845 11.845 0 005.928 1.57h.005c6.632 0 12.029-5.394 12.035-12.031a11.77 11.77 0 00-3.517-8.417" />
                      </svg>
                    </div>

                    {/* Desktop Chevron (Right) */}
                    <div className="hidden md:flex w-8 h-8 rounded-full bg-black/10 items-center justify-center group-hover:bg-black/20 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>

                  <div className="mt-8 flex items-center justify-center gap-10 opacity-40">
                    <div className="flex items-center gap-2">
                      <Globe size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Global Ops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">256-Bit Secure</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Premium Interactive Backdrop Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border-4 border-[#25ccad]/10 rounded-full pointer-events-none"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
