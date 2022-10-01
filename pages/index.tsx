import type { NextPage } from "next";
import Head from "next/head";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
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
      <div className="w-full flex items-center justify-center md:absolute md:top-0 md:bottom-0 md:ring-0 md:left-0 pt-24 p-5">
        {/* <div className=" max-w-7xl flex flex-col-reverse md:flex-row justify-center items-center md:gap-24 p-5">
          <div className=" flex flex-col">
            <span className="text-3xl md:order-2 md:text-6xl font-bold mb-10">
              Hello, I'm <br className="md:hidden" />
              <ReactTextTransition
                inline
                children={texts[textIndex % texts.length]}
                className="text-[gold]"
              />
            </span>

            <p className="md:order-1 text-lg font-semibold mb-2">
              Welcome to my portfolio!
            </p>

            <p className="order-3 font-medium text-xl mb-7">
              I'm interested in website development. and want to learn about the
              website web development.
            </p>
            <span className="order-4 mx-auto md:mx-0">
              <Link href="/contact">
                <a className="px-4 py-2 bg-[gold] active:ring-offset-2 ring-[gold] active:ring w-fit text-white font-medium">
                  Get contact
                </a>
              </Link>
            </span>
          </div>

          <div className="p-5 ">
            <img
              className=" w-92 h-92 rounded-full max-w-full"
              src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
            />
          </div>
        </div> */}

        <div className="gap-20 max-w-7xl flex items-center justify-center pt-20 z-10">
          <div className=" bg-emerald-100 shadow-2xl flex  flex-col items-center justify-center px-20 py-16  gap-10">
            <img
              className=" w-60 h-60 rounded-full "
              src="Me.jpg"
            />
            <h1 className=" text-3xl  font-bold text-center">
              Nakhon <br /> Viriyarodjanawut
            </h1>

            <div className=" w-16 h-[2px] bg-black"></div>

            <h1 className="uppercase text-2xl">Web developer</h1>
          </div>
          <div className="select-none">
            <h1 className=" text-8xl font-bold">Hello</h1>
            <ReactTextTransition
              springConfig={presets.gentle}
              className="big"
              delay={0}
              inline
              children={texts[textIndex % texts.length]}
            />
            <div className="flex flex-col child:text-3xl   items-start ml-8 gap-5">
              <div className="flex justify-center items-center gap-2">
                <span className="flex items-center gap-2 text-2xl ">
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
                <span className="flex items-center gap-2 text-2xl text-black">
                  <FaGithub /> Github
                </span>
                :
                <Link href={"https://github.com/nakhon-viri"}>
                  <a className="text-blue-500 cursor-pointer hover:underline hover:decoration-1 underline-offset-2">
                    Neko&Cat (nakhon-viri)
                  </a>
                </Link>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className=" text-2xl flex items-center gap-2  text-gay-200">
                  <HiMail />
                  Mail
                </span>
                :
                <p className="cursor-pointer hover:underline hover:decoration-1 underline-offset-2">
                  nakhon.viri@bumail.net
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute left-0 top-0 bottom-0 w-2/5 bg-green-200"></div>
      </div>
    </>
  );
};

export default Home;
