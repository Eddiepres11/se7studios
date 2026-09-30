export default function SectionHeader({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
      <div className="md:col-span-3 lg:col-span-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-se7-gray">{label}</span>
      </div>
      <div className="md:col-span-9 lg:col-span-8">{children}</div>
    </div>
  )
}
