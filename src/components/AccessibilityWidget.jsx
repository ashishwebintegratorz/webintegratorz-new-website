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
  Check,
  ZoomIn
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
      
      {/* FLOATING ACCESSIBILITY TRIGGER BUTTON (Mobile & Tablet Optimized) */}
      <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[99999] flex items-center gap-2.5 pointer-events-auto select-none touch-manipulation">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          aria-label={isOpen ? "Close Accessibility Options" : "Open Accessibility and Disability Options"}
          aria-expanded={isOpen}
          aria-controls="accessibility-modal"
          className="relative w-12 h-12 sm:w-14 sm:h-14 p-2.5 sm:p-3 rounded-2xl bg-[#00f5a0] text-black font-black flex items-center justify-center shadow-[0_0_30px_rgba(0,245,160,0.7)] hover:bg-[#00d9f5] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00f5a0]/50 cursor-pointer touch-manipulation"
        >
          <Accessibility size={24} className="stroke-[2.5] sm:w-[26px] sm:h-[26px]" />
          {hasActiveOverrides && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-cyan-400 border-2 border-black rounded-full shadow" />
          )}
        </button>
      </div>

      {/* ACCESSIBILITY MODAL DIALOG */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for easy outside click dismissal on mobile/tablet */}
            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="fixed inset-0 z-[99998] bg-black/60 backdrop-blur-sm transition-opacity touch-manipulation" 
              aria-hidden="true"
            />

            <motion.div
              id="accessibility-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="a11y-widget-title"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-20 sm:bottom-24 left-4 sm:left-6 right-4 sm:right-auto sm:w-[380px] max-h-[85vh] max-h-[85dvh] overflow-y-auto rounded-3xl bg-[#070b14] border-2 border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.98)] p-5 sm:p-6 text-white z-[99999] touch-manipulation overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
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
                    <p className="text-[11px] text-slate-300">WCAG 2.2 &amp; ADA Modes</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  aria-label="Close accessibility menu"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer touch-manipulation"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Controls Grid */}
              <div className="space-y-4 pt-4">

                {/* 1. TEXT SIZE */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00f5a0] mb-2 flex items-center gap-1.5">
                    <Type size={13} /> Text Size Scaling
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setTextSize('normal')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'normal'
                          ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                          : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      100% Normal
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextSize('large')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
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
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
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
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
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
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
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
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
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
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'invert'
                          ? 'bg-[#00f5a0] text-black border-[#00f5a0]'
                          : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      Invert Colors
                    </button>
                  </div>
                </div>

                {/* 3. ASSISTIVE TOGGLE BUTTONS */}
                <div className="space-y-2 pt-1">
                  
                  {/* Dyslexia font */}
                  <button
                    type="button"
                    onClick={() => setDyslexicFont(!dyslexicFont)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
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
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
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
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
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
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
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
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-white/10 cursor-pointer"
                  >
                    <RotateCcw size={13} /> Reset All Preferences
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
