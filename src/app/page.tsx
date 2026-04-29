export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      
      {/* Liquid Glass Card */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-white">
        
        {/* Header Section */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 shadow-inner">
            {/* Placeholder for your logo */}
            <span className="text-xl font-bold">M</span>
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">mkzbrs Labs</h1>
            <p className="text-sm text-white/60 font-medium">Professional Dashboard</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-4">
          <p className="text-white/80 leading-relaxed">
            Welcome to the new portfolio. The Liquid Glass UI has been successfully initialized. 
            This card is rendering using Tailwind's backdrop-blur utilities over a dynamic gradient.
          </p>
        </div>

      </div>
      
    </main>
  );
}
