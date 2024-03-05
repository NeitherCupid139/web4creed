"use client";

import "@/app/globals.css";
import { Marquee, DynamicIcon } from "@/app/lib/animation";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  Suspense,
} from "react";

const LayoutContext = createContext({
  isHover: false,
  setIsHover: (v: boolean) => {},
  setToggle: (v: boolean) => {},
});
const springConfig = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

function Avatar() {
  return (
    <div className="  border-4 border-white justify-end flex w-full h-[77%] relative overflow-hidden">
      <LazyMotion features={domAnimation}>
        <m.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.4,
            type: "easeInOut",
          }}
          className=" text-white md:text-8xl text-4xl font-black absolute  top-9 left-9 text-vertical-l "
        >
          Creed Chung
        </m.p>
      </LazyMotion>

      <m.div
        className="absolute bottom-0 right-0 md:w-[25rem] md:h-[43.75rem] w-auto h-auto"
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/home/resume/avatar.png"
          className=" w-full h-full"
          width={400}
          height={700}
          alt="avatar"
          priority
        />
      </m.div>
      <p className="text-white text-right font-black text-4xl absolute  right-7 bottom-12 w-[16.25rem] ">
        WEB3 FRONTEND DEVELOPER
      </p>
    </div>
  );
}
function BackText() {
  return (
    <div className=" text-white  h-full w-56 overflow-hidden md:block hidden">
      <Marquee isVertical={true}>
        <p className=" font-bold text-[13rem] mr-32">TYPE SCRIPT</p>
      </Marquee>
    </div>
  );
}

