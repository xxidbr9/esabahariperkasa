import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

import ImageBanner from "../../assets/images/international_trade.jpg";

const ZoomImage = ({ imgSrc, ...props }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <ControlledZoom
      isZoomed={isZoomed}
      onZoomChange={handleZoomChange}
      overlayBgColorEnd={"rgba(0,0,0,.7)"}
      className={` ${props.index % 4 === 0 ? "col-span-2" : "col-span-1"}`}
    >
      <img
        className={`p-1 ${isZoomed ? "" : "rounded-2xl"}`}
        src={imgSrc}
        alt="img galery"
        // className={props.index % 4 === 0 ? "col-span-2" : "col-span-1"}
        style={{ width: "100%", display: "block", height: "100%" }}
      />
    </ControlledZoom>
  );
};

const GaleryLayout = ({ imageData, ...props }) => {
  console.log(imageData);
  return (
    <React.Fragment>
      <Navbar active="/galery" />
      <Hero title={"Our Gallery"} ImageBanner={ImageBanner} />
      <section className="tablet:px-8 mobile:px-4 desktop:px-0 py-8">
        <div className="tablet:container mx-auto grid auto-cols-min mobile:grid-cols-1 tablet:grid-cols-2 ">
          {imageData.map(({ node, ...props }, index) => {
            return (
              <ZoomImage
                key={props.i}
                index={index}
                imgSrc={
                  require("../../assets/images/" +
                    node.name +
                    "." +
                    node.extension).default
                }
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default GaleryLayout;
