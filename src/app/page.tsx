"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const memory = {
  title: "✈️ Memory Note — End of August 2022",
  date: "2022-08-31",
  excerpt: `As I leave Tokyo, I hop into a taxi to meet my friend Yuko for lunch. We catch up, and to my surprise, I discover she's using Kpler — the very company I work for. It's a fun and unexpected connection that makes me smile. Time flies, and soon I'm rushing to catch my flight at Haneda Airport.

Before boarding, I pay extra to change my seat to an aisle — a small comfort for a long trip. The flight is from Tokyo to Singapore.

Once seated, I find myself next to a woman named XXX who immediately engages in conversation. She's American, living in Phoenix, Arizona, and flying to Cambodia to reunite with an old friend — a former footballer. That small detail makes her journey sound like it belongs in a novel.

As we begin talking, the conversation unfolds effortlessly. We spend nearly six hours sharing our stories, drinking Japanese sake, and opening up as if we'd known each other for years.

One of the more emotional moments comes when she tells me about her ex-boyfriend — the man she once believed would become her husband. She shares how she later discovered that he was a drug addict, and possibly involved in criminal activities. This revelation shattered both the relationship and a part of her.

She shows me pictures of them together — images from a time when everything seemed happy, at least on the surface. There's regret in her voice, not only for the loss of those memories, but for not being able to see the signs sooner. Her vulnerability is raw, and I feel honored that she's sharing such an intimate part of her life with a stranger on a plane.

As we land in Singapore, rain is falling softly outside the plane windows. She mentions she'll probably just sleep at the airport or wander the city until her flight to Cambodia in the morning. Without thinking too much, I offer her a place to stay — a friend's apartment I was borrowing, since I had no apartment of my own at the time. To my surprise, she accepts instantly.

"Are you sure?" I ask, hesitating. "We've only known each other for a few hours."

She smiles. "We've talked about so much. I feel like I already know you."

After passing customs and picking up the keys from another friend, we finally arrive at the apartment. Nothing remarkable happens — I just feel quietly happy I could help someone. She settles in on the sofa while I take the bed. We prepare to sleep, and I turn off the lights.

"Good night," I say softly.

A few minutes pass. Then her voice breaks the silence:

"Are you awake?"

I glanced at my phone, assuming the brightness was disturbing her. I quickly apologized and dimmed the screen.

But then she asked again. And again.

The third time, she paused — and then asked quietly:

"Do you want to cuddle?"

I froze for a second. My mind filled with questions.

Cuddle… does she mean just that? Or is there something more behind those words? Is this about comfort? Intimacy? Desire? Or simply not wanting to be alone?

I turned the question over and over in my head in a matter of seconds. So much had happened in the last few hours — a deep, unexpected connection that somehow brought two strangers close in a way neither could have predicted. And now, suspended in the quiet of a rainy Singapore night, she was asking to close that distance even more.`,
};

export default function Home() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !dark);
    }
    setDark(!dark);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-yellow-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-500 px-2 md:px-8 py-12">
      <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-white/90 dark:bg-neutral-950/90 rounded-2xl shadow-xl p-8 md:p-16 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300 leading-tight mb-4 font-sans text-center">
            {memory.title}
          </h1>
          <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-8 font-mono text-center">
            {new Date(memory.date).toLocaleDateString('en-US', {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="text-[1.25rem] md:text-[1.35rem] lg:text-[1.5rem] text-neutral-800 dark:text-neutral-100 leading-relaxed font-serif whitespace-pre-line max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-left" style={{ letterSpacing: '0.01em' }}>
            {memory.excerpt}
          </div>
        </motion.div>
      </div>
      {/* Toggle Button (Optional) */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 px-3 py-1.5 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-xl shadow hover:scale-105 transition-all"
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
    </main>
  );
}