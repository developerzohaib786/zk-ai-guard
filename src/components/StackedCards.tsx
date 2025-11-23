import ScrollStack, { ScrollStackItem } from './ScrollStack'

const App = () => {
  return (
    <>
      <ScrollStack useWindowScroll={true} className="bg-slate-950 relative overflow-hidden">

        <ScrollStackItem>
          {/* Card 1 - ZK Guard AI Style Design */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[1120px]"></div>
            </div>

            {/* Main content container with border */}
            <div className="relative h-full rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm overflow-hidden">
              {/* Inner glow on border */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]"></div>

              {/* Content layout - Responsive: stack on mobile, side-by-side on desktop */}
              <div className="relative h-full flex flex-col md:flex-row items-center bg-black">
                
                {/* Left side - Text content */}
                <div className="w-full md:w-1/2 px-8 md:px-16 py-12 z-10">
                  <h2 className="text-5xl font-bold text-blue-200 mb-6 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.05em' }}>
                    Chrome Extension
                  </h2>
                  
                  <p className="text-lg text-blue-100/70 leading-relaxed mb-8 max-w-xl">
                    An ML-based Chrome extension powered by URL Scanning and Threat Detection AI agents with zk-enhanced analysis. Detects and classifies threats like phishing, malware, and defacement attempts in real time, ensuring safe browsing with minimal data leakage.
                  </p>

                  <button className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 text-white font-medium rounded-lg border border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    Installation Guide
                  </button>
                </div>

                {/* Right side - Image with overlay */}
                <div className="w-full md:w-1/2 h-full relative mt-8 md:mt-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Mobile card effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl m-4 md:m-8 shadow-lg md:shadow-none"></div>
                      
                      {/* Circular tech pattern */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
                        <div className="absolute inset-6 md:inset-8 border border-cyan-400/20 rounded-full"></div>
                        <div className="absolute inset-12 md:inset-16 border border-cyan-400/10 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      </div>

                      {/* Tech lines */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rotate-45"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -rotate-45"></div>
                      
                      {/* Chrome icon badge */}
                      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-400/30">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-cyan-100 font-medium text-lg">Chrome Extension</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>
            </div>
          </div>
        </ScrollStackItem>
 <ScrollStackItem>
          {/* Card 1 - ZK Guard AI Style Design */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[1120px]"></div>
            </div>

            {/* Main content container with border */}
            <div className="relative h-full rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm overflow-hidden">
              {/* Inner glow on border */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]"></div>

              {/* Content layout - Responsive: stack on mobile, side-by-side on desktop */}
              <div className="relative h-full flex flex-col md:flex-row items-center bg-black">
                
                {/* Left side - Text content */}
                <div className="w-full md:w-1/2 px-8 md:px-16 py-12 z-10">
                  <h2 className="text-5xl font-bold text-blue-200 mb-6 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.05em' }}>
                    Chrome Extension
                  </h2>
                  
                  <p className="text-lg text-blue-100/70 leading-relaxed mb-8 max-w-xl">
                    An ML-based Chrome extension powered by URL Scanning and Threat Detection AI agents with zk-enhanced analysis. Detects and classifies threats like phishing, malware, and defacement attempts in real time, ensuring safe browsing with minimal data leakage.
                  </p>

                  <button className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 text-white font-medium rounded-lg border border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    Installation Guide
                  </button>
                </div>

                {/* Right side - Image with overlay */}
                <div className="w-full md:w-1/2 h-full relative mt-8 md:mt-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Mobile card effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl m-4 md:m-8 shadow-lg md:shadow-none"></div>
                      
                      {/* Circular tech pattern */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
                        <div className="absolute inset-6 md:inset-8 border border-cyan-400/20 rounded-full"></div>
                        <div className="absolute inset-12 md:inset-16 border border-cyan-400/10 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      </div>

                      {/* Tech lines */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rotate-45"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -rotate-45"></div>
                      
                      {/* Chrome icon badge */}
                      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-400/30">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-cyan-100 font-medium text-lg">Chrome Extension</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>
            </div>
          </div>
        </ScrollStackItem>
         <ScrollStackItem>
          {/* Card 1 - ZK Guard AI Style Design */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[1120px]"></div>
            </div>

            {/* Main content container with border */}
            <div className="relative h-full rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm overflow-hidden">
              {/* Inner glow on border */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]"></div>

              {/* Content layout - Responsive: stack on mobile, side-by-side on desktop */}
              <div className="relative h-full flex flex-col md:flex-row items-center bg-black">
                
                {/* Left side - Text content */}
                <div className="w-full md:w-1/2 px-8 md:px-16 py-12 z-10">
                  <h2 className="text-5xl font-bold text-blue-200 mb-6 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.05em' }}>
                    Chrome Extension
                  </h2>
                  
                  <p className="text-lg text-blue-100/70 leading-relaxed mb-8 max-w-xl">
                    An ML-based Chrome extension powered by URL Scanning and Threat Detection AI agents with zk-enhanced analysis. Detects and classifies threats like phishing, malware, and defacement attempts in real time, ensuring safe browsing with minimal data leakage.
                  </p>

                  <button className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 text-white font-medium rounded-lg border border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    Installation Guide
                  </button>
                </div>

                {/* Right side - Image with overlay */}
                <div className="w-full md:w-1/2 h-full relative mt-8 md:mt-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Mobile card effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl m-4 md:m-8 shadow-lg md:shadow-none"></div>
                      
                      {/* Circular tech pattern */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
                        <div className="absolute inset-6 md:inset-8 border border-cyan-400/20 rounded-full"></div>
                        <div className="absolute inset-12 md:inset-16 border border-cyan-400/10 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      </div>

                      {/* Tech lines */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rotate-45"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -rotate-45"></div>
                      
                      {/* Chrome icon badge */}
                      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-400/30">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-cyan-100 font-medium text-lg">Chrome Extension</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>
            </div>
          </div>
        </ScrollStackItem>
         <ScrollStackItem>
          {/* Card 1 - ZK Guard AI Style Design */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[1120px]"></div>
            </div>

            {/* Main content container with border */}
            <div className="relative h-full rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm overflow-hidden">
              {/* Inner glow on border */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(59,130,246,0.15)]"></div>

              {/* Content layout - Responsive: stack on mobile, side-by-side on desktop */}
              <div className="relative h-full flex flex-col md:flex-row items-center bg-black">
                
                {/* Left side - Text content */}
                <div className="w-full md:w-1/2 px-8 md:px-16 py-12 z-10">
                  <h2 className="text-5xl font-bold text-blue-200 mb-6 tracking-wide" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.05em' }}>
                    Chrome Extension
                  </h2>
                  
                  <p className="text-lg text-blue-100/70 leading-relaxed mb-8 max-w-xl">
                    An ML-based Chrome extension powered by URL Scanning and Threat Detection AI agents with zk-enhanced analysis. Detects and classifies threats like phishing, malware, and defacement attempts in real time, ensuring safe browsing with minimal data leakage.
                  </p>

                  <button className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 text-white font-medium rounded-lg border border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                    Installation Guide
                  </button>
                </div>

                {/* Right side - Image with overlay */}
                <div className="w-full md:w-1/2 h-full relative mt-8 md:mt-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Mobile card effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl m-4 md:m-8 shadow-lg md:shadow-none"></div>
                      
                      {/* Circular tech pattern */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
                        <div className="absolute inset-6 md:inset-8 border border-cyan-400/20 rounded-full"></div>
                        <div className="absolute inset-12 md:inset-16 border border-cyan-400/10 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                      </div>

                      {/* Tech lines */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rotate-45"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent -rotate-45"></div>
                      
                      {/* Chrome icon badge */}
                      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-cyan-400/30">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        </div>
                        <span className="text-cyan-100 font-medium text-lg">Chrome Extension</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-400/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-400/30 rounded-br-3xl"></div>
            </div>
          </div>
        </ScrollStackItem>
        
      </ScrollStack>
    </>
  )
}

export default App
