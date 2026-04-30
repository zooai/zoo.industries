'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import site from '@/site.config'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { logo: 'h-6 w-6', text: 'text-lg' },
  md: { logo: 'h-8 w-8', text: 'text-xl' },
  lg: { logo: 'h-10 w-10', text: 'text-2xl' },
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center space-x-3 group', className)}>
      <Image
        src="/zoo-logo.svg"
        alt={site.brand.name}
        width={40}
        height={40}
        className={cn(sizes[size].logo, 'transition-all duration-300')}
        priority
      />
      {showText && (
        <span className={cn(
          'font-semibold transition-colors duration-300',
          sizes[size].text,
          'text-foreground group-hover:text-foreground/90'
        )}>
          {site.brand.name}
        </span>
      )}
    </Link>
  )
}
