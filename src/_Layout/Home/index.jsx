import React from "react";
import Navbar from "../../components/Navbar";
import withMainContext from "../../context/Main.context";
import { FiSearch } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import Slider from "react-slick";
import LogoImage from "../../assets/logo.png";
import ImageBanner from "../../assets/images/international_trade.jpg";
import ServiceImage from "../../assets/images/photo3.jpg";
import ImageList1 from "../../assets/images/IMG_20210510_161914.jpg";
import ImageList2 from "../../assets/images/IMG_20200728_102716.jpg";
import ImageList3 from "../../assets/images/IMG_20210220_104537.jpg";
import ImageList4 from "../../assets/images/IMG_20210319_163850.jpg";
import { createBreakpoint } from "react-use";
import Footer from "../../components/Footer";

const useBreakpoint = createBreakpoint();
const Button = (props) => {
  return (
    <a
      {...props}
      className={`font-medium text-white bg-black py-3 px-6 rounded-xl ${
        !!props.className && props.className
      }`}
    >
      {props.children}
    </a>
  );
};

const Hero = () => (
  <section className="mobile:h-screen">
    <div className="pt-24 bg-black opacity-60 mobile:h-screen w-full absolute z-20"></div>
    <div
      className="pt-24 bg-no-repeat bg-cover h-screen absolute w-full z-10"
      style={{ backgroundImage: `url('${ImageBanner}')` }}
    ></div>
    <div className="mobile:pt-12 tablet:pt-24 w-full absolute z-30">
      <div className="tablet:container tablet:px-8 mobile:px-4 desktop:px-0 m-auto z-50">
        <div className="w-full mt-20">
          <h1 className="mobile:text-4xl tablet:text-6xl text-white font-bold">
            Reliable & Express Logistic
          </h1>
          <h1 className="mobile:text-4xl tablet:text-6xl text-white font-bold mt-4">
            Solution to save your Time!
          </h1>
          <p className="text-white font-medium mt-8">
            The best quality solution in every service in the world of shipping
            to get a sense of security and comfort
          </p>
          <div className=" mt-10">
            <Button href="/about">About Us</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ItemService = ({
  children,
  isBorderLeft = false,
  isBorderRight = false,
  Component,
  header,
}) => {
  return (
    <div
      className={` ${!!isBorderLeft ? "laptop:border-l-2" : ""} ${
        !!isBorderRight ? "laptop:border-r-2" : ""
      } border-t-0 border-b-0 py-8 laptop:px-5 border-opacity-70`}
    >
      {!!Component && <Component className="w-12 h-12 text-red-500" />}
      {!!header && (
        <h1 className="text-lg mt-4 font-medium text-gray-800">{header}</h1>
      )}
      <p className="text-sm mt-2 text-gray-500">{children}</p>
    </div>
  );
};

const HomeService = () => {
  const dataService = [
    {
      header: "FREIGHT FORWARDING",
      text: "Logistics delivery services for exort and import businesses from one destination to another throught sea transportation modes",
      icon: BiWallet,
      isBorderLeft: false,
      isBorderRight: false,
    },

    {
      header: "SHIP / EQUIPMET CHARTERING ",
      text: "Rental service for modes of sea transportation and heavy equipment needs, such as ships and heavy equipment",
      icon: FiSearch,
      isBorderLeft: true,
      isBorderRight: false,
    },
    {
      header: "BUNKERING SERVICES",
      text: "Services for providing fuel oil sucs as MGO MFO and MDo, libricants and fresh water",
      icon: FaWarehouse,
      isBorderLeft: true,
      isBorderRight: true,
    },
    {
      header: "SHIP REPAIRS and MANAGEMENT",
      text: "Repair services to ship structures and carry out managerial improvements",
      icon: AiOutlineLock,
      isBorderLeft: false,
      isBorderRight: false,
    },
  ];
  return (
    <section className="tablet:px-8 mobile:px-4 desktop:px-0 ">
      <div className="tablet:container m-auto bg-white relative laptop:-mt-24 z-40 h-auto rounded-2xl laptop:shadow-xl grid mobile:grid-cols-1 laptop:grid-cols-4  laptop:grid-flow-col w-full">
        {dataService.map((item, index) => (
          <ItemService
            Component={item.icon}
            header={item.header}
            key={index}
            isBorderLeft={item.isBorderLeft}
            isBorderRight={item.isBorderRight}
          >
            {item.text}
          </ItemService>
        ))}
      </div>
    </section>
  );
};

const AccentSmall = (props) => {
  return (
    <span {...props} className="text-red-500 font-medium">
      {props.children}
    </span>
  );
};

const Title = (props) => {
  return (
    <h4 {...props} className="mt-1 text-3xl font-semibold">
      {props.children}
    </h4>
  );
};

const Paragraph = (props) => {
  return (
    <p {...props} className="text-gray-500 mt-12">
      {props.children}
    </p>
  );
};

const SortAbout = () => {
  return (
    <section className="tablet:px-8 mobile:px-4 desktop:px-0">
      <div className="tablet:container mx-auto bg-white relative my-20 z-40 h-auto rounded-2xl grid mobile:grid-cols-1 laptop:grid-cols-2 gap-12">
        <div className="bg-grey-200 w-full h-full overflow-hidden rounded-xl mobile:hidden laptop:block">
          <img
            src={ServiceImage}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="py-16 laptop:pl-6">
          <AccentSmall>Affordable Price, Certified Forwader</AccentSmall>
          <Title>One Stop Service</Title>
          <Title>And One Stop Solution</Title>
          <div>
            <Paragraph>
              The purpose of the historical establishment of the
              company/organization is aimed at the needs of marine
              transportation modes in Indonesia which are increasingly popular
              with the increasing need for services in the industrial or mining
              sector in Indonesia..
            </Paragraph>
          </div>
          <div className="mt-24 mobile:w-full laptop:w-auto mobile:text-center laptop:text-left">
            <Button href="/service">See All Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Logo = () => {
  return <img className="w-full h-full" src={LogoImage} alt="logo" />;
};

const ServiceItem = (props) => {
  return (
    <div className="flex flex-col">
      <div className="h-80 w-full rounded-xl overflow-hidden">
        <img src={props.imgSrc} alt="" className="w-full h-full object-cover" />
      </div>
      <h5 className="text-base font-medium text-gray-900 mt-2">{props.text}</h5>
    </div>
  );
};

const ServiceSection = () => {
  const listService = [
    {
      imgSrc: ImageList1,
      text: "",
      href: "",
    },
    {
      imgSrc: ImageList2,
      text: "",
      href: "",
    },
    {
      imgSrc: ImageList3,
      text: "",
      href: "",
    },
    {
      imgSrc: ImageList4,
      text: "",
      href: "",
    },
  ];

  return (
    <section className="tablet:px-8 mobile:px-4 desktop:px-0">
      <div className="tablet:container m-auto my-16">
        <div className="text-center">
          <AccentSmall>
            Best Global and Indonesia Solutions, Real Fast!
          </AccentSmall>
          <Title>Global and Indonesia Cargo Solutions</Title>
          <div className="w-32 h-32 mx-auto mt-6">
            <Logo />
          </div>
          <div className="mobile:w-full tablet:w-3/4 text-center m-auto">
            <Paragraph>
              The benefit of a company founded on 04 June 2021 is to provide the
              best service that upholds values of honesty, solubility, and
              effectiveness based on competence and qualifications in each area
              of the service we provide.
            </Paragraph>
          </div>
        </div>
        <div className="grid laptop:grid-cols-4 mobile:grid-cols-1 gap-6 mt-8">
          {listService.map((e, i) => (
            <ServiceItem key={i} imgSrc={e.imgSrc} text={e.text} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/galery">See Our Gallery</Button>
        </div>
      </div>
    </section>
  );
};

function Arrow(props) {
  const { className, style } = props;
  return (
    <div
      {...props}
      className={`${
        !!className ? className : ""
      } w-10 h-10 overflow-hidden rounded-full shadow-lg text-2xl text-black mobile:hidden`}
      style={{
        ...style,
        color: "black",
        zIndex: "10",
        background: "black",
        height: "40px",
        width: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    />
  );
}

const ReviewSection = () => {
  const breakpoint = useBreakpoint();
  const setting = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: breakpoint === "laptop" || breakpoint === "laptopL",
    autoplaySpeed: 2000,
    slidesToShow: breakpoint !== "laptop" && breakpoint !== "laptopL" ? 1 : 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  const ReviewComponent = (props) => {
    return (
      <div className="w-full tablet:h-40 py-4 tablet:px-5 mobile:h-auto">
        <div className="py-5 mobile:px-4 h-full w-full flex shadow-xl rounded-xl">
          <div className="ml-5 tablet:h-16 tablet:w-16 mobile:h-14 mobile:w-14 overflow-hidden rounded-full bg-gray-100">
            <img
              src={props.imgSrc}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="ml-5  h-full  tablet:w-3/4 mobile:w-4/5 overflow-hidden flex flex-col">
            <h4 className="text-base font-medium">{props.name}</h4>
            <p className="text-sm text-gray-500 italic">{props.text}</p>
          </div>
        </div>
      </div>
    );
  };

  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ipsam itaque assumenda in id quidem molestiae fugit autem ratione dignissimos!";
  const dataReview = [
    {
      text,
      name: "Eko Rudy Santoso",
      imgSrc: "https://source.unsplash.com/random/1",
    },
    {
      text,
      name: "Andhana Utama",
      imgSrc: "https://source.unsplash.com/random/2",
    },
    {
      text,
      name: "Ronaldo Wati",
      imgSrc: "https://source.unsplash.com/random/3",
    },
    {
      text,
      name: "David Backam",
      imgSrc: "https://source.unsplash.com/random/4",
    },
    {
      text,
      name: "Leonardo De Caprio",
      imgSrc: "https://source.unsplash.com/random/5",
    },
    { text, name: "John Cen", imgSrc: "https://source.unsplash.com/random/6" },
  ];

  return (
    <section className="py-10 text-center mobile:px-0 tablet:px-8 laptop:px-0 ">
      <div className="tablet:container mx-auto text-center">
        <AccentSmall>Our Beloved Review’s</AccentSmall>
        <div className="mobile:px-4 tablet:px-0">
          <Title>Here’s what our Happy client </Title>
          <Title>are saying about us :</Title>
        </div>
        <div className="my-10">
          <div className="mobile:w-full tablet:w-4/5 mx-auto text-left">
            <Slider {...setting}>
              {dataReview.map((e, i) => {
                return (
                  <ReviewComponent
                    imgSrc={e.imgSrc}
                    name={e.name}
                    text={e.text}
                    key={i}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="mobile:px-4 tablet:container mobile:w-full tablet:w-3/4 text-center m-auto">
          <Paragraph>
            We always uphold the integrity and relentless innovation in the
            services we provide that are customer satisfaction oriented
            resulting from our approach to every process.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

const HomeLayout = () => {
  return (
    <>
      <Navbar active="/home" />
      <Hero />
      <HomeService />
      <SortAbout />
      <ServiceSection />
      <ReviewSection />
      {/* <SubscribeSection /> */}
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
};

export default withMainContext(HomeLayout);
