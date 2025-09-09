'use client'

import { Clock, Map } from 'lucide-react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
// import { Twemoji } from '~/components/ui/twemoji'
import { AUTHOR_INFO } from '~/data/author-info'
import { Twemoji } from '../ui/twemoji'

const TIME_IS = 'https://time.is/Bengaluru'
const MY_TIMEZONE = 'Asia/Kolkata'
const MY_TIMEZONE_OFFSET = 330

function getTime() {
  const date = new Date()
  const visitorTimezoneOffset = -date.getTimezoneOffset()
  const hoursDiff = (visitorTimezoneOffset - MY_TIMEZONE_OFFSET) / 60
  const diff =
    hoursDiff === 0
      ? 'same time'
      : hoursDiff > 0
        ? `${hoursDiff}h ahead`
        : `${Math.abs(hoursDiff)}h behind`

  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: MY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date)

  return { time, diff }
}

export function AddressAndTime() {
  const { time, diff } = getTime()
  return (
    <div className="space-y-2 py-1.5 text-gray-800 dark:text-gray-200">
      <div className="flex items-center gap-2">
        <Map className="h-5 w-5" />
        <span className="font-medium">{AUTHOR_INFO.address.city}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        <Link href={TIME_IS}>
          <GrowingUnderline className="font-medium" data-umami-event="footer-time">
            {time} <span className="text-gray-500 dark:text-gray-400">({diff})</span>
          </GrowingUnderline>
        </Link>
      </div>
    </div>
  )
}
