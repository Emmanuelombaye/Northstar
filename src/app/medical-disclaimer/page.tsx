import { SiteLayout } from '@/components/layout/SiteLayout'
import { PolicyDocumentPage } from '@/views/marketing/PolicyDocumentPage'
import { getPolicy } from '@/lib/policies'

export default function MedicalDisclaimer() {
  const doc = getPolicy('fda-and-medical-disclaimer')!
  return (
    <SiteLayout>
      <PolicyDocumentPage doc={doc} />
    </SiteLayout>
  )
}
