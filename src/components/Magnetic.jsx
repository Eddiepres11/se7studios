import { cloneElement, useRef } from 'react';

/**
 * Wraps a single child (typically a button/link) and makes it "magnetically"
 * follow the cursor while hovered, snapping back on mouse leave.
 */
export default function Magnetic({ children }) {
  const targetRef = useRef(null);

  const handleMouseMove = (e) => {
    const target = targetRef.current;
    if (!target) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseEnter = () => {
    const target = targetRef.current;
    if (!target) return;
    target.style.transition = 'none';
  };

  const handleMouseLeave = () => {
    const target = targetRef.current;
    if (!target) return;
    target.style.transform = 'translate(0px, 0px)';
    target.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  return (
    <div
      className="magnetic-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cloneElement(children, { ref: targetRef })}
    </div>
  );
}
