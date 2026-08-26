import Reveal from './Reveal';

const SERVICES = [
  {
    number: '01',
    title: 'Brand & Presence',
    description:
      'Visual identity, strategy, and digital experiences that communicate authority and refined luxury.',
  },
  {
    number: '02',
    title: 'AI & Operations',
    description:
      'Integrating intelligent systems to automate workflows, scale capabilities, and maintain pristine operational hygiene.',
  },
  {
    number: '03',
    title: 'Full Upgrade',
    description:
      'A holistic transformation unifying aesthetic output with internal machinery for exponential market leverage.',
  },
];

function ServiceRow({ number, title, description }) {
  return (
    <a
      href="#"
      className="group block border-b border-se7-black/10 py-10 md:py-16 hover:bg-white transition-colors duration-500 -mx-site-x px-site-x"
      data-cursor="View"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-6 flex items-center gap-8">
          <span className="text-sm font-medium text-se7-gray group-hover:text-se7-black transition-colors">
            {number}
          </span>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tighter text-se7-black group-hover:translate-x-4 transition-transform duration-500 ease-out">
            {title}
          </h3>
        </div>
        <div className="md:col-span-5 text-se7-gray font-medium">{description}</div>
        <div className="hidden md:flex md:col-span-1 justify-end opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-section-y px-site-x bg-se7-light relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
        <div className="md:col-span-3 lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-se7-gray">02 — Expertise</span>
        </div>
        <div className="md:col-span-9 lg:col-span-8">
          <Reveal as="h2" className="text-fluid-h2 leading-none font-medium tracking-tighter text-se7-black">
            A consolidated approach to digital transformation.
          </Reveal>
        </div>
      </div>

      <Reveal className="border-t border-se7-black/10">
        {SERVICES.map((service) => (
          <ServiceRow key={service.number} {...service} />
        ))}
      </Reveal>
    </section>
  );
}
