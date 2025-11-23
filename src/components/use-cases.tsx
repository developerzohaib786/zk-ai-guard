import React, { useState } from 'react';
import { ShoppingCart, Heart, Hospital, Building2, ChevronLeft, ChevronRight, Zap, Shield, Package, Eye } from 'lucide-react';

// Data for the three case study cards (as requested)
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
];

// Combine case studies for the carousel track (Card 1, 2, 3, then loop back to Card 1 for the transition)
const carouselItems = [...caseStudies, caseStudies[0]]; 

const UseCasesSection: React.FC = () => {
  // State to track the starting index of the visible cards (page 0 or page 1)
  const [currentPage, setCurrentPage] = useState(0); 
  const cardsPerPage = 2;
  const totalCards = caseStudies.length;
  // We only have 2 pages: Page 0 (Cards 1, 2) and Page 1 (Card 3, 1)
  const totalPages = 2; 

  const goToNext = () => {
    // If on the last page (index 1), immediately jump back to the start (index 0) visually
    if (currentPage === totalPages - 1) {
      // Use a temporary state to smooth the transition back to the start
      setCurrentPage(totalPages); // Move to the dummy last position (Card 3, 1)
      setTimeout(() => {
        // Reset to 0 without transition class
        setCurrentPage(0);
      }, 500); // Match the transition duration
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    // If on the first page (index 0), jump to the last page (index 1)
    if (currentPage === 0) {
      // Use a temporary state to smooth the transition back to the start
      setCurrentPage(-1); // Move to the dummy pre-first position
      setTimeout(() => {
        // Reset to 1 without transition class
        setCurrentPage(totalPages - 1);
      }, 500); // Match the transition duration
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Calculate the translation value for the slider track
  // Each 'page' (2 cards) is 50% of the total track width (4 cards wide, 2 visible)
  let translateX;
  if (currentPage === -1) {
    // Move to the virtual position before 0 (for smooth reverse looping)
    translateX = 0; 
  } else if (currentPage === totalPages) {
    // Move to the virtual position after the last page (for smooth forward looping)
    translateX = -totalPages * 100 / (totalCards / cardsPerPage); 
  } else {
    // Normal movement (0 -> -50% for page 2, 1 -> -100% for page 3)
    // Since our track is 4 cards wide (200%), each move is 50%
    translateX = currentPage * -(100 / totalPages);
  }

  // Determine if transition should be applied (avoid transition when snapping for the loop)
  const isTransitioning = currentPage >= 0 && currentPage < totalPages;

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden py-20">
      
      {/* Floating geometric shapes */}
      <div className="absolute top-40 left-1/4 w-4 h-4 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400/40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      {/* ------------------------------------------------------------------------- */}

      {/* Main Content Wrapper (Now centered and full width for the carousel) */}
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

          {/* Card Carousel Wrapper - Shows 2 cards at a time */}
          <div className="relative overflow-hidden">
            
            {/* Inner track that moves */}
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : 'transition-none'}`}
              // Total width is 4 cards (4/2 * 100%) = 200%
              style={{ transform: `translateX(${translateX}%)`, width: '200%' }}
            >
              {carouselItems.map((study, index) => (
                <div
                  key={index}
                  // Each card takes up 25% of the 200% track width = 50% of the visible container
                  className="w-1/4 flex-shrink-0 p-4"
                >
                    <div
                        className="h-full bg-slate-900/60 border border-blue-400/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
                    >
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 pt-1">
                                <div className="relative p-2 rounded-lg bg-blue-900/70 border border-blue-400/30">
                                    <div className={`absolute inset-0 ${study.color}/50 blur-lg rounded-lg opacity-70`}></div>
                                    <study.icon className={`w-8 h-8 ${study.color} relative z-10`} />
                                </div>
                            </div>
                            
                            {/* Title & Description */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
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
                                src='/robot.png' // Reverted to use data-defined placeholder
                                alt={`AI Robot for ${study.title}`} 
                                className="h-24 w-24 object-contain opacity-70"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/150x150/1e293b/94a3b8?text=Placeholder'; }}
                            />
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows and Pagination */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex gap-2">
              <button 
                onClick={goToPrev} 
                className="p-3 bg-blue-800/50 hover:bg-blue-700/70 text-white rounded-full border border-blue-400/30 transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={goToNext} 
                className="p-3 bg-blue-800/50 hover:bg-blue-700/70 text-white rounded-full border border-blue-400/30 transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-gray-400">
              Card {((currentPage % totalPages) * cardsPerPage) + 1} - {((currentPage % totalPages) * cardsPerPage) + cardsPerPage} of {totalCards}
            </div>
          </div>
        </div>
        
      </div>

      {/* Tailwind animation for lines (kept the style block as it was part of the previous code's styling) */}
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