export default function LegalLayout({ title, updated, children }) {
  return (
    <section className="pt-40 pb-section-y px-site-x bg-se7-white relative z-10 min-h-[80svh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-fluid-h3 leading-[1.1] font-medium tracking-tighter text-se7-black mb-4">
          {title}
        </h1>
        <p className="text-se7-gray text-sm mb-16">Last updated: {updated}</p>

        <div className="flex flex-col gap-10 text-se7-gray leading-relaxed [&_h2]:text-se7-black [&_h2]:text-xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:mb-3 [&_a]:text-se7-black [&_a]:hover-underline">
          {children}
        </div>
      </div>
    </section>
  );
}
