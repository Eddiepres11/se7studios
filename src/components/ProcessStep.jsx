import Reveal from './Reveal.jsx'

export default function ProcessStep({ index, title, description, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-8 h-8 rounded-full border border-se7-white/20 flex items-center justify-center text-xs font-medium">
          {index}
        </div>
        <h4 className="text-2xl font-medium tracking-tight">{title}</h4>
      </div>
      <p className="text-se7-gray leading-relaxed">{description}</p>
    </Reveal>
  )
}
