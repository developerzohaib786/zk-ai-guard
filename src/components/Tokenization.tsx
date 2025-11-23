import React, { FC } from 'react';
import { PieChart, Megaphone, Users, Globe } from 'lucide-react';

// Define the structure for a single statistic item
interface StatItem {
  icon: FC<any>;
  percentage: string;
  label: string;
}

// Data mirroring the structure shown in the image
const tokenStats: StatItem[] = [
  {
    icon: PieChart,
    percentage: '80%',
    label: 'LP',
  },
  {
    icon: Megaphone,
    percentage: '10%',
    label: 'Marketing',
  },
  {
    icon: Users,
    percentage: '5%',
    label: 'Team (vested)',
  },
  {
    icon: Globe,
    percentage: '5%',
    label: 'CEX Listings',
  },
];

const TokenomicsSection: FC = () => {
  const imageUrl = "/token.png";

  return (
    <div className="min-h-screen bg-slate-950 py-20 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-4">
        <div>
          {/* Stats Bar */}
          <div className="bg-slate-900/80 backdrop-blur-sm border border-blue-800/50 rounded-2xl shadow-2xl shadow-blue-900/30 p-8 md:p-12 max-w-7xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {tokenStats.map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-start md:items-center text-center w-full md:w-1/4"
                >
                  <div className="relative p-3 mb-3">
                    <div className="absolute inset-0 bg-cyan-500/10 blur-md rounded-full opacity-50"></div>
                    <div className="relative p-2 rounded-full bg-blue-700/50">
                      <stat.icon className="w-8 h-8 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-1 tracking-tight">
                    {stat.percentage}
                  </h2>

                  <p className="text-blue-300 uppercase text-sm font-medium tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image of the Tokenomics Tree Diagram */}
          <div className="">
            <img
              src={imageUrl}
              width="90vw"
              height='90vh'
              alt="Tokenomics Distribution Diagram"
              className="w-full h-auto"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/800x600/1e3a8a/93c5fd?text=Error:+Image+Failed+to+Load';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;