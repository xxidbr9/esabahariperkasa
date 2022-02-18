import React, { useContext } from "react";
import { useState } from "react";
import { useWindowScroll } from "react-use";
import twcolor from "tailwindcss/colors";
import Menu from "../components/svg/Menu";
import BrandComp from "./BrandComp";
import { motion } from "framer-motion";
import { useCallback } from "react";
import routes from "../config/routes";
import { CONSTANT, MainContext } from "../context/Main.context";
import OverlayChange from "./OverlayChange";

const Navbar = ({ isNavbarOpen, ...props }) => {
  const [isActive, setIsActive] = useState(isNavbarOpen || false);

  const { y } = useWindowScroll();
  const url = typeof window !== "undefined" ? window.location.href : "";
  const path = url.split("/");
  const lastPath = !!path[path.length - 1]
    ? path[path.length - 1]
    : path[path.length - 2];

  const _handleToggle = useCallback(() => {
    if (isActive) {
      window.document.body.classList.remove("overflow-hidden");
    } else {
      window.document.body.classList.add("overflow-hidden");
    }
    setIsActive(!isActive);
  }, [isActive]);

  const {
    state: { isChangePage },
    dispatch,
  } = useContext(MainContext);

  const _handleGoto = (e, href) => {
    e.preventDefault();
    href = href || e.target.href;
    dispatch({ type: CONSTANT.SET_IS_CHANGE_PAGE, payload: true });
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      window.location.href = href;
    }, 1000);
  };
  console.log({ lastPath });
  const NavLink = ({ href, onClick, children, ...props }) => (
    <li className="hover:text-blue-500 transition-all duration-150 flex flex-col items-center gap-y-2 ">
      <a
        className={`active:text-blue-500 ${
          href === "/" + lastPath && "text-blue-500"
        } `}
        onClick={onClick}
        href={href}
      >
        {children}
      </a>
    </li>
  );

  return (
    <React.Fragment>
      <OverlayChange isAnimate={isChangePage} />
      <nav
        className={`w-full fixed z-50 transition-all duration-150 ${
          y > 0 ? "bg-white shadow-lg" : ""
        }`}
        style={{
          zIndex: y > 0 ? 99 : 50,
        }}
      >
        <MenuList isActive={isActive} onClick={_handleGoto} />
        <div
          data-id="container"
          className={`laptop:container flex mx-auto justify-between laptop:py-6 mobile:py-4 items-center mobile:px-4 laptop:px-0 `}
        >
          <BrandComp onClick={_handleGoto} />
          <div
            data-id="menu"
            className="text-xl font-medium flex items-center gap-x-10"
          >
            <ul className="laptop:flex items-center gap-x-10 mobile:hidden">
              <NavLink onClick={_handleGoto} href={routes.HOME}>
                Home
              </NavLink>
              <NavLink onClick={_handleGoto} href={routes.SERVICE}>
                Services
              </NavLink>
              <NavLink onClick={_handleGoto} href={routes.ABOUT}>
                About
              </NavLink>
              <li>
                <a onClick={_handleGoto} href={routes.CONTACT}>
                  Contact
                </a>
              </li>
            </ul>
            <button
              className="cursor-pointer flex justify-center items-center"
              onClick={_handleToggle}
            >
              <Menu
                fill={twcolor.neutral[800]}
                className="mobile:w-8 "
                active={isActive}
              />
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

const MenuList = ({ onClick, isActive, ...props }) => {
  const list = [
    {
      href: routes.HOME,
      title: "Home",
    },
    {
      href: routes.SERVICE,
      title: "Services",
    },
    {
      href: routes.ABOUT,
      title: "About",
    },
    {
      href: routes.CONTACT,
      title: "Contact",
    },
  ];
  return (
    <motion.div
      className={`absolute w-full bg-white`}
      initial={{
        height: 0,
      }}
      animate={{
        height: isActive ? "100vh" : 0,
      }}
      transition={{
        ease: "easeInOut",
      }}
    >
      {isActive && (
        <div className="laptop:container mobile:px-4 laptop:px-0 mx-auto laptop:mt-28 mobile:mt-16">
          <div className="laptop:pt-28 flex items-start mobile:pt-2 mobile:flex-col laptop:flex-row mobile:gap-y-10">
            <div className="laptop:grid mobile:flex mobile:flex-col mobile:gap-y-2  laptop:grid-cols-2 laptop:gap-y-10 laptop:w-[720px]">
              {list.map((item, index) => (
                <div className="overflow-hidden" key={index}>
                  <motion.div
                    initial={{
                      y: -200,
                    }}
                    animate={{
                      y: isActive ? 0 : -200,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.05 * (index + 1) + 0.15,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => onClick(e, item.href)}
                      className="laptop:text-6xl mobile:text-xl mobile:font-bold transition-all laptop:font-light duration-200 text-neutral-600 hover:text-blue-500 hover:font-bold"
                    >
                      {item.title}
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden laptop:flex laptop:flex-col">
              <motion.div
                initial={{
                  y: -2000,
                }}
                animate={{
                  y: isActive ? 0 : -2000,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.05 * (4 + 1) + 0.15,
                }}
                className="flex flex-col gap-y-5 mt-2"
              >
                <h1 className="text-lg laptop:text-2xl">Call Us</h1>
                <div className="flex mobile:flex-col laptop:flex-row mobile:gap-y-5 laptop:gap-y-0 gap-x-10">
                  <ItemNav name={"Bpk. Eko Rudy Santoso"}>
                    +62 812-6827-3114
                  </ItemNav>
                  <ItemNav name={"Bpk. Roy Hutahean"}>
                    +62 813-1033-5046
                  </ItemNav>
                  <ItemNav name={"Bpk. Idham Maulana"}>
                    +62 813 7807 4996
                  </ItemNav>
                  <ItemNav name={"Bpk. Idham Maulana"}>
                    +62 813 7807 4996
                  </ItemNav>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  y: -1000,
                }}
                animate={{
                  y: isActive ? 0 : -1000,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.08 * (5 + 1) + 0.15,
                }}
                className="laptop:flex flex-col gap-y-5 mt-2 mobile:hidden"
              >
                <div className="mt-10">
                  <hr />
                </div>
                <h1 className="text-lg laptop:text-2xl">Our Location</h1>
                <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                  <ItemNav name={"Batam"}>
                    Jalan Ahmad Yani Ruko Alexandria Blok B8 #27 Batam Center
                    Batam 29453
                  </ItemNav>
                  <ItemNav name={"Batam"}>
                    Komplek Mitra Raya Kav. Everfresh Blok H1 #37 Batam Center
                    Batam 29453
                  </ItemNav>
                  <ItemNav name={"Jakarta"}>
                    Jalan Tenggiri #103 D Tanjung Priok Jakarta Utara 14310
                  </ItemNav>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const ItemNav = ({ name, icon, children, ...props }) => {
  return (
    <div className="flex flex-col laptop:gap-y-4 mobile:gap-y-2">
      <span>{name}</span>
      <div className="flex mobile:gap-x-1 laptop:gap-x-2">
        {/* <span>{icon}</span> */}
        <span>{children}</span>
      </div>
    </div>
  );
};
