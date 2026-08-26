import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full flex flex-col justify-end px-site-x pb-site-x">
      <div className="hero-blur-bg">
        <div className="blob-1 animate-blob-spin"></div>
        <div className="blob-2 animate-blob-bounce"></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[20px]"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-8 pb-4">
        <Reveal as="h1" className="text-fluid-hero leading-[0.85] tracking-tighter font-medium text-se7-black max-w-5xl">
          We make businesses
          <br />
          look expensive.
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col gap-2 max-w-[240px] text-se7-gray text-sm font-medium tracking-tight"
        >
          <p>Adelaide, AU — Creative &amp; Digital Studio.</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-se7-black animate-pulse"></div>
            <span>Accepting new clients</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
