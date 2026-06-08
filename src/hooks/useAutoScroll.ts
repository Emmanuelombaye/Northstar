import { useEffect, useRef } from "react";

/** Gentle auto-scroll for horizontal product rails (Pablo offers carousel). */
export function useAutoScroll(active: boolean, speed = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const tick = () => {
      if (!paused.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const pause = () => { paused.current = true; };
    const resume = () => { paused.current = false; };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, [active, speed]);

  return ref;
}
