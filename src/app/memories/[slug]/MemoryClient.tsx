"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MemoryClient({ note }: { note: any }) {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const content = (lang === 'en' || !note[lang]) ? note.en : note[lang];
  if (!content) return null;

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
      style={{
        fontFamily: 'Inter, sans-serif',
        background: note.slug === 'still-becoming' ? '#e8f5e9' : '#ede6da',
      }}
    >
      <div className="fixed top-5 right-5 flex gap-2 z-50">
        {note.fr && (
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-xs px-3 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition font-sans border border-neutral-300 dark:border-neutral-700"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'Français' : 'English'}
          </button>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-5xl xl:max-w-6xl 2xl:max-w-screen-lg mx-auto px-6 sm:px-16 pt-28 pb-24 flex flex-col"
        style={{ position: "relative", zIndex: 20 }}
      >
        <h1 className="serif text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-normal leading-[1.08] tracking-tight text-neutral-900 mb-3" style={{ fontWeight: 400, letterSpacing: "-0.03em" }}>{content.title}</h1>
        <div className="text-base text-neutral-500 mb-10 font-sans tracking-wide">{content.subtitle}</div>
        <div className="text-sm text-neutral-400 mb-10 font-sans">{new Date(content.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
        <article className="flex-1 prose prose-lg max-w-none font-serif text-justify space-y-8" style={{ fontSize: "1.21rem", color: "#2D2D2D", fontFeatureSettings: "'liga' 1, 'kern' 1", lineHeight: "2.10rem", letterSpacing: "0.009em" }}>
          {content.paragraphs.map((para: string, i: number) => {
            const isEpilogue = (lang === 'en' && para.startsWith('Chance, choice, and the connections that leave a mark')) || (lang === 'fr' && para.startsWith('Le hasard, les choix, et les rencontres qui marquent'));
            if (isEpilogue) {
              return (
                <>
                  <hr key="epilogue-divider" className="my-10 border-t border-neutral-300 opacity-60 w-2/3 mx-auto" />
                  <h2 key="epilogue-heading" className="serif text-xl md:text-2xl font-semibold text-center text-neutral-700 mb-6 mt-2 tracking-tight">{para}</h2>
                </>
              );
            }
            const epilogueStart = content.paragraphs.findIndex((p: string) => (lang === 'en' && p.startsWith('Chance, choice, and the connections that leave a mark')) || (lang === 'fr' && p.startsWith('Le hasard, les choix, et les rencontres qui marquent')));
            if (epilogueStart !== -1 && i > epilogueStart) {
              return (
                <p key={i} style={{ textAlign: "justify", textJustify: "inter-word", marginBottom: i === content.paragraphs.length - 1 ? 0 : "2.1rem" }}>{para}</p>
              );
            }
            // Bold the 'Do you want to cuddle?' line (EN) and '— Tu veux faire un câlin ?' (FR)
            if ((lang === 'en' && para === '“Do you want to cuddle?”') || (lang === 'fr' && para.trim() === '— Tu veux faire un câlin ?')) {
              return (
                <p key={i} className="font-semibold" style={{ textAlign: "justify", textJustify: "inter-word", marginBottom: i === content.paragraphs.length - 1 ? 0 : "2.1rem" }}>{para}</p>
              );
            }
            // Bold any paragraph in 'Still Becoming' that was meant to be bold (surrounded by ** in the text)
            if (typeof content.title === 'string' && content.title === 'Still Becoming' && para.startsWith('**') && para.endsWith('**')) {
              return (
                <p key={i} className="font-semibold" style={{ textAlign: "justify", textJustify: "inter-word", marginBottom: i === content.paragraphs.length - 1 ? 0 : "2.1rem" }}>{para.replace(/^\*\*/, '').replace(/\*\*$/, '')}</p>
              );
            }
            // Italic any paragraph in 'Still Becoming' that was meant to be italic (surrounded by * in the text, but not **)
            if (typeof content.title === 'string' && content.title === 'Still Becoming' && para.startsWith('*') && para.endsWith('*') && !(para.startsWith('**') && para.endsWith('**'))) {
              return (
                <p key={i} className="italic" style={{ textAlign: "justify", textJustify: "inter-word", marginBottom: i === content.paragraphs.length - 1 ? 0 : "2.1rem" }}>{para.replace(/^\*/, '').replace(/\*$/, '')}</p>
              );
            }
            return (
              <p key={i} style={{ textAlign: "justify", textJustify: "inter-word", marginBottom: i === content.paragraphs.length - 1 ? 0 : "2.1rem" }}>{para}</p>
            );
          })}
        </article>
      </motion.div>
      <footer className="w-full flex justify-center mt-16 mb-6">
        <p className="text-xs text-neutral-400 text-center max-w-xl px-4">
          Disclaimer: All content is personal opinion and for personal purposes only.
        </p>
      </footer>
    </main>
  );
} 