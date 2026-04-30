import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Zoo Industries technical capabilities across AI model development, security infrastructure, cloud computing, and distributed systems.',
}

export default function Page() {
  return <PageClient />
}
