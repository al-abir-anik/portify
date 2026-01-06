"use client";
import { useEffect, useRef, useState } from "react";
import { process } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let newActive = -1;
      const viewportCenter = window.innerHeight / 2.2;

      sectionRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const top = ref.getBoundingClientRect().top;
        if (top < viewportCenter) {
          newActive = idx;
        }
      });

      setActiveIndex(newActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 12.49%, #FFF 87.5%, rgba(255, 255, 255, 0.00) 100%), #F4F4F5",
      }}
    >
      <div className="w-full max-w-[1200px] px-[15px] sm:px-[30px] py-[120px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <h2 className="w-fit font-medium text-5xl sm:text-[64px] leading-[80%] md:sticky md:top-[196px]">
          Process
        </h2>

        <div className="w-full md:w-[570px] flex flex-col gap-5">
          {process.map((p, index) => (
            <motion.div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="w-full p-5 flex flex-col gap-6 border-2 border-zinc100 rounded-3xl"
            >
              {/* header */}
              <motion.div
                animate={{
                  color: index <= activeIndex ? "" : "#52525b",
                  backgroundColor: index <= activeIndex ? "" : "#f4f4f5",
                }}
                className={`w-fit py-1 px-4 flex gap-4 rounded-full font-medium overflow-hidden whitespace-nowrap ${
                  index <= activeIndex &&
                  "text-white bg-primary-gradient shadow-primary"
                }`}
              >
                <p>0{p.id} —</p>
                <motion.p
                  initial={{ maxWidth: 0, opacity: 0, x: -10 }}
                  animate={{
                    maxWidth: index <= activeIndex ? 200 : 0,
                    opacity: index <= activeIndex ? 1 : 0,
                    x: index <= activeIndex ? 0 : -10,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {p.title}
                </motion.p>
              </motion.div>

              {/* description */}
              <div className="w-full flex flex-col gap-3">
                <p className="text-zinc500 leading-[130%]">{p.description}</p>
                {/* images */}
                {/* <motion.div
                  className="flex gap-3 overflow-hidden"
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    maxHeight: index === activeIndex ? 200 : 0,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <figure className="w-[200px] h-[120px] rounded-xl relative overflow-hidden">
                    <Image
                      src={p.image1}
                      alt="service image"
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </figure>
                  <figure className="w-[200px] h-[120px] rounded-xl relative overflow-hidden">
                    <Image
                      src={p.image2}
                      alt="services image"
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </figure>
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
