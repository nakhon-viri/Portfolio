import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className=" w-full  bg-white  z-30 fixed">
      <div className=" py-3 px-5 flex max-w-7xl m-auto">
        <div className="font-Pacifico flex text-4xl font-extrabold  flex-1 items-center">
          <div>Nakhon</div>
        </div>
        <div className="md:flex text-2xl items-center gap-3 hidden">
          <Link href="/">
            <a className={router.asPath == "/" ? " text-emerald-200" : ""}>
              Home
            </a>
          </Link>
          <Link href="/resume">
            <a
              className={router.asPath == "/resume" ? " text-emerald-200" : ""}
            >
              Resume
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={
                router.asPath == "/portfolio" ? " text-emerald-200" : ""
              }
            >
              Portfolio
            </a>
          </Link>
        </div>
        <div
          onClick={() => setMenu(true)}
          className="md:hidden flex justify-center items-center text-3xl"
        >
          <BiMenu />
        </div>

        <div
          className={`z-50 child:font-bold child:text-3xl  h-full flex flex-col justify-center items-center duration-75 ease-linear bg-emerald-100 fixed top-0 right-0 left-0  p-52 gap-10  ${
            menu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div
            onClick={() => setMenu(false)}
            className=" absolute top-6 right-6 text-3xl "
          >
            <GrClose />
          </div>
          <Link href="/">
            <a
              className={
                router.asPath == "/" ? " text-emerald-400" : "text-gray-600"
              }
              onClick={() => setMenu(false)}
            >
              Home
            </a>
          </Link>
          <Link href="/resume">
            <a
              className={
                router.asPath == "/resume"
                  ? " text-emerald-400"
                  : "text-gray-600"
              }
              onClick={() => setMenu(false)}
            >
              Resume
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={
                router.asPath == "/portfolio"
                  ? " text-emerald-400"
                  : "text-gray-600"
              }
              onClick={() => setMenu(false)}
            >
              Portfolio
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
