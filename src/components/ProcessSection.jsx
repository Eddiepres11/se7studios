import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import ProcessStep from './ProcessStep.jsx'
import { processSteps } from '../data/content.js'

export default function ProcessSection() {
  return (
    <section id="process" className="py-section-y px-site-x bg-se7-black text-se7-white relative z-10">
      <SectionHeader label="02 — Process">
        <Reveal as="h2" className="text-fluid-h2 leading-none font-medium tracking-tighter">
          Simple, fast, and completely done for you.
        </Reveal>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 border-t border-se7-white/10 pt-16">
        {processSteps.map((step, i) => (
          <ProcessStep
            key={step.title}
            index={String(i + 1).padStart(2, '0')}
            title={step.title}
            description={step.description}
            delay={`${(i * 0.1).toFixed(1)}s`}
          />
        ))}
      </div>
    </section>
  )
}
