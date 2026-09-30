export default function OfferItem({ index, title, description }) {
  return (
    <div className="group block border-b border-se7-black/10 py-6 md:py-10 hover:bg-black/5 transition-colors duration-500 -mx-site-x px-site-x">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
        <div className="md:col-span-6 flex items-center gap-6 md:gap-8">
          <span className="text-xs md:text-sm font-medium text-se7-gray group-hover:text-se7-black transition-colors w-6">
            {index}
          </span>
          <h3 className="text-2xl md:text-4xl font-medium tracking-tighter text-se7-black group-hover:translate-x-4 transition-transform duration-500 ease-out">
            {title}
          </h3>
        </div>
        <div className="md:col-span-6 text-se7-gray font-medium text-sm md:text-base">{description}</div>
      </div>
    </div>
  )
}
