import type { NextPage } from "next";
import Head from "next/head";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { GiRotaryPhone } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

import ReactTextTransition, { presets } from "react-text-transition";

import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const texts = ["Nakhon", "Web developer", "Back-end dev"];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((t) => t + 1);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nakhon Viriyarodjanawut</title>
        <meta
          name="description"
          content="Portfolio by Nakhon Viriyarodjanawut"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex items-center justify-center md:absolute md:top-0 md:bottom-0 md:ring-0 md:left-0 p-5">
        <div className="gap-20 max-w-7xl flex md:flex-1 flex-col md:flex-row justify-center items-center pt-20 z-10">
          <div className="md:w-1/2 flex justify-end">
            <div className=" bg-emerald-100 shadow-2xl flex w-fit flex-col items-center justify-center px-8 md:px-20 py-16  gap-10">
              <Image
                src="/me.jpg"
                width={240}
                height={240}
                className="rounded-full"
              />
              {/* <img className=" w-60 h-60 rounded-full " src="Me.jpg" /> */}
              <h1 className=" text-3xl  font-bold text-center">
                Nakhon <br /> Viriyarodjanawut
              </h1>

              <div className=" w-16 h-[4px] bg-white"></div>

              <h1 className="uppercase text-2xl">Web developer</h1>
            </div>
          </div>

          <div className="select-none flex flex-col gap-10 md:w-1/2">
            <h1 className="text-5xl md:text-8xl font-bold mb-5 md:mb-0">
              Hello, I'm
              <span className=" text-emerald-300 text-5xl">
                <ReactTextTransition
                  springConfig={presets.gentle}
                  children={texts[textIndex % texts.length]}
                />
              </span>
            </h1>
            <div className="flex gap-10 child:cursor-pointer">
              <Link
                href={"/resume"}
                className="p-2 px-5 w-fit text-white bg-emerald-300 ring-emerald-300 ring-offset-2 hover:ring-2"
              >
                <a className="p-2 px-5 w-fit text-white bg-emerald-300 ring-emerald-300 ring-offset-2 hover:ring-2">
                  Resume
                </a>
              </Link>
              <Link href={"/portfolio"}>
                <a className="p-2 px-5 w-fit text-emerald-300 border-2 border-emerald-300 hover:bg-emerald-300 hover:text-white">
                  Portfolio
                </a>
              </Link>
            </div>
            <div className="flex flex-col child:text-xl    items-start gap-5">
              <div className="flex justify-center items-center gap-2">
                <span className="flex items-center gap-2 ">
                  <span className="text-[#1877f2]">
                    <FaFacebookF />
                  </span>
                  Facebook
                </span>
                :
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100009812853374"
                  }
                >
                  <a className="text-blue-500 cursor-pointer hover:underline hover:decoration-1 underline-offset-2">
                    Nakhon Viriyarodjanawut
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="flex items-center gap-2  text-black">
                  <FaGithub /> Github
                </span>
                :
                <Link href={"https://github.com/nakhon-viri"}>
                  <a className="text-blue-500 cursor-pointer hover:underline hover:decoration-1 underline-offset-2">
                    Neko&amp;Cat (nakhon-viri)
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="  flex items-center gap-2  text-gay-200">
                  <HiMail />
                  Mail
                </span>
                :<p>nakhon.viri@bumail.net</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="  flex items-center gap-2  text-gay-200">
                  <GiRotaryPhone />
                  Tel.
                </span>
                :<p>064-331-8396</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-2/5 bg-green-200"></div>
      </div>
    </>
  );
};

export default Home;
