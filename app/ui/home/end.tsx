"use client";
import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
// million-ignore
function TextArea() {
  return (
    <div className=" w-full md:text-[14.5rem] text-5xl text-red-350  font-bold leading-[12.5rem] pt-4 px-[0.625rem] flex-none">
      <div className="flex justify-between">
        <p className=" hover:text-white transition-all duration-300">THANKS</p>
        <p className=" hover:text-white transition-all duration-300">FOR</p>
      </div>
      <div className="  flex justify-between">
        <p className=" hover:text-white transition-all duration-300">YOUR</p>
        <p className=" hover:text-white transition-all duration-300">VISIT</p>
      </div>
    </div>
  );
}
const MouseImageTrail = ({
  images,
  renderImageBuffer,
  rotationRange,
}: {
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    if (el) {
      const el = document.querySelector(selector) as HTMLElement;
      el.style.top = `${lastRenderPosition.current.y - 400}px`;
      el.style.left = `${lastRenderPosition.current.x}px`;
      el.style.zIndex = imageRenderCount.current.toString();
    }

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden  flex-1"
      onMouseMove={handleMouseMove}
    >
      {images.map((img, index) => (
        <Image
          width={100}
          height={100}
          className="  pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl  object-cover opacity-0"
          src={img}
          key={index}
          data-mouse-move-index={index}
          alt="Mouse move image"
        />
      ))}
    </div>
  );
};

export default function End() {
  return (
    <div className=" snap-center w-full h-screen bg-[#DD2E44] flex flex-col relative bg-[url('/home/end/back.png')] bg-repeat  ">
      <TextArea />
      <MouseImageTrail
        renderImageBuffer={50}
        rotationRange={25}
        images={[
          "/home/end/celebrate.png",
          "/home/end/laugh.png",
          "/home/end/yun.png",
          "/home/end/suck.png",
          "/home/end/celebrate.png",
          "/home/end/laugh.png",
          "/home/end/yun.png",
          "/home/end/suck.png",
          "/home/end/celebrate.png",
          "/home/end/laugh.png",
          "/home/end/yun.png",
          "/home/end/suck.png",
          "/home/end/celebrate.png",
          "/home/end/laugh.png",
          "/home/end/yun.png",
          "/home/end/suck.png",
          "/home/end/celebrate.png",
          "/home/end/laugh.png",
          "/home/end/yun.png",
          "/home/end/suck.png",
        ]}
      ></MouseImageTrail>
      <p className=" absolute left-28 bottom-8 font-bold text-2xl text-white">
        Creed Chung
      </p>
    </div>
  );
}
