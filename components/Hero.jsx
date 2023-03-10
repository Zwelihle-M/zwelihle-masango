import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Emoji from "../public/images/Emoji.svg";
import BackgroundShapes from "./BackgroundShapes";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome",
      "Zwelihle Masango",
      "Software Engineer",
      "Web Developer/Designer",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 60,
  });

  return (
    <header
      id="home"
      className="h-screen w-full flex flex-col space-y-8 items-center justify-center text-center"
    >
      <BackgroundShapes />

      {/* bubble head */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      >
        <Image
          src={Emoji}
          alt="emoji placeholder"
          priority
          quality={100}
          as="image"
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600">
            {text}
          </span>
          <Cursor cursorColor="#7F00FF" />
        </h1>

        <div className="pt-5"></div>
      </motion.div>
    </header>
  );
};

export default Hero;
