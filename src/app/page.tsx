"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// You can keep your Google Fonts import for 'Inter' and 'Playfair Display' in globals.css.

const memory = {
  title: "The Distance Between Two Seats",
  subtitle: "✈️ Memory Note — End of August 2022",
  date: "2022-08-31",
  paragraphs: [
    "I was finishing my trip in Japan, where I had stayed for nearly a month. The days were filled with catching up with friends, reconnecting with old acquaintances, going on road trips, and visiting family. It was a trip rich in emotion and nostalgia — a bittersweet reminder of how deeply rooted my life had been in Asia.",
    "I was now heading back to Singapore for a short time — just enough to pack up my things before returning to France. My time in Asia was drawing to a close, and I felt it in every step.",
    "Before boarding my flight from Tokyo to Singapore, I paid extra to change my seat to an aisle — a small comfort for a long journey. That simple choice, almost trivial at the time, ended up making this whole story happen.",
    "Once seated, I find myself next to a woman who immediately engages in conversation. She’s American, living in Phoenix, Arizona, and flying to Cambodia to reunite with an old friend — a former footballer. That small detail makes her journey sound like it belongs in a novel.",
    "As we begin talking, the conversation unfolds effortlessly. We spend nearly six hours sharing our stories, drinking Japanese sake, and opening up as if we’d known each other for years.",
    "One of the more emotional moments comes when she tells me about her ex-boyfriend — the man she once believed would become her husband. She shares how she later discovered that he was a drug addict, and possibly involved in criminal activities. This revelation shattered both the relationship and a part of her.",
    "She shows me pictures of them together — images from a time when everything seemed happy, at least on the surface. There’s regret in her voice, not only for the loss of those memories, but for not being able to see the signs sooner. Her vulnerability is raw, and I feel honored that she’s sharing such an intimate part of her life with a stranger on a plane.",
    "As we land in Singapore, rain is falling softly outside the plane windows. She mentions she’ll probably just sleep at the airport or wander the city until her flight to Cambodia in the morning. Without thinking too much, I offer her a place to stay — a friend’s apartment I was borrowing, since I had no apartment of my own at the time. To my surprise, she accepts instantly.",
    "“Are you sure?” I ask, hesitating. “We’ve only known each other for a few hours.”",
    "She smiles. “We’ve talked about so much. I feel like I already know you.”",
    "After passing customs and picking up the keys from another friend, we finally arrive at the apartment. Nothing remarkable happens — I just feel quietly happy I could help someone. She settles in on the sofa while I take the bed. We prepare to sleep, and I turn off the lights.",
    "“Good night,” I say softly.",
    "A few minutes pass. Then her voice breaks the silence:",
    "“Are you awake?”",
    "I glance at my phone, assuming the brightness was disturbing her. I quickly apologize and dim the screen.",
    "But then she asks again. And again.",
    "The third time, she pauses — and then asks quietly:",
    // Only this line bold!
    "“Do you want to cuddle?”",
    "I freeze for a second. My mind fills with questions.",
    "Cuddle… does she mean just that? Or is there something more behind those words? Is this about comfort? Intimacy? Desire? Or simply not wanting to be alone?",
    "I turn the question over and over in my head in a matter of seconds. So much had happened in the last few hours — a deep, unexpected connection that somehow brought two strangers close in a way neither could have predicted. And now, suspended in the quiet of a rainy Singapore night, she was asking to close that distance even more.",
  ]
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
    <main
      className="min-h-screen w-full bg-gradient-to-br from-[#f8f6f4] via-[#f9fafb] to-[#ece7de] dark:from-[#18171b] dark:via-[#18191e] dark:to-[#232127] transition-colors duration-300 relative overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Top/bottom gradients */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#e5e0d6]/90 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#e7e3d8]/90 to-transparent pointer-events-none z-10" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-5xl xl:max-w-6xl 2xl:max-w-screen-lg mx-auto px-6 sm:px-16 pt-28 pb-24 flex flex-col"
        style={{ position: "relative", zIndex: 20 }}
      >
        <h1
          className="serif text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-normal leading-[1.08] tracking-tight text-neutral-900 dark:text-neutral-50 mb-3"
          style={{
            fontWeight: 400,
            letterSpacing: "-0.03em",
          }}
        >
          {memory.title}
        </h1>
        <div className="text-base text-neutral-500 mb-14 font-sans tracking-wide">{memory.subtitle}</div>
        <article
          className="flex-1 prose prose-lg dark:prose-invert max-w-none font-serif text-justify space-y-8"
          style={{
            fontSize: "1.21rem",
            color: dark ? "#E5E5E5" : "#2D2D2D",
            fontFeatureSettings: "'liga' 1, 'kern' 1",
            lineHeight: "2.10rem",
            letterSpacing: "0.009em",
          }}
        >
          {memory.paragraphs.map((para, i) => (
            <p
              key={i}
              className={para === "“Do you want to cuddle?”" ? "font-semibold" : ""}
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginBottom: i === memory.paragraphs.length - 1 ? 0 : "2.1rem",
              }}
            >
              {para}
            </p>
          ))}
        </article>
      </motion.div>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-5 right-5 text-xs px-3 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition z-50"
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
    </main>
  );
}