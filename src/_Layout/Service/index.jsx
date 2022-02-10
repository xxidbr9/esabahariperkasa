import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ImageBanner from "../../assets/images/international_trade.jpg";

const ItemService = ({ children, header, size }) => {
  return (
    <div className={`py-8 tablet:px-8 rounded-lg tablet:shadow-lg`}>
      {!!header && (
        <div className="tablet:h-20">
          <h1
            className={`laptop:text-${size} mobile:text-lg mt-4 font-medium text-gray-800`}
          >
            {header}
          </h1>
        </div>
      )}
      <p className="text-sm mt-2 text-gray-500">{children}</p>
    </div>
  );
};

const dataService = [
  {
    header: "FREIGHT FORWARDING",
    text: "Lagat delvery series for export andinport businesses ort‘ne estan to nother trough soe anaporation modes",
  },

  {
    header: "SHIP / EQUIPMET CHARTERING",
    text: "Rental service for modes of sea transportation and heavy equipment needs, such as ships and heavy equipment",
  },

  {
    header: "BUNKERING SERVICES",
    text: "Services for providing fuel oil sucs as MGO MFO and MDo, libricants and fresh water",
  },

  {
    header: "MACHINERIES AND ELECTRICAL SERVICES",
    text: "Maintenace, repair and replacement services for equipment on ships",
  },

  {
    header: "SHIP REPAIRS and MANAGEMENT",
    text: "Repair services to ship structures and carry out managerial improvements",
  },

  {
    header: "DOCKING MANAGEMENT",
    text: "Management services before to after ship repair carried out at shipyard",
  },

  {
    header: "SHIP MAINTENANCE",
    text: "Maintenance and repair services for structural and port supporting equipment",
  },

  {
    header: "NON DESTRUCTIVE TESTING (NDT) SERVICE",
    text: "Testting services or inspection of critical areas sucs as welding and base metal to detect crack or deflacts in the objects being tested without demaging the objects",
  },

  {
    header: "UNDERWATER INSPECTION IN LIEU OF DRY DOCKING (UWILD) SURVEY",
    textSize: "sm",
    text: "Services for inspecting activities of the outside of the ship below the waterline carried out when the ship remains above sea level with certain technological methods",
  },

  {
    header: "UNDERWATER SURVEY AND HULL CLEANING",
    text: "Hull inspection and cleaning services such as sticking coral without going through the dry dock process",
  },

  {
    header: "TANK CLEANING",
    text: "Services for cleaning activities for the remnants of cargo or dirt attached to the ship's tank becouse unclear water tanks act as breading ground for bacteria and making your water tank's environment susceptible to being contaminated",
  },
  {
    header: "SHIP CHANDLER",
    text: "Service for the procurement and provision of primary,secondary and tertiary needs such as food, beverages and clothing",
  },
  {
    header: "FABRICATION / SEAFASTENING",
    text: "Welding services and procurement of tools for welding activities on ships or in workshops",
  },
  {
    header: "DORING & STEVEDORING",
    text: "Port services for loading and unloading cargo from ships to warehouses or other ships ",
  },
];

const HomeService = () => {
  return (
    <section className="tablet:px-8 mobile:px-4 desktop:px-0 py-8">
      <div className="tablet:grid-rows-4 laptop:gap-8 tablet:gap-4 tablet:container bottom-0 mx-auto relative bg-white z-40 h-auto grid mobile:grid-cols-1 laptop:grid-cols-4  w-full">
        {dataService.map((item, index) => (
          <ItemService
            header={item.header}
            key={index}
            size={!!item.textSize ? item.textSize : "lg"}
          >
            {item.text}
          </ItemService>
        ))}
      </div>
    </section>
  );
};

const ServiceLayout = () => {
  return (
    <>
      <Navbar active="/service" />
      <Hero title={"Our Service"} ImageBanner={ImageBanner} />
      <HomeService />
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default ServiceLayout;
