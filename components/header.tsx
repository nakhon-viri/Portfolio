import type { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div className=" w-full border-b  bg-white  z-30 fixed">
      <div className=" py-3 px-5 flex max-w-7xl m-auto">
        <div className=" flex text-4xl font-extrabold  flex-1 items-center">
          <div className=" w-14 h-14 rounded-full bg-amber-300 mr-[5px]"></div>
          <div>Nakhon</div>
        </div>
        <div className="flex text-2xl items-center gap-3 font-bold">
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/protfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
