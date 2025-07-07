"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

const NOISE_SVG = `url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(%23noiseFilter)"/></svg>')`;

const memoryEN = {
  title: "The Distance Between Two Seats",
  subtitle: "✈️ Memory Note — End of August 2022",
  date: "2022-08-31",
  paragraphs: [
    "I was finishing my trip in Japan, where I had stayed for nearly a month. The days were filled with catching up with friends, reconnecting with old acquaintances, going on road trips, and visiting family. It was a trip rich in emotion and nostalgia — a bittersweet reminder of how deeply rooted my life had been in Asia.",
    "I was now heading back to Singapore for a short time — just enough to pack up my things before returning to France. My time in Asia was drawing to a close, and I felt it in every step.",
    "Before boarding my flight from Tokyo to Singapore, I paid extra to change my seat to an aisle — a small comfort for a long journey. That simple choice, almost trivial at the time, ended up making this whole story happen.",
    "Once seated, I find myself next to a woman who immediately engages in conversation. She's American, living in Phoenix, Arizona, and flying to Cambodia to reunite with an old friend — a former footballer. That small detail makes her journey sound like it belongs in a novel.",
    "As we begin talking, the conversation unfolds effortlessly. We spend nearly six hours sharing our stories, drinking Japanese sake, and opening up as if we'd known each other for years.",
    "One of the more emotional moments comes when she tells me about her ex-boyfriend — the man she once believed would become her husband. She shares how she later discovered that he was a drug addict, and possibly involved in criminal activities. This revelation shattered both the relationship and a part of her.",
    "She shows me pictures of them together — images from a time when everything seemed happy, at least on the surface. There's regret in her voice, not only for the loss of those memories, but for not being able to see the signs sooner. Her vulnerability is raw, and I feel honored that she's sharing such an intimate part of her life with a stranger on a plane.",
    "As we land in Singapore, rain is falling softly outside the plane windows. She mentions she'll probably just sleep at the airport or wander the city until her flight to Cambodia in the morning. Without thinking too much, I offer her a place to stay — a friend's apartment I was borrowing, since I had no apartment of my own at the time. To my surprise, she accepts instantly.",
    "“Are you sure?” I ask, hesitating. “We've only known each other for a few hours.”",
    "She smiles. “We've talked about so much. I feel like I already know you.”",
    "After passing customs and picking up the keys from another friend, we finally arrive at the apartment. Nothing remarkable happens — I just feel quietly happy I could help someone. She settles in on the sofa while I take the bed. We prepare to sleep, and I turn off the lights.",
    "“Good night,” I say softly.",
    "A few minutes pass. Then her voice breaks the silence:",
    "“Are you awake?”",
    "I glance at my phone, assuming the brightness was disturbing her. I quickly apologize and dim the screen.",
    "But then she asks again. And again.",
    "The third time, she pauses — and then asks quietly:",
    "“Do you want to cuddle?”",
    "I freeze for a second. My mind fills with questions.",
    "Cuddle… does she mean just that? Or is there something more behind those words? Is this about comfort? Intimacy? Desire? Or simply not wanting to be alone?",
    "I turn the question over and over in my head in a matter of seconds. So much had happened in the last few hours — a deep, unexpected connection that somehow brought two strangers close in a way neither could have predicted. And now, suspended in the quiet of a rainy Singapore night, she was asking to close that distance even more.",
    "Chance, choice, and the connections that leave a mark",
    "I often think back to that almost meaningless moment when I paid extra to change my seat. Just a small choice, made without much thought. And yet, that one gesture made the entire story possible.",
    "That day, a lot of threads were crossing: the end of a long journey in Japan, the idea of leaving Asia behind, the return to France ahead. I was in between worlds.",
    "And it was exactly there, in that in-between space, that the conversation happened.",
    "Talking about our lives for hours, without filters, with a complete stranger sitting next to me… it was unexpected, deep, and incredibly human. There was an instant trust, as if time itself had paused to offer us a brief parenthesis — right there, between two seats on a plane.",
    "Maybe it was just a moment, but it stayed with me in a quiet, lasting way. Sometimes, memories like that linger without asking."
  ]
};

