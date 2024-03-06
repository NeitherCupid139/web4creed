"use client";
import {
  AnimatePresence,
  LazyMotion,
  MotionValue,
  domAnimation,
  m,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import Webcam from "react-webcam";

function BgWave() {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef);
  return (
    <div ref={targetRef} className=" w-full h-1/2 absolute bottom-24 left-0 ">
      <svg
        width="1728"
        height="561"
        viewBox="0 0 1728 561"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <LazyMotion features={domAnimation}>
          <m.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: isInView ? 1 : 0, pathOffset: 0 }}
            transition={{ duration: 2, type: "linear" }}
            d="M-62 4L39.6096 69.1516C141.219 134.303 344.445 264.606 547.664 326.584C750.89 388.562 954.11 382.205 1157.34 344.07C1360.55 305.925 1563.78 236.003 1665.39 201.052L1767 166.091 M-62 404.45L39.6096 420.338C141.219 436.227 344.445 468.014 547.664 488.674C750.89 509.333 954.11 518.864 1157.34 488.674C1360.55 458.483 1563.78 388.561 1665.39 353.6L1767 318.639 M-62 557L39.6096 496.619C141.219 436.228 344.445 315.466 547.664 236.003C750.89 156.549 954.11 118.414 1157.34 158.146C1360.55 197.868 1563.78 315.466 1665.39 374.26L1767 433.054"
            stroke="black"
            strokeWidth="8"
          />
        </LazyMotion>
      </svg>
    </div>
  );
}
function BgClover() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        whileTap={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.5 },
        }}
        className=" absolute top-[15%] left-[13%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          fill="none"
        >
          <path
            d="M192.463 128c128.908 0 32.209-153.606-32.209-51.181 64.489-102.426-128.909-102.426-64.49 0C31.275-25.606-65.354 128 63.555 128c-128.908 0-32.21 153.606 32.209 51.181-64.489 102.425 128.908 102.425 64.49 0C224.672 281.606 321.371 128 192.463 128z"
            fill="#000"
          />
        </svg>
      </m.div>
    </LazyMotion>
  );
}
function BgSector() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className=" absolute top-[15%] right-[20%] hidden md:block"
        whileTap={{
          x: 100,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
            mass: 0.5,
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="423"
          height="300"
          fill="none"
        >
          <path
            d="M276.849 299.4l145.9-153.6L269.049 0c-38.7 40.8-57.9 92.8-58.2 144.9L58.149 0c-80.5 84.9-77 218.9 7.9 299.5l144.8-152.7c.3 55.7 22.4 111.2 66 152.6z"
            fill="#000"
          />
        </svg>
      </m.div>
    </LazyMotion>
  );
}

function TopArea() {
  return (
    <div className="flex-none w-full h-36 flex justify-between items-center px-10 absolute top-0 left-0 snap-normal">
      <p className=" font-bold md:text-8xl text-4xl ">My Footprint</p>
      <div className="md:block hidden w-96 h-24 border-4 border-black rounded-full"></div>
    </div>
  );
}

function Photo({ src, des }: { src: string; des: string }) {
  return (
    <div className="md:w-[284px] md:h-[347px] w-48 h-60 bg-white px-4 pt-5 flex flex-col items-center">
      <Image
        src={src}
        width={253}
        height={253}
        alt="landscape"
        className="md:w-64 md:h-64 w-32 h-32"
      />
      <p className=" text-sm font-bold text-center mt-2">{des}</p>
    </div>
  );
}
function Camera() {
  const [shutter] = useSound("/sounds/shutter.mp3");
  const [powerOn] = useSound("/sounds/power.mp3");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [power, setPower] = useState<boolean>(false);
  const [shotted, setShotted] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const minicamRef = useRef<Webcam>(null);
  return (
    <LazyMotion features={domAnimation}>
      <m.div className="flex-none relative -mt-2">
        {power && (
          <>
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className=" absolute object-cover opacity-0  "
            />
            <Webcam
              ref={minicamRef}
              screenshotFormat="image/jpeg"
              className=" absolute md:top-[36px] top-5 md:right-[53px] right-8 md:w-16 md:h-16 w-10 h-10 object-cover rounded-xl z-20"
            />
          </>
        )}
        <Image
          src="/home/footprint/power.svg"
          alt="power"
          width={30}
          height={30}
          className=" absolute md:top-5 top-3  md:left-[134px] left-20 z-20 md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
          onClick={() => {
            setPower(!power);
            powerOn();
          }}
        />
        <Image
          src="/home/footprint/button.svg"
          alt="button"
          width={66}
          height={66}
          className=" absolute md:bottom-40 bottom-24 md:left-11 left-5 z-20 md:w-[66px] md:h-[66px] w-[40px] h-[40px]"
          onClick={() => {
            if (power) {
              const imageSrc = webcamRef.current?.getScreenshot();
              setImageUrl(imageSrc!);
              setShotted(false);
              setTimeout(() => {
                setShotted(true);
              }, 1000);
              shutter();
            }
          }}
        />
        <Image
          src="/home/footprint/frontcam.webp"
          width={509}
          height={330}
          alt="camera"
          className=" absolute top-0 left-0 z-10 md:w-[509px] md:h-[330px] w-[300px] h-[196px]"
        />

        {shotted && (
          <AnimatePresence>
            <m.div
              initial={{ y: 0 }}
              animate={{ y: 300 }}
              exit={{ y: 0 }}
              transition={{ duration: 3, type: "linear" }}
              className=" absolute md:bottom-10 bottom-2 md:left-28 left-12 z-0"
            >
              <Photo src={imageUrl} des="Hola!" />
            </m.div>
          </AnimatePresence>
        )}

        <Image
          src="/home/footprint/backcam.webp"
          width={509}
          height={419}
          alt="camera"
          className=" -z-10 md:w-[509px] md:h-[419px] w-[300px] h-[250px] "
          priority
        />
      </m.div>
    </LazyMotion>
  );
}
function PhotoGroup({
  x,
  display = false,
  length = 4,
  locationList,
}: {
  x: MotionValue;
  display?: boolean;
  length?: number;
  locationList?: string[];
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        style={{ translateX: x }}
        className=" flex-none md:w-full w-[400vw] h-[300px] flex items-center justify-around "
      >
        {locationList?.map((location, index) => (
          <Photo
            key={index}
            src={`/home/footprint/${location}.webp`}
            des={location}
          />
        ))}

        {display && <Camera />}
      </m.div>
    </LazyMotion>
  );
}

export default function Footprint() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-305%"]);
  return (
    <div
      ref={targetRef}
      className="relative w-full bg-[#CCFF00] h-[400vh] hidden md:block  "
    >
      <div className=" sticky top-0 w-full h-screen flex md:justify-normal justify-center items-center md:overflow-hidden overflow-x-scroll ">
        <TopArea />
        <BgClover />
        <BgSector />
        <BgWave />
        <PhotoGroup
          x={x}
          locationList={["Vienna", "Munich", "Milan", "Paris"]}
        />
        <PhotoGroup
          x={x}
          locationList={["Dijon", "Habkern", "Florence", "Liguria"]}
        />
        <PhotoGroup
          x={x}
          locationList={["Venice", "Rome", "Tokyo", "Kyushu"]}
        />
        <PhotoGroup
          x={x}
          locationList={["Fukuoka", "Shimonoseki"]}
          length={2}
          display={true}
        />
      </div>
    </div>
  );
}
