import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Overlay from '../components/Overlay'
import BRAND_META_TITLE from '../constants/brand.constant'
import withMainContext from '../context/Main.context'


const tagLine = [
  "We build relationships",
  "Provide the best Services",
  "And we think we’re pretty good at it"
]

const ServicePage = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>{BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      <main>
        <MainHero tags={tagLine} title={"Our Services"} />
        <Slogan />
        <ListServices />
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


const list = [
  {
    id: "service_1",
    title: "Ship Agency",
    text: `With a proven track recording the shipping arena Esa Bahari Perkasa today is a trusted partner to many ship owners, charterers
    and operators in the region.With a value added chain of strong
    relationships with concerned authorities, be it ports or customs,
    documentations and on-line accessibility, the manner of our
    operations will assure you of our commitment to your business.`,
    image: "https://source.unsplash.com/random/service_1"
  },
  {
    id: "service_2",
    title: "Ship Chandler Provision",
    text: `We have an excellent infrastructure and are thus able to provide
    you including, Full service marine supply. Deck stores, engine,cabin & bonded supplies. Fresh and frozen food and vegetables. Safety equipment`,
    image: "https://source.unsplash.com/random/service_2"
  },
  {
    id: "service_3",
    title: "Ship Chartering",
    text: `Being involved in all aspects of shipping and transport. Esa Bahari Perkasa is
    also heavily engaged in vessel chartering for dry cargo.Our direct
    and close contacts to ship owner around the world are essential in
    our pursuit to find the right vessel in the right place at a competitive
    price and we are always need to be in touch with the market to find
    the most suitable and cost effective transport options for all
    customers.`,
    image: "https://source.unsplash.com/random/service_3"
  }, {
    id: "service_4",
    title: "Freight Forwarding",
    text: "Lagan delivery series for export and import businesses ort‘ne es tan to other trough soe an operation modes",
    image: "https://source.unsplash.com/random/service_4"
  }
]

const ListServices = ({ ...props }) => {

  return (
    <div
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
        {list.filter((service, index) => index === 0 || index % 2 === 0).map((service) => (
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
        {list.filter((service, index) => index === 1 || index % 2 !== 0).map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            text={service.text}
            title={service.title} />
        ))}
      </motion.div>
    </div>
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
          className='w-full h-full object-cover object-center bg-purple-300' />
      </motion.div>
      <div className='flex flex-col gap-y-1'>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <p className='mobile:text-base font-light laptop:text-lg'>
          {text}
        </p>
      </div>
    </motion.div>
  )
}