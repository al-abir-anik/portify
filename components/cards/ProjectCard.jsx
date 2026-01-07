"use client";
import { motion } from "framer-motion";
import { upArrowGradientIcon } from "@/data/icons";
import Link from "next/link";

const ProjectCard = ({ work }) => {
  const easing = [0.66, 0, 0.01, 1];

  const bgVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2 },
  };
  const titleVariants = {
    initial: { x: -200 },
    hover: { x: 0 },
  };
  const btnVariants = {
    initial: { x: 70, rotate: 55 },
    hover: { x: 0, rotate: 0 },
  };
  const descVariants = {
    initial: { y: 120 },
    hover: { y: 0 },
  };

  return (
    <motion.div
      className="group relative w-full aspect-square rounded-[20px] overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${work.image})` }}
        variants={bgVariants}
        transition={{ duration: 0.6, ease: easing }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc800/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Desktop screen */}
      <div className="w-full h-fit p-[18px] hidden xl:flex justify-between absolute bottom-0 left-0 z-10">
        {/* Title */}
        <motion.div
          variants={titleVariants}
          transition={{ duration: 0.6, ease: easing }}
          className="w-fit h-12 py-2 px-[26px] flex items-center gap-[18px] text-sm font-medium text-zinc-800 bg-white rounded-full"
        >
          <p>{work.title}</p>
          <p>/</p>
          <p>{work.year}</p>
        </motion.div>

        {/* Button */}
        <Link href={`my-works/${work.url}`}>
          <motion.div
            variants={btnVariants}
            transition={{ duration: 0.6, ease: easing }}
            className="w-12 h-12 grid place-items-center bg-white/90 outline-1 outline-white rounded-full backdrop-blur-md"
          >
            {upArrowGradientIcon}
          </motion.div>
        </Link>
      </div>

      {/* Mobile screen */}
      <div className="xl:hidden w-full h-fit p-[18px] flex justify-between absolute bottom-0 left-0 z-10">
        {/* Title */}
        <div className="w-fit h-12 py-2 px-[26px] flex items-center gap-[18px] text-sm font-medium text-zinc-800 bg-white rounded-full">
          <p>{work.title}</p>
          <p>/</p>
          <p>{work.year}</p>
        </div>

        {/* Button */}
        <Link
          href={`my-works/${work.url}`}
          className="w-12 h-12 grid place-items-center bg-white/90 outline-1 outline-white rounded-full backdrop-blur-md"
        >
          {upArrowGradientIcon}
        </Link>
      </div>

      {/* Description */}
      {/* <motion.p
        variants={descVariants}
        transition={{ duration: 0.6, ease: easing }}
        className="w-2xs m-11 text-sm font-medium text-white relative z-10"
      >
        {work.description}
      </motion.p> */}
    </motion.div>
  );
};

export default ProjectCard;
