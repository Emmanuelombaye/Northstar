import { SiteLayout } from '@/components/layout/SiteLayout'
import { PolicyDocumentPage } from '@/views/marketing/PolicyDocumentPage'
import { getPolicy } from '@/lib/policies'

export default function HipaaNotice() {
  const doc = getPolicy('hipaa-notice')!
  return (
    <SiteLayout>
      <PolicyDocumentPage doc={doc} />
    </SiteLayout>
  )
}
