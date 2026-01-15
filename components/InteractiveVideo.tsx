import React, { useState, useRef } from 'react';
import { AlertCircle } from 'lucide-react';

interface InteractiveVideoProps {
  id: string; // ScreenPal ID or Direct URL
  aspectRatio?: string;
  coverImage?: string; // Optional custom cover
  title?: string;
}

const InteractiveVideo: React.FC<InteractiveVideoProps> = ({ id, aspectRatio = "56.25%", coverImage, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleError = () => {
    setError(true);
  };

  const isMp4 = id.toLowerCase().endsWith('.mp4') || id.startsWith('http');
  const videoSrc = isMp4 && !id.includes('#t=') ? `${id}#t=0.001` : id;

  if (error) {
    return (
      <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg aspect-video">
        <AlertCircle className="w-10 h-10 text-red-500 mb-2" />
        <span className="text-slate-500 dark:text-slate-400 text-sm">Video Unavailable</span>
      </div>
    );
  }

  // MP4 Handler
  if (isMp4) {
    return (
      <div className="relative w-full rounded-lg overflow-hidden bg-black shadow-lg border border-slate-200 dark:border-slate-800 group" style={{ paddingTop: aspectRatio }}>
        <div className="absolute inset-0 w-full h-full">
            <video
                ref={videoRef}
                className={`w-full h-full ${isPlaying ? 'object-contain bg-black' : 'object-cover'}`}
                playsInline
                controls={isPlaying}
                loop={false}
                muted={false} 
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={handleError}
                poster={coverImage}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        {/* Overlay - Clickable area without the play icon */}
        {!isPlaying && (
            <div 
                className="absolute inset-0 z-20 cursor-pointer bg-black/5 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
                onClick={handlePlay}
            >
                {/* Visual icon removed as requested */}
            </div>
        )}
      </div>
    );
  }

  // ScreenPal / Iframe Handler
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-black shadow-lg border border-slate-200 dark:border-slate-800" style={{ paddingTop: aspectRatio }}>
        {!isPlaying && (
           <div 
             className="absolute inset-0 z-20 cursor-pointer bg-black/5 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
             onClick={() => setIsPlaying(true)}
           >
              {/* Visual icon removed as requested */}
           </div>
        )}
        <div className="absolute inset-0 w-full h-full">
            <iframe 
                src={`https://go.screenpal.com/player/${id}?ff=1&title=0&controls=1&autoplay=${isPlaying ? 1 : 0}`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                allow="autoplay"
                onError={handleError}
                title={title || "Video Player"}
            />
        </div>
    </div>
  );
};

export default InteractiveVideo;