import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
export function EditOnGithub({ filePath }: { filePath: string }) {
  return (
    <Link
      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
      href={`${SITE_METADATA.siteRepo}/blob/main/data/${filePath}?plain=1`}
    >
      <GrowingUnderline data-umami-event="discuss-on-x">
        View on <span className="font-semibold">GitHub</span>
      </GrowingUnderline>
    </Link>
  )
}
