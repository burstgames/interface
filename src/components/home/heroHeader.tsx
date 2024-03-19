import { Button } from "@nextui-org/react";
import React from "react";

const HeroHeader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-white font-poppins-semibold text-4xl ">
          Test, Invest & Earn
        </p>
        <p className="text-[#9d9d9d] font-poppins-medium text-lg">
          New Era of decentralized game publisher launchpad for WEB2 Mobile
          Games.
        </p>
        <div className="flex gap-2">
          <Button className="purple-button px-6">View Pools</Button>
          <Button className="transparent-button">Publish Game</Button>
        </div>
      </div>
    </>
  );
};
export default HeroHeader;
