import { SiteLayout } from '@/components/layout/SiteLayout'
import { PolicyDocumentPage } from '@/views/marketing/PolicyDocumentPage'
import { getPolicy } from '@/lib/policies'

export default function Terms() {
  const doc = getPolicy('terms-of-use')!
  return (
    <SiteLayout>
      <PolicyDocumentPage doc={doc} />
    </SiteLayout>
  )
}
