import { motion } from "framer-motion";
import React, { useContext } from "react";
import { useMemo } from "react";
import { Helmet } from "react-helmet";
import { useWindowScroll } from "react-use";
import Footer from "../components/Footer";
import MoreInfo from "../components/MoreInfo";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";
import BRAND_META_TITLE from "../constants/brand.constant";
import withMainContext, { MainContext } from "../context/Main.context";
import listServices from "../data/listServices";
import aboutSection from "../assets/images/about_section.jpeg";
import twcolor from "tailwindcss/colors";
import BrandComp from "../components/BrandComp";
import Brand from "../components/svg/Brand";

const tagLine = [
  "Provide the best service",
  "by upholding the values ​​of honesty",
];

const AboutPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About | {BRAND_META_TITLE}</title>
      </Helmet>
      <Navbar />
      <main className="bg-white">
        <MainHero tags={tagLine} title={"About Us"} />
        <PhotoGallery />
        <AboutSimple />
        <div className="flex flex-col laptop:gap-y-10">
          <TagLine title={"Vision"}>
            To provide the best quality in every service in the shipping world
            to get a sense of security and comfort.
          </TagLine>
          <TagLine title={"Mision"}>
            Uphold the value of high commitment in realizing trust for the
            benefit of customers and customer satisfaction.
          </TagLine>
          <TagLine title={"Values"}>
            Our values are there to remind us of who we are, and what we want to
            be. They guide everything we do, from our approach to work, to how
            we treat people. They are intentionally aspirational and
            aspirationally intentional.
          </TagLine>
        </div>
        <div className="laptop:mt-20">
          <hr />
        </div>
        <MoreInfo />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default withMainContext(AboutPage);

const TagLine = ({ title, children, ...props }) => {
  return (
    <section className="">
      <div className="mobile:px-4 mobile:py-4 laptop:py-0  laptop:px-0 laptop:container mx-auto laptop:grid grid-cols-12">
        <div className="col-span-6 flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-3">
            <h1 className="laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl">
              {title}
            </h1>
            <p className="laptop:text-lg text-neutral-600">{children}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSimple = () => {
  return (
    <section className="">
      <div className="laptop:grid laptop:grid-cols-12 laptop:container mx-auto laptop:py-20 mobile:py-10 gap-x-5 mobile:px-4 laptop:px-0">
        <img
          src={aboutSection}
          className="col-span-6 h-[920px] bg-cover w-full mobile:hidden object-cover laptop:block"
          alt="about"
        />
        <div className="col-span-6 py-10 ">
          <div className="flex flex-col laptop:gap-y-6 mobile:gap-y-1 laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl">
            <h1>Profesional</h1>
            <h1>Shipping Agency </h1>
            <h1>With Affordable Price,</h1>
            <h1>And Certified Forwader</h1>
          </div>
        </div>
        <div className="laptop:block laptop:absolute laptop:mt-[400px]">
          <div className="laptop:container laptop:grid grid-cols-6 content-center">
            <div className="col-start-2 col-span-3 bg-white laptop:p-9 flex flex-col gap-y-6">
              <div className="mobile:hidden laptop:block">
                <BrandComp />
              </div>
              <div className="laptop:hidden mobile:block">
                <div
                  data-id="brand"
                  className="flex gap-x-4 items-center text-xl font-medium text-neutral-800"
                >
                  <span className="w-14 h-14">
                    <Brand fill={twcolor.white} />
                  </span>
                  <div className="flex-col flex">
                    <span>Esa Bahari</span>
                    <span>Perkasa</span>
                  </div>
                </div>
              </div>
              <p className="laptop:text-lg mobile:text-base text-neutral-600">
                Since starting our operations in Indonesia in{" "}
                <b>June 4, 2021</b>, PT Esa Bahari Perkasa has established a
                strong foothold in the local shipping and logistics industries
                through our partnership with two long-standing alliances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhotoGallery = ({ ...props }) => {
  const { breakpoint } = useContext(MainContext);
  const isMobile = breakpoint === "mobile" || breakpoint === "tablet";

  const { y: scrollY } = useWindowScroll();
  const initX = isMobile ? 80 : 420;
  const initTotalImage = isMobile ? 4 : 6;
  const scrollSpeed = useMemo(() => {
    const pcSpeed = initX - scrollY / 2;
    const mobileSpeed = initX - scrollY / 8;
    return isMobile ? mobileSpeed : pcSpeed;
  }, [initX, scrollY, isMobile]);
  return (
    <div className="overflow-hidden flex justify-center flex-row-reverse">
      <motion.div
        style={{
          x: scrollSpeed,
        }}
        className="flex items-center gap-x-2"
      >
        {listServices.slice(0, initTotalImage).map((service, _index) => (
          <div className="w-auto laptop:px-0 flex h-[460px] flex-col gap-y-4">
            <motion.img
              style={{
                y: _index % 2 === 0 ? 40 : -20,
              }}
              src={service.image}
              className="bg-cover w-auto h-full object-cover overflow-hidden"
              alt={service.title}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MainHero = ({ tags, title, ...props }) => {
  return (
    <React.Fragment>
      <Overlay className="bg-black">
        <div
          className="laptop:container mx-auto laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0 relative bg-black"
          style={{
            zIndex: 1,
            mixBlendMode: "screen",
          }}
        >
          <div className="flex flex-col w-full h-full mobile:gap-y-2 laptop:gap-y-8">
            <div className="overflow-hidden">
              <motion.h2
                initial={{
                  y: -100,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mobile:text-base laptop:text-xl text-white"
              >
                {title}
              </motion.h2>
            </div>
            <div className="flex flex-col laptop:text-5xl mobile:text-2xl font-bold gap-y-2 ">
              {tags.map((tag, index) => (
                <div className="overflow-hidden" key={`motion_tag_${index}`}>
                  <motion.h1
                    className="text-white"
                    initial={{
                      y: 100,
                    }}
                    animate={{
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.06 * index,
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

      <section
        data-id="hero"
        className="laptop:container mx-auto h-[50vh] laptop:pt-44  mobile:pt-36 laptop:block mobile:px-4 laptop:px-0 bg-white relative"
        style={{
          zIndex: 10,
        }}
      >
        <div className="flex flex-col mobile:gap-y-2 laptop:gap-y-8 ">
          <span className="mobile:text-base laptop:text-xl">{title}</span>
          <div className="flex flex-col laptop:text-5xl mobile:text-2xl font-bold gap-y-2">
            {tags.map((tag, indx) => (
              <div className="overflow-hidden" key={`tag_${indx}`}>
                <h1 className={`text-neutral-800`}>{tag}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <hr /> */}
    </React.Fragment>
  );
};
