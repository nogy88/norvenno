import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
       I am a passionate developer with +2 years of work experience, specializing in JavaScript, ReactJS, Next.js and Flutter.
      Always up for learning and growing to create awesome and complete solutions.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;