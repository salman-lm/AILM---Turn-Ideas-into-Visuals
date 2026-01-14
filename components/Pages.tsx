

import React, from 'react';
import { Mail, Zap, Heart, Cpu, Users, Bot, Globe, UserCheck, Clock, Copy, Check, ShieldCheck, CheckCircle2, AlertTriangle, Cloud, Archive, Info, BookOpen, CreditCard, Edit3, FileText, DatabaseZap, Share2 } from 'lucide-react';

export const AboutPage = () => (
  <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24 px-4 overflow-hidden">
    {/* Hero Section */}
    <div className="max-w-3xl mx-auto text-center mb-16 animate-float">
      <h1 className="text-4xl md:text-5xl font-tech font-bold mb-6 leading-tight">
        The Future of <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Video Production
        </span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
        AILM isn't just an agency. We are a hybrid creative engine combining generative AI speed with human storytelling expertise.
      </p>
    </div>

    {/* The Hybrid Advantage Card */}
    <div className="max-w-3xl mx-auto mb-20">
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-0"></div>
        
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <Cpu className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-purple-500/50 mx-4"></div>
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <Users className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 font-tech text-center">The Hybrid Advantage</h2>
          <p className="text-slate-400 mb-6 text-center">
            Traditional studios are slow and expensive. Pure AI tools lack soul and consistency.
          </p>
          <p className="text-lg font-medium text-white mb-8 text-center">
            We sit perfectly in the middle.
          </p>
          
          <ul className="space-y-4 max-w-md mx-auto">
            <li className="flex items-center gap-3 text-slate-300">
              <Zap className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>AI handles the heavy lifting (rendering, textures).</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Heart className="w-5 h-5 text-red-500 shrink-0" />
              <span>Humans handle the emotion (pacing, script, polish).</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Our Mission Section */}
    <div className="max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl font-extrabold mb-8 font-tech text-center">Our Mission</h2>
      <div className="space-y-6 text-slate-400 text-lg leading-relaxed text-center">
        <p>
          We believe high-quality video marketing shouldn't be reserved for Fortune 500 companies with massive budgets.
        </p>
        <p>
          By leveraging bleeding-edge Generative AI models, we slash production costs by 80% and turnaround times by 90%, passing those savings directly to you.
        </p>
      </div>
    </div>

    {/* Core Values Grid */}
    <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6 mb-24">
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <Bot className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Tech-First</h3>
        <p className="text-slate-400 leading-relaxed">
          We constantly upgrade our AI models (Gemini, Midjourney, Runway) to ensure you get the sharpest, most realistic visuals available.
        </p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <Globe className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Remote & Agile</h3>
        <p className="text-slate-400 leading-relaxed">
          We have no physical office overhead. Our team spans 3 continents, allowing us to work around the clock.
        </p>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
        <UserCheck className="w-10 h-10 text-cyan-400 mb-6" />
        <h3 className="text-2xl font-extrabold mb-3 font-tech">Customer Obsessed</h3>
        <p className="text-slate-400 leading-relaxed">
          Our "Pay After Satisfaction" model proves our commitment. We don't rest until you are thrilled with the result.
        </p>
      </div>
    </div>

    {/* Footer Quote */}
    <div className="max-w-3xl mx-auto text-center border-t border-slate-900 pt-16">
      <p className="text-xl italic text-slate-400 mb-2">"Creativity is the new productivity."</p>
      <p className="font-bold text-white font-tech">- The AILM Team</p>
    </div>
  </div>
);

