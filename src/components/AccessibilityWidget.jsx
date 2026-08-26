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
    } catch (e) {
      console.error(e);
    }
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
    } catch (e) {
      console.error(e);
    }
  }, [textSize, contrastMode, dyslexicFont, highlightLinks, pauseAnimations, bigCursor, mounted]);

  const resetAll = () => {
    setTextSize('normal');
    setContrastMode('default');
    setDyslexicFont(false);
    setHighlightLinks(false);
    setPauseAnimations(false);
    setBigCursor(false);
    try {
      localStorage.removeItem('webint_a11y_prefs');
    } catch (e) {
      console.error(e);
    }
  };

  const hasActiveOverrides = textSize !== 'normal' || contrastMode !== 'default' || dyslexicFont || highlightLinks || pauseAnimations || bigCursor;

  if (!mounted) return null;

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
          className="relative w-12 h-12 sm:w-14 sm:h-14 p-2.5 sm:p-3 rounded-2xl bg-[#155dfc] text-white font-bold flex items-center justify-center shadow-2xl hover:bg-[#50a2ff] hover:text-[#030712] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation"
        >
          <Accessibility size={24} className="stroke-[2.5] sm:w-[26px] sm:h-[26px]" />
          {hasActiveOverrides && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#50a2ff] border-2 border-[#030712] rounded-full shadow" />
          )}
        </button>
      </div>

      {/* ACCESSIBILITY MODAL DIALOG */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="fixed inset-0 z-[99998] bg-black/60 backdrop-blur-xs transition-opacity touch-manipulation" 
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
              className="fixed bottom-20 sm:bottom-24 left-4 sm:left-6 right-4 sm:right-auto sm:w-[380px] max-h-[85vh] max-h-[85dvh] overflow-y-auto rounded-3xl bg-[#030712] border border-white/[0.12] shadow-2xl p-5 sm:p-6 text-white z-[99999] touch-manipulation overscroll-contain relative font-inter"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#155dfc] to-transparent opacity-70" />

              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#155dfc]/15 text-[#50a2ff] border border-[#155dfc]/30 flex items-center justify-center">
                    <Accessibility size={18} />
                  </div>
                  <div>
                    <h3 id="a11y-widget-title" className="text-base font-extrabold text-white">
                      Accessibility Tools
                    </h3>
                    <p className="text-[11px] text-gray-400">WCAG 2.2 &amp; ADA Modes</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  aria-label="Close accessibility menu"
                  className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer touch-manipulation border border-white/[0.08]"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Controls Grid */}
              <div className="space-y-4 pt-4 relative z-10">

                {/* 1. TEXT SIZE */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#50a2ff] mb-2 flex items-center gap-1.5">
                    <Type size={13} /> Text Size Scaling
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setTextSize('normal')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'normal'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      100% Normal
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextSize('large')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'large'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      115% Large
                    </button>
                    <button
                      type="button"
                      onClick={() => setTextSize('xlarge')}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        textSize === 'xlarge'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      130% X-Large
                    </button>
                  </div>
                </div>

                {/* 2. CONTRAST MODES */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#50a2ff] mb-2 flex items-center gap-1.5">
                    <Sun size={13} /> Contrast &amp; Colors
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setContrastMode('default')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'default'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      Standard Dark
                    </button>
                    <button
                      type="button"
                      onClick={() => setContrastMode('high')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'high'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      High Contrast
                    </button>
                    <button
                      type="button"
                      onClick={() => setContrastMode('monochrome')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'monochrome'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      Monochrome
                    </button>
                    <button
                      type="button"
                      onClick={() => setContrastMode('invert')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        contrastMode === 'invert'
                          ? 'bg-[#155dfc] text-white border-[#155dfc]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
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
                        ? 'bg-[#155dfc]/20 text-[#50a2ff] border-[#155dfc]/40'
                        : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Type size={14} className="text-[#50a2ff]" /> Dyslexia Friendly Font
                    </span>
                    {dyslexicFont && <Check size={14} className="text-[#50a2ff]" />}
                  </button>

                  {/* Highlight links */}
                  <button
                    type="button"
                    onClick={() => setHighlightLinks(!highlightLinks)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      highlightLinks
                        ? 'bg-[#155dfc]/20 text-[#50a2ff] border-[#155dfc]/40'
                        : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Underline size={14} className="text-[#50a2ff]" /> Highlight All Links
                    </span>
                    {highlightLinks && <Check size={14} className="text-[#50a2ff]" />}
                  </button>

                  {/* Pause Animations */}
                  <button
                    type="button"
                    onClick={() => setPauseAnimations(!pauseAnimations)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      pauseAnimations
                        ? 'bg-[#155dfc]/20 text-[#50a2ff] border-[#155dfc]/40'
                        : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Pause size={14} className="text-[#50a2ff]" /> Stop / Pause Motion
                    </span>
                    {pauseAnimations && <Check size={14} className="text-[#50a2ff]" />}
                  </button>

                  {/* Big Cursor */}
                  <button
                    type="button"
                    onClick={() => setBigCursor(!bigCursor)}
                    className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border flex items-center justify-between transition-all cursor-pointer ${
                      bigCursor
                        ? 'bg-[#155dfc]/20 text-[#50a2ff] border-[#155dfc]/40'
                        : 'bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <MousePointer size={14} className="text-[#50a2ff]" /> Large Reading Cursor
                    </span>
                    {bigCursor && <Check size={14} className="text-[#50a2ff]" />}
                  </button>

                </div>

                {/* Reset Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={resetAll}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-white/[0.08] cursor-pointer"
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
