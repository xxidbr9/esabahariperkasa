import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import ImageBanner from "../../assets/images/international_trade.jpg";

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

const AboutLayout = () => {
  return (
    <React.Fragment>
      <Navbar active="/about" />
      <Hero title={"About Us"} ImageBanner={ImageBanner} />
      <section className="tablet:px-8 mobile:px-4 desktop:px-0">
        <div className="tablet:container mx-auto bg-white relative my-20 grid mobile:grid-cols-1 laptop:grid-cols-2 gap-12">
          <div class="py-16 laptop:pl-6 tablet:col-span-2 tablet:text-center">
            <Title>Motto</Title>
            <div>
              <Paragraph>One stop service and One stop solution</Paragraph>
            </div>
          </div>
          <div class="py-16">
            <Title>Vision</Title>
            <div>
              <Paragraph>
                To provide the best quality in every service in the shipping
                world to get a sense of security and comfort
              </Paragraph>
            </div>
          </div>
          <div class="py-16 laptop:pl-6">
            <Title>Mission</Title>
            <div>
              <Paragraph>
                Uphold the value of high commitment in realizing trust for the
                benefit of customers and customer satisfaction
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
};

export default AboutLayout;
