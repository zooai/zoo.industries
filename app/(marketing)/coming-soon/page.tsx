import type { Metadata } from 'next'
import PageClient from './_client'

export const metadata: Metadata = {
  title: 'Coming Soon',
  description:
    'New features and products coming from Zoo Industries. Stay tuned for upcoming releases.',
}

export default function Page() {
  return <PageClient />
}
