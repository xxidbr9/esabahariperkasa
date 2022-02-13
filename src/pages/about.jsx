import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Overlay from '../components/Overlay'
import BRAND_META_TITLE from '../constants/brand.constant'


const tagLine = [
  "We build relationships",
  "Grow and foster connections with your customers",
  "And we think we’re pretty good at it"
]

const AboutPage = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>{BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      <main>
        <MainHero tags={tagLine} title={"About Us"}/>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default AboutPage

const MainHero = ({ tags, title, ...props }) => {
  return (
    <React.Fragment>
      <Overlay className="bg-black">
        <div className='laptop:container mx-auto laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0 relative bg-black' style={{
          zIndex: 1,
          mixBlendMode: "screen",
        }}>
          <div className='flex flex-col w-full h-full mobile:gap-y-2 laptop:gap-y-8' >
            <div className='overflow-hidden'>
              <motion.h2
                initial={{
                  y: -100,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: .6
                }}
                className='mobile:text-base laptop:text-xl text-white'>{title}</motion.h2>
            </div>
            <div className='flex flex-col laptop:text-4xl mobile:text-2xl font-bold gap-y-2 '
            >
              {tags.map((tag, index) => (
                <div className='overflow-hidden' key={`motion_tag_${index}`}>
                  <motion.h1
                    className='text-white'
                    initial={{
                      y: 100,
                    }}
                    animate={{
                      y: 0,
                    }}
                    transition={{
                      duration: .6,
                      delay: .06 * index
                    }}
                  >
                    {tag}
                  </motion.h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Overlay>

      <section data-id="hero" className='laptop:container mx-auto h-[50vh] laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0 bg-white relative'
        style={{
          zIndex: 10
        }}
      >
        <div className='flex flex-col mobile:gap-y-2 laptop:gap-y-8 '>
          <span className='mobile:text-base laptop:text-xl'>{title}</span>
          <div className='flex flex-col laptop:text-4xl mobile:text-2xl font-bold gap-y-2' >
            {tags.map((tag, indx) => (
              <div className='overflow-hidden' key={`tag_${indx}`}>
                <h1 className={`text-neutral-800`}>
                  {tag}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      <section className='h-screen'></section>
    </React.Fragment>
  )
}