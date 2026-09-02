import cardioImg from "../assets/program-cardio.webp.asset.json";
import fatlossImg from "../assets/program-fatloss.webp.asset.json";
import muscleImg from "../assets/program-muscle.webp.asset.json";
import personalImg from "../assets/program-personal.webp.asset.json";
import strengthImg from "../assets/program-strength.webp.asset.json";
import weightImg from "../assets/program-weight.webp.asset.json";

type Program = {
  title: string;
  description: string;
  image: string;
};

const PROGRAMS: Program[] = [
  {
    title: "Strength Training",
    description:
      "Build raw power with progressive barbell and compound lift programming.",
    image: strengthImg.url,
  },
  {
    title: "Weight Training",
    description:
      "Master free weights and machines with structured, form-first coaching.",
    image: weightImg.url,
  },
  {
    title: "Cardio & Conditioning",
    description:
      "Boost stamina and endurance with heart-pumping conditioning circuits.",
    image: cardioImg.url,
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals, pace, and experience.",
    image: personalImg.url,
  },
  {
    title: "Muscle Building",
    description:
      "Hypertrophy-focused splits designed to add lean, lasting muscle mass.",
    image: muscleImg.url,
  },
  {
    title: "Fat Loss",
    description:
      "High-energy training and guidance to burn fat and reveal definition.",
    image: fatlossImg.url,
  },
];

/**
 * "Our Programs" section.
 *
 * Black background with gold accents. Program cards glide horizontally in a
 * slow infinite loop (marquee); the animation pauses on hover/focus and is
 * disabled for users who prefer reduced motion.
 */
export function Programs() {
  // Duplicate the list so the marquee can loop seamlessly.
  const items = [...PROGRAMS, ...PROGRAMS];

  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="bg-surface-pure text-on-pure"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <header className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold sm:text-base">
            Train With Purpose
          </p>
          <h2
            id="programs-heading"
            className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Our Programs
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-20 bg-gold"
          />
        </header>
      </div>

      {/* Infinite horizontal loop */}
      <div className="group relative mt-12 overflow-hidden pb-16 lg:pb-24">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-pure to-transparent sm:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-pure to-transparent sm:w-28"
        />

        <div className="flex w-max animate-programs-marquee gap-6 pl-6 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-6">
          {items.map((program, index) => (
            <article
              key={`${program.title}-${index}`}
              aria-hidden={index >= PROGRAMS.length}
              className="w-72 shrink-0 overflow-hidden rounded-2xl border border-on-pure/10 bg-card/5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)] sm:w-80"
            >
              <div className="relative h-44 overflow-hidden sm:h-52">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-surface-pure/80 via-transparent to-transparent"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl uppercase tracking-wide text-gold">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-on-pure/80">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
