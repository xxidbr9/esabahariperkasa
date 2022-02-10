import React from "react";

const Footer = () => {
  return (
    <footer className="h-auto bg-gray-200 w-full mobile:px-4 tablet:px-8 laptop:px-8 desktop:mx-0">
      <div className="mx-auto tablet:container pt-10 pb-2">
        <div className="grid tablet:grid-cols-2 mobile:grid-cols-1">
          <div>
            <h2 className="uppercase font-bold text-2xl">JAVA TIRTA MARITIM</h2>
            <h4 className="text-gray-600">PT. Java Tirta Maritim</h4>
          </div>
          <div className="tablet:text-right">
            <h3 className="mobile:mt-5  uppercase font-bold text-lg">
              Address
            </h3>
            <p className="tablet:mt-0 tablet:text-right text-gray-600">
              Ruko Mega Legenda Blok C2 No. 27 <br /> Batam Centre <br /> Batam
              - Indonesia
            </p>

            <h3 className="mt-5 uppercase font-bold text-lg">Contact</h3>
            <table className="m-0  tablet:float-right">
              <tbody>
                <tr>
                  <td>Eko Rudy Santoso :</td>
                  <td className="text-right text-gray-600">
                    +62 812 7056 9728
                  </td>
                </tr>
                <tr>
                  <td>Idham Maulana :</td>
                  <td className="text-right text-gray-600">
                    +62 813 7807 4996
                  </td>
                </tr>
                <tr>
                  <td>Ilman Arif Wahyudi :</td>
                  <td className="text-right text-gray-600">
                    +62 812 6824 6119
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className="mt-12 mb-3 border-b-2 border-gray-500" />
        <span className="text-sm text-gray-500">JAVA TIRTA MARITIM © 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
