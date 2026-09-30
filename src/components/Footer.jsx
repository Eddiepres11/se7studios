import MagneticLink from './MagneticLink.jsx'

const EMAIL = 'hello@se7.studio'

function FooterLink({ href, children }) {
  return (
    <a href={href} className="text-se7-gray hover:text-se7-black transition-colors hover-underline w-fit">
      {children}
    </a>
  )
}

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0)
  }

  return (
    <footer id="contact" className="bg-se7-white pt-section-y px-site-x pb-8 flex flex-col justify-between min-h-[80svh] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-6 flex flex-col items-start gap-8">
          <h2 className="text-fluid-h3 leading-[1.1] font-medium tracking-tighter text-se7-black max-w-lg">
            Get the refresh.
          </h2>
          <div className="flex flex-col gap-4">
            <MagneticLink
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-se7-black text-se7-white hover:bg-se7-dark transition-colors duration-300 text-base font-medium"
              data-cursor="Book"
            >
              Book THE REFRESH
            </MagneticLink>
            <p className="text-sm font-medium text-se7-gray ml-2">One price. Zero agency bloat.</p>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-8 text-sm mt-4 md:mt-0">
          <div>
            <div className="font-medium text-se7-black mb-3">Location</div>
            <p className="text-se7-gray leading-relaxed">Adelaide, South Australia<br />Operating Globally</p>
          </div>
          <div>
            <div className="font-medium text-se7-black mb-3">Direct Contact</div>
            <FooterLink href={`mailto:${EMAIL}`}>{EMAIL}</FooterLink>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-8 text-sm mt-4 md:mt-0">
          <div>
            <div className="font-medium text-se7-black mb-3">Socials</div>
            <div className="flex flex-col gap-2">
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Twitter (X)</FooterLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full flex flex-col items-center">
        <div className="w-full overflow-hidden flex justify-center border-t border-se7-black/10 pt-8 pb-4">
          <h1 className="text-fluid-massive leading-[0.75] font-semibold tracking-tighter text-se7-black whitespace-nowrap select-none m-0 p-0 text-center w-full">
            SE7 STUDIOS
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-xs font-medium tracking-widest uppercase text-se7-gray gap-4">
          <span>© 2024 SE7 Studios.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-se7-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-se7-black transition-colors" onClick={scrollToTop}>Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
