import React from "react";
import Image from "next/legacy/image";
import TakealotClone from "../public/images/takealotclone.png";
import GazaEsport from "../public/images/gazaesport.png"
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Takealot clone",
      imgSrc: TakealotClone,
      url: "/takealotclone",
    },
    {
      id: 2,
      title: "GaZA Esport",
      imgSrc: GazaEsport,
      url: "/gazaesport",
    },
  ];
  return (
    <div style={{ marginTop: "64px" }}>
      <div id="projects" className="w-full">
        <div className="max-w-screen-xl mx-auto px-8 py-16 pt-24 text-center">
          <h1 className="py-4 text-5xl ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
              {" "}
              Projects
            </span>
          </h1>

          <div className="max-5xl mx-auto grid md:grid-cols-2 gap-8 ">
            {projects.map(({ id, title, imgSrc,url }) => (
              <div key={id}>
                <div className="relative cursor-pointer group shadow-sm overflow-hidden rounded-lg">
                  <Image
                    src={imgSrc}
                    alt={title}
                    className="duration-200 hover:scale-110 group-hover:opacity-50 rounded-lg"
                    height={700}
                    width={900}
                    quality={100}
                  />

                  <div className="hidden group-hover:flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0">
                    <h1 className="text-lg my-4 duration-300 tracking-wide text-center">
                      {title}
                    </h1>
                    <Link href={url}>
                      <p className="text-center px-4 py-2 pb-2 rounded-lg bg-gradient-to-r from-fuchsia-800 to-violet-600 text-white">
                        <span>view</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 inline-block align-middle ml-2"
                        >
                          <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                          <path
                            fillRule="evenodd"
                            d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
