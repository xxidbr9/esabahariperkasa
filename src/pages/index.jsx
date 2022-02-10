import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import BRAND_META_TITLE from '../constants/brand.constant'
import Navbar from '../components/Navbar'
import ArrowBtn from '../components/svg/ArrowBtn'
import { motion } from 'framer-motion'
import twcolor from 'tailwindcss/colors'
import BrandComp from '../components/BrandComp'
import Brand from '../components/svg/Brand'
import { Swiper, SwiperSlide } from 'swiper/react';
import withMainContext, { MainContext } from '../context/Main.context'

const HomePage = () => {

  const services = [
    { title: "Our Services", buttonText: "See All Services", bgImage: "https://source.unsplash.com/random/hero_1", child: "Despite the size and diversity of our services, our simple, effective, people focused approach never waivers.", },
    { title: "About", buttonText: "More About Us", bgImage: "https://source.unsplash.com/random/hero_2", child: "A World Leading Shipping and Logistics Company" },
    { title: "Contact", buttonText: "Contact Us", bgImage: "https://source.unsplash.com/random/hero_3", child: "Looking for an International container shipping companies to deliver your container?", }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>{BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      <main className=''>

        <section data-id="hero" className='laptop:container mx-auto h-[50vh] laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0'>
          <div className='flex flex-col'>
            <div className='flex flex-col laptop:text-6xl mobile:text-2xl font-bold gap-y-3'>
              <h1>Reliable & Express Logistic</h1>
              <h1>Solution to save your Time!</h1>
            </div>
            <div className='mobile:pt-20 laptop:pt-0'>
              <ButtonArrow color={twcolor.neutral[800]} text={"More Info"} />
            </div>
          </div>
        </section>
        <section className='w-full flex laptop:flex-row mobile:flex-col h-auto'>
          {services.map((item, _index) => (
            <CardFeature
              key={`hero-${_index}`}
              buttonText={item.buttonText}
              bgImage={item.bgImage}
              title={item.title}>
              {item.child}
            </CardFeature>
          ))}
        </section>


        <section className=''>
          <div className='laptop:grid laptop:grid-cols-12 laptop:container mx-auto laptop:py-20 mobile:py-10 gap-x-5 mobile:px-4 laptop:px-0'>
            <div className='col-span-6 h-[920px] bg-cover w-auto mobile:hidden laptop:block' style={{ backgroundImage: "url(https://source.unsplash.com/random/2)" }} />
            <div className='col-span-6 py-10 '>
              <div className='flex flex-col laptop:gap-y-6 mobile:gap-y-1 laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl'>
                <h1>Profesional</h1>
                <h1>Shipping Agency </h1>
                <h1>With Affordable Price,</h1>
                <h1>And Certified Forwader</h1>
              </div>
              <div className='laptop:mt-72 mobile:mt-10'>
                <ButtonArrow color={twcolor.neutral[800]} text={"More About Us"} />
              </div>
            </div>
            <div className=' laptop:block laptop:absolute w-full laptop:mt-[400px]'>
              <div className='laptop:grid grid-cols-6 content-center w-full'>
                <div className="col-start-2 col-span-3 bg-white laptop:p-9 flex flex-col gap-y-6">
                  <div className='mobile:hidden laptop:block'>
                    <BrandComp />
                  </div>
                  <div className='laptop:hidden mobile:block'>
                    <div data-id="brand" className='flex gap-x-4 items-center text-xl font-medium text-neutral-800'>
                      <Brand fill={twcolor.neutral[800]}
                        className='w-14 h-14'
                      />
                      <div className='flex-col flex'>
                        <span>
                          Esa Bahari
                        </span>
                        <span>
                          Perkasa
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className='text-lg'>
                    Since starting our operations in Indonesia in <b><i>"date"</i></b>, PT Esa Bahari Perkasa has established a strong foothold in the local shipping and logistics industries through our partnership with two long-standing alliances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mobile:'>
          <div className='mobile:px-4 mobile:py-10 laptop:py-0 laptop:px-0 laptop:container mx-auto laptop:grid grid-cols-12'>
            <div className='col-span-6 flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-3'>
                <h1 className='laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl'>What we do?</h1>
                <p className='laptop:text-lg'>
                  We believes that it is essential to act with integrity in all its activities, to treat all its employees and customers in a fair and respectful manner. The company aims to remain the first choice of its customers.
                </p>
              </div>
              <div className='mobile:hidden laptop:block'>
                <ButtonArrow color={twcolor.neutral[800]} text={"All services"} />
              </div>
            </div>
          </div>
          <div className='laptop:mt-10'>
            <ListServices />
            <div className='laptop:hidden mobile:px-4 laptop:px-0 mx-auto mt-5'>
              <ButtonArrow color={twcolor.neutral[800]} text={"All services"}/>
            </div>
          </div>
        </section>

      </main>
      {/* <div>Haha</div> */}
    </React.Fragment>
  )
}


const ButtonArrow = ({ text, color, ...props }) => {

  return (
    <div className='mobile:pt-0 laptop:pt-10 text-xl font-medium flex items-center gap-x-4'>
      <span style={{ color: color }}>{text}</span>
      <ArrowBtn fill={color} />
    </div>
  )
}


const ListServices = () => {
  const { breakpoint } = useContext(MainContext)
  const isMobile = (breakpoint === "mobile" || breakpoint === "tablet")
  const preview = isMobile ? 1.2 : 3
  const spaceBetween = isMobile ? 12 : 40
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={preview}
      loop
      centeredSlides
      pagination={false}
    >
      <SwiperSlide><CardService id={"1"} /></SwiperSlide>
      <SwiperSlide><CardService id={"2"} /></SwiperSlide>
      <SwiperSlide><CardService id={"3"} /></SwiperSlide>
      <SwiperSlide><CardService id={"4"} /></SwiperSlide>
    </Swiper>
  )
}

const CardService = ({ title, children, id, ...props }) => {
  return (
    <div className='bg-cover h-[480px]' style={{ backgroundImage: `url(https://source.unsplash.com/random/idk_${props.id})` }}>

    </div>
  )
}

const CardFeature = ({ title, children, buttonText, bgImage, ...props }) => {
  return (
    <motion.div className={'w-full h-[50vh] object-cover bg-center relative ' + props.className} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute bg-neutral-800 w-full h-full bg-opacity-60 laptop:p-10 mobile:px-4 mobile:py-12 text-white flex flex-col laptop:justify-between laptop:gap-0 mobile:gap-y-8'>
        <div className='flex flex-col gap-y-3'>
          <span className='text-xl'>
            {title}
          </span>
          <span className='laptop:text-[32px] font-medium mobile:text-2xl mobile:leading-normal'>
            {children}
          </span>
        </div>
        <div className='flex gap-x-4 items-center'>
          <span className='text-xl font-medium'>
            {buttonText}
          </span>
          <ArrowBtn />
        </div>
      </div>
    </motion.div>
  )
}


export default withMainContext(HomePage)