function IconGroup({ icon }: { icon: "ts" | "react" | "vue" }) {
  const tsList = [
    {
      name: "mongodb",
      desc: "MongoDB",
      skill: `精通MongoDB的数据建模和设计\n
          深入理解MongoDB的聚合管道\n
          了解MongoDB的分片和副本集\n
          熟练使用Mongoose`,
    },
    {
      name: "tailwindcss",
      desc: "TailwindCSS",
      skill: `深入了解TailwindCSS的类名组合\n
          具备整合TailwindCSS工具的经验\n
          熟练使用Vite集成TailwindCSS\n
          注重响应式设计原则\n`,
    },
    {
      name: "nodejs",
      desc: "Node.js",
      skill: `了解RESTful设计原则和最佳实践\n
          熟悉使用中间件处理请求和响应\n
          熟悉使用npm和pnpm包管理工具\n
          了解Node.js安全性最佳实践\n
       `,
    },
    {
      name: "nestjs",
      desc: "Nest.js",
      skill: `深入理解Nest.js的模块化架构\n
    熟练使用Nest.js的控制器和路由系统\n
    熟悉使用Nest.js生成Swagger文档\n
    了解Nest.js在微服务架构中的应用\n
          `,
    },
    {
      name: "postgres",
      desc: "Postgres",
      skill: `熟练使用PostgreSQL的SQL语言\n
          了解PostgreSQL的索引和查询优化\n
          了解PostgreSQL的事务和并发控制\n
          熟练使用Sequelize和TypeORM\n
          `,
    },
    {
      name: "webpack",
      desc: "Webpack",
      skill: `了解Webpack的优化和性能调优\n
          了解Webpack的插件和loader\n
          熟练使用Webpack进行代码分割\n
          熟练使用Webpack进行模块热替换\n
          `,
    },
  ];
  const reactList = [
    {
      name: "react",
      desc: "React",
      skill: `熟练使用React函数式组件\n
          熟练使用React Hooks\n
          熟练使用React Router\n
          熟练使用React Redux\n
          `,
    },
    {
      name: "nextjs",
      desc: "Next.js",
      skill: `熟练使用Next.js进行SSR和SSG\n
          熟练使用Next.js进行API路由\n
          熟练使用Next.js进行数据预取\n
          熟练使用Next.js进行静态导出\n
          `,
    },
    {
      name: "zustand",
      desc: "Zustand",
      skill: `熟练使用Zustand进行状态管理\n
          了解Zustand的原理和实现\n
          熟练使用Zustand进行状态共享\n
          熟练使用Zustand进行状态同步\n
          `,
    },
    {
      name: "react",
      desc: "Router",
      skill: `熟练使用React Router进行路由管理\n
          了解React Router的原理和实现\n
          熟练使用React Router进行路由导航\n
          熟练使用React Router进行路由守卫\n
          `,
    },
    {
      name: "react",
      desc: "Native",
      skill: `熟练使用React Native移动端开发\n
          了解React Native的组件和API\n
          了解React Native的原生模块\n
          了解React Native的性能优化\n
          `,
    },
    {
      name: "threejs",
      desc: "Fiber",
      skill: `熟练使用React Three Fiber3D开发\n
      了解React Three Fiber的组件和API\n
      了解React Three Fiber的原生模块\n
      了解React Three Fiber的性能优化\n
      `,
    },
  ];
  const vueList = [
    {
      name: "vue",
      desc: "Vue",
      skill: `熟练使用Vue3的Composition API\n
          熟练使用Vue3的Teleport\n
          熟练使用Vue3的Suspense\n
          熟练使用Vue3的Reactive\n
          `,
    },
    {
      name: "vite",
      desc: "Vite",
      skill: `了解Vite的优化和性能调优\n
          了解Vite的插件和loader\n
          熟练使用Vite进行代码分割\n
          熟练使用Vite进行模块热替换\n
          `,
    },
    {
      name: "pinia",
      desc: "Pinia",
      skill: `熟练使用Pinia进行状态管理\n
          了解Pinia的原理和实现\n
          了解Pinia的插件和工具\n
          熟练使用Pinia进行状态共享\n
          `,
    },
    {
      name: "vue",
      desc: "Router",
      skill: `熟练使用Vue Router进行路由管理\n
          了解Vue Router的原理和实现\n
          熟练使用Vue Router进行路由导航\n
          熟练使用Vue Router进行路由守卫\n
          `,
    },
    {
      name: "nuxt",
      desc: "Nuxt.js",
      skill: `熟练使用Nuxt.js进行SSR和SSG\n
          熟练使用Nuxt.js进行API路由\n
          熟练使用Nuxt.js进行数据预取\n
          熟练使用Nuxt.js进行静态导出\n
          `,
    },
    {
      name: "uniapp",
      desc: "Uniapp",
      skill: `熟练使用Uniapp进行多端开发\n
      了解Uniapp的组件和API\n
      了解Uniapp的原生模块\n
      了解Uniapp的性能优化\n
      `,
    },
  ];
  const list = icon === "ts" ? tsList : icon === "react" ? reactList : vueList;
  const { isHover, setIsHover } = useContext(LayoutContext);

  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-8 iconWrapper">
      {list.map((icon, index) => (
        <LazyMotion features={domAnimation} key={index}>
          <m.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className="relative hover:z-50 z-0 group "
            key={icon.name}
            initial={{ scale: 0.5 }}
            transition={springConfig}
            whileHover={{ y: -10 }}
            whileInView={{ scale: 1 }}
          >
            <Image
              src={`/home/resume/${icon.name}.svg`}
              width={164}
              height={164}
              alt="icon"
            />
            {isHover && (
              <>
                <m.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={springConfig}
                  className="absolute text-white -top-12 inset-x-0 hidden group-hover:block  w-[10.25rem]"
                >
                  <h1 className=" font-bold text-4xl">{icon.desc}</h1>
                </m.div>
                <m.div
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={springConfig}
                  className="absolute text-white  -left-[26.25rem] top-4 hidden group-hover:block  w-[25rem] text-2xl leading-6 "
                >
                  <p className="whitespace-pre-line font-normal text-right  ">
                    {icon.skill}
                  </p>
                </m.div>
              </>
            )}
          </m.div>
        </LazyMotion>
      ))}
    </div>
  );
}
function LeftLayout() {
  const palette = [
    "#FFFDEE",
    "#FF764B",
    "#A3A3A3",
    "#F4D750",
    "#82D7F7",
    "#65B687",
  ];
  const [index, setIndex] = useState(0);
  const { setToggle } = useContext(LayoutContext);
  useEffect(() => {
    if (index === 3) {
      setToggle(true);
    }
  });
  return (
    <div className=" md:w-[34%] h-screen md:sticky  left-0 top-0 md:mx-16 mx-4 flex-col flex justify-center ">
      <div className=" flex flex-col my-3">
        <div
          onClick={() => {
            setIndex((index + 1) % 6);
          }}
          className=" flex mb-3"
        >
          <LazyMotion features={domAnimation}>
            <m.div
              style={{ background: palette[index % 6] }}
              className="w-1/6 h-5 transition-all duration-300"
            ></m.div>
          </LazyMotion>
          <div
            style={{ background: palette[(index + 1) % 6] }}
            className="w-1/6 h-5 transition-all duration-300"
          ></div>{" "}
          <div
            style={{ background: palette[(index + 2) % 6] }}
            className="w-1/6 h-5 transition-all duration-300"
          ></div>
        </div>
        <div className=" text-white md:text-sm text-xs">
          <p className=" font-bold  ">Some Tips</p>
          <p className=" font-normal  ">
            What are the colors of the Javascript, React, and Vue logos?
          </p>
        </div>
      </div>
      <Avatar />
      <div className=" flex justify-between mt-4">
        <Image
          src="/home/recyclingkami.svg"
          width={64}
          height={64}
          alt="line"
          className="mr-4 md:w-16 md:h-16 w-10 h-10"
        />
        <Image
          src="/home/recyclingpla.svg"
          width={64}
          height={64}
          alt="line"
          className="mr-4 md:w-16 md:h-16 w-10 h-10"
        />
        <Image
          src="/home/bars.svg"
          width={400}
          height={30}
          alt="line"
          className=" flex-1"
        />
      </div>
    </div>
  );
}