const memoryFR = {
  title: "La Distance Entre Deux Sièges",
  subtitle: "✈️ Souvenir — Fin Août 2022",
  date: "2022-08-31",
  paragraphs: [
    "Je terminais mon voyage au Japon, où j'avais passé près d'un mois. Les journées étaient remplies de retrouvailles avec des amis, de reconnections avec de vieilles connaissances, de road trips, et de moments passés en famille. C'était un voyage chargé d'émotion et de nostalgie — un rappel doux-amer de combien ma vie en Asie avait été profonde et marquante.",
    "Je rentrais à Singapour pour quelques jours — juste assez de temps pour faire mes valises avant de retourner en France. Ma vie en Asie touchait à sa fin, et je le sentais à chaque instant.",
    "Avant d'embarquer pour mon vol Tokyo–Singapour, j'ai payé un supplément pour changer de siège et en prendre un côté allée — un petit confort pour un long trajet. Ce choix simple, presque anodin sur le moment, a pourtant tout déclenché.",
    "Une fois installé, je me retrouve à côté d'une femme qui engage immédiatement la conversation. Elle est américaine, vit à Phoenix, en Arizona, et se rend au Cambodge pour retrouver un vieil ami — un ancien footballeur. Ce petit détail donne à son voyage une allure de roman.",
    "Très vite, la discussion devient fluide et naturelle. Nous passons presque six heures à parler de nos vies, de nos difficultés, de tout et de rien, tout en buvant du saké japonais comme si nous étions dans un bar. On s'ouvre l'un à l'autre avec une étonnante facilité, comme si on se connaissait depuis des années.",
    "L'un des moments les plus forts survient lorsqu'elle me parle de son ex — l'homme qu'elle pensait un jour épouser. Elle a découvert plus tard qu'il était accro à la drogue, et probablement impliqué dans des activités criminelles. Cette révélation a brisé leur couple… et une partie d'elle avec.",
    "Elle me montre des photos d'eux à l'époque — des images qui, en apparence, respirent le bonheur. Elle parle avec regret, non seulement de la perte de ces souvenirs, mais aussi du fait qu'elle n'ait pas su voir les signes plus tôt. Elle est vulnérable, sincère, et je me sens honoré qu'elle partage cette partie d'elle avec moi — un parfait inconnu.",
    "À l'atterrissage à Singapour, la pluie tombe doucement sur le tarmac. Elle me dit qu'elle dormira probablement à l'aéroport ou errera dans la ville jusqu'à son prochain vol pour le Cambodge, prévu le lendemain matin. Spontanément, je lui propose de venir dormir chez moi — enfin, dans l'appartement d'un ami que j'occupais temporairement, car je n'avais plus de logement à ce moment-là. À ma grande surprise, elle accepte sans hésiter.",
    "— Tu es sûre ? je lui demande. On ne se connaît que depuis quelques heures.",
    "Elle me sourit : — Oui, mais on a tellement parlé… j'ai l'impression de te connaître.",
    "Après être passés par les douanes et avoir récupéré les clés auprès d'un autre ami, nous arrivons finalement à l'appartement. Rien de spécial ne se passe — je suis simplement heureux d'avoir pu aider quelqu'un. Elle s'installe sur le canapé, moi sur le lit. On se prépare à dormir, et j'éteins la lumière.",
    "— Bonne nuit, je lui dis doucement.",
    "Quelques minutes plus tard, sa voix brise le silence :",
    "— Tu dors ?",
    "Je regarde mon téléphone, pensant que la lumière la dérange. Je m'excuse rapidement et baisse la luminosité.",
    "Mais elle repose la question. Une fois. Deux fois.",
    "La troisième fois, elle marque une pause… puis demande à voix basse :",
    "— Tu veux faire un câlin ?",
    "Je me fige. Et mille questions me traversent l'esprit.",
    "Câlin… juste un câlin ? Ou y a-t-il autre chose derrière ? Est-ce du réconfort ? De l'intimité ? Du désir ? Ou simplement l'envie de ne pas être seule ?",
    "Je tourne la question dans tous les sens, en quelques secondes. Tant de choses s'étaient passées en si peu de temps — une connexion inattendue, profonde, entre deux inconnus. Et maintenant, suspendus dans le calme d'une nuit pluvieuse à Singapour, elle me proposait de réduire encore un peu plus la distance entre nous.",
    "Le hasard, les choix, et les rencontres qui marquent",
    "Je repense souvent à ce moment presque insignifiant où j'ai payé un supplément pour changer de siège. Juste un petit choix, pris sans réfléchir. Et pourtant, c'est ce geste qui a rendu cette rencontre possible.",
    "Ce jour-là, beaucoup de choses se croisaient : la fin d'un long voyage au Japon, la perspective de quitter l'Asie, mon retour prochain en France. J'étais entre deux mondes.",
    "Et c'est précisément là, dans cet entre-deux, que cette conversation a eu lieu.",
    "Parler de nos vies pendant des heures, sans filtre, avec une inconnue assise à côté de moi… c'était inattendu, profond, et incroyablement humain. Il y a eu une sorte de confiance immédiate, comme si le temps avait décidé de nous accorder une parenthèse — juste là, entre deux sièges d'avion.",
    "Ce n'était peut-être qu'un moment, mais il m'a touché d'une façon que je n'oublierai pas. Parfois, ce genre de souvenir s'installe sans bruit, et reste."
  ]
};

function useDarkMode() {
  const [dark, setDark] = useState(false);

  // On mount: check localStorage or system preference
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return [dark, toggle] as const;
}

export default function Home() {
  // For now, just one note. In the future, this could be an array.
  const notes = [
    {
      slug: "the-distance-between-two-seats",
      title: memoryEN.title,
      date: memoryEN.date,
      excerpt: memoryEN.paragraphs[0],
    },
    {
      slug: "still-becoming",
      title: "Still Becoming",
      date: "2024-06-07",
      excerpt: "I’ve never really known what I want to become. Not in the way some people do — those who seem born with a calling, or who grow into one with clarity and conviction. For me, life has always felt more like wandering than following a path. Not aimless, but open. Full of questions I haven’t quite answered yet.",
    },
  ];

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#f7fafd",
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
              className="group flex-1 min-w-[260px] max-w-xl rounded-2xl shadow-lg border border-neutral-200 hover:border-neutral-400 transition bg-white hover:bg-neutral-50 p-8 flex flex-col justify-between relative overflow-hidden"
              style={{
                borderLeft: `10px solid ${idx === 0 ? '#f5e7c4' : '#7ec8b2'}`,
                background: '#fff',
                boxShadow: idx === 0
                  ? '0 4px 24px 0 rgba(245, 231, 196, 0.10)'
                  : '0 4px 24px 0 rgba(126, 200, 178, 0.10)',
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