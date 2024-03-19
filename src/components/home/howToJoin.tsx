import React from "react";
import { Image, Link } from "@nextui-org/react";
import { HOW_TO_JOIN } from "../datas/data";

const HowToJoin = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <p className="text-white font-poppins-semibold text-3xl">HOW TO JOIN</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5">
          {HOW_TO_JOIN.map((item: any, index: number) => (
            <div
              key={"how_to_join_" + index.toString()}
              className="flex flex-col p-5 gap-3 justify-between bg-dark-gray rounded-md">
              <Image
                draggable={false}
                width={50}
                src={item.image}
                alt="join-images"
              />
              <p className="text-white font-poppins-semibold text-xl">
                {item.name}
              </p>
              <p className="text-[#9d9d9d] text-sm font-poppins-medium w-4/5 ">
                {item.description}
              </p>
              <Link
                isExternal={item.isExter}
                href={item.link}
                className="bg-transparent text-[#a664fe] font-poppins-medium">
                {item.linkName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HowToJoin;
