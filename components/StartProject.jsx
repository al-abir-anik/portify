import React from "react";
import Rating from "./Rating";
import Button from "./Button";

const StartProject = () => {
  return (
    <section
      className="w-full px-[15px] sm:px-[30px] pt-[176px] pb-[30px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 20.43%, #FFF 79.53%, rgba(255, 255, 255, 0.00) 100%)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="w-full max-w-[800px] p-[30px] mx-auto flex flex-col gap-12 border-2 border-zinc100 rounded-3xl">
          <p
            id="main text"
            className="w-full text-[32px] font-medium leading-[130%]"
          >
            I'm always open to new projects and collaborations. Feel free to
            reach out and share what you're working on — even if it's just an
            early idea.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Rating rating="4.9 / 5" />
              <p className="text-sm text-zinc500">
                Helped 120+ businesses & counting
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                id="start-a-project"
                title="Start a Project"
                containerClass="text-white bg-primary-gradient shadow-primary"
                btnIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M4.27748 14.9723L4.27734 13.028H20L16.16 9.18791L17.535 7.81299L23.7222 14.0002L17.535 20.1874L16.16 18.8124L20.0001 14.9724L4.27748 14.9723Z"
                      fill="white"
                    />
                  </svg>
                }
              />

              <button
                className={
                  "w-fit h-14 px-[30px] py-2.5 rounded-full font-medium whitespace-nowrap bg-zinc100"
                }
              >
                See Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartProject;
