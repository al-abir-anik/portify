"use client";
import { services } from "@/data/data";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="w-full max-w-[1200px] px-[15px] sm:px-[30px] py-[120px] mx-auto flex flex-col gap-20">
      <h2 className="w-fit h-fit pt-5 font-medium text-5xl sm:text-[64px]">
        Service
      </h2>

      {/* Services card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {services.map((card, index) => (
          <motion.div
            whileHover="hover"
            key={index}
            className="group p-[30px] flex flex-col gap-12 rounded-3xl bg-white"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
              <div className="flex items-center gap-6">
                {/* logo */}
                <span className="w-[100px] h-[100px] rounded-full bg-zinc50 flex justify-center items-center overflow-hidden">
                  {card.icon}
                </span>
                <p className="w-[150px] text-2xl font-medium">{card.title}</p>
              </div>

              {/* Get started btn */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                variants={{
                  hover: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                }}
                className="hidden lg:block btn-motion w-fit btn-primary bg-secondary-gradient shadow-secondary"
              >
                <span className="flex items-center gap-5">
                  <p className="font-medium text-white whitespace-nowrap">
                    Get Started
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.6699 9.62397L7.79396 17.4999L6.50006 16.206L14.3751 8.33007H7.43434V6.49994H17.5001V16.5657H15.6699V9.62397Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </motion.button>

              {/* mobile version btn */}
              <button className="lg:hidden w-fit btn-primary bg-secondary-gradient shadow-secondary">
                <span className="flex items-center gap-5">
                  <p className="font-medium text-white whitespace-nowrap">
                    Get Started
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.6699 9.62397L7.79396 17.4999L6.50006 16.206L14.3751 8.33007H7.43434V6.49994H17.5001V16.5657H15.6699V9.62397Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <p className="w-full text-2xl text-zinc500">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
