import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GrStatusCriticalSmall, GrClose } from "react-icons/gr";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Image from "next/image";
const Portfolio: NextPage = () => {
  const ProLang = ["JavaScript", "TypeScript", "CSS", "HTML", "C", "C#"];

  const [viewImage, setViewImage] = useState<boolean>(false);

  const [orderImage, setOrderImage] = useState<number>(1);

  const [nameImage, setNameImage] = useState<string>("image");

  const [countImage, setCountImage] = useState<number>(1);

  const [porjectName, setPorjectName] = useState("");

  const handleOrderImage = (order: boolean) => {
    setOrderImage((p) => {
      if (p == countImage && order) return 1;
      if (p == 1 && !order) return countImage;
      if (order) return p + 1;
      return p - 1;
    });
    console.log(`img/${nameImage + "" + orderImage}.png`);
  };

  // useEffect(() => {
  //   var allBodyTag = document.body.getElementsByTagName("img");
  //   for (var i = 0; i < allBodyTag.length; i++) {
  //     allBodyTag[i].removeAttribute("style");
  //   }
  // }, []);

  const ShowListImage = () => {
    return (
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  z-50 scrollbar-hide ${
          viewImage ? "" : "hidden"
        }`}
      >
        <div className="relative px-14 w-[1200px] z-10 bg-white ">
          <div
            onClick={() => setViewImage(false)}
            className=" absolute top-6 right-6 cursor-pointer"
          >
            <GrClose />
          </div>
          <h1 className="text-3xl pt-10 font-semibold border-t-[10px] border-emerald-300 w-fit text-emerald-300">
            {porjectName}
          </h1>
          <div className="flex justify-center items-center gap-5 odd:text-5xl odd:p-2 p-10 odd:cursor-pointer odd:text-emerald-200">
            <i
              onClick={() => handleOrderImage(false)}
              className="hover:rounded-full hover:bg-black hover:bg-opacity-10  active:bg-opacity-5 select-none"
            >
              <BsCaretLeftFill />
            </i>
            <img src={`img/${nameImage + "" + orderImage}.png`} alt="" />
            <i
              onClick={() => handleOrderImage(true)}
              className="hover:rounded-full hover:bg-black hover:bg-opacity-10 active:bg-opacity-5 select-none"
            >
              <BsFillCaretRightFill />
            </i>
          </div>
        </div>
        <div className="bg-black absolute top-0 left-0 right-0 bottom-0  opacity-70 "></div>
      </div>
    );
  };

  const openImage = (image: string, count: number, name: string) => {
    setViewImage(true);
    setCountImage(count);
    setNameImage(image);
    setPorjectName(name);
    setOrderImage(1);
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Portfolio by Nakhon Viriyarodjanawut"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {viewImage ? <ShowListImage /> : null}
      <div
        className={`w-full bg-green-200 flex items-center justify-center pt-40 md:pt-52 p-5 pb-40 ${
          viewImage ? "h-screen overflow-hidden" : ""
        }`}
      >
        <div className="flex flex-col gap-14 max-w-4xl">
          <h1 className=" flex items-center justify-center gap-2 text-4xl font-bold ">
            <span className=" text-emerald-400">
              <GrStatusCriticalSmall />
            </span>
            Portfolio
          </h1>
          <div className="flex flex-col gap-12 child:min-h-[286px]">
            <div className=" bg-white gap-5 md:gap-0 grid grid-cols-1 md:grid-cols-2 shadow-2xl">
              <div>
                <div className="pt-12 pb-8">
                  <div className=" border-l-[10px] border-emerald-400  pl-6 ">
                    <h1 className="text-lg  font-bold text-emerald-500">
                      Website Transportation Management System
                    </h1>
                    <span className="text-sm font-semibold">
                      JavaScript (react, express.js)
                    </span>
                  </div>
                </div>
                <div className="px-6">
                  Senior project of information technology, transportation
                  management system.
                </div>
              </div>
              <div className="flex cursor-pointer container">
                <img
                  className="border w-full h-auto transition duration-150  ease-linear image"
                  src="img/grand1.png"
                />
                <div className="overlay flex justify-center items-center">
                  <div
                    onClick={() =>
                      openImage(
                        "grand",
                        6,
                        "Website Transportation Management System"
                      )
                    }
                    className=" text-center text-white px-6 py-3 border select-none"
                  >
                    View
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white grid grid-cols-1  gap-5 md:gap-0 md:grid-cols-2 shadow-2xl">
              <div>
                <div className="pt-12 pb-8">
                  <div className=" border-l-[10px] border-emerald-400  pl-6 ">
                    <h1 className="text-lg  font-bold text-emerald-500">
                      Stock windows application
                    </h1>
                    <span className="text-sm font-semibold">C#</span>
                  </div>
                </div>
                <div className="px-6">
                  The windows appication stock, final project of event driven
                  programing.
                </div>
              </div>
              <div className=" flex cursor-pointer container">
                <img
                  className="border w-full h-auto transition duration-150  ease-linear image"
                  src="img/image2.png"
                />
                <div className="overlay flex justify-center items-center">
                  <div
                    onClick={() =>
                      openImage("image", 3, "Stock windows application")
                    }
                    className=" text-center text-white px-6 py-3 border select-none"
                  >
                    View
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
