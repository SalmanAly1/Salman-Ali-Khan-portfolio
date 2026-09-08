import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    // Only activate on desktop devices with hover capability
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch || window.innerWidth < 768) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    setEnabled(true);

    const dot = document.getElementById('cursorDot');
    const follower = document.getElementById('cursorFollower');
    if (!dot || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const loop = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle interactive hover targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor-project]');
      if (projectEl) {
        setIsProject(true);
        setIsHovered(false);
        setCursorText('VIEW');
        return;
      }

      const interactive = target.closest('a, button, [role="button"], input, textarea');
      if (interactive) {
        setIsHovered(true);
        setIsProject(false);
        setCursorText('');
        return;
      }

      setIsHovered(false);
      setIsProject(false);
      setCursorText('');
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div id="cursorDot" className="cursor-dot hidden md:block" />
      <div
        id="cursorFollower"
        className={`cursor-follower hidden md:flex ${
          isProject ? 'cursor-project' : isHovered ? 'cursor-hover' : ''
        }`}
      >
        {cursorText}
      </div>
    </>
  );
}
