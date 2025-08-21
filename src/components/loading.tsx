export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-20 h-20 border-4 border-slate-600/30 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
          </div>
          
          {/* Inner Pulsing Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Orbiting Dots */}
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
            <div className="w-2 h-2 bg-blue-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full absolute top-1/2 -left-1 transform -translate-y-1/2"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Loading
          </h2>
          
          {/* Animated Dots */}
          <div className="flex items-center justify-center space-x-1">
            <span className="text-gray-400">Preparing your content</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64">
          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-pulse bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Status Messages */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 animate-pulse">
            Just a moment while we get everything ready...
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({length: 6}).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}