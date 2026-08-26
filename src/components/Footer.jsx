import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-se7-white pt-section-y px-site-x pb-8 flex flex-col justify-between min-h-[80svh] relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-6 flex flex-col items-start gap-8">
          <h2 className="text-fluid-h3 leading-[1.1] font-medium tracking-tighter text-se7-black max-w-lg">
            Ready to upgrade your business paradigm?
          </h2>
          <Magnetic>
            <a
              href="mailto:se7studios.contact@gmail.com"
              className="magnetic-target inline-flex items-center justify-center px-8 py-4 rounded-full bg-se7-black text-se7-white hover:bg-se7-dark transition-colors duration-300 text-sm font-medium"
              data-cursor="Email"
            >
              Start a project
            </a>
          </Magnetic>
        </div>

        <div className="md:col-span-3 flex flex-col gap-8 text-sm">
          <div>
            <div className="font-medium text-se7-black mb-3">Location</div>
            <p className="text-se7-gray leading-relaxed">
              Adelaide, South Australia
              <br />
              Operating Globally
            </p>
          </div>
          <div>
            <div className="font-medium text-se7-black mb-3">Inquiries</div>
            <a
              href="mailto:se7studios.contact@gmail.com"
              className="text-se7-gray hover:text-se7-black transition-colors hover-underline w-fit"
            >
              se7studios.contact@gmail.com
            </a>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-8 text-sm">
          <div>
            <div className="font-medium text-se7-black mb-3">Socials</div>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-se7-gray hover:text-se7-black transition-colors hover-underline w-fit">
                Instagram
              </a>
              <a href="#" className="text-se7-gray hover:text-se7-black transition-colors hover-underline w-fit">
                LinkedIn
              </a>
              <a href="#" className="text-se7-gray hover:text-se7-black transition-colors hover-underline w-fit">
                Twitter (X)
              </a>
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
          <span>© {new Date().getFullYear()} SE7 Studios. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-se7-black transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-se7-black transition-colors">
              Terms
            </Link>
            <a
              href="#"
              className="hover:text-se7-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
