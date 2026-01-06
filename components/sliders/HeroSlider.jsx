"use client";
import Link from "next/link";
import { heroSlider } from "@/data/data";
import { upArrowGradientIcon } from "@/data/icons";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  easeInOut,
} from "framer-motion";

const HeroSlider = () => {
  const x = useMotionValue(0);
  const speed = useMotionValue(2);
  const targetSpeed = useMotionValue(2);
  const totalWidth = heroSlider.length * 288 + heroSlider.length * 14;

  useAnimationFrame(() => {
    // Smooth speed change
    const newSpeed = speed.get() + (targetSpeed.get() - speed.get()) * 0.1;
    speed.set(newSpeed);

    // Move x
    const nextX = x.get() - speed.get();

    // Wrap around when one full slider set has scrolled
    x.set(nextX <= -totalWidth ? nextX + totalWidth : nextX);
  });

  const nameVariants = {
    initial: { y: 100 },
    hover: { y: 0 },
  };

  return (
    <div
      className="w-full rounded-3xl select-none overflow-hidden"
      onMouseEnter={() => targetSpeed.set(0.5)}
      onMouseLeave={() => targetSpeed.set(1.5)}
    >
      <motion.div style={{ x }} className="w-fit flex gap-2.5">
        {[...heroSlider, ...heroSlider].map((project, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileHover="hover"
            className="w-[280px] h-[370px] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-center bg-cover rounded-3xl"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* desktop project card */}
            <motion.div
              variants={nameVariants}
              transition={{ duration: 0.4, ease: easeInOut }}
              className="w-full h-fit p-[18px] flex absolute bottom-0 left-0 z-10"
            >
              <p className="w-fit h-12 py-2 px-[26px] flex items-center gap-[18px] text-sm font-medium text-zinc-800 bg-white rounded-full">
                {project.title}
              </p>

              {/* Button */}
              <Link
                href={`my-works/${project.url}`}
                className="w-12 h-12 grid place-items-center bg-white rounded-full backdrop-blur-md hover:rotate-45 duration-500 ease-in-out"
              >
                {upArrowGradientIcon}
              </Link>
            </motion.div>

            {/* mobile project card */}
            <motion.div className="w-full h-fit p-[18px] xl:hidden flex absolute bottom-0 left-0 z-10">
              <p className="w-fit h-12 py-2 px-[26px] flex items-center gap-[18px] text-sm font-medium text-zinc-800 bg-white rounded-full">
                {project.title}
              </p>

              {/* Button */}
              <Link
                href={`my-works/${project.url}`}
                className="w-12 h-12 grid place-items-center bg-white rounded-full backdrop-blur-md hover:rotate-45 duration-500 ease-in-out"
              >
                {upArrowGradientIcon}
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSlider;
