"use client";
import { useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "A Moment of Calm",
    excerpt: "Sometimes, the best thing you can do is look at the sky and breathe.",
    date: "2024-07-06",
    image: "/hero.jpg",
  },
  {
    id: 2,
    title: "Clouds are Stories",
    excerpt: "Every cloud is a story in motion. I love watching them drift and change.",
    date: "2024-07-05",
    image: "/clouds.jpg",
  },
  {
    id: 3,
    title: "Blue is Peace",
    excerpt: "The color of the sky always brings me peace and clarity.",
    date: "2024-07-04",
    image: "/blue.jpg",
  },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDark = () => {
    setDark((d) => {
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", !d);
      }
      return !d;
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-sky-100 to-yellow-50 dark:from-[#18122B] dark:via-[#393053] dark:to-[#443C68] transition-colors duration-300">
      {/* Navbar */}
      <nav className="w-full sticky top-0 z-20 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-purple-600 dark:text-yellow-300 tracking-tight">Kevin Ryoma</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-yellow-300 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDark}
              className="ml-2 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-purple-100 dark:hover:bg-yellow-200/20 transition-colors"
            >
              {dark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-purple-100 dark:hover:bg-yellow-200/20"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-purple-600 dark:text-yellow-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-purple-600 dark:text-yellow-300" />
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200 dark:border-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 dark:text-neutral-200 hover:text-purple-600 dark:hover:text-yellow-300 font-medium py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDark}
              className="mt-2 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-purple-100 dark:hover:bg-yellow-200/20 transition-colors self-start"
            >
              {dark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-purple-600" />
              )}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-4 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4 drop-shadow-lg"
        >
          Welcome to My Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 max-w-2xl mb-8"
        >
          Thoughts, stories, and snapshots from my journey. Minimal, elegant, and a little bit playful.
        </motion.p>
        <motion.a
          href="#blog"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-purple-500 to-yellow-400 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
        >
          Read the Blog
        </motion.a>
        {/* Optional: background image/gradient overlay */}
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <div className="w-full h-full bg-gradient-to-br from-purple-100/60 via-sky-100/60 to-yellow-50/60 dark:from-[#18122B]/60 dark:via-[#393053]/60 dark:to-[#443C68]/60" />
        </div>
      </header>

      {/* Blog Post Grid */}
      <section id="blog" className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-neutral-100 dark:border-neutral-800 overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 hover:scale-[1.025] transition-transform"
              whileHover={{ scale: 1.025 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={post.id === 1}
                />
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-neutral-900/80 px-3 py-1 rounded-full text-xs font-medium text-purple-600 dark:text-yellow-300 shadow">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-yellow-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-auto text-sm font-medium text-purple-600 dark:text-yellow-300 group-hover:underline">
                  Read more →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-neutral-400 text-sm py-8 mt-auto">
        &copy; {new Date().getFullYear()} Kevin Ryoma
      </footer>
    </div>
  );
}
