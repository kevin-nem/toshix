import React from "react";
import fs from "fs/promises";
import path from "path";

const NOISE_SVG = `url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noiseFilter)"/></svg>')`;

async function getNotesList() {
  const notesDir = path.join(process.cwd(), "src/app/notes");
  const files = await fs.readdir(notesDir);
  const notes = await Promise.all(
    files
      .filter(f => f.endsWith('.json'))
      .map(async (f) => {
        const file = await fs.readFile(path.join(notesDir, f), "utf-8");
        const note = JSON.parse(file);
        // Use English as default for title/excerpt
        const en = note.en;
        return {
          slug: note.slug,
          title: en.title,
          date: en.date,
          excerpt: en.paragraphs[0],
        };
      })
  );
  // Sort by date descending
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function Home() {
  const notes = await getNotesList();

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#ece9e2", // warm gray
        backgroundImage: NOISE_SVG,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="fixed top-5 right-5 flex gap-2 z-50"></div>
      <div className="w-full max-w-6xl mx-auto pt-32 pb-24 px-4">
        <h1 className="serif text-4xl md:text-5xl font-normal text-left text-neutral-900 mb-16 tracking-tight">Notes</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
          {notes.map((note, idx) => (
            <a
              key={note.slug}
              href={`/memories/${note.slug}`}
              className="group flex-1 min-w-[260px] max-w-xl rounded-2xl shadow-lg border border-neutral-200 hover:border-neutral-400 transition p-8 flex flex-col justify-between relative overflow-hidden"
              style={{
                borderLeft: `10px solid ${note.slug === 'still-becoming' ? '#7ec8b2' : '#f5e7c4'}`,
                background: '#fff',
                boxShadow: note.slug === 'still-becoming'
                  ? '0 4px 24px 0 rgba(126, 200, 178, 0.10)'
                  : '0 4px 24px 0 rgba(245, 231, 196, 0.10)',
              }}
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs text-neutral-400 mb-1">{new Date(note.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="serif text-2xl md:text-3xl font-semibold text-neutral-900 group-hover:underline mb-2">{note.title}</span>
                <span className="text-base text-neutral-600 line-clamp-3">{note.excerpt}</span>
              </div>
              <span className="mt-8 text-sm text-neutral-300 group-hover:text-neutral-500 transition self-end">Read &rarr;</span>
            </a>
          ))}
        </div>
      </div>
      <footer className="w-full flex justify-center mt-20 mb-6">
        <p className="text-xs text-neutral-300 text-center max-w-xl px-4">
          Disclaimer: All content is personal opinion and for personal purposes only.
        </p>
      </footer>
    </main>
  );
}