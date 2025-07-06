"use client";
import { useState } from "react";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

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

I glance at my phone, assuming the brightness was disturbing her. I quickly apologize and dim the screen.

But then she asks again. And again.

The third time, she pauses — and then asks quietly:

"Do you want to cuddle?"

I freeze for a second. My mind fills with questions.

Cuddle… does she mean just that? Or is there something more behind those words? Is this about comfort? Intimacy? Desire? Or simply not wanting to be alone?

I turn the question over and over in my head in a matter of seconds. So much had happened in the last few hours — a deep, unexpected connection that somehow brought two strangers close in a way neither could have predicted. And now, suspended in the quiet of a rainy Singapore night, she was asking to close that distance even more.`,
  image: "/memory-flight.jpg", // Place your image in public/memory-flight.jpg or use a placeholder
};

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
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-stretch gap-12 px-4 py-24">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center md:justify-center md:items-start items-center text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4">{memory.title}</h1>
          <span className="text-sm text-neutral-400 mb-6">{new Date(memory.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}</span>
          <div className="prose prose-neutral dark:prose-invert text-lg max-w-md whitespace-pre-line">{memory.excerpt}</div>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-xs aspect-[4/5] relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={memory.image}
              alt={memory.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg width='400' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23e5e7eb' width='400' height='500'/%3E%3C/svg%3E"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
