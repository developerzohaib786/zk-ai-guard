import React, { useState } from 'react';
import { ShoppingCart, Hospital, Building2, Shield, ChevronLeft, ChevronRight} from 'lucide-react';

// Data for the four case study cards
const caseStudies = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce Security',
    description: 'Protect your online store with our AI-driven web application firewall. Defend against data breaches, fraud, and ensure secure transactions with ZK-enhanced privacy.',
    color: 'text-red-400',
    robotSrc: 'https://placehold.co/150x150/1e293b/94a3b8?text=AI+Guard+1',
  },
  {
    icon: Hospital,
    title: 'Healthcare Data Protection',
    description: 'Secure patient data (PHI) and prevent unauthorized access. Our ZK protocols encrypt local and transit data, ensuring HIPAA compliance.',
    color: 'text-green-400',
    robotSrc: 'https://placehold.co/150x150/1e293b/94a3b8?text=AI+Guard+2',
  },
  {
    icon: Building2,
    title: 'Corporate VPN Defense',
    description: 'Enhance enterprise security with a ZK-hardened VPN. AI agents monitor internal traffic, neutralizing insider threats and maintaining network integrity.',
    color: 'text-yellow-400',
    robotSrc: 'https://placehold.co/150x150/1e293b/94a3b8?text=AI+Guard+3',
  },
  {
    icon: Shield,
    title: 'Financial Services Security',
    description: 'Safeguard banking transactions and customer data with advanced threat detection. Real-time monitoring prevents fraud while maintaining seamless user experience.',
    color: 'text-purple-400',
    robotSrc: 'https://placehold.co/150x150/1e293b/94a3b8?text=AI+Guard+4',
  },
];

const UseCasesSection = () => {
  const [currentPage, setCurrentPage] = useState(0); 
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size on mount and resize
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const cardsPerPage = isMobile ? 1 : 2;
  const totalCards = caseStudies.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage); 

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Calculate which cards to show
  const startIndex = currentPage * cardsPerPage;
  const visibleCards = caseStudies.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden py-20">
      
      {/* Floating geometric shapes */}
      <div className="absolute top-40 left-1/4 w-4 h-4 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400/40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-10">

        {/* Use Cases Cards & Slider */}
        <div className="w-full">
          {/* Header */}
          <div className="mb-12">
            <p className="text-blue-300 text-sm tracking-[0.3em] uppercase font-light">
              SECTOR-SPECIFIC CASE STUDIES
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mt-4">
              Use Cases
            </h2>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {visibleCards.map((study, index) => (
              <div
                key={startIndex + index}
                className="h-full bg-slate-900/60 border border-blue-400/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div className="flex flex-col items-start text-left gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative p-3 rounded-lg bg-blue-900/70 border border-blue-400/30">
                      <div className={`absolute inset-0 ${study.color}/50 blur-lg rounded-lg opacity-70`}></div>
                      <study.icon className={`w-10 h-10 ${study.color} relative z-10`} />
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
                
                {/* Robot Illustration inside card */}
                <div className="mt-4 flex justify-end">
                  <img 
                    src='/robot.png'
                    alt={`AI Robot for ${study.title}`} 
                    className="h-24 w-24 object-contain opacity-70"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/150x150/1e293b/94a3b8?text=Placeholder'; }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows and Pagination */}
          <div className="flex items-center gap-4 mt-8 justify-end">
            <div className="flex gap-2">
              <button 
                onClick={goToPrev} 
                className="p-3 text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={goToNext} 
                className="p-3 text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-gray-400">
              {isMobile 
                ? `${currentPage + 1} of ${totalCards}`
                : `Page ${currentPage + 1} of ${totalPages}`
              }
            </div>
          </div>
        </div>
        
      </div>

      {/* Tailwind animation for lines */}
      <style>{`
        @keyframes draw-line {
          0% {
            stroke-dasharray: 0 100;
          }
          100% {
            stroke-dasharray: 100 0;
          }
        }
        .animate-draw-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw-line 2s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default UseCasesSection;