function RightLayout({ children }: { children: React.ReactNode }) {
  return <div className=" h-screen flex-1  ">{children}</div>;
}

function PersonalDes() {
  const desList = ["🩷视觉交互设计👀", "💓开发小玩具🧸", "❤️区块链技术🔗"];
  return (
    <div className=" h-screen w-full  text-white md:pt-8 md:pl-0  pl-4 grid grid-col-1 gap-5 pr-4  overflow-hidden   ">
      <p className=" md:text-8xl text-4xl font-bold text-center ">
        Hi!我是Creed
      </p>
      <p className=" md:text-7xl text-4xl font-bold">属🐑 双鱼座♓️</p>
      <div className="md:text-7xl text-4xl font-bold text-right group">
        <p className="group-hover:hidden block transition-all">
          吃饭 睡觉 玩游戏
        </p>
        <p className="group-hover:block hidden transition ease-in-out">
          🍛 🛌 🎮
        </p>
      </div>
      {desList.map((des, index) => (
        <LazyMotion features={domAnimation} key={index}>
          <m.p
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            whileHover={{
              transform: "rotate(10deg)",
            }}
            transition={springConfig}
            className="md:text-7xl text-4xl font-bold"
          >
            {des}
          </m.p>
        </LazyMotion>
      ))}
    </div>
  );
}
// million-ignore
function TechDes({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-screen w-full pr-12 md:grid grid-cols-1 items-center hidden  ">
      <div className=" text-5xl font-bold text-transparent text-stroke-white-2 text-right hover:text-white transition ease-in-out">
        <p>Vue React Solid</p>
        <p>TypeScript JavaScript Rust</p>
        <p>Nuxt Next Nest</p>
      </div>
      <div className=" text-white flex items-end justify-between ">
        <p className=" text-8xl font-bold  ">技术栈</p>
        <p className=" text-5xl font-bold ">Tech Stack</p>
      </div>
      {children}
    </div>
  );
}

export default function Resume() {
  const x = useMotionValue(0);
  const xInput = [0, 150, 300];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg,#FFE700 0%,#f9d423 100%)",
    "linear-gradient(180deg,  #48c6ef 0%, #6f86d6 100%)",
    "linear-gradient(180deg, #0ba360 0%, #3cba92 100%)",
  ]);
  const [icon, setIcon] = useState<"ts" | "react" | "vue">("ts");
  useEffect(() => {
    x.on("change", (v) => {
      console.log(v);
      if (v > 125 && v < 175) setIcon("react");
      else if (v <= 50) setIcon("ts");
      else if (v >= 250) setIcon("vue");
    });
  });
  const [isHover, setIsHover] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        style={toggle ? { background } : {}}
        className="snap-center  bg-[#0250EE] w-full md:flex h-[200vh] relative  transition-all duration-300 "
      >
        <div
          className={` ${
            isHover ? "opacity-80 visible z-30" : "hidden"
          }     w-full h-full bg-black absolute `}
        ></div>
        <Suspense fallback={<div>Loading...</div>}>
          <LayoutContext.Provider value={{ isHover, setIsHover, setToggle }}>
            <LeftLayout />
            <BackText />
            <RightLayout>
              <PersonalDes />
              <TechDes>
                <IconGroup icon={icon} />
                {toggle && (
                  <LazyMotion features={domAnimation}>
                    <m.div
                      className="w-32 h-32 "
                      style={{ x }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 300 }}
                      whileHover={{ scale: 0.9 }}
                      whileTap={{
                        scale: 0.8,
                      }}
                    >
                      <DynamicIcon icon={icon} />
                    </m.div>
                  </LazyMotion>
                )}
              </TechDes>
            </RightLayout>
          </LayoutContext.Provider>
        </Suspense>
      </m.div>
    </LazyMotion>
  );
}
