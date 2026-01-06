"use client";
import { useEffect, useRef, useState } from "react";
import { oswald } from "@/lib/fonts";
import { motion } from "framer-motion";
import { about } from "@/data/data";

const About = () => {
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
    <section className="w-full px-[15px] sm:px-[30px] py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12 md:justify-between md:items-start">
        <h2 className="w-fit font-medium text-5xl sm:text-[64px] leading-[100%] md:leading-[80%] lg:sticky lg:top-[196px]">
          About
        </h2>

        <div className="w-full md:w-[570px] flex flex-col gap-14">
          {about.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="flex flex-col gap-3 scroll-mt-[50vh]"
            >
              {/* Title + bullet */}
              <div className="flex items-center gap-4">
                <motion.span
                  animate={{
                    backgroundColor:
                      index <= activeIndex ? "#F64617" : "#71717a",
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index <= activeIndex && "shadow-primary"
                  }`}
                />
                <h3 className="text-zinc-500">{item.title}</h3>
              </div>

              {/* Text or career list */}
              {item.id !== "career" ? (
                <p className="text-xl leading-[150%]">{item.text}</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {item.career.map((c, i) => (
                    <div
                      key={i}
                      className="w-full md:w-[504px] flex justify-between items-center"
                    >
                      <p className="w-[300px] text-xl leading-[150%]">
                        {c.post}
                      </p>
                      <p
                        className={`w-12 text-xl leading-[100%] ${oswald.className} text-zinc400`}
                      >
                        {c.year}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
