import Reveal from './Reveal';

const PILLARS = [
  {
    title: 'Public Side',
    body: 'The outward projection. Curated, confident, and meticulously designed to signal high value. Every touchpoint is an editorial statement designed to captivate.',
  },
  {
    title: 'Operating Side',
    body: 'The internal engine. Lean, automated, and relentlessly efficient. Powered by modern architecture and AI integrations to scale your business without bloat.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-section-y px-site-x bg-se7-white relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-3 lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-se7-gray">01 — Ethos</span>
        </div>
        <div className="md:col-span-9 lg:col-span-8">
          <Reveal as="h2" className="text-fluid-h3 leading-[1.2] font-medium tracking-tight text-se7-black">
            We exist to bridge the gap between creative confidence and systemic precision. Operating
            at the intersection of refined aesthetics and robust technical architecture, we engineer
            digital ecosystems that command premium positioning.
          </Reveal>

          <Reveal delay={0.1} className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <div className="w-12 h-[1px] bg-se7-black mb-6"></div>
                <h3 className="text-xl font-medium tracking-tight mb-4">{pillar.title}</h3>
                <p className="text-se7-gray leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
