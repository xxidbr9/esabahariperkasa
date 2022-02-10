import React, { useEffect, useState } from "react";
import { FiPhone, FiMail, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
const MiniText = (props) => <span className="pl-3">{props.children}</span>;

const TopNavbar = (props) => {
  return (
    <nav className="mobile:hidden tablet:block w-full bg-black z-30 relative">
      <div className="tablet:container mobile:px-4 tablet:px-8 laptop:px-0 flex flex-row-reverse items-center text-white text-sm h-6 font-medium m-auto">
        <div className="flex items-center">
          <FiMail />
          <MiniText>
            <a href="mailto:javatirtamaritim@gmail.com">
              javatirtamaritim@gmail.com
            </a>
          </MiniText>
        </div>
        <div className="flex items-center mr-5">
          <FiPhone />
          <MiniText>
            <a href="https://wa.me/627787490805?text=Hallo, Java Tirta Maritim">
              +62 778 7490 805
            </a>
          </MiniText>
        </div>
      </div>
    </nav>
  );
};

const BottomNavbar = (props) => {
  return (
    <>
      <nav className="w-full bg-white h-16 z-30 relative">
        <div className="laptop:container tablet:px-8 mobile:px-4 laptop:px-8 desktop:px-0 h-full mx-auto flex justify-between items-center">
          <a href="/">
            <span className="uppercase font-bold text-2xl">
              JAVA TIRTA MARITIM
            </span>
          </a>
          <button
            className="outline-none laptop:hidden"
            onClick={() => props.setShow(!props.show)}
          >
            {!!props.show ? <FiX /> : <FiMenu />}
          </button>
          <ul className="mobile:hidden laptop:flex flex-row gap-10 font-medium">
            <li className={`${props.active === "/home" ? "text-red-500" : ""}`}>
              <a href="/">Home</a>
            </li>
            <li
              className={`${props.active === "/service" ? "text-red-500" : ""}`}
            >
              <a href="/service">Services</a>
            </li>
            <li
              className={`${props.active === "/galery" ? "text-red-500" : ""}`}
            >
              <a href="/galery">Gallery</a>
            </li>
            <li
              className={`${props.active === "/about" ? "text-red-500" : ""}`}
            >
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const [yLog, setYLog] = useState(0);

  useEffect(() => {
    if (!!show) {
      setYLog(0);
    } else {
      setYLog(-1000);
    }
  }, [show]);

  return (
    <nav className="shadow-lg fixed w-full z-50">
      <TopNavbar />
      <BottomNavbar active={props.active} setShow={setShow} show={show} />
      <motion.div
        className="mobile:px-4 tablet:px-8 mobile:bg-white mobile:w-full laptop:hidden z-10 absolute"
        animate={{ y: yLog }}
        transition={{ duration: 0.5, bounce: 0.01, type: "spring" }}
        initial={{ y: -1000 }}
      >
        <ul className="mx-auto mobile:flex flex-col font-medium mobile:w-full tablet:container tablet:px-0">
          <a href="/">
            <li
              className={`${
                props.active === "/home" ? "text-red-500" : ""
              } + my-5`}
            >
              Home
            </li>
          </a>
          <a href="/service">
            <li
              className={`${
                props.active === "/service" ? "text-red-500" : ""
              } + my-5`}
            >
              Service
            </li>
          </a>
          <a href="/galery">
            <li
              className={`${
                props.active === "/galery" ? "text-red-500" : ""
              } + my-5`}
            >
              Galery
            </li>
          </a>
          <a href="/about">
            <li
              className={`${
                props.active === "/about" ? "text-red-500" : ""
              } + my-5`}
            >
              About
            </li>
          </a>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
