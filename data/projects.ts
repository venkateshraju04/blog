import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'self',
    title: 'AI Trend Scout',
    description: `A trends dashboard that aggregates and curates the latest AI trends from various sources, including  Dev.to, YouTube, Reddit, Hacker News, and more. It uses RSS feed and API integration to gather data and presents it in an easy-to-read format.`,
    imgSrc: '/static/images/projects/aits.png',
    url: 'https://ai-trend-scout.venkateshraju.me',
    repo: 'venkateshraju04/ai-trend-scout',
    // demo: <AvpDemo />,
    builtWith: ['NextJS', 'n8n', 'AWS', 'Supabase', 'Mailjet'],
  },
  {
    type: 'self',
    title: 'Chat Sync',
    description: `A real-time chat application that allows users to communicate with each other using WebSockets`,
    imgSrc: '/static/images/projects/chatsync.png',
    url: 'chat-sync.venkateshraju.me',
    repo: 'venkateshraju04/chat-sync',
    // demo: <AvpDemo />,
    builtWith: ['NodeJS', 'Express.js', 'React', 'Cloudinary', 'SocketIO', 'MongoDB'],
  },
]
