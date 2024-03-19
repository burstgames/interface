import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
  Link,
} from "@nextui-org/react";
import {
  PrevButton,
  NextButton,
} from "../buttons/EmblaCarouselArrowsDotsButtons";
import { convertIpfsUrl } from "@/scripts/supportScripts";

const AllGamesSliders = ({ games }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextGroup = () => {
    if (currentIndex < games.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const prevGroup = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(games.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % games.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, games.length]);

  return (
    <>
      <div className="relative h-full w-full">
        <div
          style={{
            display: "flex",
            transition: "transform 1s",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {games.map((item: any, index: number) => (
            <div
              key={"ihome_" + index.toString()}
              className="relative z-0 text-white sm:h-[250px] md:h-[400px]"
              style={{
                flex: "0 0 100%",
                width: "100%",
                position: "relative",
                overflow: "hidden",
              }}>
              <Image
                draggable={false}
                radius="none"
                src={convertIpfsUrl(item[3][4])}
                className="w-screen brightness-50"
                alt={`slide ${index + 1}`}
              />
              <div className="absolute sm:bottom-[25%] md:bottom-[20%] lg:bottom-[10%] flex flex-col gap-4 sm:left-[5%] md:left-[5%] lg:left-[10%] z-10">
                <p className=" text-4xl font-poppins-semibold font-semibold">
                  {item[3][1]}
                </p>
                <p className=" sm:hidden md:flex md:w-[40%]">{item[3][3]}</p>
                <Button
                  as={Link}
                  href={`/games/${item[3][0]}`}
                  radius="sm"
                  className="purple-button max-w-[150px]">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute sm:bottom-[25%] md:bottom-[20%] lg:bottom-[10%] flex gap-2 text-white items-center sm:right-[5%] md:right-[5%] lg:right-[10%] z-10">
          <PrevButton
            onClick={() => prevGroup()}
            className="hover:bg-[#a664fe] hover:border-[#a664fe] rounded-full
              sm:w-9 sm:h-9 md:w-16 md:h-16 
          border border-gray-500 sm:p-2 md:p-4 transition-all duration-300 flex items-center justify-center"></PrevButton>
          <NextButton
            onClick={() => nextGroup()}
            className="hover:bg-[#a664fe] sm:p-2 md:p-4 hover:border-[#a664fe] sm:w-9 sm:h-9 md:w-16 md:h-16 border border-gray-500 rounded-full transition-all duration-300 flex items-center justify-center"></NextButton>
          <div className="text-xl">
            {currentIndex + 1} / {games.length}
          </div>
        </div>
      </div>
    </>
  );
};
export default AllGamesSliders;
