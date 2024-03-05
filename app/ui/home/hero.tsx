import Image from "next/image";
import { getToday, getDay } from "@/app/lib/utility";
import { Marquee, Arrow } from "@/app/lib/animation";

import React from "react";

import { Fragment, Suspense } from "react";
const Keyboard = React.lazy(() => import("@/app/lib/model"));
function TechBarrage() {
  const BarrageList = [
    {
      shape: "star",
      text: "Vue.js",
    },
    {
      shape: "square",
      text: "React.js",
    },
    {
      shape: "heart",
      text: "TypeScript",
    },
    {
      shape: "star",
      text: "Vue.js",
    },
    {
      shape: "square",
      text: "React.js",
    },
    {
      shape: "heart",
      text: "TypeScript",
    },
    {
      shape: "star",
      text: "Vue.js",
    },
    {
      shape: "square",
      text: "React.js",
    },
    {
      shape: "heart",
      text: "TypeScript",
    },
  ];
  return (
    <Marquee>
      <div className="flex items-center">
        {BarrageList.map((item, index) => (
          <Fragment key={index}>
            <Image
              className={`md:ml-14 ml-4 md:mr-14 mr-4 w-8 h-8 ${
                item.shape === "heart" ? "animate-heartbeat" : "animate-spin"
              }`}
              src={`/home/hero/${item.shape}.svg`}
              alt="icon"
              width={32}
              height={32}
            />
            <p className="text-2xl  font-bold text-white">{item.text}</p>
          </Fragment>
        ))}
      </div>
    </Marquee>
  );
}

function DateBar() {
  return (
    <Marquee>
      <div className=" flex mt-6 items-end  pr-3">
        <p className="text-white md:text-4xl text-xl  font-black md:mr-60 md:ml-96 mr-8">
          (BEST PRACTICE)*
        </p>
        <p className="text-white md:text-2xl font-bold mr-16">{getDay}</p>
        <p className="text-white md:text-8xl text-4xl font-bold leading-[0.8] ">
          {getToday}
        </p>
      </div>
    </Marquee>
  );
}

function ProsBar() {
  return (
    <div className=" absolute bottom-16">
      <Marquee length={3}>
        <div className=" md:mr-24 mr-4 md:w-[67.3rem] w-[31.25rem] md:h-[13.815rem] h-[9.375rem] border-y-4 border-white relative ">
          <Image
            className="md:w-[9.375rem] md:h-[9.375rem] w-16 h-16 absolute top-1/2 -translate-y-1/2 "
            src="/home/hero/qrcode.svg"
            alt="icon"
            width={150}
            height={150}
          />
          <div className="md:w-96 md:top-4 top-2 md:left-36 absolute text-white text-balance text-right md:text-lg text-xs md:leading-5 leading-3 font-bold ">
            With Next.js at the helm of our headless tech stack, our developers
            can create features with velocity and speed ultimately enabling
            users to create whenever they want to
          </div>
          <div className=" bg-white md:left-[35rem] left-24 md:top-4 top-2 absolute md:h-24 h-8 w-2"></div>
          <div className=" absolute md:right-0 md:top-2  border-white text-white md:text-8xl text-4xl font-bold bottom-12 right-0    ">
            前端工程师
          </div>
          <Image
            className=" absolute md:left-40 left-20 md:w-16 md:h-24 w-8 h-12 bottom-8"
            src="/home/hero/diamond.svg"
            width={0}
            height={0}
            alt="diamond"
          />
          <p className="text-white md:text-xl text-xs font-bold break-words md:w-36 w-24 absolute md:left-52 md:bottom-5 bottom-0 ">
            101011110001011000010
          </p>
          <p className="text-white md:text-[4rem] text-4xl font-bold text-nowrap absolute right-0 md:bottom-8 bottom-0">
            FRONTEND ENGINEER
          </p>
        </div>
      </Marquee>
    </div>
  );
}
function AuthorBar() {
  return (
    <div className=" absolute bottom-2">
      <Marquee length={3}>
        <div className="ml-28  flex">
          <Image
            className="mr-12 w-auto h-auto"
            src="/home/hero/barcode.svg"
            alt="icon"
            width={438}
            height={20}
          />
          <Image
            className="mr-2 w-6 h-6"
            src="/home/hero/github.svg"
            alt="icon"
            width={24}
            height={24}
          />
          <p className="text-white text-2xl font-bold text-nowrap ">
            NEITHERCUPID139 @ FUYEN CHUNG | CREED CHUNG
          </p>
        </div>
      </Marquee>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="snap-center w-full h-screen bg-blue-700 pt-4 relative overflow-hidden   ">
      <TechBarrage />
      <DateBar />
      <div className=" absolute md:right-6 md:bottom-72 hidden md:block ">
        <Arrow />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Keyboard />
      </Suspense>

      <ProsBar />

      <AuthorBar />
    </div>
  );
}
