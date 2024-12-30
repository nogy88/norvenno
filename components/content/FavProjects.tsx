'use client'

import { FunctionComponent } from 'react'
import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import { createStyles, Paper, Text, Title, useMantineTheme } from '@mantine/core'
import ExternalLink from '../ui/ExternalLink'
import AnimationContainer from '../utils/AnimationContainer'

const useStyles = createStyles((theme: any) => ({
  card: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-center',
    padding: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  title: {
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}))

interface CardProps {
  image: string
  title: string
  category: string
  appstore: string
  link: string
}

const Card: FunctionComponent<CardProps> = ({ image, title, category, appstore, link }) => {
  const { classes } = useStyles()

  return (
    <Paper
      shadow='md'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {category}
        </Text>
        <Title order={3} className={`p-2 backdrop-filter backdrop-blur-sm w-fit mx-auto ${classes.title}`}>
          {title}
        </Title>
      </div>

      <div className='flex items-center justify-end gap-3'>

        {appstore !== '' && (
          <ExternalLink href={appstore} customClassName='text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
            <svg fill='#ffffff' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><path d='M20.91887,10.653c-.31445-.16992-3.01074-1.73438-4.02246-2.32324l-.00293-.002L4.6386,1.25262a1.679,1.679,0,0,0-1.40711-.1593c-.02618.0094-.05078.01886-.07623.03051a1.41835,1.41835,0,0,0-.17291.06922,1.51864,1.51864,0,0,0-.73828,1.36426V21.54266a1.43542,1.43542,0,0,0,.69238,1.2705,1.30761,1.30761,0,0,0,.15479.06373c.02893.01336.05651.025.08636.03552a1.37893,1.37893,0,0,0,.44635.0824,1.67263,1.67263,0,0,0,.83106-.23145c.38867-.22559,12.43847-7.18262,12.43847-7.18262L20.914,13.25945a1.52522,1.52522,0,0,0,.8418-1.334A1.49078,1.49078,0,0,0,20.91887,10.653ZM4.24407,19.839V4.10186l7.94012,7.85907Zm5.018-2.16168,4.34351-4.30957,1.14954,1.13782C13.49047,15.23583,11.35381,16.4696,9.26207,17.67736Zm4.3418-7.125L9.206,6.19933l5.55365,3.2063ZM16.55065,13.469l-1.52539-1.50977L16.553,10.44341c.72027.41828,1.84283,1.06934,2.6159,1.51429Z' /></svg>
          </ExternalLink>
        )}

        <ExternalLink href={link} customClassName='text-white inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-900 transition-all ease shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <svg fill='currentColor' width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'><path fill='currentColor' d='M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708' /></svg>
        </ExternalLink>

      </div>
    </Paper>
  )
}

const favProjects = [
  {
    image: 'https://i.ibb.co/FJL58Jr/stora.jpg',
    title: 'Stora web',
    category: 'Web',
    appstore: '',
    link: 'https://www.stora.mn/'
  },
  {
    image:
      'https://i.ibb.co/7n5bBfJ/396733642-718788870278950-8389065410833042142-n.jpg',
    title: 'Zeely app',
    category: 'Flutter',
    appstore: 'https://apps.apple.com/mn/app/zeely-by-optimal/id1419637942',
    link: 'https://www.zeely.mn/'
  },
  {
    image:
      'https://habido.mn/hubfs/ccf97a7f9a68bf7851fb244793e1c7d5.png',
    title: 'HabiDo app',
    category: 'Flutter',
    appstore: 'https://apps.apple.com/mn/app/habido/id1579996644',
    link: 'https://habido.mn/'
  },
  {
    image: 'https://i.ibb.co/xCw8kgM/stora0.jpg',
    title: 'Stora app',
    category: 'Flutter',
    appstore: 'https://apps.apple.com/mx/app/stora/id6448969980?l=en-GB',
    link: 'https://stora.page.link/app'
  },
  {
    image:
      'https://i.ibb.co/FYN6Fb9/premium.jpg',
    title: 'RMC - Premium concrete',
    category: 'Web',
    appstore: '',
    link: 'https://www.stora.mn/rmc'
  },
  {
    image:
      'https://i.ibb.co/9pP4yh2/Screenshot-2024-01-05-124159.png',
    title: 'MindMetrix',
    category: 'React - React Query - Tailwind - Chakraui',
    appstore: '',
    link: 'https://demo.mindmetrix.mn/'
  },
  {
    image:
      'https://i.ibb.co/WD6M6Th/Group-58630.png',
    title: 'Dumdadu app',
    category: 'Flutter',
    appstore: '',
    link: 'dumdadu.tanasoft.mn'
  }
]

const FavProjects: FunctionComponent = () => {
  const theme = useMantineTheme()

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)

  const slides = favProjects.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <AnimationContainer customClassName='w-full flex flex-col justify-center text-center lg:items-start mb-16'>

      <h2 className='font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        Top projects
      </h2>

      <Carousel
        slideSize='50%'
        breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 1 }]}
        slideGap='xs'
        align='center'
        slidesToScroll={mobile ? 1 : 2}
        // withControls={false}
        style={{ width: '100%', cursor: 'grab' }}
        loop
      >
        {slides}
      </Carousel>

    </AnimationContainer>
  )
}

export default FavProjects
