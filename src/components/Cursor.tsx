import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });
  
  const dotX = useSpring(0, { damping: 40, stiffness: 800 });
  const dotY = useSpring(0, { damping: 40, stiffness: 800 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      dotX.set(e.clientX - 2);
      dotY.set(e.clientY - 2);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 2.5 : 1,
          borderColor: isHovered ? 'var(--color-brand-neon)' : 'var(--color-brand-purple)',
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
