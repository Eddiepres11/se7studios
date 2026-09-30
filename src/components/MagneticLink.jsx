import { useRef } from 'react'

export default function MagneticLink({ wrapClassName = '', className = '', children, ...linkProps }) {
  const wrapRef = useRef(null)
  const targetRef = useRef(null)

  const onMouseMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    targetRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const onMouseLeave = () => {
    targetRef.current.style.transform = 'translate(0px, 0px)'
    targetRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  }

  const onMouseEnter = () => {
    targetRef.current.style.transition = 'none'
  }

  return (
    <div
      ref={wrapRef}
      className={`${wrapClassName} magnetic-wrap`.trim()}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <a ref={targetRef} className={`magnetic-target ${className}`} {...linkProps}>
        {children}
      </a>
    </div>
  )
}
