import React from 'react'
const Hero = ({ title, ImageBanner, ...props }) => (
  <section className="tablet:h-80 mobile:h-60">
    <div className="pt-24 bg-black opacity-60 tablet:h-80 mobile:h-60 w-full absolute z-20"></div>
    <div
      className="pt-24 bg-no-repeat bg-cover tablet:h-80 mobile:h-60 absolute w-full z-10"
      style={{ backgroundImage: `url('${ImageBanner}')` }}
    ></div>
    <div className="mobile:pt-12 tablet:pt-24 w-full absolute z-30">
      <div className="tablet:container tablet:px-8 mobile:px-4 desktop:px-0 m-auto z-50">
        <div className="w-full mt-20 mobile:mt-32">
          <h1 className="mobile:text-4xl tablet:text-6xl text-white font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </section>
);

export default Hero