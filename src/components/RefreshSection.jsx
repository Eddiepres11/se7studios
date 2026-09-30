import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import OfferItem from './OfferItem.jsx'
import { offerItems } from '../data/content.js'

const pad = (n) => String(n).padStart(2, '0')

export default function RefreshSection() {
  return (
    <section id="refresh" className="py-section-y px-site-x bg-se7-white relative z-10">
      <SectionHeader label="01 — The Offer">
        <Reveal as="h2" className="text-fluid-h2 leading-[1.1] font-medium tracking-tighter text-se7-black mb-6">
          THE REFRESH
        </Reveal>
        <Reveal as="p" delay="0.1s" className="text-xl md:text-2xl text-se7-gray font-medium tracking-tight max-w-3xl">
          A complete digital upgrade for hospitality businesses. Delivered in 5–7 days. One clear package to transform how customers perceive you.
        </Reveal>
      </SectionHeader>

      <Reveal delay="0.2s" className="border-t border-se7-black/10">
        {offerItems.map((item, i) => (
          <OfferItem key={item.title} index={pad(i + 1)} title={item.title} description={item.description} />
        ))}
      </Reveal>
    </section>
  )
}
