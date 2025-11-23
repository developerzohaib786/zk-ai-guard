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

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotation(prev => prev - 120);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotation(prev => prev + 120);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 800);
  };

  const current = slides[currentSlide];

  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Revolutionizing your
            <br />
            Productivity with
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            ZK Guard AI
          </h2>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - 3D Triangular Prism */}
          <div className="flex justify-center" style={{ perspective: '1200px' }}>
            <div className="relative w-80 h-96">
              {/* 3D Prism Container */}
              <div 
                className="absolute inset-0 transition-transform duration-800 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotation}deg)`
                }}
              >
                {/* Face 1 - Windows */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(0deg) translateZ(138px)'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-2 border-blue-500/30 rounded-3xl p-12 shadow-2xl w-72 h-96">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400 rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400 rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400 rounded-br-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="text-8xl mb-6 filter drop-shadow-2xl">🪟</div>
                      <h3 className="text-3xl font-bold text-white mb-2">Windows</h3>
                      <p className="text-xl text-blue-300">Application</p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                  </div>
                </div>

                {/* Face 2 - macOS */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(120deg) translateZ(138px)'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-12 shadow-2xl w-72 h-96">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-400 rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-400 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-400 rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-400 rounded-br-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="text-8xl mb-6 filter drop-shadow-2xl">🍎</div>
                      <h3 className="text-3xl font-bold text-white mb-2">macOS</h3>
                      <p className="text-xl text-purple-300">Application</p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                  </div>
                </div>

                {/* Face 3 - Linux */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(240deg) translateZ(138px)'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border-2 border-cyan-500/30 rounded-3xl p-12 shadow-2xl w-72 h-96">
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400 rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-3xl"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className="text-8xl mb-6 filter drop-shadow-2xl">🐧</div>
                      <h3 className="text-3xl font-bold text-white mb-2">Linux</h3>
                      <p className="text-xl text-cyan-300">Application</p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div 
            className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="bg-slate-900/40 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {current.title} Desktop Application
              </h2>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-6">
                  {current.content.heading}
                </h3>
                
                <ul className="space-y-4">
                  {current.content.points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-3 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105">
                Download Application
              </button>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="bg-blue-600/80 hover:bg-blue-500 disabled:bg-blue-800/50 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:scale-100 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="bg-blue-600/80 hover:bg-blue-500 disabled:bg-blue-800/50 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:scale-100 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== currentSlide) {
                  setIsAnimating(true);
                  const diff = index - currentSlide;
                  const normalizedDiff = diff > 0 ? diff : diff + 3;
                  setRotation(prev => prev - (normalizedDiff * 120));
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsAnimating(false);
                  }, 800);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-blue-400' 
                  : 'w-2 bg-blue-800 hover:bg-blue-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
   </>
  );
};

export default ZKGuardCarousel;