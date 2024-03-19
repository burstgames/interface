import React from "react";
import { Button } from "@nextui-org/react";

const PublishGame = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-5 bg-dark-gray w-full py-24">
        <div className="flex sm:flex-col md:flex-row gap-2 text-white font-poppins-semibold text-4xl">
          <p>Start to publish your game via</p>
          <p className="text-[#a664fe]">Burst Pad</p>
        </div>
        <div className="text-[#9d9d9d] font-poppins-medium text-lg">
          <p>
            Ready to bring your game to WEB3 Space? Join us and unlock your
            inner potential.
          </p>
          <p>Submit your game now and be part of our incredible community!</p>
        </div>
        <Button size="lg" className="purple-button px-10">
          Publish Game
        </Button>
      </div>
    </>
  );
};

export default PublishGame;
