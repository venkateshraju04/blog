import { Link } from '~/components/ui/link'
import Bash from '~/icons/bash.svg'
import CSS from '~/icons/css.svg'
import Exercism from '~/icons/exercism.svg'
import Git from '~/icons/git.svg'
import GitHub from '~/icons/github.svg'
import Goodreads from '~/icons/goodreads.svg'
import Java from '~/icons/java.svg'
import Javascript from '~/icons/javascript.svg'
import JWT from '~/icons/jsonwebtokens.svg'
import Koa from '~/icons/koa.svg'
import Liquid from '~/icons/liquid.svg'
import Markdown from '~/icons/markdown.svg'
import MongoDB from '~/icons/mongodb.svg'
import MySQL from '~/icons/mysql.svg'
import NextJS from '~/icons/nextjs.svg'
import Node from '~/icons/nodejs.svg'
import AWS from '~/icons/aws.svg'
import SocketIO from '~/icons/socket.svg'
import Go from '~/icons/go.svg'
import Docker from '~/icons/docker.svg'
import Passport from '~/icons/passport.svg'
import Vite from '~/icons/vite.svg'
import GraphQL from '~/icons/graphql.svg'
import Picsum from '~/icons/picsum.svg'
import Prisma from '~/icons/prisma.svg'
import Railway from '~/icons/railway.svg'
import React from '~/icons/react.svg'
import SemanticUI from '~/icons/semanticui.svg'
import Shopify from '~/icons/shopify.svg'
import Spotify from '~/icons/spotify.svg'
import TailwindCSS from '~/icons/tailwind.svg'
import Zustand from '~/icons/zustand.svg'
import Turborepo from '~/icons/turborepo.svg'
import Tanstack from '~/icons/tanstack.svg'
import Typescript from '~/icons/typescript.svg'
import Umami from '~/icons/umami.svg'
import Vercel from '~/icons/vercel.svg'
import Webpack from '~/icons/webpack.svg'
import VSCode from '~/icons/vscode.svg'
import NuxtJS from '~/icons/nuxtjs.svg'
import Gulp from '~/icons/gulp.svg'
import I18n from '~/icons/i18n.svg'
import Apple from '~/icons/apple.svg'
import Commitlint from '~/icons/commitlint.svg'
import Postcss from '~/icons/postcss.svg'

export let BrandsMap: Record<
  string,
  {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    url?: string
  }
> = {
  Commitlint: {
    Icon: Commitlint,
  },
  Postcss: {
    Icon: Postcss,
    url: 'https://postcss.org/',
  },
  React: {
    Icon: React,
    url: 'https://reactjs.org',
  },
  Goodreads: {
    Icon: Goodreads,
    url: 'https://www.goodreads.com/',
  },
  Git: {
    Icon: Git,
    url: 'https://git-scm.com',
  },
  GitHub: {
    Icon: GitHub,
    url: 'https://github.com',
  },
  Javascript: {
    Icon: Javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Typescript: {
    Icon: Typescript,
    url: 'https://www.typescriptlang.org',
  },
  Node: {
    Icon: Node,
    url: 'https://nodejs.org',
  },
  Bash: {
    Icon: Bash,
    url: 'https://www.gnu.org/software/bash',
  },
  Liquid: {
    Icon: Liquid,
    url: 'https://shopify.dev/docs/api/liquid',
  },
  Markdown: {
    Icon: Markdown,
    url: 'https://www.markdownguide.org',
  },
  NextJS: {
    Icon: NextJS,
    url: 'https://nextjs.org',
  },
  TailwindCSS: {
    Icon: TailwindCSS,
    url: 'https://tailwindcss.com',
  },
  Prisma: {
    Icon: Prisma,
    url: 'https://www.prisma.io',
  },
  Umami: {
    Icon: Umami,
    url: 'https://umami.is',
  },
  Vercel: {
    Icon: Vercel,
    url: 'https://vercel.com',
  },
  Railway: {
    Icon: Railway,
    url: 'https://railway.app',
  },
  Zustand: {
    Icon: Zustand,
    url: 'https://zustand-demo.pmnd.rs',
  },
  Spotify: {
    Icon: Spotify,
    url: 'https://spotify.com',
  },
  Turborepo: {
    Icon: Turborepo,
    url: 'https://turborepo.org',
  },
  Shopify: {
    Icon: Shopify,
    url: 'https://shopify.dev',
  },
  Polaris: {
    Icon: Shopify,
    url: 'https://polaris.shopify.com/',
  },
  ThemeKit: {
    Icon: Shopify,
    url: 'https://shopify.dev/docs/storefronts/themes/tools/theme-kit',
  },
  Webpack: {
    Icon: Webpack,
    url: 'https://webpack.js.org',
  },
  KoaJS: {
    Icon: Koa,
    url: 'https://koajs.com',
  },
  JWT: {
    Icon: JWT,
    url: 'https://jwt.io',
  },
  MongoDB: {
    Icon: MongoDB,
    url: 'https://www.mongodb.com',
  },
  CSS: {
    Icon: CSS,
    url: 'https://www.w3.org/Style/CSS/',
  },
  Exercism: {
    Icon: Exercism,
    url: 'https://exercism.org',
  },
  SemanticUI: {
    Icon: SemanticUI,
    url: 'https://semantic-ui.com',
  },
  Picsum: {
    Icon: Picsum,
    url: 'https://picsum.photos',
  },
  Java: {
    Icon: Java,
    url: 'https://java.com',
  },
  MySQL: {
    Icon: MySQL,
    url: 'https://mysql.com',
  },
  VSCode: {
    Icon: VSCode,
    url: 'https://code.visualstudio.com/',
  },
  NuxtJS: {
    Icon: NuxtJS,
    url: 'https://nuxt.com/',
  },
  Gulp: {
    Icon: Gulp,
    url: 'https://gulpjs.com/',
  },
  I18n: {
    Icon: I18n,
  },
  Apple: {
    Icon: Apple,
    url: 'https://www.apple.com/ios',
  },
  Go: {
    Icon: Go,
    url: 'https://golang.org',
  },
  TypeScript: {
    Icon: Typescript,
    url: 'https://www.typescriptlang.org',
  },
  Docker: {
    Icon: Docker,
    url: 'https://www.docker.com',
  },
  AWS: {
    Icon: AWS,
    url: 'https://aws.amazon.com',
  },
  NodeJS: {
    Icon: Node,
    url: 'https://nodejs.org',
  },
  Passport: {
    Icon: Passport,
    url: 'http://www.passportjs.org/',
  },
  Vite: {
    Icon: Vite,
    url: 'https://vitejs.dev/',
  },
  GraphQL: {
    Icon: GraphQL,
    url: 'https://graphql.org/',
  },
  SocketIO: {
    Icon: SocketIO,
    url: 'https://socket.io/',
  },
  Tanstack: {
    Icon: Tanstack,
    url: 'https://tanstack.com/',
  },
}

export function Brand(props: {
  name: keyof typeof BrandsMap
  as?: 'link' | 'icon'
  className?: string
  iconClassName?: string
}) {
  const { name, as = 'link', className, iconClassName } = props
  const { Icon, url } = BrandsMap[name] || {}

  if (!Icon) return <span className="hidden">Missing brand icon for {name}</span>

  if (as === 'icon' || !url) {
    return <Icon className={className} fill="currentColor" />
  }

  return (
    <Link href={`${url}?ref=mohitnagaraj.in`} className={className}>
      <Icon className={iconClassName} fill="currentColor" />
    </Link>
  )
}
