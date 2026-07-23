import { useEffect, useRef, useState, type ReactNode } from "react";

interface CardSnapCarouselProps {
  children: ReactNode[];
  className?: string;
  autoSelectOnScroll?: boolean;
}

export function CardSnapCarousel({
  children,
  className = "",
  autoSelectOnScroll = true,
}: CardSnapCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current || !autoSelectOnScroll) return;
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild?.clientWidth || 280;
    const newIndex = Math.round(scrollLeft / (itemWidth + 16));
    if (newIndex >= 0 && newIndex < children.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 280;
    container.scrollTo({
      left: index * (itemWidth + 16),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className="card-snap-carousel-wrapper">
      <div
        ref={containerRef}
        className={`scroll-snap-carousel ${className}`}
        onScroll={handleScroll}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`snap-card-item bouncy-card ${index === activeIndex ? "is-active-snap" : ""}`}
            onClick={() => scrollToCard(index)}
          >
            {child}
          </div>
        ))}
      </div>

      {children.length > 1 && (
        <div className="carousel-dots" role="tablist" aria-label="Carousel pagination">
          {children.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`carousel-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
