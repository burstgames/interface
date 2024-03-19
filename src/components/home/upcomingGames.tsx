import React from "react";

import { Button, Image, Link } from "@nextui-org/react";
import {
  convertIpfsUrl,
  format6DecimalsAsEther,
  formatTimestampGMT,
  numberWithCommas,
} from "@/scripts/supportScripts";
import { useRouter } from "next/router";
import classNames from "classnames";

const PLATFORM_SLICES = [
  {
    image: "/icons/platforms/apple.svg",
    link: "",
  },
  {
    image: "/icons/platforms/android.svg",
    link: "",
  },
  {
    image: "/icons/platforms/windows.svg",
    link: "",
  },
  {
    image: "/icons/platforms/web.svg",
    link: "",
  },
];

const UpcomingGames = ({ games }: any) => {
  const router = useRouter();
  const currentTime: number = Math.floor(Date.now() / 1000);

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="text-white font-poppins-semibold text-3xl">
            UPCOMING GAMES
          </p>
          <Button className="transparent-button sm:hidden md:flex">
            View All Games
          </Button>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-5">
          {games.map((item: any, index: number) => (
            <div key={"upcoming_games_" + index.toString()}>
              <button
                onClick={() => router.push(`/games/${item[3][0]}`)}
                className="flex box flex-col  z-50 gap-14 h-full pb-4 w-full bg-dark-gray rounded-md overflow-hidden hover:opacity-75 duration-400 hover:ease-in-out">
                <div className="relative">
                  <div className="h-[175px] overflow-hidden">
                    <Image
                      draggable={false}
                      radius="none"
                      className="w-full"
                      src={convertIpfsUrl(item[3][5])}
                      alt="game_image"
                    />
                  </div>
                  <div className="absolute -bottom-9 left-5 text-white z-10">
                    <Image
                      draggable={false}
                      radius="md"
                      width={70}
                      // src={convertIpfsUrl(item[3][6])}
                      src="/mock/mgc-logo.jpeg"
                      alt="game_logo"
                    />
                  </div>
                </div>
                <div className="flex w-full px-5">
                  <div className="flex flex-col gap-3 w-full">
                    <div className="flex justify-between text-white items-center">
                      <p className=" font-poppins-semibold text-xl">
                        {item[3][1]}
                      </p>
                      <div className="flex z-50">
                        {PLATFORM_SLICES.map(
                          (platformItem: any, index: number) => (
                            <div key={"platforms_key_" + index.toString()}>
                              <Button
                                as={Link}
                                size="sm"
                                isIconOnly
                                className="bg-transparent">
                                <Image
                                  draggable={false}
                                  radius="none"
                                  src={platformItem.image}
                                  alt="platforms"
                                />
                              </Button>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 text-white">
                      <div className="purple-button px-5 py-[1px] flex items-center">
                        IPO
                      </div>
                      <div
                        className={classNames(
                          " px-5 py-[2px]",
                          currentTime > item.ipoDatas[10] &&
                            currentTime < item.ipoDatas[13]
                            ? "purple-button"
                            : "transparent-button"
                        )}>
                        {currentTime > item.ipoDatas[10] &&
                        currentTime < item.ipoDatas[13]
                          ? "Live"
                          : currentTime < item.ipoDatas[10]
                          ? "Upcoming"
                          : currentTime > item.ipoDatas[13]
                          ? "Ended"
                          : ""}
                      </div>
                    </div>
                    <div className="flex gap-2 w-full pt-1 text-base font-poppins-medium text-[#a664fe]">
                      <p>Start at:</p> {formatTimestampGMT(item.ipoDatas[10])}
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex justify-between w-full font-poppins-medium">
                        <p className="text-[#9d9d9d]">Total Raise</p>
                        <div className="text-white">
                          {numberWithCommas(
                            Number(format6DecimalsAsEther(item.ipoDatas[4]))
                          )}{" "}
                          USDT
                        </div>
                      </div>
                      <div className="flex justify-between w-full font-poppins-medium">
                        <p className="text-[#9d9d9d]">Rate</p>
                        <p className="text-white">1x = 1 USDT</p>
                      </div>
                      <div className="flex justify-between w-full font-poppins-medium">
                        <p className="text-[#9d9d9d]">Round</p>
                        <div className="text-white">#{item.ipoDatas[1]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingGames;
