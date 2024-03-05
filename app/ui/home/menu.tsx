"use client";
import "@/app/globals.css";
import Image from "next/image";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { MenuContext } from "@/app/lib/state";
import { useContext } from "react";
import Link from "next/link";

function Circle() {
  const { isOpen } = useContext(MenuContext);
  return (
    <div className=" absolute top-6 right-10">
      <svg
        width="200"
        height="200"
        viewBox="0 0 223 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <LazyMotion features={domAnimation}>
          <m.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isOpen ? 1 : 0 }}
            transition={{ duration: 2, type: "linear" }}
            d="M103.052 207.437C144.306 194.756 189.998 183.475 212.58 123.187C218.539 107.276 226.969 79.4148 209.689 49.5316C198.78 30.6666 185.013 22.4932 174.042 16.5608C154.651 6.07484 136.173 2.80542 118.962 3.1707C83.7206 3.91868 46.7971 16.8991 24.081 53.6334C15.6168 67.321 -9.14931 104.863 10.7126 148.408C27.379 184.948 50.7376 197.843 67.8518 202.283C100.498 210.754 130.138 202.33 158.845 195.612"
            stroke="#0679FF"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </LazyMotion>
      </svg>
    </div>
  );
}

function HomeCard() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ rotate: -12 }}
        whileHover={{
          translateY: -20,
          rotate: -12,
        }}
        className=" z-30 w-[35rem] h-[37.5rem] bg-[#F7F7F4] absolute top-48 left-[32rem]  shadow "
      >
        <p className=" font-bold text-9xl text-right mr-4 mt-4  ">首页</p>
        <Circle />
        <Image
          className=" absolute top-48 right-56"
          src="/home/menu/arrow3.svg"
          alt="circle"
          width={78}
          height={100}
        />

        <p className=" absolute top-11  left-10 w-40  text-[#A9A8A0] text-5xl ">
          这是一段旅程的开始
        </p>
      </m.div>
    </LazyMotion>
  );
}
function AboutCard() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ rotate: 12 }}
        whileHover={{
          translateY: -20,
          rotate: 12,
        }}
        className="z-20 w-[35rem] h-[37.5rem] bg-white absolute top-24 right-48  shadow "
      >
        <p className=" font-bold text-9xl text-vertical-r absolute right-5 top-2    ">
          关于
        </p>
        <Image
          className=" absolute top-6 right-36"
          src="/home/menu/arrow2.svg"
          alt="circle"
          width={200}
          height={200}
        />
        <p className=" absolute top-11  left-10 w-40  text-[#A9A8A0] text-5xl ">
          了解我
        </p>
      </m.div>
    </LazyMotion>
  );
}
function WorksCard() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ rotate: 12 }}
        whileHover={{
          translateY: -20,
          rotate: 12,
        }}
        className="z-50 w-[35rem] h-[50rem] bg-white absolute -bottom-96 right-56 shadow "
      >
        <p className=" font-bold text-[9.25rem] text-right mr-4  ">作品</p>
        <Circle />
        <p className=" absolute top-11  left-10 w-40  text-[#A9A8A0] text-5xl ">
          我的作品
        </p>
      </m.div>
    </LazyMotion>
  );
}
function PhotoCard() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ rotate: -12 }}
        whileHover={{
          translateY: -20,
          rotate: -12,
        }}
        className="w-[35rem] h-[37.5rem] bg-[#F9F9F9] absolute top-12 left-64 shadow "
      >
        <p className=" font-bold text-9xl text-left ml-4 mt-4  ">照片</p>
        <Image
          className=" absolute top-40 left-8 z-10"
          src="/home/menu/underline.svg"
          alt="circle"
          width={200}
          height={20}
        />
        <Image
          className=" absolute top-16 right-20 z-10"
          src="/home/menu/arrow1.svg"
          alt="circle"
          width={160}
          height={100}
        />
        <p className=" absolute top-52  left-4  text-[#A9A8A0] text-5xl z-0  text-vertical-l ">
          随手一拍
        </p>
      </m.div>
    </LazyMotion>
  );
}
function ShowCard() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ rotate: -20 }}
        whileHover={{
          translateY: -20,
          rotate: -20,
        }}
        className="z-40 w-[33.75rem] h-[43.75rem] bg-white absolute -bottom-96 left-96  shadow "
      >
        <p className=" font-bold text-[9.25rem] text-right mr-4  ">展示</p>
        <Circle />
        <p className=" absolute top-11  left-10 w-40  text-[#A9A8A0] text-5xl ">
          展示
        </p>
      </m.div>
    </LazyMotion>
  );
}

function Background({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen, isHover, setIsHover } = useContext(MenuContext);
  const menu = {
    open: {
      width: "100%",
      height: "100vh",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "0px",
      height: "0px",
      top: "50%",
      right: "0px",
      translateY: "-50%",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <LazyMotion features={domAnimation}>
          <m.div
            className="fixed top-0 right-0  z-40"
            initial={menu.closed}
            animate={menu.open}
            exit={menu.closed}
          >
            <div className=" w-full h-full bg-[#06FF48] flex flex-col relative overflow-hidden bg-[url('/home/menu/back.png')] bg-repeat ">
              <p className=" text-8xl font-bold absolute top-16 left-16 text-vertical-r">
                NAVGATION
              </p>
              <p className=" text-8xl font-bold absolute right-8 bottom-5 text-vertical-r">
                MENU
              </p>
              <m.p
                whileTap={{
                  x: -60,
                }}
                className=" text-6xl font-bold text-[#02550B] w-96 absolute bottom-8 left-[6rem]"
              >
                人生就是一段旅程,不妨在旅途中享受自己
              </m.p>
              <m.p
                whileTap={{
                  x: 40,
                }}
                className=" text-6xl font-bold text-[#02550B] w-96 absolute top-8 right-12 "
              >
                有缘相遇,不妨留下你的足迹
              </m.p>
              {children}
            </div>
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>
  );
}

export default function Menu() {
  return (
    <Background>
      <Link href="/">
        <HomeCard />
      </Link>
      <AboutCard />
      <a href="https://github.com/NeitherCupid139">
        <WorksCard />
      </a>
      <PhotoCard />
      <ShowCard />
    </Background>
  );
}
