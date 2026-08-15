'use client';

import React, { useState, useEffect } from 'react';
import { 
  Accessibility, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Sun, 
  Moon, 
  Type, 
  Underline, 
  MousePointer, 
  Pause, 
  RotateCcw,
  Eye,
  Sparkles,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Accessibility states
  const [textSize, setTextSize] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [contrastMode, setContrastMode] = useState('default'); // 'default' | 'high' | 'monochrome' | 'invert'
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('webint_a11y_prefs');
      if (saved) {
        const prefs = JSON.parse(saved);
        if (prefs.textSize) setTextSize(prefs.textSize);
        if (prefs.contrastMode) setContrastMode(prefs.contrastMode);
        if (prefs.dyslexicFont !== undefined) setDyslexicFont(prefs.dyslexicFont);
        if (prefs.highlightLinks !== undefined) setHighlightLinks(prefs.highlightLinks);
        if (prefs.pauseAnimations !== undefined) setPauseAnimations(prefs.pauseAnimations);
        if (prefs.bigCursor !== undefined) setBigCursor(prefs.bigCursor);
      }
    } catch (e) {
      console.warn('Unable to load accessibility preferences');
    }
  }, []);

  // Sync DOM classes whenever preferences change
  useEffect(() => {
    const root = document.documentElement;
    
    // Text sizing
    root.classList.remove('a11y-text-large', 'a11y-text-xlarge');
    if (textSize === 'large') root.classList.add('a11y-text-large');
    if (textSize === 'xlarge') root.classList.add('a11y-text-xlarge');

    // Contrast modes
    root.classList.remove('a11y-high-contrast', 'a11y-monochrome', 'a11y-invert');
    if (contrastMode === 'high') root.classList.add('a11y-high-contrast');
    if (contrastMode === 'monochrome') root.classList.add('a11y-monochrome');
    if (contrastMode === 'invert') root.classList.add('a11y-invert');

    // Dyslexic font
    if (dyslexicFont) root.classList.add('a11y-dyslexic');
    else root.classList.remove('a11y-dyslexic');

    // Highlight links
    if (highlightLinks) root.classList.add('a11y-highlight-links');
    else root.classList.remove('a11y-highlight-links');

    // Pause animations
    if (pauseAnimations) root.classList.add('a11y-pause-animations');
    else root.classList.remove('a11y-pause-animations');

    // Big cursor
    if (bigCursor) root.classList.add('a11y-big-cursor');
    else root.classList.remove('a11y-big-cursor');

    // Save to localStorage
    try {
      localStorage.setItem('webint_a11y_prefs', JSON.stringify({
        textSize,
        contrastMode,
        dyslexicFont,
        highlightLinks,
        pauseAnimations,
        bigCursor
      }));
    } catch (e) {}
  }, [textSize, contrastMode, dyslexicFont, highlightLinks, pauseAnimations, bigCursor]);

  // Keyboard escape listener to close dialog
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const resetAll = () => {
    setTextSize('normal');
    setContrastMode('default');
    setDyslexicFont(false);
    setHighlightLinks(false);
    setPauseAnimations(false);
    setBigCursor(false);
    try {
      localStorage.removeItem('webint_a11y_prefs');
    } catch (e) {}
  };

  const hasActiveOverrides = textSize !== 'normal' || contrastMode !== 'default' || dyslexicFont || highlightLinks || pauseAnimations || bigCursor;

  return (
    <>
      {/* FLOATING ACCESSIBILITY TRIGGER BUTTON */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Accessibility Tools" : "Open Accessibility and Disability Tools"}
          aria-expanded={isOpen}
          aria-controls="accessibility-modal"
          className="relative group w-12 h-12 rounded-2xl bg-[#00f5a0] text-black font-bold flex items-center justify-center shadow-[0_0_25px_rgba(0,245,160,0.5)] hover:bg-[#00d9f5] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00f5a0]/50"
        >
          <Accessibility size={24} className="stroke-[2.5]" />
          {hasActiveOverrides && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 border-2 border-black rounded-full" />
          )}
          <span className="sr-only">Accessibility Tools</span>
        </button>
      </div>

      {/* ACCESSIBILITY MODAL DIALOG */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="accessibility-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-widget-title"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 left-6 z-50 w-[340px] sm:w-[380px] max-h-[80vh] overflow-y-auto rounded-3xl bg-[#090d16]/98 backdrop-blur-2xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] p-6 text-white"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-[#00f5a0] flex items-center justify-center">
                  <Accessibility size={18} />
                </div>
                <div>
                  <h3 id="a11y-widget-title" className="text-base font-extrabold text-white">
                    Accessibility Tools
                  </h3>
                  <p className="text-[11px] text-slate-300">WCAG 2.2 &amp; ADA Preferences</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility menu"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Controls Grid */}
            <div className="space-y-4 pt-4">

              {/* 1. TEXT SIZE */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#00f5a0] mb-2 flex items-center gap-1.5">
                  <Type size={13} /> Text Size
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTextSize('normal')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                      textSize === 'normal'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    100% (Default)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTextSize('large')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                      textSize === 'large'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    115% Large
                  </button>
                  <button
                    type="button"
                    onClick={() => setTextSize('xlarge')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                      textSize === 'xlarge'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    130% X-Large
                  </button>
                </div>
              </div>

              {/* 2. CONTRAST MODES */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#00f5a0] mb-2 flex items-center gap-1.5">
                  <Sun size={13} /> Contrast &amp; Colors
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setContrastMode('default')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      contrastMode === 'default'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Standard Dark
                  </button>
                  <button
                    type="button"
                    onClick={() => setContrastMode('high')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      contrastMode === 'high'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    High Contrast B&amp;W
                  </button>
                  <button
                    type="button"
                    onClick={() => setContrastMode('monochrome')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      contrastMode === 'monochrome'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Monochrome (Gray)
                  </button>
                  <button
                    type="button"
                    onClick={() => setContrastMode('invert')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      contrastMode === 'invert'
                        ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                        : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    Invert Colors
                  </button>
                </div>
              </div>

              {/* 3. TOGGLE BUTTONS */}
              <div className="space-y-2 pt-1">
                
                {/* Dyslexia font */}
                <button
                  type="button"
                  onClick={() => setDyslexicFont(!dyslexicFont)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all ${
                    dyslexicFont
                      ? 'bg-emerald-500/20 text-[#00f5a0] border-[#00f5a0]/50'
                      : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Type size={14} /> Dyslexia Friendly Font
                  </span>
                  {dyslexicFont && <Check size={14} className="text-[#00f5a0]" />}
                </button>

                {/* Highlight links */}
                <button
                  type="button"
                  onClick={() => setHighlightLinks(!highlightLinks)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all ${
                    highlightLinks
                      ? 'bg-emerald-500/20 text-[#00f5a0] border-[#00f5a0]/50'
                      : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Underline size={14} /> Highlight All Links
                  </span>
                  {highlightLinks && <Check size={14} className="text-[#00f5a0]" />}
                </button>

                {/* Pause Animations */}
                <button
                  type="button"
                  onClick={() => setPauseAnimations(!pauseAnimations)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all ${
                    pauseAnimations
                      ? 'bg-emerald-500/20 text-[#00f5a0] border-[#00f5a0]/50'
                      : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Pause size={14} /> Stop / Pause Motion
                  </span>
                  {pauseAnimations && <Check size={14} className="text-[#00f5a0]" />}
                </button>

                {/* Big Cursor */}
                <button
                  type="button"
                  onClick={() => setBigCursor(!bigCursor)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all ${
                    bigCursor
                      ? 'bg-emerald-500/20 text-[#00f5a0] border-[#00f5a0]/50'
                      : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MousePointer size={14} /> Large Reading Cursor
                  </span>
                  {bigCursor && <Check size={14} className="text-[#00f5a0]" />}
                </button>

              </div>

              {/* Reset Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetAll}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  <RotateCcw size={13} /> Reset All Preferences
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
