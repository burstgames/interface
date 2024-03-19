import React from "react";

import { getStaticProps } from "@/framework/games.ssr";
import { InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "@/types";

import HeroHeader from "@/components/home/heroHeader";
import AllGamesSliders from "@/components/sliders/allGamesSliders";
import UpcomingGames from "@/components/home/upcomingGames";
import HowToJoin from "@/components/home/howToJoin";
import Blogs from "@/components/home/blogs";
import PublishGame from "@/components/home/publishGame";

export { getStaticProps };
const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ games }: any) => {
  const lastFourGames = games.slice(0, 4);

  return (
    <>
      <div className="flex flex-col gap-24 pt-12">
        <section>
          <HeroHeader />
        </section>
        <section>
          <AllGamesSliders games={games} />
        </section>
        <section className="sm:px-[5%] md:px-[10%]">
          <UpcomingGames games={lastFourGames} />
        </section>
        <section className="sm:px-[5%] md:px-[10%]">
          <HowToJoin />
        </section>
        <section className="sm:px-[5%] md:px-[10%]">
          <Blogs />
        </section>
        <section>
          <PublishGame />
        </section>
      </div>
    </>
  );
};

export default Home;
