import Reveal from './Reveal';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Unearthing the core value proposition and identifying market friction points within your current model.',
  },
  {
    number: '02',
    title: 'Understand',
    description: 'Mapping out both the operational requirements and the visual landscape to form a cohesive strategy.',
  },
  {
    number: '03',
    title: 'Act',
    description: 'Executing precise design and engineering to unify the solution across brand aesthetics and backend operations.',
  },
  {
    number: '04',
    title: 'Respond',
    description: 'Testing implementations against real-world metrics, refining systems, and ensuring seamless deployment.',
  },
  {
    number: '05',
    title: 'Return',
    description: 'Generating compounding ROI through ongoing refinement, optimization, and perpetual scaling of the business.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-section-y px-site-x bg-se7-black text-se7-white relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-32">
        <div className="md:col-span-3 lg:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-se7-gray">03 — Process</span>
        </div>
        <div className="md:col-span-9 lg:col-span-6">
          <Reveal as="h2" className="text-fluid-h2 leading-none font-medium tracking-tighter">
            An iterative sequence designed for perpetual refinement.
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <div className="text-sm font-medium text-se7-gray mb-6">{step.number}</div>
            <h4 className="text-xl font-medium tracking-tight mb-4">{step.title}</h4>
            <p className="text-se7-gray text-sm leading-relaxed">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
