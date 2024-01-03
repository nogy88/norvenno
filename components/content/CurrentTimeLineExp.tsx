'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Tanasoft LLC</a> | oct. 2021 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile methodologies (Kanban in Jira) and best practices such as SOLID principles, pixel perfect, clean architecture, clean code using Jira, SCRUM practices, Git, GitFlow practices, Bitbucket, HTML, CSS, Pug, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Zustand  and using microfrontends and Storybook to facilitate the use of reusable components.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;