'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Zeely app',
    des: "Zeely is a fintech app that supports customers' financial and healthy lifestyles by providing accessible financial services based on financial information and psychological scoring.",
    category: 'flutter',
    appstore: 'https://apps.apple.com/mn/app/zeely-by-optimal/id1419637942',
    link: 'https://www.zeely.mn/'
  },
  {
    id: '2',
    title: 'HabiDo app',
    des: 'Users can create habits, participate in challenges, see their progress, interact with psychological counseling chatbots, complete',
    category: 'flutter',
    appstore: 'https://apps.apple.com/mn/app/habido/id1579996644',
    link: 'https://habido.mn/'
  },
  {
    id: '3',
    title: 'MindMetrix',
    des: 'Mindmetrix is a research platform that provides products and research results for researchers who want to integrate the scientific method of psychology with people and psychological delivery.',
    category: 'next - tailwind - chakraui',
    appstore: '',
    link: 'https://demo.mindmetrix.mn/'
  },
  {
    id: '5',
    title: 'Dumdadu app',
    des: 'This mobile app caters to Mongolian users, facilitating direct connections with translators for effective communication. Additionally, users can conveniently book Chinese hotels, while also accessing information about local points of interest, enhancing their overall travel experience.',
    category: 'flutter',
    appstore: '',
    link: 'https://dumdadu.tanasoft.mn'
  }, 
  {
    id: '5',
    title: 'Dumdadu admin dashboard',
    des: 'Admin dashboard offers comprehensive control and insights, allowing efficient management of user interactions, translation services, and hotel reservations for a seamless and tailored experience.',
    category: 'next - nextui - tailwind',
    appstore: '',
    link: 'https://dumdadu.tanasoft.mn/'
  },
  {
    id: '6',
    title: 'HabiDo admin dashboard',
    des: 'Admin dashboard empowers administrators to oversee user habit creation, challenge participation, progress tracking and more.',
    category: 'react - javascript - antd',
    appstore: '',
    link: 'https://ap.habido.mn/'
  },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Languages, frameworks, libraries, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, appstore, link }) => <CardProject key={id} title={title} des={des} category={category} appstore={appstore} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;