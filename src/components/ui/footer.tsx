import React from "react";
import { Link, Image } from "@nextui-org/react";
import { ABOUT_US, CONTACTS, PARTNERS, PRODUCTS } from "../datas/data";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-10 pt-24 items-center text-white">
        <p className="font-poppins-medium">Trusted by Global Platforms</p>
        <div className="flex sm:flex-col md:flex-row w-full items-center md:justify-evenly">
          {PARTNERS.map((item: string, index: number) => (
            <div key={"partners_" + index.toString()}>
              <Image
                draggable={false}
                radius="none"
                width={
                  item === "/logos/partners/hoopx-name.png"
                    ? 130
                    : item === "/logos/partners/arbitrum-name.svg"
                    ? 200
                    : 170
                }
                src={item}
                alt="partners"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full px-[15%]">
          <div className="flex sm:flex-col sm:gap-5 md:flex-row h-full justify-between w-full border-t border-b border-gray-800/50 py-12">
            <div className="flex flex-col sm:w-full sm:text-center sm:items-center md:w-1/5 gap-4">
              <Image
                draggable={false}
                radius="none"
                width={250}
                src="/logos/name-logo.svg"
                className="w-full"
                alt="footer-logo"
              />
              <p className="text-white font-poppins-medium text-sm">
                GameXPad brings together the gaming and finance worlds offering
                you unique opportunites.
              </p>
              <Link
                href="mailto:info@gamexpad.io"
                className="text-[#a664fe] font-poppins-medium">
                info@gamexpad.io
              </Link>
            </div>
            <div id="aboutus" className="flex flex-col  gap-5">
              <p className="text-xl font-poppins-semibold">About us</p>
              <div className="md:flex md:flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:gap-1">
                {ABOUT_US.map((item: any, index: number) => (
                  <div key={"about_us_" + index.toString()}>
                    <Link
                      isExternal={item.isExter}
                      href={item.link}
                      className="font-poppins-medium text-white/50">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div id="products" className="flex flex-col gap-5">
              <p className="text-xl font-poppins-semibold">Products</p>
              <div className="md:flex md:flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:gap-1">
                {PRODUCTS.map((item: any, index: number) => (
                  <div key={"products_" + index.toString()}>
                    <Link
                      isExternal={item.isExter}
                      href={item.link}
                      className="font-poppins-medium text-white/50">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div id="contacts" className="flex flex-col gap-5">
              <p className="text-xl font-poppins-semibold">Contacts</p>
              <div className="md:flex md:flex-col sm:grid sm:grid-cols-2 sm:gap-4 md:gap-1">
                {CONTACTS.map((item: any, index: number) => (
                  <div key={"contacts_" + index.toString()}>
                    <Link
                      isExternal={item.isExter}
                      href={item.link}
                      className="font-poppins-medium text-white/50">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full font-poppins-medium text-center sm:text-sm whitespace-nowrap border-t border-gray-800/50 text-white pb-5 pt-5">
            © GameXPad. All Rights Reserved 2024
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