export const ContactPage = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('support@ailm.in');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 font-tech">Contact Us</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            We operate as a digital-first agency to keep efficiency high and costs low.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Support Card */}
          <div className="bg-slate-50 dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-800/50 rounded-xl flex items-center justify-center">
                <Mail className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 font-tech">Email Support</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
              For project inquiries, support, or agency partnerships. We reply typically within 2 hours.
            </p>
            
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex items-center justify-between mb-4">
              <span className="text-slate-700 dark:text-slate-300 font-mono text-sm">support@ailm.in</span>
              <button onClick={handleCopy} className="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a 
              href="mailto:support@ailm.in"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg text-center transition-colors"
            >
              Send Email Now
            </a>
          </div>

          {/* Availability Card */}
          <div className="bg-slate-50 dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col">
             <div className="mb-6">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800/50 rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 font-tech">Availability</h3>

            <div className="space-y-6 flex-grow">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Business Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM EST</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Sunday: Priority Projects Only</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-1">
                   <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200">Current Status</h4>
                  <p className="text-green-600 dark:text-green-400 font-semibold text-sm">Accepting New Clients</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm">Next available slot: Today</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-500">
               <p className="font-semibold">AILM Digital Agency</p>
               <p>Digital Operations Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const LegalPage: React.FC<{ title: string; subtitle?: string; content: React.ReactNode }> = ({ title, subtitle, content }) => (
  <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 font-tech">{title}</h1>
        {subtitle && <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
      </div>
      <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
        {content}
      </div>
    </div>
  </div>
);


export const TERMS_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><BookOpen className="w-5 h-5 text-slate-400"/>1. Introduction</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">Welcome to AILM. By accessing our website and using our video/image production services, you agree to comply with and be bound by the following terms and conditions.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><Zap className="w-5 h-5 text-slate-400"/>2. Services</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">AILM provides AI-assisted video and image creation services. We deliver digital files based on client briefs. While we use advanced AI tools, all output is curated and refined by human editors to ensure quality.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><CreditCard className="w-5 h-5 text-slate-400"/>3. Payments & Deliverables</h3>
        <ul className="pl-8 space-y-3 mt-4 text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0"/><p><strong>Pay After Satisfaction:</strong> For standard orders, invoices are issued only after the client approves the watermarked preview.</p></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0"/><p><strong>Final Delivery:</strong> High-resolution, unwatermarked files are released immediately upon receipt of payment.</p></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0"/><p><strong>Non-Payment:</strong> AILM retains full ownership of all drafts and final works until payment is cleared. Unpaid usage of our drafts is a violation of copyright.</p></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-slate-400"/>4. Intellectual Property & License</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">Upon full payment, AILM grants the Client a <strong className="text-slate-800 dark:text-white">Lifetime Commercial License.</strong></p>
        <div className="mt-4 ml-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>✓ You own the final exported video/image file.</li>
            <li>✓ You may use it for advertising, social media, websites, and broadcast indefinitely.</li>
            <li>✓ You do not need to pay royalties to AILM.</li>
            <li>✓ AILM reserves the right to use the work in our portfolio (Showreel) unless a Non-Disclosure Agreement (NDA) is signed prior to the project.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><Edit3 className="w-5 h-5 text-slate-400"/>5. Revisions</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">We offer unlimited revisions during the production phase to ensure satisfaction. However, revisions must be within the original scope of the brief. A complete change of direction (e.g., changing the entire script after approval) may incur additional costs.</p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-tech flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-slate-400"/>6. Limitation of Liability</h3>
        <p className="pl-8 text-slate-700 dark:text-slate-300">AILM shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability is limited to the amount paid for the specific service.</p>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          For any legal inquiries, please contact <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a>.
        </p>
      </div>
    </div>
  </div>
);

