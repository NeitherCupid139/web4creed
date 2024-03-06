"use client";
import dynamic from "next/dynamic";
import Hero from "@/app/ui/home/hero";
const Resume = dynamic(() => import("./ui/home/resume"));
const Cursor = dynamic(() => import("@/app/lib/animation"));
const Works = dynamic(() => import("./ui/home/works"));
const Footprint = dynamic(() => import("./ui/home/footprint"));
const End = dynamic(() => import("./ui/home/end"));
const Menu = dynamic(() => import("./ui/home/menu"));

import { useContext, useState } from "react";

import { MenuContext, MenuProvider } from "@/app/lib/state";
import { motion } from "framer-motion";

function MenuButton() {
  const { isOpen, setIsOpen, setIsHover } = useContext(MenuContext);
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className=" fixed md:block hidden right-0 top-1/2 -translate-y-1/2 w-20 h-1/6 z-50  "
    ></div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Cursor isHover={isHover} isOpen={isOpen} />
      <MenuProvider value={{ isOpen, setIsOpen, isHover, setIsHover }}>
        <MenuButton />
        <Menu />
      </MenuProvider>
      <Hero />
      <Resume />
      <Works />
      <Footprint />
      <End />
    </>
  );
}
