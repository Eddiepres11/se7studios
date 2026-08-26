import { useEffect, useRef, useState } from 'react';

const HOVER_SELECTOR = 'a, button, [data-cursor]';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [active, setActive] = useState(false);
  const [cursorText, setCursorText] = useState('View');

  // Smoothed cursor position via requestAnimationFrame (lerp), mirrors the
  // original vanilla-JS implementation.
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let rafId;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX = lerp(cursorX, mouseX, 0.2);
      cursorY = lerp(cursorY, mouseY, 0.2);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    const showCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };
    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Event delegation for hover states on links/buttons/[data-cursor] targets,
  // since content is dynamically rendered by React.
  useEffect(() => {
    const closestTarget = (node) => (node && node.closest ? node.closest(HOVER_SELECTOR) : null);

    const handleOver = (e) => {
      const target = closestTarget(e.target);
      if (!target) return;
      const related = closestTarget(e.relatedTarget);
      if (target === related) return;

      setActive(true);
      const text = target.getAttribute('data-cursor') || target.getAttribute('data-cursor-text') || '';
      setCursorText(text);
    };

    const handleOut = (e) => {
      const target = closestTarget(e.target);
      if (!target) return;
      const related = closestTarget(e.relatedTarget);
      if (target === related) return;

      setActive(false);
      setCursorText('View');
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <div id="custom-cursor" ref={cursorRef} className={active ? 'active' : 'blend-cursor'}>
      <span id="cursor-text">{cursorText}</span>
    </div>
  );
}
