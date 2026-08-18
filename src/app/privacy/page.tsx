import { SiteLayout } from '@/components/layout/SiteLayout'
import { PolicyDocumentPage } from '@/views/marketing/PolicyDocumentPage'
import { getPolicy } from '@/lib/policies'

export default function Privacy() {
  const doc = getPolicy('privacy-policy')!
  return (
    <SiteLayout>
      <PolicyDocumentPage doc={doc} />
    </SiteLayout>
  )
}