export const REFUND_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Satisfaction First Box */}
      <div className="bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 dark:border-cyan-500/30 rounded-xl p-6 flex items-start gap-4">
        <ShieldCheck className="w-8 h-8 text-cyan-500 dark:text-cyan-400 mt-1 shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Satisfaction First, Payment Second</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            At AILM, we do not ask for full payment upfront for most standard projects. We believe you should only pay for what you love. Because we operate on this approval-based model, <strong className="text-slate-800 dark:text-white">we do not offer refunds once payment is processed</strong>.
          </p>
        </div>
      </div>

      {/* How Our Process Protects You */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How Our Process Protects You</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 1: Draft Creation.</strong> We create the video/images based on your brief.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 2: Watermarked Preview.</strong> We send you the files with a watermark for your review.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 3: Unlimited Revisions.</strong> If you aren't happy, we revise it. We keep refining until you are 100% satisfied.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Step 4: Approval & Payment.</strong> You only pay the invoice when you approve the final result.
            </p>
          </li>
        </ul>
      </div>

      {/* Final Sale Policy Box */}
      <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 dark:border-red-500/30 rounded-xl p-6 flex items-start gap-4">
        <AlertTriangle className="w-8 h-8 text-red-500 dark:text-red-400 mt-1 shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Final Sale Policy</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Since payment is only made after your explicit approval and satisfaction with the creative work, <strong className="text-slate-800 dark:text-white">all payments are final.</strong> Once payment is received and the non-watermarked, high-resolution files are delivered to you, no refunds will be issued under any circumstances. This policy prevents the misuse of digital assets.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
              If you have any questions regarding this policy before starting a project, please contact us at <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a>.
          </p>
      </div>
    </div>
  </div>
);


export const SHIPPING_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      {/* Digital Delivery Box */}
      <div className="bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/30 rounded-xl p-6 flex items-start gap-4">
        <Cloud className="w-8 h-8 text-blue-500 dark:text-blue-400 mt-1 shrink-0" />
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Digital Delivery Only</h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            AILM provides strictly digital services (Video & Image files). We do not ship physical products (DVDs, USB drives, or prints) to your address. Everything is delivered online via the cloud.
          </p>
        </div>
      </div>

      {/* How You Receive Your Files */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How You Receive Your Files</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200">1</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Project Completion & Payment</h4>
              <p className="text-slate-700 dark:text-slate-300">
                Once you have approved the watermarked preview and completed the payment invoice, our system marks the project as "Ready for Delivery".
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200">2</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Cloud Upload (Google Drive)</h4>
              <p className="text-slate-700 dark:text-slate-300">
                We upload your high-resolution, unwatermarked files to a private, secure Google Drive folder. This ensures you get the highest quality without email attachment size limits.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-700 dark:text-slate-200">3</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white mb-1">Access Link Sent</h4>
              <p className="text-slate-700 dark:text-slate-300">
                You will receive an email containing a Direct Download Link. We grant access specifically to the email address provided during the briefing stage.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Delivery Speed & File Retention */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Delivery Speed</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            <strong className="text-slate-800 dark:text-white">Standard:</strong> 24-48 Hours<br/>
            <strong className="text-slate-800 dark:text-white">Complex/Bulk:</strong> 3-5 Business Days
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
            Delivery time starts once the initial brief is confirmed.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Archive className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">File Retention</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            We keep a backup of your project files in our cloud storage for <strong className="text-slate-800 dark:text-white">30 days</strong> after delivery. Please download and save your files locally as soon as you receive the link.
          </p>
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
        <div className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
          <Info className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Having trouble downloading?</strong><br/>
            Sometimes Google Drive permissions can be tricky. If you see "Access Denied", please request access directly via the Google Drive page or email us at <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a> and we will fix it instantly.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const PRIVACY_CONTENT = (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white dark:bg-[#1C1C1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-8">
      
      <p className="text-slate-700 dark:text-slate-300 text-center">Your privacy is important to us. It is AILM Digital's policy to respect your privacy regarding any information we may collect from you across our website.</p>
      
      <div className="space-y-6">
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Information Collection</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <DatabaseZap className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Data Usage</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Share2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-800 dark:text-white">Third Parties</h4>
          </div>
          <p className="text-slate-700 dark:text-slate-300">We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          <br/><br/>
          For any legal inquiries, please contact <a href="mailto:support@ailm.in" className="font-medium text-cyan-600 dark:text-cyan-400 hover:underline">support@ailm.in</a>.
        </p>
      </div>
    </div>
  </div>
);