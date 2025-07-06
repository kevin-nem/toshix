import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to My Space
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A personal corner of the internet where I share my thoughts, capture memories, and showcase moments that matter.
          </p>
        </header>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/thoughts" className="group">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💭</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Thoughts</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ideas, reflections, and musings about life, technology, and everything in between.
              </p>
            </div>
          </Link>

          <Link href="/photos" className="group">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transform hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📸</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Photos</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visual stories and moments captured through my lens, sharing the beauty I see.
              </p>
            </div>
          </Link>

          <Link href="/memories" className="group">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transform hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Memories</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Special moments, experiences, and stories that have shaped my journey.
              </p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Recent Activity</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-xl">💭</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">Latest Thought</h3>
                <p className="text-gray-600 dark:text-gray-300">Reflecting on the intersection of technology and human connection...</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">2 days ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-xl">📸</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">New Photo</h3>
                <p className="text-gray-600 dark:text-gray-300">Captured a beautiful sunset from my morning walk...</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">1 week ago</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
