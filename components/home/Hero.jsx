import Image from "next/image";
import HeroSlider from "../sliders/HeroSlider";
import Button from "../Button";
import Rating from "../Rating";

const Hero = () => {
  return (
    <section className="w-full px-[15px] sm:px-[30px] pt-[176px] pb-[30px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
        {/* intro */}
        <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-end">
          {/* name */}
          <div className="w-fit">
            <div className="flex items-center gap-10">
              <p className="text-[96px] font-medium leading-[130%]">Dex</p>
              <div
                className="w-[90px] h-[90px] relative overflow-hidden rounded-[22.5px] border-6 border-white select-none"
                style={{
                  boxShadow:
                    "0 282px 78.75px 0 rgba(0, 0, 0, 0.00), 0 180.75px 72px 0 rgba(0, 0, 0, 0.01), 0 101.25px 60.75px 0 rgba(0, 0, 0, 0.05), 0 45px 45px 0 rgba(0, 0, 0, 0.09), 0 11.25px 24.75px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="profile-pic"
                  fill
                  sizes="90px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <p className="text-[96px] font-medium leading-[130%]">Morgan</p>
          </div>

          {/* details */}
          <div className="md:w-[362px] lg:w-[476px] h-fit pb-7 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className="w-[314px] flex items-center gap-3">
                <Rating rating="4.9 / 5" />
                <p className="text-sm text-zinc500">
                  Helped 120+ businesses & counting
                </p>
              </div>
              <p className="text-xl leading-[150%]">
                I build digital experiences that drive real growth for your
                business. Let&apos;s partner to create work that gets results.
              </p>
            </div>

            <div className="w-fit h-fit flex gap-4">
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
              <Button
                id="see-works"
                title="See Works"
                containerClass="text-zinc800 bg-white"
              />
            </div>
          </div>
        </div>

        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
