import { Shield, Zap, Package, Eye } from 'lucide-react';

// Data for the feature cards
const features = [
  {
    icon: Zap,
    title: 'Threat Detection Agent',
    description: 'The Threat Detection AI agent uses advanced algorithms to identify and mitigate potential threats in real time.',
    color: 'text-red-400',
  },
  {
    icon: Shield,
    title: 'Proactive Defense Agent',
    description: 'Powered by zk-SNARKs, this agent monitors traffic and blocks malicious activity while ensuring confidentiality.',
    color: 'text-green-400',
  },
  {
    icon: Package,
    title: 'Data Encryption Agent',
    description: 'AI agent using zk-based encryption to secure data both at rest and in transit, enhancing privacy against unauthorized access.',
    color: 'text-yellow-400',
  },
  {
    icon: Eye,
    title: 'Audit Agent',
    description: 'The Audit AI agent uses zk-SNARKs to analyze code and detect vulnerabilities in real time, ensuring robust security.',
    color: 'text-purple-400',
  },
];

const FeaturesSection = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">

      {/* Floating geometric shapes */}
      <div className="absolute top-40 left-1/4 w-4 h-4 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400/40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex py-10">
        <div className="w-full grid lg:grid-cols-2 gap-18 px-10">

          {/* Left Side: Lock Illustration */}
          <div className="relative flex items-center justify-center lg:justify-start min-h-[400px] lg:block hidden">
            {/* <-- Added lg:block hidden to hide on mobile -->

            Background Glow */}
            <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Lock Container */}
            <div className="relative z-10">
              <div className="relative w-64 h-80">
                <div className="absolute bottom-0 w-full h-4/5 bg-blue-900/50 backdrop-blur-sm rounded-xl border border-blue-400/30 shadow-2xl shadow-blue-500/30 p-8 flex items-center justify-center">
                  <div className="w-12 h-16 bg-slate-950/70 rounded-b-xl border border-blue-400/50 shadow-inner shadow-slate-900/50 flex items-center justify-center">
                    <div className="w-2 h-4 bg-gray-500/70 rounded-sm"></div>
                    <div className="absolute bottom-[20px] w-4 h-2 bg-gray-500/70"></div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-20 border-4 border-blue-400/70 rounded-t-full rounded-b-none shadow-xl shadow-blue-500/20" style={{ clipPath: 'polygon(0% 100%, 0% 50%, 100% 50%, 100% 100%, 80% 100%, 80% 70%, 20% 70%, 20% 100%)' }}>
                  <div className="absolute inset-0 bg-blue-500/10 rounded-t-full"></div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 10% 10%, #7DD3FC 1px, transparent 0), radial-gradient(circle at 90% 20%, #7DD3FC 1px, transparent 0), radial-gradient(circle at 30% 80%, #7DD3FC 1px, transparent 0), radial-gradient(circle at 70% 60%, #7DD3FC 1px, transparent 0)`,
                    backgroundSize: '10px 10px',
                    opacity: 0.8
                  }}></div>
                </div>
              </div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 border border-blue-300/50 rotate-45 animate-pulse"></div>

          </div>

          {/* Right Side: Features Title and Grid */}
          <div className="space-y-12">
            <div className="text-right lg:text-left">
              <h2 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                Features
              </h2>
              <p className="text-blue-300 text-sm tracking-[0.3em] uppercase font-light mt-2">
                DIGITAL GUARDIANS ON WATCH
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-blue-400/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-blue-500/10 space-y-4"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative p-2 rounded-lg bg-blue-900/70 border border-blue-400/30">
                        <div className={`absolute inset-0 ${feature.color}/50 blur-lg rounded-lg opacity-70`}></div>
                        <feature.icon className={`w-6 h-6 ${feature.color} relative z-10`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
