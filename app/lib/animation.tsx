"use client";
import { AnimatePresence, m, motion, useMotionValue } from "framer-motion";
import "@/app/globals.css";
import { useEffect } from "react";
import Spline from "@splinetool/react-spline";

interface Props {
  children: React.ReactNode;
  isVertical?: boolean;
  length?: number;
  pause?: boolean;
}
interface SvgProps {
  sign: "ts" | "react" | "vue";
}

export function Arrow() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
      >
        <path
          d="M64 117.333C93.4552 117.333 117.333 93.4552 117.333 64C117.333 34.5448 93.4552 10.6666 64 10.6666C34.5448 10.6666 10.6667 34.5448 10.6667 64C10.6667 93.4552 34.5448 117.333 64 117.333Z"
          stroke="white"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <motion.path
          d="M88 64L64 88L40 64 M64 40V88"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </svg>
    </>
  );
}
export function DynamicIcon({ icon }: { icon: "ts" | "react" | "vue" }) {
  return (
    <m.div
      key={icon}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {icon === "ts" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="JavaScript"
          role="img"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" fill="#f7df1e" />
          <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
        </svg>
      )}
      {icon === "react" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="React"
          role="img"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" fill="#fff" />
          <circle cx="256" cy="256" r="36" fill="#61dafb" />
          <path
            stroke="#61dafb"
            strokeWidth="18"
            fill="none"
            d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"
          />
        </svg>
      )}
      {icon === "vue" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Vue"
          role="img"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="15%" fill="#fff" />
          <path fill="#42b883" d="m64 140h148l44 77l44-77h148L256 473" />
          <path fill="#35495e" d="m141 140h71l44 77l44-77h71L256 340" />
        </svg>
      )}
    </m.div>
  );
}
export function Marquee({
  children,
  length = 2,
  isVertical = false,
  pause = false,
}: Props) {
  const lengthList = Array(length).fill(0);
  return (
    <div className={`flex group ${isVertical ? "rotate-90" : ""}   `}>
      {lengthList.map((_, index) => (
        <div
          key={index}
          className={` flex-none animate-marquee ${
            pause ? "group-hover:anime-pause " : ""
          } `}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default function Cursor({
  isHover = false,
  isOpen = false,
}: {
  isHover?: boolean;
  isOpen?: boolean;
}) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      if (isHover) {
        cursorX.set(e.clientX - 64);
        cursorY.set(e.clientY - 64);
      } else {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isHover, cursorX, cursorY]);
  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className={`${
        isHover ? "" : "mix-blend-difference "
      } z-50  fixed left-0 top-0 lg:block hidden pointer-events-none `}
    >
      {!isHover && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className=" w-8 h-8 rounded-full bg-white"
        ></motion.div>
      )}
      {isHover && (
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="128"
          height="128"
          viewBox="0 0 128 128"
        >
          <path
            id="myTextPath"
            d="M 64,0 A 64,64 0 0 1 -64,0 A 64,64 0 0 1 64,0"
            transform="translate(64,64)"
            fill="white"
          />

          <text
            style={{ stroke: "#000000", letterSpacing: "8px" }}
            fill="black"
            strokeWidth={0}
          >
            <textPath xlinkHref="#myTextPath">
              <tspan dy="20">
                {isHover
                  ? isOpen
                    ? "CLICK  TO  CLOSE  MENU"
                    : "CLICK  TO  OPEN  MENU"
                  : ""}
              </tspan>
            </textPath>
          </text>
        </motion.svg>
      )}
    </motion.div>
  );
}
