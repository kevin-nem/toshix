"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    "Maybe it was just a moment. But sometimes, that's more than enough."
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
    "Ce n'était peut-être qu'un moment. Mais parfois, c'est largement suffisant."
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
  const [lang, setLang] = useState<'en' | 'fr'>("en");
  const [dark, toggleDark] = useDarkMode();

  const memory = lang === 'en' ? memoryEN : memoryFR;

  return (
    <main
      className="min-h-screen w-full transition-colors duration-300 relative overflow-x-hidden bg-[#ede6da]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-5xl xl:max-w-6xl 2xl:max-w-screen-lg mx-auto px-6 sm:px-16 pt-28 pb-24 flex flex-col"
        style={{ position: "relative", zIndex: 20 }}
      >
        <h1
          className="serif text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-normal leading-[1.08] tracking-tight text-neutral-900 mb-3"
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
            color: "#2D2D2D",
            fontFeatureSettings: "'liga' 1, 'kern' 1",
            lineHeight: "2.10rem",
            letterSpacing: "0.009em",
          }}
        >
          {memory.paragraphs.map((para, i) => {
            // Find the epilogue start index
            const isEpilogue =
              (lang === 'en' && para.startsWith('Chance, choice, and the connections that leave a mark')) ||
              (lang === 'fr' && para.startsWith('Le hasard, les choix, et les rencontres qui marquent'));
            // Render the epilogue section with a divider and heading
            if (isEpilogue) {
              return (
                <>
                  <hr
                    key="epilogue-divider"
                    className="my-10 border-t border-neutral-300 dark:border-neutral-700 opacity-60 w-2/3 mx-auto" />
                  <h2
                    key="epilogue-heading"
                    className="serif text-xl md:text-2xl font-semibold text-center text-neutral-700 dark:text-neutral-200 mb-6 mt-2 tracking-tight"
                  >
                    {para.replace('✨ ', '')}
                  </h2>
                </>
              );
            }
            // Render epilogue paragraphs after the heading in a lighter, italic style
            const epilogueStart = memory.paragraphs.findIndex(p =>
              (lang === 'en' && p.startsWith('Epilogue')) ||
              (lang === 'fr' && p.startsWith('Épilogue'))
            );
            if (epilogueStart !== -1 && i > epilogueStart) {
              return (
                <p
                  key={i}
                  className="italic text-neutral-500 dark:text-neutral-400 text-center"
                  style={{
                    fontSize: '1.08rem',
                    marginBottom: i === memory.paragraphs.length - 1 ? 0 : '1.5rem',
                  }}
                >
                  {para}
                </p>
              );
            }
            // Main story paragraphs
            return (
              <p
                key={i}
                className={
                  (lang === 'en' && para === "“Do you want to cuddle?”") ||
                  (lang === 'fr' && para.trim() === "— Tu veux faire un câlin ?")
                    ? "font-semibold"
                    : ""
                }
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  marginBottom: i === memory.paragraphs.length - 1 ? 0 : "2.1rem",
                }}
              >
                {para}
              </p>
            );
          })}
        </article>
      </motion.div>

      {/* Top right controls */}
      <div className="fixed top-5 right-5 flex gap-2 z-50">
        <button
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="text-xs px-3 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition font-sans border border-neutral-300 dark:border-neutral-700"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'Français' : 'English'}
        </button>
        <button
          onClick={toggleDark}
          className="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition font-sans border border-neutral-300 dark:border-neutral-700 flex items-center justify-center"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            // Sun icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
          ) : (
            // Moon icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="1.5" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
          )}
        </button>
      </div>
    </main>
  );
}