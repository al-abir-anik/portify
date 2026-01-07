"use client";
import Image from "next/image";
import { skills } from "@/data/data";
import { oswald } from "@/lib/fonts";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import React from "react";
import Rating from "../Rating";

const FormSlider = () => {
  const x = useMotionValue(0);
  const speed = useMotionValue(2);
  const targetSpeed = useMotionValue(2);
  const totalWidth = 1291 + 4 * 20;

  useAnimationFrame(() => {
    // Smooth speed change
    const newSpeed = speed.get() + (targetSpeed.get() - speed.get()) * 0.1;
    speed.set(newSpeed);

    // Move x
    const nextX = x.get() - speed.get();

    // Wrap around when one full slider set has scrolled
    x.set(nextX <= -totalWidth ? nextX + totalWidth : nextX);
  });

  return (
    <div
      className="w-full rounded-3xl select-none overflow-hidden"
      onMouseEnter={() => targetSpeed.set(0.5)}
      onMouseLeave={() => targetSpeed.set(2)}
    >
      <motion.div
        style={{ x }}
        className="w-max h-[275px] flex gap-5 rounded-3xl"
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {/* 1-total xp */}
            <div className="h-full p-5 rounded-3xl bg-white/40 select-none overflow-hidden">
              <div className="w-[196px] flex flex-col gap-[30px]">
                <h5
                  className={`${oswald.className} text-[120px] font-medium leading-[100%] bg-secondary-gradient text-transparent bg-clip-text`}
                >
                  15+
                </h5>
                <p className="text-xl text-zinc500 leading-[150%]">
                  Years of experience in Design & Development
                </p>
              </div>
            </div>

            {/* 2-review */}
            <div className="w-[320px] h-full p-5 rounded-3xl bg-white/40 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-3 shrink-0">
                <figure className="w-[120px] h-[120px] rounded-lg relative overflow-hidden">
                  <Image
                    src="/images/reviewer2.png"
                    alt="reviewer photo"
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                  />
                </figure>
                <Rating rating={5.0} />
              </div>
              <p className="leading-[130%]">
                &quot; Duncan truly understood my vision and turned it into impactful
                designs, the results went beyond my expectations! &quot;
              </p>
            </div>

            {/* 3-100% */}
            <div className="flex-1 h-full p-5 rounded-3xl bg-white/40 flex flex-col justify-between">
              <h5
                className={`${oswald.className} bg-primary-gradient text-transparent bg-clip-text text-7xl font-medium leading-[100%]`}
              >
                100%
              </h5>
              <p className="w-full leading-[130%]">Client satisfaction rate</p>
            </div>

            {/* 4-skills */}
            <div className="w-[456px] h-full px-[30px] py-[52px] rounded-3xl bg-white/40 flex flex-wrap gap-3">
              {skills.map((s) => (
                <button
                  key={s.title}
                  className="w-fit py-4 pl-4 pr-6 rounded-[20px] outline outline-zinc200 bg-zinc50 flex gap-2 items-center"
                >
                  <span className="w-6 h-6 flex items-center justify-center">
                    {s.icon}
                  </span>
                  <p className="text-xl font-medium">{s.title}</p>
                </button>
              ))}
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default FormSlider;
