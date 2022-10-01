import type { NextPage } from "next";
import Head from "next/head";
import { GrStatusCriticalSmall, GrStatusInfoSmall } from "react-icons/gr";
const Resume: NextPage = () => {
  const ProLang = ["JavaScript", "TypeScript", "CSS", "HTML", "C", "C#"];
  const Framework = [
    "React",
    "Express.js",
    "Nest JS",
    "React Native",
    "Vue.js",
    "Angular",
    ".NET",
  ];
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content="Portfolio by Nakhon Viriyarodjanawut"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full bg-green-200 flex items-center justify-center pt-40 md:pt-52 p-5 pb-40">
        <div className=" max-w-3xl ">
          <h1 className=" flex items-center justify-center gap-2 text-4xl font-bold mb-14">
            <span className=" text-emerald-400">
              <GrStatusCriticalSmall />
            </span>
            Resume
          </h1>
          <div className="flex flex-col gap-24">
            <div>
              <div className="text-2xl font-bold border-l-4 leading-none border-emerald-400 px-4 mb-10">
                Skill
              </div>
              <div className=" px-10 py-24 w-full bg-white shadow-2xl ">
                <div className="mb-24">
                  <h1 className="text-2xl font-bold ">Programming language</h1>
                  <br />
                  <div className="grid grid-cols-2 w-full justify-start items-start gap-y-10 ">
                    {ProLang.map((item, index) => (
                      <li
                        key={index}
                        className="text-lg flex items-center gap-2"
                      >
                        <span className="text-sm text-emerald-400">
                          <GrStatusInfoSmall />
                        </span>
                        {item}
                      </li>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold ">Framework</h1>
                  <br />
                  <ul className="grid grid-cols-2 w-full justify-start items-start gap-y-10 ">
                    {Framework.map((item, index) => (
                      <li
                        key={index}
                        className="text-lg flex items-center gap-2"
                      >
                        <span className="text-sm text-emerald-400">
                          <GrStatusInfoSmall />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold border-l-4 leading-none border-emerald-400 px-4 mb-10">
                Experience
              </div>
              <div className="flex flex-col gap-12">
                <div className=" w-full max-w-3xl bg-white px-10 pt-24 pb-16 shadow-2xl ">
                  <h1 className="text-2xl font-bold text-emerald-400 mb-4">
                    2564
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <h1 className="mb-4">
                        Website Transportation Management System
                      </h1>
                      <br />
                      <h1>JavaScript (react, express.js)</h1>
                    </div>
                    <div>
                      <span>
                        Senior project of information technology, transportation
                        management system.
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" w-full max-w-3xl bg-white px-10 pt-24 pb-16 shadow-2xl ">
                  <h1 className="text-2xl font-bold text-emerald-400 mb-4">
                    2563
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <h1 className="mb-4">Play music app</h1>
                      <br />
                      <h1>Java</h1>
                    </div>
                    <div>
                      <span>
                        Final project Music App in Object Oriented Programming.
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-full max-w-3xl bg-white px-10 pt-24 pb-16 shadow-2xl ">
                  <h1 className="text-2xl font-bold text-emerald-400 mb-4">
                    2562
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <h1 className="mb-4">Stock book app </h1>
                      <br />
                      <h1>C# </h1>
                    </div>
                    <div>
                      <span>
                        The windows appication stock, final project of event
                        driven programing.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold border-l-4 leading-none border-emerald-400 px-4 mb-10">
                Education
              </div>
              <div className="flex flex-col gap-12">
                <div className=" w-full max-w-3xl bg-white px-10 pt-24 pb-16 shadow-2xl ">
                  <h1 className="text-2xl font-bold text-emerald-400 mb-4">
                    2561 - 2565
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <h1 className="mb-4">Bangkok University</h1>
                    </div>
                    <div>
                      <span>
                        Faculty of Information Technology and Innovation. <br />
                        <br />
                        Computer Science.
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" w-full max-w-3xl bg-white px-10 pt-24 pb-16 shadow-2xl ">
                  <h1 className="text-2xl font-bold text-emerald-400 mb-4">
                    2556 - 2561
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <h1 className="mb-4">
                        Triamudomsuksanomklao Pathumthani School
                      </h1>
                    </div>
                    <div>
                      <span>Science and math.</span>
                    </div>
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

export default Resume;
