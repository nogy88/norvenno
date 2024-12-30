'use client'

import { FunctionComponent } from 'react'
import { aboutMe, portfolioUrl } from '@/misc/constants'
import { usePathname } from 'next/navigation'

const Head: FunctionComponent = () => {
  const pathname = usePathname() as string

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)

  const meta = {
    title: `Norovsuren.D ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: aboutMe,
    keywords: 'Norovsuren Dorjderem, Norovsuren, Norovsuren Dorjderem portafolio, Norovsuren portafolio, Norovsuren portfolio, Norovsuren Dorjderem portfolio, Norovsuren github, Norovsuren Dorjderem github, Norovsuren LinkedIn, Norovsuren Dorjderem LinkedIn, Web, Desarrollo web, Programador web, Diseño web, Paginas web, Aplicaciones web, Aplicaciones móviles, Aplicaciones escritorio, Desarrollo frontend, Programador frontend, HTML, CSS, Javascript, Typescript, React, Angular.',
    type: 'website'
  }

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`${portfolioUrl}${pathname}`} />
      <link rel='canonical' href={`${portfolioUrl}${pathname}`} />
      <link rel='me' href='mailto:norven.norov@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Norovsuren.D' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@norven.norov' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head
