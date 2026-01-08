"use client";
import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { experience, skills } from "@/data/data";
import { oswald } from "@/lib/fonts";

const AboutSlider = () => {
  const x = useMotionValue(0);
  const speed = useMotionValue(2);
  const targetSpeed = useMotionValue(2);
  const totalWidth = 1780 + 4 * 20;

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
      <motion.div style={{ x }} className="w-max flex gap-5 rounded-3xl">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {/* 1-total xp */}
            <div className="w-[370px] h-[370px] p-5 rounded-3xl flex justify-center items-center bg-white select-none overflow-hidden">
              <div className="w-[196px] flex flex-col gap-7">
                <h5
                  className={`${oswald.className} text-[120px] font-medium leading-[100%] bg-primary-gradient text-transparent bg-clip-text`}
                >
                  15+
                </h5>
                <p className="text-xl text-zinc500 leading-[150%]">
                  Years of experience in Design & Development
                </p>
              </div>
            </div>

            {/* 2-image */}
            <figure className="w-[370px] h-[370px] rounded-3xl relative border-[12px] border-white select-none overflow-hidden">
              <Image
                src="/images/aboutImg.png"
                alt="profile-pic"
                fill
                sizes="370px"
                className="object-cover object-center grayscale scale-[1.1]"
              />
            </figure>

            {/* 3-skills */}
            <div className="w-[405px] h-[370px] px-[30px] py-[52px] rounded-3xl bg-white flex flex-col gap-11">
              <h4 className="text-[40px] font-medium text-zinc400">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <button
                    key={s.title}
                    className="w-fit py-4 pl-4 pr-6 rounded-[20px] outline outline-zinc200 bg-zinc50 flex gap-2 items-center"
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      {s.icon}
                    </span>
                    <p className="font-medium">{s.title}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4-experience */}
            <div className="w-fit h-[370px] p-2.5 flex gap-6 rounded-3xl bg-white/40 border border-white">
              <span className="h-[200px] p-2.5 flex items-center">
                <p className="text-[40px] font-medium text-zinc400 leading-[130%]">
                  Professional <br /> Experience
                </p>
              </span>
              <div className="w-[358px] h-full rounded-[22.5px] bg-white">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="w-full py-3 px-5 flex flex-col gap-1.5"
                  >
                    <div className="w-full flex justify-between items-center">
                      <p className=" font-medium text-xl">{exp.post}</p>
                      <p className={`${oswald.className} text-zinc400 text-xl`}>
                        {exp.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <img
                        src={exp.companyLogo}
                        alt="company logo"
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <p className="text-sm text-zinc500">{exp.companyName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSlider;
