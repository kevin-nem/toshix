import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memories - My Personal Space",
  description: "Special moments, experiences, and stories that have shaped my journey.",
};

export default function MemoriesPage() {
  // Sample memories data - in a real app, this would come from a CMS or database
  const memories = [
    {
      id: 1,
      title: "First Solo Trip",
      description: "Embarking on my first solo adventure to the mountains taught me so much about independence and self-discovery.",
      date: "2023-08-15",
      category: "Travel",
      emotion: "Adventurous",
      location: "Blue Ridge Mountains",
      highlights: [
        "Hiked 15 miles in a single day",
        "Met incredible people at the hostel",
        "Saw the most beautiful sunrise",
        "Learned to trust my instincts"
      ],
    },
    {
      id: 2,
      title: "Graduation Day",
      description: "After years of hard work, walking across that stage felt surreal. The pride in my family's eyes made every late night worth it.",
      date: "2023-05-20",
      category: "Achievement",
      emotion: "Proud",
      location: "University Campus",
      highlights: [
        "Summa Cum Laude honors",
        "Family came from across the country",
        "Emotional speech from my advisor",
        "Celebration dinner at our favorite restaurant"
      ],
    },
    {
      id: 3,
      title: "Learning to Cook",
      description: "During the pandemic, I discovered my love for cooking. What started as necessity became a passion that brings me joy daily.",
      date: "2023-03-10",
      category: "Personal Growth",
      emotion: "Fulfilled",
      location: "Home Kitchen",
      highlights: [
        "Mastered homemade pasta",
        "Hosted my first dinner party",
        "Started a recipe collection",
        "Brought family together over food"
      ],
    },
    {
      id: 4,
      title: "Mentoring Others",
      description: "Starting to mentor younger students reminded me why I love learning and teaching. Seeing their growth has been incredibly rewarding.",
      date: "2023-01-15",
      category: "Giving Back",
      emotion: "Grateful",
      location: "Community Center",
      highlights: [
        "Helped 5 students with their projects",
        "Organized study groups",
        "Shared my learning journey",
        "Built lasting friendships"
      ],
    },
    {
      id: 5,
      title: "First Marathon",
      description: "Crossing the finish line after months of training was emotional. The journey taught me about perseverance and setting goals.",
      date: "2022-10-08",
      category: "Challenge",
      emotion: "Accomplished",
      location: "City Marathon",
      highlights: [
        "6 months of dedicated training",
        "Raised money for charity",
        "Support from friends and family",
        "Personal best time"
      ],
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Travel: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
      Achievement: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
      "Personal Growth": "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      "Giving Back": "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
      Challenge: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300";
  };

  const getEmotionEmoji = (emotion: string) => {
    const emojis = {
      Adventurous: "🏔️",
      Proud: "🏆",
      Fulfilled: "❤️",
      Grateful: "🙏",
      Accomplished: "🎯",
    };
    return emojis[emotion as keyof typeof emojis] || "✨";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-green-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            My Memories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Special moments, experiences, and stories that have shaped my journey and made me who I am today.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-400"></div>

          {/* Memories */}
          <div className="space-y-12">
            {memories.map((memory) => (
              <div key={memory.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

                {/* Memory Card */}
                <div className="ml-16 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{getEmotionEmoji(memory.emotion)}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                          {memory.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={memory.date}>
                            {new Date(memory.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{memory.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(memory.category)}`}>
                        {memory.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                    {memory.description}
                  </p>

                  {/* Highlights */}
                  <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {memory.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="text-green-100 mb-6">
              Everyone has amazing memories and stories. I&apos;d love to hear about your memorable moments too.
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Share with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 