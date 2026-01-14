

import React, { useState, useEffect } from 'react';
import { PageState } from './types';
import { 
  Menu, X as CloseIcon, Play, ArrowRight, Check, Instagram, Linkedin, Facebook, Twitter, 
  ShieldCheck, Clock, Zap, Star, StarHalf, Sun, Moon, Sparkles,
  Image as ImageIcon,
  MessageSquare,
  Users,
  Lightbulb
} from 'lucide-react';
import { TESTIMONIALS, PRICING_PLANS, FAQS, SERVICE_DATA, IMPACT_STATS } from './constants';
import InteractiveVideo from './components/InteractiveVideo';
import AnimatedCounter from './components/AnimatedCounter';
import OrderModal from './components/OrderModal';
import { AboutPage, ContactPage, LegalPage, TERMS_CONTENT, REFUND_CONTENT, SHIPPING_CONTENT, PRIVACY_CONTENT } from './components/Pages';

const App = () => {
  const [activePage, setActivePage] = useState<PageState>(PageState.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [activePricingTab, setActivePricingTab] = useState("Video Ads");
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Theme Toggle Logic
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Dynamic Title
  useEffect(() => {
    const titles = {
      [PageState.HOME]: "AILM - Turn Ideas into Visuals",
      [PageState.ABOUT]: "About Us - AILM",
      [PageState.CONTACT]: "Contact - AILM",
      [PageState.TERMS]: "Terms of Service - AILM",
      [PageState.REFUND]: "Refund Policy - AILM",
      [PageState.SHIPPING]: "Delivery Policy - AILM",
      [PageState.PRIVACY]: "Privacy Policy - AILM"
    };
    document.title = titles[activePage];
    window.scrollTo(0, 0);
  }, [activePage]);

  const navigateTo = (page: PageState) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (activePage !== PageState.HOME) {
      setActivePage(PageState.HOME);
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const Logo = () => (
    <div className="flex items-center gap-2 cursor-pointer group shrink-0" onClick={() => navigateTo(PageState.HOME)}>
      <div className="bg-[#0091ea] w-10 h-10 flex items-center justify-center rounded-[24%] shadow-lg group-hover:scale-105 transition-transform duration-300">
        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
      </div>
      <span className="text-2xl font-sans font-black text-slate-900 dark:text-white tracking-tighter">
        AILM.in
      </span>
    </div>
  );

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigateTo(PageState.HOME)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</button>
            <button onClick={() => navigateTo(PageState.ABOUT)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</button>
            <button onClick={() => navigateTo(PageState.CONTACT)} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="hidden sm:flex bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Project
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            >
              {/* FIX: Use renamed CloseIcon component */}
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => navigateTo(PageState.HOME)} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300">Pricing</button>
            <button onClick={() => navigateTo(PageState.ABOUT)} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300">About</button>
            <button onClick={() => navigateTo(PageState.CONTACT)} className="block w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300">Contact</button>
            <button 
              onClick={() => { setIsOrderModalOpen(true); setMobileMenuOpen(false); }}
              className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold mt-4"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h4 className="text-2xl font-sans font-black text-slate-900 dark:text-white tracking-tighter">AILM Digital Agency</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Leading the AI revolution in creative content. We turn your wildest ideas into viral visual realities using bleeding-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-tech">Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('build-your-face-value')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Build Your Face Value</button></li>
              <li><button onClick={() => scrollToSection('ai-video-ads')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">AI Video Ads</button></li>
              <li><button onClick={() => scrollToSection('ai-image-ads')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">AI Image Ads</button></li>
              <li><button onClick={() => scrollToSection('image-to-video')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Image to Video</button></li>
              <li><button onClick={() => scrollToSection('ai-stock-footage')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">AI Stock Footage</button></li>
              <li><button onClick={() => scrollToSection('ai-stock-images')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">AI Stock Images</button></li>
              <li><button onClick={() => scrollToSection('ai-storytelling')} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">AI Storytelling</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-tech">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => navigateTo(PageState.ABOUT)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo(PageState.CONTACT)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => navigateTo(PageState.REFUND)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Refund Policy</button></li>
              <li><button onClick={() => navigateTo(PageState.SHIPPING)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Shipping & Delivery</button></li>
              <li><button onClick={() => navigateTo(PageState.PRIVACY)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigateTo(PageState.TERMS)} className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-tech">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/AilmOfficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-neon-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ailmofficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-neon-fuchsia transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/ailmofficial" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/ailmofficial/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} AILM Digital Agency. All rights reserved. Designed for the Future.
        </div>
      </div>
    </footer>
  );

  const renderHome = () => (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Background Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-neon-cyan/10 blur-[100px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 dark:bg-neon-fuchsia/10 blur-[100px] rounded-full animate-pulse-slow"></div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 animate-float">
            <Lightbulb className="w-4 h-4 text-green-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Accepting New Clients</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight dark:text-white text-slate-900">
            We Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 animate-text-shimmer">
              Viral AI Visuals
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Get scroll-stopping video ads, Images, product showcases, and social content delivered in 24 hours. Custom made. Lifetime license.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-2xl dark:shadow-white/10"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              View Services
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
             <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold">
               <ShieldCheck className="w-5 h-5 text-cyan-500" /> Lifetime License
             </div>
             <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold">
               <Clock className="w-5 h-5 text-fuchsia-500" /> 24h Delivery
             </div>
             <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold">
               <Zap className="w-5 h-5 text-yellow-500" /> AI Driven Efficiency
             </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, idx) => (
              <AnimatedCounter key={idx} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section id="showreel" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3">TRAILER</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white font-tech leading-tight">SHOWREEL</h3>
          </div>
          <div>
            {SERVICE_DATA.showreel.map(item => (
              <InteractiveVideo key={item.id} id={item.src} title="AILM Showreel" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3">Our Expertise</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white font-tech leading-tight">Our Services</h3>
          </div>

          <div className="space-y-32">
            {/* New Section: Build Your Face Value */}
            <div id="build-your-face-value">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="p-2 bg-fuchsia-100 dark:bg-neon-fuchsia/20 rounded-lg text-fuchsia-600 dark:text-neon-fuchsia">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white">Build Your Face Value</h4>
                <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full animate-pulse shadow-lg tracking-widest flex items-center gap-1">
                  Trending Service 🔥
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <img 
                  src={SERVICE_DATA.faceValue[0].src} 
                  className="w-full h-auto rounded-xl" 
                  alt="A visual explanation of the 'Build Your Face Value' service, showing how normal pictures are converted into high-quality professional photos." />
              </div>
            </div>
            
            {/* Featured: Video Ads */}
            <div id="ai-video-ads">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-2 bg-cyan-100 dark:bg-neon-cyan/20 rounded-lg text-cyan-600 dark:text-neon-cyan">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white">AI Video Ads</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICE_DATA.videoAds.map((item) => (
                  <div key={item.id} className="group relative">
                    <InteractiveVideo id={item.src} title="Video Ad Example" />
                    <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">E-commerce Ad</span>
                       <button onClick={() => setIsOrderModalOpen(true)} className="text-cyan-500 text-sm font-bold hover:underline">Request Similar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New: AI Image Ads */}
            <div id="ai-image-ads">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-2 bg-green-100 dark:bg-neon-green/20 rounded-lg text-green-600 dark:text-neon-green">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white">AI Image Ads</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_DATA.imageAds.map(item => (
                   <div key={item.id} className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group relative">
                      <img src={item.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="AI Image Ad" />
                   </div>
                ))}
              </div>
            </div>

            {/* Featured: Image to Video */}
            <div id="image-to-video">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="p-2 bg-fuchsia-100 dark:bg-neon-fuchsia/20 rounded-lg text-fuchsia-600 dark:text-neon-fuchsia">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white">Image To Video</h4>
                <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full animate-pulse shadow-lg tracking-widest flex items-center gap-1">
                  Trending Service 🔥
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-16">
                {SERVICE_DATA.imageToVideo.map((item) => (
                   <div key={item.id} className="flex flex-col gap-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 items-center">
                        {/* Input Image */}
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
                           <img src={item.comparisonSrc} alt="Input" className="w-full h-full object-cover" />
                           <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">Input Image</div>
                           
                           {/* --- CONNECTOR --- */}
                            {/* Desktop (horizontal curve) */}
                            <div className="hidden sm:block absolute top-1/2 right-0 w-24 h-24 -translate-y-1/2 translate-x-[45%] z-0 pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <marker id={`arrow-h-${item.id}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                            <circle cx="4" cy="4" r="2" className="fill-slate-400 dark:fill-slate-500" />
                                        </marker>
                                    </defs>
                                    <path
                                        d="M 2,50 C 40,5 60,95 98,50"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="1 8"
                                        strokeLinecap="round"
                                        markerEnd={`url(#arrow-h-${item.id})`}
                                        className="stroke-slate-300 dark:stroke-slate-700"
                                    />
                                </svg>
                            </div>

                            {/* Mobile (vertical curve) */}
                            <div className="sm:hidden absolute bottom-0 left-1/2 w-24 h-24 -translate-x-1/2 translate-y-[45%] z-0 pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <marker id={`arrow-v-${item.id}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                            <circle cx="4" cy="4" r="2" className="fill-slate-400 dark:fill-slate-500" />
                                        </marker>
                                    </defs>
                                    <path
                                        d="M 50,2 C 5,40 95,60 50,98"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeDasharray="1 8"
                                        strokeLinecap="round"
                                        markerEnd={`url(#arrow-v-${item.id})`}
                                        className="stroke-slate-300 dark:stroke-slate-700"
                                    />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Output Video */}
                        <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg">
                           <InteractiveVideo id={item.src} title="Image to Video Output" />
                           <div className="absolute top-3 left-3 z-10 bg-cyan-500/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">AI Output</div>
                        </div>
                     </div>
                   </div>
                ))}
              </div>
            </div>

            {/* AI Stock Footage */}
            <div id="ai-stock-footage">
              <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white mb-8 text-center">AI Stock Footage</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_DATA.stockVideo.map(item => (
                   <InteractiveVideo key={item.id} id={item.src} title="Stock Video" />
                ))}
              </div>
            </div>

            {/* AI Stock Images */}
            <div id="ai-stock-images">
              <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white mb-8 text-center">AI Stock Images</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_DATA.stockImage.map(item => (
                   <div key={item.id} className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 group relative">
                      <img src={item.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="AI Stock Image" />
                   </div>
                ))}
              </div>
            </div>

            {/* AI Storytelling */}
            <div id="ai-storytelling">
              <h4 className="text-3xl font-extrabold font-tech text-slate-900 dark:text-white mb-8 text-center">AI Storytelling</h4>
              <div className="max-w-4xl mx-auto">
                {SERVICE_DATA.storytelling.map(item => (
                   <InteractiveVideo key={item.id} id={item.src} title="AI Storytelling" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-fuchsia-500 uppercase tracking-widest mb-3">Simple Pricing</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white font-tech mb-8">TIERED PRODUCTION.</h3>
            
            <div className="flex justify-center p-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 w-fit mx-auto shadow-sm">
               {Object.keys(PRICING_PLANS).map((tab) => (
                 <button
                  key={tab}
                  onClick={() => setActivePricingTab(tab)}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activePricingTab === tab ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS[activePricingTab].map((plan, idx) => (
              <div key={idx} className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${plan.recommended ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-neon-cyan shadow-2xl scale-105 z-10' : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}`}>
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg tracking-widest">
                    Best Value
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-tech">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">${plan.price}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">/ project</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.excluded.map((feature, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-3 text-sm text-slate-400 dark:text-slate-500">
                      {/* FIX: Use renamed CloseIcon component to prevent naming collisions. */}
                      <CloseIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsOrderModalOpen(true)}
                  className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${plan.recommended ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-neon-cyan/20 rounded-2xl flex items-center justify-center">
                 <Zap className="w-8 h-8 text-cyan-600 dark:text-neon-cyan" />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white font-tech">Need something custom?</h4>
                <p className="text-slate-500 dark:text-slate-400">Large volume orders or complex storytelling projects.</p>
              </div>
            </div>
            <button onClick={() => navigateTo(PageState.CONTACT)} className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black transition-transform hover:scale-105">Get a Custom Quote</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3">Testimonials</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white font-tech">Trusted by Innovators.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-neon-cyan/50 transition-all group">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-700'}`} />
                  ))}
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                   <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div>
                     <h5 className="font-bold text-slate-900 dark:text-white font-tech">{testimonial.author}</h5>
                     <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="pt-24 pb-12 px-4 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-fuchsia-500 uppercase tracking-widest mb-3">F.A.Q.</h2>
            <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white font-tech">You've Got Questions?</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h5 className="text-lg font-bold text-slate-900 dark:text-white font-tech leading-tight">{faq.q}</h5>
                  <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </span>
                </summary>
                <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800/50">
                   {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-0 opacity-30">
            <div className="absolute -top-1/4 -left-24 w-96 h-96 bg-cyan-500/50 blur-[150px] rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-1/4 -right-24 w-96 h-96 bg-fuchsia-500/50 blur-[150px] rounded-full animate-pulse-slow"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 font-tech leading-tight">Ready to Dominate the Digital Space?</h2>
            
            <div className="max-w-3xl mx-auto mb-12 space-y-6">
                <p className="text-2xl md:text-3xl font-semibold text-slate-200">
                    Stop wasting time in slow production cycles.
                </p>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 animate-text-shimmer">
                    Join the future of creative output.
                </p>
            </div>

            <button 
                onClick={() => setIsOrderModalOpen(true)}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-black text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.4)] mb-8"
            >
                Start Your Project Now
            </button>

            <div className="flex items-center justify-center gap-3 text-slate-400">
                <Users className="w-5 h-5 text-green-400" />
                <p>
                    Join <span className="font-bold text-white">140+ brands</span> already scaling with AILM.
                </p>
            </div>
        </div>
      </section>
    </main>
  );

  const renderContent = () => {
    switch (activePage) {
      case PageState.HOME: return renderHome();
      case PageState.ABOUT: return <AboutPage />;
      case PageState.CONTACT: return <ContactPage />;
      case PageState.TERMS: return <LegalPage title="Terms of Service" subtitle="Last Updated: July 2024" content={TERMS_CONTENT} />;
      case PageState.REFUND: return <LegalPage title="Refund Policy" subtitle="Transparency is our core value." content={REFUND_CONTENT} />;
      case PageState.SHIPPING: return <LegalPage title="Delivery Policy" subtitle="Instant, Secure, and 100% Digital." content={SHIPPING_CONTENT} />;
      case PageState.PRIVACY: return <LegalPage title="Privacy Policy" subtitle="Your Data, Your Trust." content={PRIVACY_CONTENT} />;
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans transition-colors duration-300">
      <Header />
      {renderContent()}
      <Footer />
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
      
      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-30">
        <button 
          onClick={() => setIsOrderModalOpen(true)}
          className="group relative p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <div className="absolute -top-12 right-0 bg-slate-800 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Contact
          </div>
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default App;