import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './../components/Navbar'; 

interface Slide {
  title: string;
  subtitle: string;
  icon: string;
  content: {
    heading: string;
    points: string[];
  };
}

const slides: Slide[] = [
  {
    title: "Windows",
    subtitle: "Application",
    icon: "🪟",
    content: {
      heading: "Installation Guide",
      points: [
        "Download the ZK Guard AI Desktop App by clicking the button below. Once the .exe file is downloaded, simply double-click to begin installation. The setup is automatic and takes just a few seconds.",
        "After installation is complete, you're all set. Just launch the app and start monitoring traffic, scanning files, encrypting data, and managing passwords, all from one place.",
        "ZK Guard AI is built to be lightweight, fast, and ready out of the box. No complex setup. Just install, open, and protect your device instantly."
      ]
    }
  }, 
  {
    title: "macOS",
    subtitle: "Application",
    icon: "🍎",
    content: {
      heading: "Installation Guide",
      points: [
        "Download the ZK Guard AI for macOS by clicking the button below. Once the .dmg file is downloaded, open it and drag the app to your Applications folder.",
        "After installation, launch ZK Guard AI from your Applications. Grant necessary permissions when prompted to enable full protection features.",
        "Experience seamless integration with macOS. Monitor your system, encrypt files, and manage security with an intuitive native interface."
      ]
    }
  },
  {
    title: "Linux",
    subtitle: "Application",
    icon: "🐧",
    content: {
      heading: "Installation Guide",
      points: [
        "Download the ZK Guard AI AppImage or .deb package. For AppImage, make it executable and run. For .deb, use your package manager or double-click to install.",
        "Launch the application and configure your preferred security settings. ZK Guard AI integrates seamlessly with your Linux environment.",
        "Enjoy robust security features optimized for Linux. Lightweight, efficient, and designed for power users who demand the best protection."
      ]
    }
  }
];

const ZKGuardCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentKey, setContentKey] = useState(0);

  const handleTransition = (newIndex: number, newRotation: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setRotation(newRotation);
      setCurrentSlide(newIndex);
      setContentKey(prev => prev + 1);
    }, 400); 

    setTimeout(() => {
      setIsAnimating(false);
    }, 800); 
  };

  const handleNext = () => {
    const newRotation = rotation - 120;
    const newIndex = (currentSlide + 1) % slides.length;
    handleTransition(newIndex, newRotation);
  };

  const handlePrev = () => {
    const newRotation = rotation + 120;
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    handleTransition(newIndex, newRotation);
  };

  const current = slides[currentSlide];

  return (
    <>
      <Navbar/> 
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl w-full relative z-10">
          
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4">
              Revolutionizing your
              <br className="hidden md:block" />
              Productivity with
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ZK Guard AI
            </h2>
          </div>

          {/* Main Content Container - Flex column on mobile, Grid on desktop */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-8 md:items-center">
            
            {/* 1. Left Prism (Carousel) */}
            <div className="order-1 flex justify-center" style={{ perspective: '1200px' }}>
              <div className="relative w-64 h-80 md:w-80 md:h-96"> 
                <div 
                  className="absolute inset-0 transition-transform duration-800 ease-in-out"
                  style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotation}deg)` }}
                >
                  {slides.map((slide, i) => (
                    <div key={i} className="absolute inset-0 flex items-center justify-center"
                      style={{ transformStyle: 'preserve-3d', transform: `rotateY(${i*120}deg) translateZ(138px)` }}
                    >
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-6 md:p-12 shadow-2xl w-full h-full flex flex-col items-center justify-center">
                        <div className="text-6xl md:text-8xl mb-4 md:mb-6 filter drop-shadow-2xl">{slide.icon}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{slide.title}</h3>
                        <p className="text-lg md:text-xl text-blue-300">{slide.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Right Content Card */}
            <div className="order-3 md:order-2 flex justify-center md:justify-end">
              <div className="w-full max-w-lg md:w-[600px] h-[400px] relative perspective-[1000px] bg-slate-900/40 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                {/* Content Wrapper for Flip Effect */}
                <div key={contentKey} className={`w-full h-full backface-hidden transition-transform duration-700 transform ${isAnimating ? 'rotate-y-180' : 'rotate-y-0'}`}>
                  {/* Actual Content */}
                  <div className="w-full h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {current.title} Desktop Application
                      </h2>
                      
                      <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4 md:mb-6">
                        {current.content.heading}
                      </h3>

                      <ul className="space-y-3">
                        {current.content.points.map((point, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                            <span className="text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-4 w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-[1.02]">
                      Download Application
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2. Navigation Buttons (in a separate div for mobile flow) */}
            <div className="order-2 flex justify-center gap-4 md:hidden">
              <button onClick={handlePrev} disabled={isAnimating} className="bg-blue-600/80 hover:bg-blue-500 disabled:bg-blue-800/50 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:scale-100 shadow-lg">
                <ChevronLeft size={24} />
              </button>
              <button onClick={handleNext} disabled={isAnimating} className="bg-blue-600/80 hover:bg-blue-500 disabled:bg-blue-800/50 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:scale-100 shadow-lg">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Buttons (Desktop only, below the grid) */}
          <div className="hidden md:flex justify-center gap-4 mt-12">
            <button onClick={handlePrev} disabled={isAnimating} className="bg-blue-600/80 hover:bg-blue-500 disabled:bg-blue-800/50 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:scale-100 shadow-lg">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} disabled={isAnimating} className="bg-blue-600/80 hover:bg-blue-500 disabled:bg-blue-800/50 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:scale-100 shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZKGuardCarousel;