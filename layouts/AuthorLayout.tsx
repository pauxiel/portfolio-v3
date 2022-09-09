import { Header } from '@/components/Form';
import StackList from '@/components/list/StackList';
import { PageSEO } from '@/components/SEO';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { WorkStack } from 'config/stack';
import Image from 'next/image';
import { ReactNode } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface Props {
  children: ReactNode;
  frontMatter: AuthorFrontMatter;
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, resume } = frontMatter;
  const [resumeColor] = useRandomColorPair();

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='About' />
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center space-x-2 pt-8'>
            <Image
              src={avatar}
              alt='avatar'
              width='192px'
              height='192px'
              className='h-48 w-48 rounded-full'
            />
            <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
              {name}
            </h3>
            <div className='font-medium text-gray-500 dark:text-gray-400'>
              {occupation}
            </div>
            <div className='text-gray-500 dark:text-gray-400'>{company}</div>
          </div>

          <div className='prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2'>
            I am Software Engineer with experience in frontend design and
            backend design. Over the past two years, I have gained experience
            designing and developing web applications. I am currently building
            an app called circle along with a team of four person. <br /> I have
            always been fascinated by anything, software, and computer as a
            child. This was why I pursued a degree in electronic and Computer
            Engineering. During my second year, I did a little learning on the
            basics of web development. But I began pursuing my interest in
            software engineering during my final year at university. My school
            final year was to build an e-tax software. After the project, my
            understanding of building interfaces, and database management
            deepens.
            <br /> Right from my university days, I saw that software
            engineering was a highly rewarding field. So After my university
            days. I had already made up software engineering my career choice.{' '}
            <br /> Part of my achievement includes an earning of udacity
            Nanodegree certificate as a frontend developer and being among the
            top 50 hashnode writers In the month of May.
            <h2 className='mt-8 mb-4 text-2xl font-semibold dark:text-white'>
              Skills
            </h2>
            <StackList stack={WorkStack} />
            {children}
            <p className='mt-8'>
              <a
                className='!font-normal !text-black !no-underline dark:!text-white'
                href={resume}
                target='_blank'
                rel='noreferrer'
              >
                <RoughNotation
                  show
                  type='box'
                  animationDelay={250}
                  animationDuration={2000}
                  strokeWidth={2}
                  color={resumeColor}
                >
                  Resume
                </RoughNotation>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
