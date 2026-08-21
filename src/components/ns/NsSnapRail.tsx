'use client'

import { Children, useRef, useState, type ReactNode } from 'react'

export function NsSnapRail({
  children,
  cols = 3,
  className = '',
  hint = 'Swipe',
  desktop = 'grid',
  mobile = 'snap',
}: {
  children: ReactNode
  cols?: 2 | 3 | 4
  className?: string
  hint?: string
  desktop?: 'grid' | 'stack'
  mobile?: 'snap' | 'stack'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const items = Children.toArray(children)
  const [active, setActive] = useState(0)
  const isMobileStack = mobile === 'stack'

  const sync = () => {
    const el = ref.current
    if (!el) return
    const slides = Array.from(el.children) as HTMLElement[]
    if (!slides.length) return
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let dist = Infinity
    slides.forEach((slide, i) => {
      const c = slide.offsetLeft + slide.offsetWidth / 2
      const d = Math.abs(c - mid)
      if (d < dist) {
        dist = d
        best = i
      }
    })
    setActive(best)
  }

  return (
    <div
      className={[
        'ns-snap-wrap',
        `ns-snap-wrap--${cols}`,
        desktop === 'stack' ? 'ns-snap-wrap--stack' : '',
        isMobileStack ? 'ns-snap-wrap--mobile-stack' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {hint && !isMobileStack ? <p className="ns-snap-hint">{hint}</p> : null}
      <div ref={ref} className={`ns-snap ns-snap--${cols} ${className}`.trim()} onScroll={isMobileStack ? undefined : sync}>
        {children}
      </div>
      {!isMobileStack && items.length > 1 ? (
        <div className="ns-snap-dots" aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === active ? 'is-on' : undefined}
              onClick={() => {
                const slide = ref.current?.children[i] as HTMLElement | undefined
                slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
