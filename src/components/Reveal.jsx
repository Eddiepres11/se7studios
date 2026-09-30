import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', delay, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )
    observer.observe(el)

    const timeout = setTimeout(() => {
      if (el.getBoundingClientRect().top < window.innerHeight) setInView(true)
    }, 100)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  const mergedStyle = delay !== undefined ? { transitionDelay: delay, ...style } : style

  return (
    <Tag
      ref={ref}
      className={`${className} reveal-up${inView ? ' is-inview' : ''}`}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  )
}
