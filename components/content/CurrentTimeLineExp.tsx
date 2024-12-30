'use client'

import { FunctionComponent } from 'react'
import { Timeline, TimelineEvent } from './TimeLineExp'

const CurrentTimeLineExp: FunctionComponent = () => {
  return (
    <Timeline>

      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Tanasoft LLC (Zeely)</a> | oct. 2021 - feb. 2024</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile methodologies (Kanban in Jira) and best practices such as SOLID principles, pixel perfect, clean architecture, clean code using Jira, SCRUM practices, Git, GitFlow practices, Bitbucket, HTML, CSS, Pug, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Zustand and using microfrontends and Storybook to facilitate the use of reusable components.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Stora Central LLC</a> | feb. 2024 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
          Developer
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp
