/**
 *
 * @author Creed Chung
 * @description 加载页
 *
 */
interface Props {
  text: string;
  size: string;
  isAbs?: boolean;
  pos?: { x: number; y: number };
}
function LoadingText({ text, size, isAbs = false, pos }: Props) {
  return (
    <p
      className={`text-transparent text-stroke-2 bolder font-normal ${size}  ${
        isAbs ? "absolute" : ""
      }
        `}
      style={isAbs ? { top: pos?.x, left: pos?.y } : {}}
    >
      {text}
    </p>
  );
}
function LoadingCircle() {
  return (
    <>
      <div className="absolute top-[105px] left-[105px] w-[256px] h-[256px] rounded-full bg-transparent border-black border-solid border-2"></div>
      <div className="absolute flex justify-center items-center top-[145px] left-[145px] w-[176px] h-[176px]  rounded-full bg-transparent border-black border-solid border-2">
        <LoadingText text="98" size="text-7xl" />
      </div>
    </>
  );
}
function LoadingButtom() {
  const texts = [350, 450, 550, 650];
  return (
    <div className="  w-full">
      {texts.map((item, index) => (
        <LoadingText
          text="CREEDCHUNG"
          size="text-[244px]"
          isAbs={true}
          pos={{ x: item, y: 0 }}
          key={index}
        />
      ))}
    </div>
  );
}
export default function LoadingSkeleton() {
  return (
    <div className=" relative w-full h-full bg-indigo-500 overflow-hidden">
      <LoadingCircle />
      <LoadingText
        text="加载中"
        size="text-9xl"
        isAbs={true}
        pos={{ x: 200, y: 1200 }}
      />
      <LoadingButtom />
    </div>
  );
}
