'use client'

import { POLICIES, parsePolicyBody, type PolicyDoc } from '../../lib/policies'

export function PolicyBody({ doc, compact = false }: { doc: PolicyDoc; compact?: boolean }) {
  const blocks = parsePolicyBody(doc.body)

  return (
    <div className={`ns-policy-body${compact ? ' is-compact' : ''}`}>
      {blocks.map((block, index) => {
        if (block.type === 'h') {
          return <h2 key={`${doc.slug}-h-${index}`}>{block.text}</h2>
        }
        if (block.type === 'ul') {
          return (
            <ul key={`${doc.slug}-ul-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        return <p key={`${doc.slug}-p-${index}`}>{block.text}</p>
      })}
    </div>
  )
}

export function PolicyLibrary({ heading }: { heading: string }) {
  return (
    <div className="ns-policy-library">
      <p className="ns-policy-library-kicker">{heading}</p>
      {POLICIES.map((doc) => (
        <details key={doc.slug} className="ns-policy-embed">
          <summary>{doc.title}</summary>
          <div className="ns-policy-embed-body">
            <PolicyBody doc={doc} compact />
          </div>
        </details>
      ))}
    </div>
  )
}
