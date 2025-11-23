import React, { useState, FC } from 'react';
import { Plus, Minus, ChevronDown } from 'lucide-react';

// Define the type for an individual FAQ item
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Sample Data based on the image's questions
const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Can I customize the security rules in ZK Guard AI?',
    answer: 'Yes. ZK Guard AI provides a comprehensive dashboard where administrators can define and modify custom security rules, whitelist specific traffic patterns, and configure alert thresholds to tailor defense strategies to unique organizational needs.',
  },
  {
    id: 2,
    question: 'Is ZK Guard AI a multi-AI agent platform?',
    answer: 'Absolutely. ZK Guard AI operates using a decentralized network of specialized agents, including the Threat Detection Agent, Data Encryption Agent, and Proactive Defense Agent, which work collaboratively to ensure 360-degree security.',
  },
  {
    id: 3,
    question: 'What types of attacks does ZK Guard AI protect against?',
    answer: 'Our platform is designed to defend against a wide array of cyber threats, including SQL injection, Cross-Site Scripting (XSS), Denial of Service (DoS), zero-day exploits, and sophisticated data exfiltration attempts using ZK-SNARKS for verifiable integrity.',
  },
  {
    id: 4,
    question: 'How does ZK Guard AI handle false positives?',
    answer: 'We utilize advanced machine learning algorithms combined with behavioral analysis to minimize false positives. The system continuously learns from human feedback and network anomalies, allowing it to distinguish between legitimate and malicious activity with high accuracy.',
  },
  {
    id: 5,
    question: 'Can ZK Guard AI be used for mobile applications?',
    answer: 'Yes, ZK Guard AI offers dedicated SDKs and API endpoints optimized for integration with both iOS and Android platforms, extending the zero-knowledge security perimeter to your mobile user base.',
  },
  {
    id: 6,
    question: 'Does ZK Guard AI rely on third-party APIs or databases for security?',
    answer: 'No. The core security logic and zero-knowledge proof generation run entirely within your private environment. While it can integrate with existing systems, its primary defense capabilities are self-contained and private by design.',
  },
];

// Individual Accordion Item Component
const AccordionItem: FC<{ item: FaqItem; isOpen: boolean; toggle: () => void }> = ({ item, isOpen, toggle }) => {
  return (
    <div className="mb-4 rounded-lg bg-slate-900/50 border border-blue-800/50 shadow-xl shadow-blue-900/20 transition-all duration-300">
      {/* Question Header */}
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full p-5 text-left text-white font-medium tracking-wide transition-colors duration-200 hover:text-cyan-400"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{item.question}</span>
        {/* Toggle Icon: Use Plus, remove background, use white color and subtle shadow for glow */}
        <div className="p-1"> {/* Minimal padding retained for touch target size */}
          <Plus 
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              // Add a subtle text shadow/glow effect
              isOpen ? 'rotate-45 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'rotate-0 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]'
            }`} 
          />
        </div>
      </button>

      {/* Answer Content (Animated) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 px-5'
        }`}
      >
        <div className="pt-2 border-t border-blue-700/50 text-gray-300 leading-relaxed text-base">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component
const FAQSection: FC = () => {
  // State to track which item is currently open (null if none)
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // The URL of the robot image from the user's uploaded file
  const robotImageUrl = "robot.png";

  return (
    <div className="min-h-screen bg-slate-950 py-20 relative overflow-hidden flex flex-col items-center">
      
      {/* --- Background Effects (Matching the futuristic theme) --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full border border-blue-500/10 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full border border-cyan-500/10 blur-sm"></div>
        {/* Main central circular glow (as seen in the image) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-70"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <p className="text-blue-300 text-sm tracking-[0.3em] uppercase font-light">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h1 className="text-7xl font-extrabold text-white tracking-tight mt-4">
          FAQs
        </h1>
      </div>

      {/* Main Content Grid: Robot & Accordion */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-8 grid md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Robot Graphic */}
        <div className="hidden md:block md:col-span-4 lg:col-span-3 pt-8 relative">
          {/* We display the full robot image, removing the clipping style */}
          <div className="w-full h-[600px] relative">
            <img 
              src={robotImageUrl}
              alt="AI Robot"
              className="absolute inset-0 w-full h-full object-contain object-left-top" // Removed scale and cropping
              onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src='https://placehold.co/300x600/1e3a8a/93c5fd?text=AI+Assistant'; // Fallback
              }}
            />
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="md:col-span-8 lg:col-span-9">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;