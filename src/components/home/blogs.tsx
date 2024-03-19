import React from "react";
import { Button, Image } from "@nextui-org/react";
import { BLOGS_NEWS } from "../datas/data";

const Blogs = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="text-white font-poppins-semibold text-3xl">
            BLOGS & NEWS
          </p>
          <Button className="transparent-button px-5 sm:hidden md:flex">
            View All News
          </Button>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5">
          {BLOGS_NEWS.map((item: any, index: number) => (
            <div
              key={"blogs_news_" + index.toString()}
              className="flex flex-col justify-between bg-dark-gray rounded-md overflow-hidden">
              <div className="h-[175px] overflow-hidden">
                <Image
                  draggable={false}
                  radius="none"
                  className="w-full"
                  src={item.image}
                  alt="blogs-images"
                />
              </div>
              <div className="flex flex-col p-5 gap-2">
                <p className="text-[#9d9d9d] text-xs font-poppins-medium">
                  {item.date}
                </p>
                <p className="text-white font-poppins-semibold text-xl">
                  {item.name}
                </p>
                <p className="text-[#9d9d9d] text-sm font-poppins-medium w-5/6">
                  {item.description}
                </p>
                <div className="flex items-center sm:justify-end md:justify-center pt-2">
                  <Button className="purple-button">Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
