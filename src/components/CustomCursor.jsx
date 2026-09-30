import { useEffect, useRef } from 'react'

const HOVER_SELECTOR = 'a, button, [data-cursor]'
const DEFAULT_TEXT = 'View'

const lerp = (start, end, factor) => start + (end - start) * factor

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorText = textRef.current

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let cursorX = mouseX
    let cursorY = mouseY
    let frame
    let hovered = null

    const animate = () => {
      cursorX = lerp(cursorX, mouseX, 0.2)
      cursorY = lerp(cursorY, mouseY, 0.2)
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`
      frame = requestAnimationFrame(animate)
    }
    animate()

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e) => {
      const target = e.target instanceof Element ? e.target.closest(HOVER_SELECTOR) : null
      if (target === hovered) return
      hovered = target

      if (target) {
        cursor.classList.add('active')
        cursor.classList.remove('blend-cursor')
        cursorText.innerText =
          target.getAttribute('data-cursor') || target.getAttribute('data-cursor-text') || ''
      } else {
        cursor.classList.remove('active')
        cursor.classList.add('blend-cursor')
        cursorText.innerText = DEFAULT_TEXT
      }
    }

    const onDocLeave = () => { cursor.style.opacity = '0' }
    const onDocEnter = () => { cursor.style.opacity = '1' }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.documentElement.addEventListener('mouseleave', onDocLeave)
    document.documentElement.addEventListener('mouseenter', onDocEnter)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.documentElement.removeEventListener('mouseleave', onDocLeave)
      document.documentElement.removeEventListener('mouseenter', onDocEnter)
    }
  }, [])

  return (
    <div id="custom-cursor" className="blend-cursor" ref={cursorRef}>
      <span id="cursor-text" ref={textRef}>{DEFAULT_TEXT}</span>
    </div>
  )
}
