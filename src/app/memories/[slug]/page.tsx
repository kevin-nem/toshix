import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import fs from "fs/promises";
import path from "path";
import MemoryClient from "./MemoryClient";

// Helper to load a note by slug
async function getNote(slug: string) {
  const filePath = path.join(process.cwd(), "src/app/notes/", `${slug}.json`);
  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file);
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const notesDir = path.join(process.cwd(), "src/app/notes");
  const files = await fs.readdir(notesDir);
  return files
    .filter(f => f.endsWith('.json'))
    .map(f => ({ slug: f.replace(/\.json$/, "") }));
}

export default async function MemoryPage({ params }: { params: { slug: string } }) {
  const note = await getNote(params.slug);
  if (!note) return notFound();
  return <MemoryClient note={note} />;
} 