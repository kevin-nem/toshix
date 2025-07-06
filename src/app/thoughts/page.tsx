import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts - My Personal Space",
  description: "Ideas, reflections, and musings about life, technology, and everything in between.",
};

export default function ThoughtsPage() {
  // Sample thoughts data - in a real app, this would come from a CMS or database
  const thoughts = [
    {
      id: 1,
      title: "The Intersection of Technology and Human Connection",
      excerpt: "In our increasingly digital world, how do we maintain authentic human connections while embracing technological advancement?",
      content: "Technology has fundamentally changed how we connect with others. While it offers unprecedented opportunities for communication and collaboration, it also presents challenges...",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Technology", "Society", "Reflection"],
    },
    {
      id: 2,
      title: "Finding Balance in a Fast-Paced World",
      excerpt: "Reflections on slowing down and finding moments of peace in our busy lives.",
      content: "In our rush to achieve more, do more, and be more, we often forget to simply be present in the moment...",
      date: "2024-01-10",
      readTime: "3 min read",
      tags: ["Life", "Balance", "Mindfulness"],
    },
    {
      id: 3,
      title: "The Art of Learning in Public",
      excerpt: "Why sharing our learning journey can be transformative for both ourselves and others.",
      content: "Learning in public is about documenting and sharing your learning process, mistakes, and discoveries...",
      date: "2024-01-05",
      readTime: "4 min read",
      tags: ["Learning", "Growth", "Community"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            My Thoughts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ideas, reflections, and musings about life, technology, and everything in between.
          </p>
        </header>

        {/* Thoughts List */}
        <div className="space-y-12">
          {thoughts.map((thought) => (
            <article
              key={thought.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={thought.date}>
                    {new Date(thought.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{thought.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {thought.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {thought.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {thought.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                <span>Read more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to discuss these thoughts?</h3>
            <p className="text-blue-100 mb-6">
              I&apos;d love to hear your perspectives and engage in meaningful conversations.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 