'use client'

import { Star } from 'lucide-react'
import useSWR from 'swr'
import { Logo } from '~/components/header/logo'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
import type { GithubRepository } from '~/types/data'
import { fetcher } from '~/utils/misc'

export function LogoAndRepo() {
  const siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '')
  const { data: repo } = useSWR<GithubRepository>(`/api/github?repo=${siteRepo}`, fetcher)

  return (
    <div className="flex items-center gap-4">
      <Logo />
      <Link href={SITE_METADATA.siteRepo} rel="noreferrer">
        <GrowingUnderline data-umami-event="footer-view-source" className="flex items-center gap-2">
          <span className="font-medium">{SITE_METADATA.headerTitle}</span>
          <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
            (<Star className="mr-1 h-4 w-4" />
            {repo ? repo.stargazerCount : '---'})
          </span>
        </GrowingUnderline>
      </Link>
    </div>
  )
}
