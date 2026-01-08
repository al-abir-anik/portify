"use client";
import { mailGradientIcon } from "@/data/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const Navbar = () => {
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      {/* Progressive Blur Layer */}
      <div className="progressive-blur fixed top-0 left-0 w-full h-[120px] z-40 pointer-events-none"></div>

      <header className="w-full h-[76px] px-[15px] sm:px-[30px] py-2.5  fixed top-0 left-0 z-50">
        <div className="w-full max-w-[1200px] mx-auto flex justify-between">
          {/* left */}
          {/* desktop navbar */}
          <nav className="w-fit h-14 py-2.5 pl-2 pr-[60px] hidden md:flex items-center gap-[60px] bg-white/90 backdrop-blur-xl rounded-full border border-white leading-[130%]">
            <Link
              href="/"
              className="w-10 h-10 relative overflow-hidden rounded-full shadow-primary select-none"
              style={{
                boxShadow:
                  "0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              <img
                src="/images/profile.png"
                alt="profile-pic"
                className="w-10 h-10 object-cover object-top"
              />
            </Link>

            <div className="hidden md:flex gap-[60px] font-medium">
              <Link
                href="/about"
                className={`hover:text-orange transition ${
                  pathname === "/about" && "text-orange font-medium"
                }`}
              >
                About
              </Link>

              <Link
                href="/all-projects"
                className={`hover:text-orange transition ${
                  pathname === "/all-projects" && "text-orange font-medium"
                }`}
              >
                All Projects
              </Link>

              <Link
                href="/contact"
                className={`hover:text-orange transition ${
                  pathname === "/contact" && "text-orange font-medium"
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* mobile navbar */}
          <nav
            className={` p-2 flex md:hidden flex-col gap-3 bg-white rounded-[20px] border border-white leading-[130%]`}
          >
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="w-fit pl-0.5 outline-0"
            >
              {openMobileMenu ? (
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.999 10.9384L16.7176 6.2198C17.0105 5.92691 17.4854 5.92691 17.7782 6.2198C18.0711 6.51269 18.0711 6.98757 17.7782 7.28046L13.0597 11.999L17.7782 16.7176C18.0711 17.0105 18.0711 17.4854 17.7782 17.7782C17.4854 18.0711 17.0105 18.0711 16.7176 17.7782L11.999 13.0597L7.28033 17.7784C6.98744 18.0713 6.51256 18.0713 6.21967 17.7784C5.92678 17.4855 5.92678 17.0106 6.21967 16.7177L10.9384 11.999L6.21967 7.28033Z"
                    fill="#343C54"
                  />
                </svg>
              ) : (
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 13.125L4 13.125C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875L20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z"
                    fill="#343C54"
                  />
                </svg>
              )}
            </button>

            <AnimatePresence>
              {openMobileMenu && (
                <motion.div
                  initial={{ opacity: 0, width: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, width: "auto", height: "auto", y: 0 }}
                  exit={{ opacity: 0, width: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-2 flex flex-col gap-5 font-medium overflow-hidden"
                >
                  <Link
                    href="/"
                    className="w-10 h-10 relative overflow-hidden rounded-full shadow-primary select-none"
                    style={{
                      boxShadow:
                        "0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    <img
                      src="/images/profile.png"
                      alt="profile-pic"
                      className="w-10 h-10 object-cover object-top"
                    />
                  </Link>

                  <Link
                    href="/about"
                    className={`hover:text-orange transition ${
                      pathname === "/about" && "text-orange font-medium"
                    }`}
                  >
                    About
                  </Link>

                  <Link
                    href="/all-works"
                    className={`hover:text-orange transition ${
                      pathname === "/all-projects" && "text-orange font-medium"
                    }`}
                  >
                    All Projects
                  </Link>

                  <Link
                    href="/contact"
                    className={`hover:text-orange transition ${
                      pathname === "/contact" && "text-orange font-medium"
                    }`}
                  >
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* right */}
          <div className="h-14 flex">
            <Button
              id="book-call"
              title={
                <>
                  {/* <span className="block lg:hidden">Book a Call</span> */}
                  <span>Book a 30 min call</span>
                </>
              }
              containerClass="text-zinc800 bg-white"
            />
            <div className="w-14 h-full flex justify-center items-center bg-white rounded-full">
              {mailGradientIcon}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
