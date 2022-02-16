import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Overlay from '../components/Overlay'
import BRAND_META_TITLE from '../constants/brand.constant'
import withMainContext from '../context/Main.context'


const tagLine = [
  "Proudly shipping around Indonesia",
  "And also around the world"
]

const ContactPage = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | {BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      <main className='bg-white'>
        <MainHero tags={tagLine} title={"Contact"} />
        <div className='laptop:container mx-auto mobile:px-4 laptop:px-0 laptop:py-20 mobile:py-5'>
          <Contact />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default withMainContext(ContactPage)

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
            <div className='flex flex-col laptop:text-5xl mobile:text-2xl font-bold gap-y-2 '
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
          <div className='flex flex-col laptop:text-5xl mobile:text-2xl font-bold gap-y-2' >
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

const Contact = () => {
  return (
    <div className='overflow-hidden laptop:flex laptop:flex-col'>
      <motion.div
        initial={{
          y: -2000
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 1.1,
          delay: .05 * 1 + .15
        }}
        className='flex flex-col gap-y-5 mt-2'>
        <h1 className='text-lg laptop:text-2xl'>
          Call Us
        </h1>
        <div className='flex mobile:flex-col laptop:flex-row mobile:gap-y-5 laptop:gap-y-0 gap-x-10'>
          <Item name={"Bpk. Eko Rudy Santoso"} >
            +62 812-6827-3114
          </Item>
          <Item name={"Bpk. Roy Hutahean"} >
            +62 813-1033-5046
          </Item>
          <Item name={"Bpk. Idham Maulana"} >
            +62 813 7807 4996
          </Item>
          <Item name={"Bpk. Idham Maulana"} >
            +62 813 7807 4996
          </Item>
        </div>
      </motion.div>
      <motion.div
        initial={{
          y: -1000
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 1.1,
          delay: .08 * 2 + .15
        }}
        className='laptop:flex flex-col gap-y-5 mt-2 '>
        <div className='mt-10'>
          <hr />
        </div>
        <h1 className='text-lg laptop:text-2xl'>
          Our Location
        </h1>
        <div className='grid laptop:grid-cols-2 mobile:grid-cols-1 gap-x-10 gap-y-10'>
          <Item name={"Batam"} >
            Jalan Ahmad Yani
            Ruko Alexandria Blok B8 #27
            Batam Center Batam 29453
          </Item>
          <Item name={"Batam"} >
            Komplek Mitra Raya
            Kav. Everfresh Blok H1 #37
            Batam Center Batam 29453
          </Item>
          <Item name={"Jakarta"} >
            Jalan Tenggiri #103 D
            Tanjung Priok
            Jakarta Utara 14310
          </Item>
        </div>
      </motion.div>
    </div>
  )
}

const Item = ({ name, icon, children, ...props }) => {
  return (
    <div className='flex flex-col laptop:gap-y-4 mobile:gap-y-2'>
      <span>{name}</span>
      <div className='flex mobile:gap-x-1 laptop:gap-x-2'>
        {/* <span>{icon}</span> */}
        <span>{children}</span>
      </div>
    </div>
  )
}