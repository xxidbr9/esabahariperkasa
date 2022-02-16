import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Overlay from '../components/Overlay'
import BRAND_META_TITLE from '../constants/brand.constant'
import withMainContext from '../context/Main.context'
import listServices from '../data/listServices'
import MoreInfo from '../components/MoreInfo'


const tagLine = [
  "We build relationships",
  "Provide the best Services",
  "And we think we’re pretty good at it"
]

const ServicePage = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Services | {BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      <main className='bg-white'>
        <MainHero tags={tagLine} title={"Our Services"} />
        <Slogan />
        <ListServices />
        <div className='laptop:mt-20'>
          <hr />
        </div>
        <MoreInfo />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default withMainContext(ServicePage)

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
    </React.Fragment>
  )
}

const Slogan = ({ ...props }) => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: 0.6 * (tagLine.length),
        duration: 0.6
      }}
      className='text-center laptop:mt-20 py-10 laptop:w-[620px] mobile:w-full mobile:text-lg mobile:px-4 mx-auto laptop:text-4xl text-neutral-600'>
      Provide the best, Service by upholding, The values of honesty
    </motion.div>
  )
}



const ListServices = ({ ...props }) => {

  return (
    <section
      className='laptop:py-10 mx-auto grid laptop:grid-cols-2 mobile:grid-cols-1 w-full laptop:gap-x-20 laptop:container mobile:px-4 laptop:px-0 mobile:gap-y-8'>
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: 0.6 * (tagLine.length + 1),
          duration: 0.6
        }}
        className='col-span-1 flex flex-col laptop:gap-y-20 mobile:gap-y-8'>
        {listServices.filter((service, index) => index === 0 || index % 2 === 0).map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            text={service.text}
            title={service.title} />
        ))}
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: 0.6 * (tagLine.length + 1.2),
          duration: 0.6
        }}
        className='col-span-1 flex flex-col laptop:gap-y-20 mobile:gap-y-8'>
        {listServices.filter((service, index) => index === 1 || index % 2 !== 0).map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            text={service.text}
            title={service.title} />
        ))}
      </motion.div>
    </section>
  )
}


const CardService = ({ title, text, image, ...props }) => {
  const baseConfig = {
    initial: {
      scale: 1,
    },
    transition: {
      ease: "easeInOut",
      duration: .25
    },
  }

  const scaleBase = 0.95

  return (
    <motion.div
      className='relative flex flex-col gap-y-4 overflow-hidden'
    >
      <motion.div
        className='w-full h-auto relative overflow-hidden'
        {...baseConfig}
        whileHover={{
          scale: scaleBase,
        }}
      >
        <motion.img
          src={image}
          alt={title}
          className='w-full h-full object-cover object-center absolute'
          {...baseConfig}
          whileHover={{
            scale: 2.05 - scaleBase,
          }}
        />
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover object-center' />
      </motion.div>
      <div className='flex flex-col gap-y-1'>
        <h2 className='laptop:text-2xl font-medium mobile:text-lg'>{title}</h2>
        <p className='mobile:text-base laptop:font-light laptop:text-lg text-neutral-600'>
          {text}
        </p>
      </div>
    </motion.div>
  )
}

