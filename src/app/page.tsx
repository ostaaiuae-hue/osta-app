export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Welcome to <span className="text-brand-blue">Osta</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Modern service management platform built with Next.js, TypeScript, and Supabase
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-light transition-colors font-semibold">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
