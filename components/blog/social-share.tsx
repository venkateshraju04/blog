'use client'

import { clsx } from 'clsx'
import { Check, Link2, Share2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { LinkedinShareButton, LinkedinIcon } from 'react-share'

type SocialButtonsProps = {
  postUrl: string
  title: string
  className?: string
}

export function SocialShare({ postUrl, title, className }: SocialButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [supportsShare, setSupportsShare] = useState(false)

  useEffect(() => {
    setSupportsShare(typeof navigator.share === 'function')
  }, [])

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(postUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = postUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [postUrl])

  const nativeShare = useCallback(async () => {
    try {
      await navigator.share({ title, url: postUrl })
    } catch {
      // User cancelled or share failed — no-op
    }
  }, [postUrl, title])

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <span className="hidden text-gray-500 lg:inline">Share:</span>
      <LinkedinShareButton url={postUrl} title={title}>
        <LinkedinIcon className="h-8 w-8 rounded-full" />
      </LinkedinShareButton>
      <button
        aria-label="Copy link"
        title={copied ? 'Copied!' : 'Copy link'}
        onClick={copyLink}
        className={clsx(
          'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
          copied ? 'bg-green-500 text-white' : 'bg-gray-600 text-white hover:bg-gray-500'
        )}
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
      {supportsShare && (
        <button
          aria-label="Share"
          title="Share"
          onClick={nativeShare}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white transition-colors hover:bg-gray-500"
        >
          <Share2 size={16} />
        </button>
      )}
    </div>
  )
}
