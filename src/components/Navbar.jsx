import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

const NAV_LINKS = [
  { number: '01', label: 'About', href: '/#about' },
  { number: '02', label: 'Services', href: '/#services' },
  { number: '03', label: 'Process', href: '/#process' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-site-x py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
      <div className="pointer-events-auto">
        <Link to="/" className="text-2xl font-medium tracking-tighter" data-cursor-text="Top">
          SE7
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-tight pointer-events-auto">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} to={link.href} className="hover-underline flex gap-1">
            <span className="text-[10px] opacity-50 pt-[2px]">{link.number}</span> {link.label}
          </Link>
        ))}
      </div>

      <div className="pointer-events-auto">
        <Magnetic>
          <Link
            to="/#contact"
            className="magnetic-target inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium"
          >
            Let's Talk
          </Link>
        </Magnetic>
      </div>
    </nav>
  );
}
