"use client";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  motion,
  useInView,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

function RightArrow({ hover }: { hover?: boolean }) {
  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88 48C88 25.9086 70.0914 8 48 8C25.9086 8 8 25.9086 8 48C8 70.0914 25.9086 88 48 88C70.0914 88 88 70.0914 88 48Z"
        stroke="black"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <motion.g initial={{ x: 0 }} animate={{ x: hover ? 4 : 0 }}>
        <path
          d="M30 48H66"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 30L66 48L48 66"
          stroke="black"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
function BgLine() {
  const targetRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef);
  return (
    <div ref={targetRef} className="w-full h-full absolute top-0 left-0 ">
      <svg
        width="1728"
        height="1117"
        viewBox="0 0 1728 1117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <LazyMotion features={domAnimation}>
          <m.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-127 -33C374.824 246.593 361.148 836.524 130.59 753.297C-59.7404 684.591 243.643 64.3905 679.638 198.881C1145.21 342.495 437.79 1162.67 243.643 1282.42C49.4969 1402.18 120.573 834.407 1025 814.368"
            stroke="white"
            strokeWidth="40"
          />
          <m.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            d="M1025 -33C1526.82 246.593 1513.15 836.524 1282.59 753.297C1092.26 684.591 1395.64 64.3905 1831.64 198.881C2297.21 342.495 1589.79 1162.67 1395.64 1282.42C1201.5 1402.18 1272.57 834.407 2177 814.368"
            stroke="white"
            strokeWidth="40"
          />
        </LazyMotion>
      </svg>
    </div>
  );
}

function BackGround({ children }: { children: React.ReactNode }) {
  return (
    <div className=" snap-center w-full bg-[#FFD653] h-screen relative p-4 ">
      <BgLine />
      <div className=" w-full h-full border-4 border-black z-10 relative flex justify-center items-center flex-col   ">
        {children}
      </div>
    </div>
  );
}
function TabButton({
  name,
  description,
  link,
  src,
}: {
  name: string;
  description: string;
  link: string;
  src: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <a className=" w-1/2 h-1/6" href={link}>
      <LazyMotion features={domAnimation}>
        <m.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className=" border-b-4 border-black hover:border-gray-600 transition-all duration-300 flex relative my-6 "
        >
          <m.div
            initial={{ x: 0 }}
            animate={{ x: hover ? 20 : 0 }}
            className=" flex justify-end flex-col"
          >
            <p className=" md:text-5xl font-normal">{name}</p>
            <p className=" md:text-xl text-[#8A742D] md:w-80 w-40 ">
              {description}
            </p>
          </m.div>
          <AnimatePresence>
            {hover && (
              <m.div
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 12, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                exit={{ rotate: -12, scale: 0 }}
                className=" w-72 h-44 border-4 border-black rounded-2xl absolute -bottom-2 right-40 overflow-hidden hidden md:block"
              >
                <Image
                  className="w-full h-full "
                  src={`/home/works/${src}.webp`}
                  width={300}
                  height={150}
                  alt="works"
                />
              </m.div>
            )}
          </AnimatePresence>
          <div className="absolute md:bottom-4 md:right-0 bottom-0 -right-20">
            <RightArrow hover={hover} />
          </div>
        </m.div>
      </LazyMotion>
    </a>
  );
}

export default function Works() {
  const tabList = [
    {
      name: "速记",
      description: "一款背单词的PWA应用，使用Vue3 TypeScript开发",
      link: "https://cuggi.creedchung.top/",
      src: "cuggi",
    },
    {
      name: "脚本工具箱",
      description: "一款可以优化电脑，执行bat脚本的软件，使用JavaFX开发",
      link: "https://neithercupid139.github.io/2022/08/14/Batool/",
      src: "utibox",
    },
    {
      name: "Creact",
      description: "模仿react的一个小型框架，使用JavaScript开发,canary版本",
      link: "/",
      src: "creact",
    },
    {
      name: "Boring",
      description:
        "一个用于清除页面元素的chrome插件，使用JavaScript开发,beta版本",
      link: "/",
      src: "boring",
    },
  ];
  return (
    <BackGround>
      {tabList.map((tab, index) => (
        <TabButton key={index} {...tab} />
      ))}
    </BackGround>
  );
}
