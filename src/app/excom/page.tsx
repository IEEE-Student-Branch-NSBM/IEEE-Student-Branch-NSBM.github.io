"use client";

import TwentyFourExcom from "@/components/excom-page-tabs/2024-excom";
import TwentyFiveExcom from "@/components/excom-page-tabs/2025-excom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

export default function Excom() {
  const [activeCategory, setActiveCategory] = useState("sb");

  return (
    <div className="container mx-auto lg:w-[1170px] ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mt-10 mb-5 px-4">
        EXECUTIVE COMMITTEE
      </h1>
      <div className="flex items-center">
        <p className=" w-auto  my-6 text-center px-5">
          The Executive Committee of the IEEE NSBM Student Branch consists of
          the Chair, the Vice Chair, the Secretary, Founders, and fellow
          representatives from the Board. The purpose of the Executive Committee
          is to manage the daily operations of the community. They are
          authorized to establish and upgrade the rules, procedures,
          restrictions, resolutions, and requirements of the Board, as well as
          the IEEE NSBM Student Branch.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 px-10">
        <button
          onClick={() => setActiveCategory("sb")}
          className={`px-6 py-3 rounded-lg text-white md:text-2xl transition-colors ${
            activeCategory === "sb"
              ? "bg-blue hover:bg-blue-600"
              : "bg-blue hover:bg-blue-500"
          }`}
        >
          IEEE STUDENT BRANCH
        </button>
        <button
          onClick={() => setActiveCategory("wie")}
          className={`px-6 py-3 rounded-lg text-white md:text-2xl transition-colors ${
            activeCategory === "wie"
              ? "bg-wieLight hover:bg-wieLight"
              : "bg-wieDark hover:bg-wieLight"
          }`}
        >
          WIE AFFINITY GROUP
        </button>
        <button
          onClick={() => setActiveCategory("cs")}
          className={`px-6 py-3 rounded-lg text-white md:text-2xl transition-colors ${
            activeCategory === "cs"
              ? "bg-csDark hover:bg-csDark"
              : "bg-csLight hover:bg-csDark"
          }`}
        >
          CS STUDENT CHAPTER
        </button>
      </div>
      <Tabs
        defaultValue="2025"
        className="container mx-auto mt-3 max-w-[390px] md:max-w-[700px] lg:max-w-[990px] xl:max-w-[1170px]"
      >
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="2025">2025/26</TabsTrigger>
          <TabsTrigger value="2024">2024/25</TabsTrigger>
        </TabsList>
        <TabsContent value="2025">
          <TwentyFiveExcom category={activeCategory} />
        </TabsContent>
        <TabsContent value="2024">
          <TwentyFourExcom category={activeCategory} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
