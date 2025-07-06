import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos - My Personal Space",
  description: "Visual stories and moments captured through my lens, sharing the beauty I see.",
};

export default function PhotosPage() {
  // Sample photos data - in a real app, this would come from a CMS or database
  const photos = [
    {
      id: 1,
      title: "Golden Hour",
      description: "The city skyline bathed in warm golden light during sunset.",
      location: "Downtown",
      date: "2024-01-20",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Sunset", "Architecture", "Urban"],
    },
    {
      id: 2,
      title: "Morning Coffee",
      description: "A quiet moment with my favorite cup and a good book.",
      location: "Home",
      date: "2024-01-18",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Still Life", "Coffee", "Cozy"],
    },
    {
      id: 3,
      title: "Nature's Geometry",
      description: "The intricate patterns found in a spider's web covered in morning dew.",
      location: "Local Park",
      date: "2024-01-15",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Macro", "Nature", "Patterns"],
    },
    {
      id: 4,
      title: "Street Life",
      description: "Candid moments of people going about their daily lives.",
      location: "City Center",
      date: "2024-01-12",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Street", "People", "Documentary"],
    },
    {
      id: 5,
      title: "Peaceful Waters",
      description: "Reflections on a calm lake during the blue hour.",
      location: "Lake District",
      date: "2024-01-10",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Landscape", "Water", "Reflection"],
    },
    {
      id: 6,
      title: "Urban Patterns",
      description: "The rhythmic patterns of building facades in the business district.",
      location: "Financial District",
      date: "2024-01-08",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Architecture", "Patterns", "Urban"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            My Photos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Visual stories and moments captured through my lens, sharing the beauty I see in the world around us.
          </p>
        </header>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">📸</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Photo placeholder
                    </p>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {photo.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{photo.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {photo.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {photo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <time 
                    dateTime={photo.date}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {new Date(photo.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <button className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-sm transition-colors">
                    View full size
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Love photography too?</h3>
            <p className="text-purple-100 mb-6">
              I&apos;d love to connect with fellow photography enthusiasts and share experiences.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Let&apos;s connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 