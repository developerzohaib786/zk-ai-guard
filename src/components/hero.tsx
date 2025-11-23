import { Lock } from 'lucide-react';

const ZKGuardHero = () => {
 return (
    <div className="bg-slate-950 relative overflow-hidden">

      {/* Floating geometric shapes */}
      <div className="absolute top-40 left-1/4 w-4 h-4 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400/40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center">
        <div className="w-full px-8 py-10 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8 max-w-none pr-8">
            {/* Small header */}
            <div className="inline-block">
              <p className="text-blue-300 text-sm tracking-[0.3em] uppercase font-light">
                PREVENT CYBER ATTACKS
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Shield Your Digital Assets with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                ZK Guard AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              ZK Guard AI is a multi-agent system strengthened with Zero-Knowledge (ZK) protocols that provide next-gen privacy and security. Our AI agents proactively defend against threats and data breaches, ensuring real-time detection and neutralization of risks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white font-medium rounded-lg border border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
                Telegram AI Agent
              </button>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                Download App
              </button>
            </div>
          </div>

          {/* Right side - Shield illustration */}
          <div className="relative hidden md:flex items-center justify-center">
            {/* Glowing effect behind shield */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* Shield container */}
            <div className="relative">
              {/* Animated circles around shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 border border-blue-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border border-cyan-400/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              </div>

              {/* Main shield */}
              <div className="relative">
                {/* Shield background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-2xl rounded-full"></div>
                
                {/* Shield SVG */}
                <div className="relative w-80 h-96 flex items-center justify-center">
                  {/* Shield outline */}
                  <div className="absolute w-64 h-80 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-t-full rounded-b-[50%] border-2 border-blue-400/50 shadow-2xl shadow-blue-500/50"></div>
                  
                  {/* Inner shield design */}
                  <div className="absolute w-56 h-72 bg-gradient-to-br from-blue-800/20 to-cyan-800/20 rounded-t-full rounded-b-[50%] border border-blue-400/30"></div>
                  
                  {/* Center lock icon */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400/30 blur-xl rounded-full"></div>
                      <div className="relative bg-blue-500/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-300/50 shadow-lg">
                        <Lock className="w-16 h-16 text-cyan-200" />
                      </div>
                    </div>
                  </div>

                  {/* Particle effects */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>

                  {/* Light rays */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-cyan-400/50 to-transparent blur-sm"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-45 w-1 h-24 bg-gradient-to-t from-blue-400/30 to-transparent blur-sm"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -rotate-45 w-1 h-24 bg-gradient-to-t from-blue-400/30 to-transparent blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ZKGuardHero;
