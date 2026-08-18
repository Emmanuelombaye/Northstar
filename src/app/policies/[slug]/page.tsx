import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { PolicyDocumentPage } from '@/views/marketing/PolicyDocumentPage'
import { POLICIES, getPolicy } from '@/lib/policies'

export function generateStaticParams() {
  return POLICIES.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getPolicy(slug)
  return {
    title: doc ? `${doc.title} | North Star MD` : 'Policies | North Star MD',
    description: doc?.lead,
  }
}

export default async function PolicySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getPolicy(slug)
  if (!doc) notFound()

  return (
    <SiteLayout>
      <PolicyDocumentPage doc={doc} />
    </SiteLayout>
  )
}
