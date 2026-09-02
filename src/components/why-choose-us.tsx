import {
  Award,
  Dumbbell,
  HeartHandshake,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const REASONS = [
  {
    icon: Dumbbell,
    title: "Professional Equipment",
    description:
      "Quality equipment for strength and fitness training, built to handle every serious session.",
  },
  {
    icon: Award,
    title: "Strength-Focused Environment",
    description:
      "A serious atmosphere for people committed to improving — no distractions, just progress.",
  },
  {
    icon: Target,
    title: "Expert Guidance",
    description:
      "Trainers who help members train safely and effectively, from first rep to competition prep.",
  },
  {
    icon: Sparkles,
    title: "Personalized Training",
    description:
      "Guidance based on individual fitness goals, so every workout moves you closer to yours.",
  },
  {
    icon: HeartHandshake,
    title: "Clean & Comfortable Space",
    description:
      "An organized, well-kept environment designed for regular, focused workouts.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "A motivating atmosphere where members push each other and stay consistent together.",
  },
];

/**
 * "Why Choose Us" section.
 *
 * Black background with gold accents matching the rest of the site. A
 * responsive 3-column grid of six reasons, each with an icon, title, and
 * short description.
 */
export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-surface-pure text-on-pure"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold sm:text-base">
            Built For Those Who Show Up
          </p>
          <h2
            id="why-choose-us-heading"
            className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Why Choose Us
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-20 bg-gold"
          />
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-on-pure/10 bg-card/5 p-6 transition-colors duration-300 hover:border-gold/40 lg:p-7"
            >
              <div
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110"
              >
                <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-on-pure">
                {title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-on-pure/75">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
