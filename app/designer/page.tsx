'use client';

import React, { useEffect, useState } from 'react';

export default function DesignerPage() {
  const [loadingStatus, setLoadingStatus] = useState<string>('Loading libraries...');
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('designer-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme preference when it changes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('designer-theme', newTheme);
  };

  useEffect(() => {
    // Inject local font checker if not exist
    if (!document.getElementById('font-checker')) {
      const span = document.createElement('span');
      span.id = 'font-checker';
      span.innerText = 'g';
      span.style.position = 'absolute';
      span.style.left = '-10000px';
      span.style.top = '-10000px';
      span.style.fontSize = '300px';
      document.body.appendChild(span);
    }

    // Initialize stub for Modernizr
    (window as any).Modernizr = {
      draganddrop: true,
    };

    // Global interceptors to prevent crashes on legacy selectors
    const originalGetById = document.getElementById;
    const mockCache: { [key: string]: HTMLElement } = {};
    document.getElementById = function (id: string) {
      const el = originalGetById.call(document, id);
      if (el) return el;
      if (id === 'font-checker') return null as any; // Allow the font checker check to register it as not found initially
      if (mockCache[id]) return mockCache[id];

      console.warn(`[Compatibility Proxy] Element with ID "${id}" was not found. Mocking to prevent crash.`);
      const mock = document.createElement('div');
      mock.id = id;
      (mock as any).value = '';
      (mock as any).checked = false;
      (mock as any).style = {};
      mockCache[id] = mock;
      return mock;
    };

    const originalQuerySelector = document.querySelector;
    const mockSelectorCache: { [key: string]: HTMLElement } = {};
    document.querySelector = function (selector: string) {
      const el = originalQuerySelector.call(document, selector);
      if (el) return el;
      if (mockSelectorCache[selector]) return mockSelectorCache[selector] as any;

      console.warn(`[Compatibility Proxy] Selector "${selector}" was not found. Mocking to prevent crash.`);
      const mock = document.createElement('div');
      (mock as any).value = '';
      (mock as any).checked = false;
      (mock as any).style = {};
      (mock as any).querySelector = (s: string) => {
        const nestedEl = originalQuerySelector.call(mock, s);
        if (nestedEl) return nestedEl;
        const subMock = document.createElement('div');
        (subMock as any).value = '';
        (subMock as any).checked = false;
        (subMock as any).style = {};
        return subMock;
      };
      (mock as any).querySelectorAll = () => [];
      mockSelectorCache[selector] = mock;
      return mock as any;
    };

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (err) => reject(err);
        document.body.appendChild(script);
      });
    };

    const init = async () => {
      try {
        setLoadingStatus('Loading jQuery...');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        
        setLoadingStatus('Loading Fabric.js (Legacy 2.7.0)...');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.7.0/fabric.min.js');

        setLoadingStatus('Initializing DSMenu Engine...');
        await loadScript('/Fabric_2_0_0.js');

        setLoadingStatus('Ready');
        setScriptsLoaded(true);

        if ((window as any).jQuery) {
          (window as any).jQuery(window).trigger('load');
          console.log('Engine initialized and window load event triggered.');
        }
      } catch (err) {
        console.error('Failed to load legacy designer dependencies:', err);
        setLoadingStatus('Initialization error. Check console.');
      }
    };

    init();
  }, []);

  return (
    <div className={`flex flex-col h-screen w-screen font-sans overflow-hidden select-none transition-colors duration-300 ${
      theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Google Fonts and CSS Aliases */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Andika&family=Anton&family=Audiowide&family=Bad+Script&family=Barlow&family=Bebas+Neue&family=Montserrat:wght@400;700&display=swap');

        /* Font aliases for Fabric.js */
        @font-face { font-family: 'AbrilFatface'; src: local('Abril Fatface'); }
        @font-face { font-family: 'Andika'; src: local('Andika'); }
        @font-face { font-family: 'Anton'; src: local('Anton'); }
        @font-face { font-family: 'ArialRoundedMTBold'; src: local('Arial Rounded MT Bold'), local('Arial'); }
        @font-face { font-family: 'Audiowide'; src: local('Audiowide'); }
        @font-face { font-family: 'BadScript'; src: local('Bad Script'); }
        @font-face { font-family: 'Barlow'; src: local('Barlow'); }
        @font-face { font-family: 'BebasNeue'; src: local('Bebas Neue'); }
        @font-face { font-family: 'Montserrat'; src: local('Montserrat'); }

        /* Legacy checkFrontLoad fallbacks to avoid reloads */
        @font-face { font-family: 'monstroregular'; src: local('Arial'); }
        @font-face { font-family: 'cubanonormal'; src: local('Arial'); }
        @font-face { font-family: 'bourtonbase'; src: local('Arial'); }
        @font-face { font-family: 'giza_fivefiveregular'; src: local('Arial'); }

        /* Font classes for dropdown UI styling */
        .AbrilFatface { font-family: 'Abril Fatface', serif; }
        .Andika { font-family: 'Andika', sans-serif; }
        .Anton { font-family: 'Anton', sans-serif; }
        .ArialRoundedMTBold { font-family: 'Arial Rounded MT Bold', sans-serif; }
        .Audiowide { font-family: 'Audiowide', cursive; }
        .BadScript { font-family: 'Bad Script', cursive; }
        .Barlow { font-family: 'Barlow', sans-serif; }
        .BebasNeue { font-family: 'Bebas Neue', sans-serif; }
        .Montserrat { font-family: 'Montserrat', sans-serif; }
        .Helvetica { font-family: 'Helvetica', Arial, sans-serif; }
        .Arial { font-family: 'Arial', sans-serif; }

        /* Dropdown active toggle */
        .select-menu .options {
          display: none;
        }
        .select-menu.active .options {
          display: block;
        }
      `}} />

      {/* Top Navbar */}
      <header className={`flex items-center justify-between px-6 py-4 border-b shadow-md transition-colors duration-300 ${
        theme === 'dark' ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-200 text-zinc-900'
      }`}>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-lg font-semibold tracking-tight">
            DSMenu Design Studio <span className={`text-xs font-normal ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>v2.0.0 Wrapper</span>
          </h1>
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-2">
          <button id="btn-undo" title="Undo (Ctrl+Z)" className={`flex items-center justify-center p-2 rounded-lg transition border ${
            theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700 hover:border-zinc-600' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300 hover:border-zinc-400'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
          </button>
          <button id="btn-redo" title="Redo (Ctrl+Y)" className={`flex items-center justify-center p-2 rounded-lg transition border ${
            theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700 hover:border-zinc-600' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300 hover:border-zinc-400'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-20l-6 6m6-6l-6-6" /></svg>
          </button>

          <div className={`h-6 w-px mx-2 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`} />

          <button id="btn-copy" title="Copy (Ctrl+C)" className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition ${
            theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
            Copy
          </button>
          <button id="btn-paste" title="Paste (Ctrl+V)" className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition ${
            theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            Paste
          </button>

          <div className={`h-6 w-px mx-2 ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'}`} />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`flex items-center justify-center p-2 rounded-lg transition border mr-2 ${
              theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-amber-400 border-zinc-700 hover:border-zinc-600' : 'bg-zinc-100 hover:bg-zinc-200 text-indigo-600 border-zinc-300 hover:border-zinc-400'
            }`}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <button id="btn_canvas_save" className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition text-sm shadow">
            Save Project
          </button>
        </div>
      </header>

      {/* Main Panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Control Panel */}
        <aside className={`w-80 border-r flex flex-col p-5 overflow-y-auto gap-6 shrink-0 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          
          {/* Canvas Sizes */}
          <div className="flex flex-col gap-2">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Canvas Size</h2>
            <ul id="ul_menu_size" className="grid grid-cols-2 gap-2 mt-1">
              {[
                { id: 'size-800-600', val: '800x600', label: '800 x 600' },
                { id: 'size-1024-768', val: '1024x768', label: '1024 x 768' },
                { id: 'size-1280-720', val: '1280x720', label: '1280 x 720' },
                { id: 'size-1920-1080', val: '1920x1080', label: '1920 x 1080' }
              ].map((item) => (
                <li key={item.id} id={item.id} title={item.val} className={`flex items-center justify-center p-2 rounded-lg border text-sm cursor-pointer transition ${
                  theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-300 hover:text-white' : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-700 hover:text-zinc-900'
                }`}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <hr className={theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'} />

          {/* Background settings */}
          <div className="flex flex-col gap-3">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Canvas Background</h2>
            <div className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
              theme === 'dark' ? 'bg-zinc-800/30 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-700 shrink-0">
                <input
                  type="color"
                  id="background-fill-color"
                  defaultValue="#121214"
                  className="absolute inset-0 w-full h-full cursor-pointer p-0 border-0 scale-150"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Background Color</span>
                <span className={`text-xs ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Pick canvas base color</span>
              </div>
            </div>
          </div>

          <hr className={theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'} />

          {/* Properties Panel */}
          <div className="flex flex-col gap-3">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Object Inspector</h2>
            <div className={`p-4 rounded-xl border flex flex-col gap-3 text-sm transition-colors ${
              theme === 'dark' ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <div className={`flex justify-between items-center py-1.5 border-b ${theme === 'dark' ? 'border-zinc-900' : 'border-zinc-200'}`}>
                <span className={theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}>Type</span>
                <span id="propertise_type" className={`font-mono ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>—</span>
              </div>
              <div className={`flex justify-between items-center py-1.5 border-b ${theme === 'dark' ? 'border-zinc-900' : 'border-zinc-200'}`}>
                <span className={theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}>Name</span>
                <span id="propertise_name" className={`font-mono ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>—</span>
              </div>
              <div className={`flex justify-between items-center py-1.5 border-b ${theme === 'dark' ? 'border-zinc-900' : 'border-zinc-200'}`}>
                <span className={theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}>Dimensions</span>
                <span id="propertise_size" className={`font-mono ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>—</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className={theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}>Zoom</span>
                <span id="propertise_zoom" className={`font-mono ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>—</span>
              </div>
            </div>
          </div>

          <hr className={theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'} />

          {/* Slider Scale */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Object Scale</h2>
              <span id="slider_scale_div" className="text-xs font-mono">100%</span>
            </div>
            <input 
              type="range" 
              id="slider_scale" 
              min="10" 
              max="500" 
              defaultValue="100" 
              className={`w-full accent-emerald-500 h-1.5 rounded-lg cursor-pointer appearance-none mt-2 ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-300'
              }`} 
            />
          </div>
        </aside>

        {/* Center Canvas Work Area */}
        <main className={`flex-1 flex flex-col relative overflow-hidden transition-colors duration-300 ${
          theme === 'dark' ? 'bg-zinc-900/20' : 'bg-zinc-100/50'
        }`}>
          {/* Work area grid background */}
          <div className={`absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-[0.25] ${
            theme === 'dark' ? 'invert-0' : 'invert'
          }`} />

          {/* Canvas Wrapper */}
          <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
            <div 
              id="canvas_container" 
              className={`relative shadow-2xl border transition-all rounded-md overflow-hidden ${
                theme === 'dark' ? 'border-zinc-750 bg-zinc-950' : 'border-zinc-300 bg-white'
              }`}
              style={{ width: '800px', height: '600px' }}
            >
              <canvas id="canvas" width="800" height="600" />
            </div>
          </div>

          {/* Status Indicator */}
          <div className={`absolute bottom-4 left-4 flex items-center gap-2 border px-3 py-1.5 rounded-full text-xs shadow backdrop-blur-sm transition-colors ${
            theme === 'dark' ? 'bg-zinc-900/90 border-zinc-800 text-zinc-400' : 'bg-white/90 border-zinc-200 text-zinc-650'
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${loadingStatus === 'Ready' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
            Status: {loadingStatus}
          </div>
        </main>

        {/* Right Element Adder Panel */}
        <aside className={`w-80 border-l flex flex-col p-5 overflow-y-auto gap-6 shrink-0 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          <div className="flex flex-col gap-3">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Add Elements</h2>
            
            {/* Add Text */}
            <button
              id="add-text"
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium border transition ${
                theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Add Custom Text
            </button>
          </div>

          <hr className={theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'} />

          {/* Vector Shapes Creator */}
          <div className="flex flex-col gap-3">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Draw Shapes</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'add-rectriangle', label: 'Rectangle', shape: <span className={`h-6 w-8 rounded border ${theme === 'dark' ? 'bg-zinc-600 border-zinc-500' : 'bg-zinc-350 border-zinc-400'}`} /> },
                { id: 'add-circle', label: 'Circle', shape: <span className={`h-6 w-6 rounded-full border ${theme === 'dark' ? 'bg-zinc-600 border-zinc-500' : 'bg-zinc-350 border-zinc-400'}`} /> },
                { id: 'add-triangle', label: 'Triangle', shape: <span className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-zinc-500 filter drop-shadow" /> },
                { id: 'add-line', label: 'Line', shape: <span className="w-8 h-1 bg-zinc-500 rotate-12 rounded" /> },
                { id: 'add-hexagon', label: 'Hexagon' },
                { id: 'add-heartcard', label: 'Heart' }
              ].map((btn) => (
                <button key={btn.id} id={btn.id} title={btn.label} className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition text-xs ${
                  theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border-zinc-700' : 'bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 border-zinc-200'
                }`}>
                  {btn.shape}
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <hr className={theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'} />

          {/* Properties Styling */}
          <div className="flex flex-col gap-4">
            <h2 className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>Object Styling</h2>
            
            {/* Typography Dropdown (Legacy connected select-menu) */}
            <div className="flex flex-col gap-2 mt-1">
              <span className={`text-xs font-medium ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>Font Family</span>
              
              <div className="select-menu relative">
                <div className={`select-btn flex items-center justify-between p-2.5 rounded-lg border cursor-pointer transition-colors ${
                  theme === 'dark' ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-750' : 'bg-zinc-50 border-zinc-300 hover:bg-zinc-100'
                }`}>
                  <span className="sBtn-text font-medium text-sm">Helvetica</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
                <ul className={`options absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto border rounded-lg shadow-xl z-50 transition-colors ${
                  theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-200'
                }`}>
                  {[
                    { name: 'Abril Fatface', class: 'AbrilFatface' },
                    { name: 'Andika', class: 'Andika' },
                    { name: 'Anton', class: 'Anton' },
                    { name: 'Arial', class: 'Arial' },
                    { name: 'Arial Rounded MT Bold', class: 'ArialRoundedMTBold' },
                    { name: 'Audiowide', class: 'Audiowide' },
                    { name: 'Bad Script', class: 'BadScript' },
                    { name: 'Barlow', class: 'Barlow' },
                    { name: 'Bebas Neue', class: 'BebasNeue' },
                    { name: 'Montserrat', class: 'Montserrat' },
                    { name: 'Helvetica', class: 'Helvetica' },
                  ].map((font, idx) => (
                    <li key={idx} className={`option px-3 py-2 cursor-pointer transition flex items-center ${
                      theme === 'dark' ? 'hover:bg-zinc-700' : 'hover:bg-zinc-100'
                    }`}>
                      <span className={`option-text ${font.class} text-sm ${
                        theme === 'dark' ? 'text-zinc-200' : 'text-zinc-850'
                      }`}>
                        {font.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colors and Sizes */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center justify-between text-sm">
                <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}>Fill Color</span>
                <div className="flex items-center gap-2">
                  <input type="color" id="sd2" defaultValue="#ff00a8" className="w-6 h-6 rounded cursor-pointer border-0 p-0" />
                  <button id="sd2_no_color" className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-750 text-zinc-350 border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-650 border-zinc-300'
                  }`}>None</button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}>Stroke Color</span>
                <div className="flex items-center gap-2">
                  <input type="color" id="sd1" defaultValue="#000000" className="w-6 h-6 rounded cursor-pointer border-0 p-0" />
                  <button id="sd1_no_color" className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-750 text-zinc-350 border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-650 border-zinc-300'
                  }`}>None</button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}>Object BG</span>
                <div className="flex items-center gap-2">
                  <input type="color" id="sd3" defaultValue="#ffffff" className="w-6 h-6 rounded cursor-pointer border-0 p-0" />
                  <button id="sd3_no_color" className={`text-xs px-2 py-0.5 rounded border transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-750 text-zinc-350 border-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-650 border-zinc-300'
                  }`}>None</button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}>Stroke Width</span>
                <input type="number" id="stroke-width" min="0" max="20" defaultValue="1" className={`w-16 px-2 py-1 rounded border text-center transition-colors ${
                  theme === 'dark' ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-50 text-zinc-900 border-zinc-300'
                }`} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}>Font Size</span>
                <input type="number" id="text-font-size" min="8" max="200" defaultValue="20" className={`w-16 px-2 py-1 rounded border text-center transition-colors ${
                  theme === 'dark' ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-50 text-zinc-900 border-zinc-300'
                }`} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className={theme === 'dark' ? 'text-zinc-400' : 'text-zinc-650'}>Line Height</span>
                <div className="flex items-center gap-1">
                  <button id="text-line-hieght-minus" className={`px-2 py-1 rounded border text-xs transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:bg-zinc-200'
                  }`}>-</button>
                  <input type="number" id="text-line-hieght" min="0.5" max="3" step="0.1" defaultValue="1" className={`w-12 px-1 py-1 rounded border text-center text-xs transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-50 text-zinc-900 border-zinc-300'
                  }`} />
                  <button id="text-line-hieght-plus" className={`px-2 py-1 rounded border text-xs transition-colors ${
                    theme === 'dark' ? 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-700 border-zinc-300 hover:bg-zinc-200'
                  }`}>+</button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* COMPATIBILITY LAYER - Rendered hidden in DOM for selector satisfaction */}
      <div className="hidden" aria-hidden="true">
        {/* Hidden Outputs canvases */}
        <canvas id="canvas_output" width="800" height="600" />
        <canvas id="canvas_temp" width="800" height="600" />

        {/* Global Inputs expected by legacy script */}
        <input type="hidden" id="canvas_multiplier" defaultValue="1" />
        <input type="hidden" id="canvas_ratio" defaultValue="1" />
        <input type="hidden" id="array_font" defaultValue="[]" />
        <input type="hidden" id="used_font" defaultValue="[]" />
        <input type="hidden" id="canvas_w" defaultValue="800" />
        <input type="hidden" id="canvas_h" defaultValue="600" />
        <input type="hidden" id="background_id" defaultValue="0" />
        <input type="hidden" id="img_path" defaultValue="#121214" />
        <input type="hidden" id="menu_board_id" defaultValue="1" />
        <input type="hidden" id="new_canvas" defaultValue="1" />
        <input type="hidden" id="canvas_modified" defaultValue="0" />
        <textarea id="canvas_data" defaultValue="" />
        
        {/* Shadow and Blending Inputs */}
        <input type="range" id="opacity" defaultValue="100" />
        <input type="range" id="shadow" defaultValue="0" />
        <input type="range" id="shadow_blur" defaultValue="0" />
        <input type="range" id="shadow_opacity" defaultValue="0" />
        <input type="range" id="slider_blend" defaultValue="0" />

        {/* Select Menu Programmatic Elements (1 to 10 only; 0 is in the active UI) */}
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <div key={num} className={`select-menu${num}`}>
            <div className={`select-btn${num}`}><span className={`sBtn-text${num}`} /></div>
            <ul>
              <li className={`option${num}`} />
            </ul>
          </div>
        ))}

        {/* Action Triggers */}
        <button id="btn_save">Save</button>
        <button id="rasterize">Rasterize</button>
        <button id="publish_menu">Publish</button>
        <button id="modify_into_canvas">Modify</button>
        <button id="text_table_add_row">Add Row</button>
        <button id="is_menu_line_color">Line Color</button>
        <button id="add-menu">Add Menu</button>
        <button id="map_items_menu">Map Items</button>
        <button id="shape-add-blob">Blob</button>
        <button id="shape-add-circle">BlobCircle</button>
        <button id="shape-add-rectriangle">BlobRect</button>
        
        {/* Gradient Angle buttons */}
        <button id="shape_gradient_color_angel_30">Angle 30</button>
        <button id="shape_gradient_color_angel_45">Angle 45</button>
        <button id="shape_gradient_color_angel_90">Angle 90</button>

        {/* Text styling stubs */}
        <button id="text-cmd-uppercase">Uppercase</button>
        <button id="text-align-left">Align Left</button>
        <button id="text-align-right">Align Right</button>
        <button id="text-align-center">Align Center</button>
        <button id="text-align-justify">Align Justify</button>

        {/* Curve check and properties */}
        <input type="checkbox" id="chkCurve" defaultChecked={false} />
        <input type="number" id="template_curve_text_radius" defaultValue="100" />
        <input type="number" id="template_curve_text_spacing" defaultValue="20" />
        <input type="text" id="color" defaultValue="#000000" />
        <input type="text" id="line-fill-color" defaultValue="#000000" />
        <input type="text" id="shape_gradient_color_1" defaultValue="#ffffff" />
        <input type="text" id="shape_gradient_color_2" defaultValue="#000000" />
        <textarea id="text" defaultValue="Add your text here" />
        <button id="text-cmd-bold">Bold</button>
        <button id="text-cmd-italic">Italic</button>
        <button id="btn-clear">Clear</button>
        <button id="btn-grid">Grid</button>
        <button id="add-curvetext">Curve Text</button>
        <input type="text" id="txtE_popup" />

        {/* Option orientation stubs */}
        <button id="option5">Landscape</button>
        <button id="option6">Portrait</button>

        {/* Other shape stubs */}
        <button id="shape-add-4">Shape 4</button>
        <button id="shape-add-5">Shape 5</button>
        <button id="shape-add-6">Shape 6</button>
        <button id="shape-add-7">Shape 7</button>
        <button id="shape-add-8">Shape 8</button>
        <button id="shape-add-9">Shape 9</button>
        <button id="shape-add-10">Shape 10</button>

        {/* Dialog / Layout containers */}
        <div id="template_loader">Loader</div>
        <div id="template_loader_percentage">0%</div>
        <div id="disable_canvas">Disabled</div>
        <div id="successPopup">Success</div>

        {/* Fake Menu Editor structures */}
        <table id="text_table">
          <thead>
            <tr className="menu-head">
              <th className="text-heading" />
              <th className="td_price_heading_colum_1" />
              <th className="td_price_heading_colum_2" />
              <th className="td_price_heading_colum_3" />
              <th className="td_price_heading_colum_4" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="containtBox">
                <textarea className="text-heading" defaultValue="" />
                <textarea className="sub-heading" defaultValue="" />
                <textarea className="price" defaultValue="" />
                <textarea className="price2" defaultValue="" />
                <textarea className="price3" defaultValue="" />
                <textarea className="price4" defaultValue="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
