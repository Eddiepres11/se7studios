import MagneticLink from './MagneticLink.jsx'

const links = [
  { href: '#refresh', index: '01', label: 'The Refresh' },
  { href: '#process', index: '02', label: 'Process' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-site-x py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
      <div className="pointer-events-auto">
        <a href="#" className="text-2xl font-medium tracking-tighter" data-cursor-text="Top">SE7</a>
      </div>

      <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-tight pointer-events-auto">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover-underline flex gap-1">
            <span className="text-[10px] opacity-50 pt-[2px]">{link.index}</span> {link.label}
          </a>
        ))}
      </div>

      <MagneticLink
        wrapClassName="pointer-events-auto"
        href="#contact"
        className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium"
      >
        Book Now
      </MagneticLink>
    </nav>
  )
}
