"use client";
import { useState } from "react";
import { faq } from "@/data/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full px-[15px] sm:px-[30px] py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <h2 className="w-fit h-fit font-medium text-5xl sm:text-[64px] leading-[130%]">FAQ</h2>

        <div className="w-full md:w-[570px] flex flex-col gap-5">
          {faq.map((faq, index) => (
            <div
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full p-5 outline-2 outline-white rounded-3xl  transition-colors duration-500 ease-in-out overflow-hidden cursor-pointer ${
                openIndex === index ? "bg-white" : "bg-white/40"
              }`}
            >
              <div className="font-medium flex items-center justify-between gap-[30px]">
                <span>{faq.question}</span>
                {/* open icon */}
                <span
                  className={`transition-all duration-500 ${
                    openIndex === index
                      ? "rotate-[135deg] text-[#000000]"
                      : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8906 9.10547H17.1406V10.8945H10.8906V17.1445H9.10156V10.8945H2.85156V9.10547H9.10156V2.85547H10.8906V9.10547Z"
                      fill={
                        openIndex === index
                          ? "#a1a1aa"
                          : "url(#paint0_radial_757_7847)"
                      }
                      className="transition-colors duration-500"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_757_7847"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12.3551 10) rotate(180) scale(9.50357)"
                      >
                        <stop stopColor="#1747F6" />
                        <stop offset="1" stopColor="#7290FF" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
              </div>

              <p
                className={`w-full ease-in-out transition-all text-zinc500 ${
                  openIndex === index
                    ? "max-h-[300px] mt-5 opacity-100 translate-y-0 duration-700"
                    : "max-h-0 opacity-0 -translate-y-2 duration-300"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
