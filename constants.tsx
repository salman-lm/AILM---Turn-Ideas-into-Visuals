

import { Testimonial, PricingPlan, ServiceItem } from './types';
import { Users, Video, Image as ImageIcon, MonitorPlay } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 1, 
    text: "AILM's AI video ads transformed our eCommerce campaigns. We saw a double increase in ROAS within weeks. The quality is indistinguishable from high-end production.", 
    author: "Sarah Jenkins", 
    role: "Marketing Director, E-com Co",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  { 
    id: 2, 
    text: "The image-to-video service is pure magic! They turned our static product photos into cinematic promos overnight. Highly recommended for dropshippers.", 
    author: "David Chen", 
    role: "Founder, TechGear",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  { 
    id: 3, 
    text: "Affordable stock assets that feel custom. Saved us thousands on production costs. The variety and quality of the AI generation are impressive.", 
    author: "Elena Rodriguez", 
    role: "Content Creator",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150"
  },
  { 
    id: 4, 
    text: "Storytelling videos captured our brand voice perfectly. The unlimited revisions policy ensured we were 100% satisfied with the final narrative.", 
    author: "Michael Ross", 
    role: "Brand Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  },
  { 
    id: 5, 
    text: "Quick turnaround on UGC-style clips. The lifetime license is a game-changer for agencies managing multiple client accounts.", 
    author: "Jessica Wong", 
    role: "Agency Owner",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150"
  },
  { 
    id: 6, 
    text: "Expert ad management combined with top-tier AI creatives. It's rare to find an agency that handles both tech and creative so well.", 
    author: "James Wilson", 
    role: "CEO, GrowthLabs",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150"
  }
];

export const PRICING_PLANS: Record<string, PricingPlan[]> = {
  "Video Ads": [
    {
      name: "Starter",
      price: 40,
      features: ["Up to 15s Duration", "1 Aspect Ratio", "AI Voiceover", "Subtitles", "Music & SFX", "Lifetime License", "24h Delivery"],
      excluded: ["Video Editing", "Custom Sound Design", "Script Assistance", "Generated Examples"]
    },
    {
      name: "Growth",
      price: 60,
      features: ["Up to 30s Duration", "2 Aspect Ratios", "AI Voiceover", "Subtitles", "Music & SFX", "Script Assistance", "Video Editing", "Lifetime License", "24h Delivery"],
      excluded: ["Custom Sound Design", "Generated Examples"],
      recommended: true
    },
    {
      name: "Premium",
      price: 100,
      features: ["Up to 60s Duration", "3 Aspect Ratios", "Premium AI Voiceover", "Subtitles", "Custom Sound Design", "Script Writing", "Video Editing", "Source Files", "Lifetime License", "Priority Support"],
      excluded: []
    }
  ],
  "Video Plan": [
    {
      name: "Basic Clip",
      price: 40,
      features: ["15s Stock Video", "1080p Quality", "Commercial Use", "Lifetime License", "Standard Music"],
      excluded: ["Custom Branding", "4K Resolution", "Revisions"]
    },
    {
      name: "Pro Clip",
      price: 60,
      features: ["30s Custom Video", "4K Resolution", "Commercial Use", "Lifetime License", "Premium Music", "Logo Reveal"],
      excluded: ["Revisions"],
      recommended: true
    },
    {
      name: "Elite Production",
      price: 100,
      features: ["60s Full Production", "4K Resolution", "Commercial Use", "Lifetime License", "Custom Sound Design", "Unlimited Revisions", "Source Files"],
      excluded: []
    }
  ],
  "Image Plan": [
    {
      name: "Starter Pack",
      price: 20,
      features: ["10 AI Generated Images", "High Res (2K)", "Commercial Use", "Standard Styles"],
      excluded: ["Upscaling to 4K", "Complex Compositing", "PSD Files"]
    },
    {
      name: "Pro Pack",
      price: 40,
      features: ["25 AI Generated Images", "Ultra Res (4K)", "Commercial Use", "Advanced Styles", "Upscaling Included"],
      excluded: ["PSD Files"],
      recommended: true
    },
    {
      name: "Agency Pack",
      price: 80,
      features: ["50 AI Generated Images", "Ultra Res (8K)", "Commercial Use", "Any Style", "Complex Compositing", "PSD Files", "Priority Delivery"],
      excluded: []
    }
  ]
};

export const FAQS = [
  { q: "What does 'Lifetime License' mean?", a: "It means you own the final video/Images file completely. You can use it in paid ads, on your website, or social media forever without paying any recurring royalties to us." },
  { q: "What information do you need from me to start the project?", a: "A clear description of your idea, desired style, length, or any reference images/links helps us deliver exactly what you envision. If you have a script—great! If not, just share the concept or theme, and we'll handle the rest." },
  { q: "Can you develop a full video if I don't provide a script?", a: "Yes, definitely! We specialize in building complete videos from scratch. Tell us the topic, mood, target audience, or goal, and we'll craft the storyline, visuals, and flow for a polished, original piece." },
  { q: "Does the final video include voiceover or background music?", a: "Yes, we can include high-quality AI voice narration (various accents/languages) and fitting royalty-free music. Just let us know your preferences—these are standard in our packages." },
  { q: "How many revisions do I get?", a: "We offer unlimited revisions within reason to ensure you are satisfied with the final output. We want you to love your assets." },
  { q: "What is your refund policy?", a: "We work until you are satisfied. However, due to the nature of digital custom work, once the final non-watermarked assets are delivered, we do not offer refunds. We will provide watermarked drafts for approval first." }
];

export const SERVICE_DATA: Record<string, ServiceItem[]> = {
  faceValue: [
    { id: "fv1", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1ID49j52NpxgPNe0QMLO1WDxXt4w-iOa6VVjn47lLIwh6fxEFzkZ3UQf732BdqyGeK15q1-Aqlp9gtb14l-uJOhUCfr-JU3NCWV1lOFFff_1-WeC9Gj6r-XNAL8eNkSGElM3l_tSpAafKUsxGT-u4i5lvco6bkAhi0Yy6MgSbMjpG1A0OwkkmANGEODA/s1920/20260114_182339.jpg" }
  ],
  showreel: [
    { id: "sr1", type: "video", src: "cOV1QOnrDsp" }
  ],
  videoAds: [
    { id: "va1", type: "video", src: "https://ik.imagekit.io/bensusx9i/batch_process_1.mp4" },
    { id: "va2", type: "video", src: "https://ik.imagekit.io/bensusx9i/batch_process_2.mp4" },
    { id: "va3", type: "video", src: "https://ik.imagekit.io/bensusx9i/batch_process_3.mp4" },
    { id: "va4", type: "video", src: "https://ik.imagekit.io/bensusx9i/batch_process_4.mp4" },
    { id: "va5", type: "video", src: "https://ik.imagekit.io/bensusx9i/batch_process_5.mp4" },
    { id: "va6", type: "video", src: "https://ik.imagekit.io/bensusx9i/batch_process_6.mp4" },
  ],
  imageAds: [
    { id: "img1", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisUv9sLRPO3Z_1THu_aT788_xTg8s-x94sFmir1S8eEUk7rg1Bq1vz3g0WFaFL7mgoH76G55SWyaHN07wlRpEBxEB1jjy3fwiGQfLbRCUToIlAOHZGF7NbKwYDZELmNk9tZYkWT5TJZl7Dl-R5U3iEy2xlpfUkZBiefw9gXbdGVYpMvvEHD_HFO6-1j8Q/s1365/Inside_a_futuristic_202601051531.jpeg" },
    { id: "img2", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDodEk72yvl1581Ka2S2MIwGYuk_vMRycC7UXVanfIepg0aYPiClQVL_POA5a2yHzMyWYF7Fsz5YQG25NNtq0KvESO2frfLgCo3dHUMn2bcA4cPnevEHvVdOIV_TFFVHhdXkwlqO6M68JxtU9MvtuC_wgku9ZnwoF9TBWvySrBAF7u-ZzB2xSPfd2EsYk/s1365/A_bustling_upscale_202601051521.jpeg" },
    { id: "img3", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGFxBFkNNSbsa7RpabdPo2GKFnhvWZ3P6v1Cg9RAa5xiZNjnRtNWmt5BhqA-6L8vJC8p2rSY9AfmIIQZf1uQC29hIN1mXe6Ba_NW4dFsUiKMBgHSOHTlmm0BtoDwscwJNntWM3H4nVQrMAkiTc73csXtZYyHyJLvTsfNyFS8dSPOv4WG46fgwR8x46hxY/s1365/A_sundrenched_rusticmodern_202601051523.jpeg" },
    { id: "img4", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifoY1MA-29LZUDGxAUHMUInFscEPXKYv4LPj43rbkg6IBf61s15YuvNv_iGSPoc4_HbkagpWYghrU3u8GaY8hkF2lNHGu6pJ9FyM8SUmFJ3n_UdP0l0QmoiLb2flzytFb5qnXw0lFxWBG_jP-iMV1JJnGd7_yJ_bCEVzhZ4teTBlQljwEZwGqB-AunRoE/s1365/Deep_in_an_202601051526.jpeg" },
  ],
  imageToVideo: [
    { id: "i2v1", type: "comparison", src: "cOV11fnrDF9", comparisonSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiz1VH9IocREDFvEqcYf0p1a6irt02XTG0nOOMrjaEtA2MfmVPTQ-y2UDpPZ0eED5pKYWioVoQ8rZIt-1xKBl3HJNImkkcEq8KukJalPA7xKDgG6SaY8fEyovtBDfzK60VsBx4JWSbIoPOYAtkjGoGhK3z53jcUDckBUPaMJx0JKvOJUj8n1q6Q_CXzdrU/s2560/wp1902192.jpg" },
    { id: "i2v2", type: "comparison", src: "cTlUiEnrcqX", comparisonSrc: "https://ik.imagekit.io/bensusx9i/Hyperrealistic_8k_video_2k(1)-min.jpeg" },
  ],
  stockVideo: [
    { id: "cOVhlknrIW0", type: "video", src: "cOVhlknrIW0" },
    { id: "cOVhlgnrISS", type: "video", src: "cOVhlgnrISS" },
    { id: "cOVhlgnrISR", type: "video", src: "cOVhlgnrISR" },
    { id: "cOVhlgnrISW", type: "video", src: "cOVhlgnrISW" },
  ],
  stockImage: [
    { id: "si1", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhmjCbXyiQj1ddrHn8qEWXLBrSIKEC75aRGcGRhfJemDibAjhJq45C2ZEIJ8M39uJDiIQ-Fddvg0LuT-U9h90G84seqTN6urmev4r1oxn5ITecJMG3m0ijZ7F8pwStXB2H9S9AXhmku4crC7l_bxIo4OV2GbKlg9NOV6l4iSS0BTGTxpUwr1vzqDtC_WQ/s1365/4k_hdr_red_202601051828.jpeg" },
    { id: "si2", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWWbfH07DMj8jz2AV10uqLtRu8XKn9ioFNHt5La_h1PDpyWwhAyTn3V5GwuG_AsxQRq0KQ6H1pk5CtpYAF37AG82_qqaVvI1LLQD3J6goyXhyVQ6qInZqjrw9rrBDgasaZvE0wyh4_G9kiFJJZHOtl6EiKQeMXhwa12_kHRgUvaLPGBF6Tcrq5SemgrhY/s1365/4k_drone__202601051828.jpeg" },
    { id: "si3", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3NQ0txH-V7jpFUO4INHdO_zimy0hyY07wyAI1k_AQ_61f2duWgMRsjab1WTu6btnmEf2YLe0N_vxMRr-5mVb8ieKOERqB1yGj9E7zwx7kZd4DXFjIKOCN7XikEohRC9pYXtLfC-xlAK5qZuxjGQw63LDwApN6SKkXxk3IVlUMPk4vYxit3QM8005_piE/s1365/4k_shot_on_202601051828.jpeg" },
    { id: "si4", type: "image", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg44G0Cw9YqlpGMVXhGNZOZYjhRdmIA4w8dYaqB6gMUrej-sSxy4AFOPsKjF4U2nzqOPbK6VtbxiAD1TxRWMTAoJTiHm2pAA7dc72OYrvyutt1Zxd3J6JvK4FRQIk5BvvhR8Lt4ZyMglKVQS6-tZ8Tso6M-oyObf6XClcK0FBUFJFJf8-j-n7Wdz2SijO0/s1365/4k_nikon_z9_202601051830.jpeg" },
  ],
  storytelling: [
    { id: "cOVhQ3nrI0s", type: "video", src: "cOVhQ3nrI0s" }
  ]
};

export const IMPACT_STATS = [
  { end: 140, label: "Brands Served", icon: <Users className="w-6 h-6" />, suffix: "+" },
  { end: 5000, label: "Videos Delivered", icon: <Video className="w-6 h-6" />, suffix: "+" },
  { end: 3000, label: "Ads Created", icon: <MonitorPlay className="w-6 h-6" />, suffix: "+" },
  { end: 10000, label: "Images Generated", icon: <ImageIcon className="w-6 h-6" />, suffix: "+" },
];