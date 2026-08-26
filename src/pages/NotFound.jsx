import { Link } from 'react-router-dom';
import Magnetic from '../components/Magnetic';

export default function NotFound() {
  return (
    <section className="pt-40 pb-section-y px-site-x bg-se7-white relative z-10 min-h-[80svh] flex flex-col items-center justify-center text-center">
      <p className="text-se7-gray text-sm font-medium tracking-widest uppercase mb-4">404</p>
      <h1 className="text-fluid-h3 leading-[1.1] font-medium tracking-tighter text-se7-black mb-6">
        Page not found
      </h1>
      <p className="text-se7-gray max-w-md mb-10">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Magnetic>
        <Link
          to="/"
          className="magnetic-target inline-flex items-center justify-center px-8 py-4 rounded-full bg-se7-black text-se7-white hover:bg-se7-dark transition-colors duration-300 text-sm font-medium"
        >
          Back to home
        </Link>
      </Magnetic>
    </section>
  );
}
