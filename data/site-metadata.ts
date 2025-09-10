export const SITE_METADATA = {
  title: `Venkatesh's blog - My development journey`,
  author: 'Venkatesh Raju',
  headerTitle: `Venkatesh's blog`,
  description:
    'My development journey - sharing insights, lessons, and resources for fellow developers.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://blog.venkateshraju.me',
  siteRepo: 'https://github.com/venkateshraju04/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/profile.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/page.jpg`,

  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://cloud.umami.is/share/4gOlTcozgJgk6vpG/blog.mohitnagaraj.in',
    },
  },
  comments: {
    giscusConfig: {
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
