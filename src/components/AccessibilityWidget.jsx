'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Accessibility, 
  X, 
  Sun, 
  Type, 
  Underline, 
  MousePointer, 
  Pause, 
  RotateCcw,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const widgetRef = useRef(null);
  
  // Accessibility states
  const [textSize, setTextSize] = useState('normal'); // 'normal' | 'large' | 'xlarge'
  const [contrastMode, setContrastMode] = useState('default'); // 'default' | 'high' | 'monochrome' | 'invert'
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);

  // Avoid SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
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
    } catch (e) {}
  }, []);

  // Sync DOM classes whenever preferences change
  useEffect(() => {
    if (!mounted) return;
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
  }, [textSize, contrastMode, dyslexicFont, highlightLinks, pauseAnimations, bigCursor, mounted]);

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

  if (!mounted) return null;

  const hasActiveOverrides = textSize !== 'normal' || contrastMode !== 'default' || dyslexicFont || highlightLinks || pauseAnimations || bigCursor;

  return (
    <div ref={widgetRef} className="relative z-[99999]">
      
      {/* FLOATING ACCESSIBILITY TRIGGER BUTTON */}
      <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[99999] flex items-center gap-2.5 pointer-events-auto select-none touch-manipulation">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          aria-label={isOpen ? "Close Accessibility Options" : "Open Accessibility and Disability Options"}
          aria-expanded={isOpen}
          aria-controls="accessibility-modal"
          className="relative w-12 h-12 sm:w-13 sm:h-13 p-2.5 sm:p-3 rounded-2xl bg-[#0A2540] text-white font-bold flex items-center justify-center shadow-[0_4px_20px_rgba(10,37,64,0.3)] hover:bg-[#635BFF] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 cursor-pointer touch-manipulation"
        >
          <Accessibility size={22} className="stroke-[2.5]" />
          {hasActiveOverrides && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#635BFF] border-2 border-white rounded-full shadow" />
          )}
        </button>
      </div>

      {/* ACCESSIBILITY MODAL DIALOG */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for outside click dismissal */}
            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }} 
              className="fixed inset-0 z-[99998] bg-slate-900/40 backdrop-blur-sm transition-opacity touch-manipulation" 
              aria-hidden="true"
            />

            <motion.div
              id="accessibility-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="a11y-widget-title"
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 sm:bottom-24 left-4 sm:left-6 right-4 sm:right-auto sm:w-[380px] max-h-[85vh] max-h-[85dvh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-[0_25px_70px_rgba(15,23,42,0.18)] p-5 sm:p-6 text-slate-900 z-[99999] touch-manipulation"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#635BFF] flex items-center justify-center">
                    <Accessibility size={18} />
                  </div>
                  <div>
                    <h3 id="a11y-widget-title" className="text-sm font-bold text-[#0A2540]">
                      Accessibility Tools
                    </h3>
                    <p className="text-[11px] text-slate-500">WCAG 2.2 &amp; ADA Compliance</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close accessibility menu"
                  className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-black flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Controls Grid */}
              <div className="space-y-4 pt-4">

                {/* 1. TEXT SIZE */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2 flex items-center gap-1.5">
                    <Type size={13} className="text-[#635BFF]" /> Text Size Scaling
                  </p>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setTextSize('normal')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'normal'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      100% Default
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextSize('large')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'large'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      115% Large
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextSize('xlarge')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'xlarge'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      130% X-Large
                    </button>
                  </div>
                </div>

                {/* 2. CONTRAST MODES */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0A2540] mb-2 flex items-center gap-1.5">
                    <Sun size={13} className="text-[#635BFF]" /> Contrast &amp; Colors
                  </p>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setContrastMode('default')}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'default'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Standard Light
                    </button>
                    <button
                      type="button"
                      onClick={() => setContrastMode('high')}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'high'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      High Contrast B&amp;W
                    </button>
                    <button
                      type="button"
                      onClick={() => setContrastMode('monochrome')}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'monochrome'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Monochrome (Gray)
                    </button>
                    <button
                      type="button"
                      onClick={() => setContrastMode('invert')}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'invert'
                          ? 'bg-[#0A2540] text-white border-[#0A2540]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Invert Colors
                    </button>
                  </div>
                </div>

                {/* 3. ASSISTIVE TOGGLES */}
                <div className="space-y-1.5 pt-1">
                  
                  {/* Dyslexia font */}
                  <button
                    type="button"
                    onClick={() => setDyslexicFont(!dyslexicFont)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      dyslexicFont
                        ? 'bg-indigo-50 text-[#635BFF] border-indigo-200'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Type size={13} /> Dyslexia Friendly Font
                    </span>
                    {dyslexicFont && <Check size={13} className="text-[#635BFF]" />}
                  </button>

                  {/* Highlight links */}
                  <button
                    type="button"
                    onClick={() => setHighlightLinks(!highlightLinks)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      highlightLinks
                        ? 'bg-indigo-50 text-[#635BFF] border-indigo-200'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Underline size={13} /> Highlight All Links
                    </span>
                    {highlightLinks && <Check size={13} className="text-[#635BFF]" />}
                  </button>

                  {/* Pause Animations */}
                  <button
                    type="button"
                    onClick={() => setPauseAnimations(!pauseAnimations)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      pauseAnimations
                        ? 'bg-indigo-50 text-[#635BFF] border-indigo-200'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Pause size={13} /> Stop / Pause Motion
                    </span>
                    {pauseAnimations && <Check size={13} className="text-[#635BFF]" />}
                  </button>

                  {/* Big Cursor */}
                  <button
                    type="button"
                    onClick={() => setBigCursor(!bigCursor)}
                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      bigCursor
                        ? 'bg-indigo-50 text-[#635BFF] border-indigo-200'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <MousePointer size={13} /> Large Reading Cursor
                    </span>
                    {bigCursor && <Check size={13} className="text-[#635BFF]" />}
                  </button>

                </div>

                {/* Reset Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={resetAll}
                    className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-slate-200 cursor-pointer"
                  >
                    <RotateCcw size={12} /> Reset Preferences
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
