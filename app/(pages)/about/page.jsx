import Image from "next/image";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import AboutSlider from "@/components/sliders/AboutSlider";
import StartProject from "@/components/StartProject";

const About = () => {
  return (
    <>
      {/* hero section */}
      <section className="w-full px-[15px] sm:px-[30px] pt-[176px] pb-[30px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-16">
          {/* upper section */}
          <div className="w-full max-w-[716px] text-[40px] md:text-5xl font-medium leading-[130%] flex flex-col items-start">
            <div className="flex items-center flex-wrap">
              <span className="mr-4">A</span>
              <span className="mr-4 bg-primary-gradient text-transparent bg-clip-text">
                visual designer
              </span>
              <figure
                className="w-14 h-14 mr-4 relative overflow-hidden rounded-xl border-[3px] border-white select-none"
                style={{
                  boxShadow:
                    "0 72px 20px 0 rgba(0, 0, 0, 0.00), 0 46px 18px 0 rgba(0, 0, 0, 0.01), 0 26px 16px 0 rgba(0, 0, 0, 0.05), 0 12px 12px 0 rgba(0, 0, 0, 0.09), 0 3px 6px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
                <img
                  src="/images/profile.png"
                  alt="profile-pic"
                  className="w-full h-full object-cover object-top"
                />
              </figure>
              <span className="mr-4">
                who builds
              </span>
            </div>

            <h3 className=" whitespace-pre-wrap">
              <span className="text-zinc400 mr-4">digital experiences</span>
              that drive real growth for your business.
            </h3>
          </div>

          {/* lower carousel */}
          <AboutSlider />
        </div>
      </section>

      <StartProject />
      <Testimonial />
      <FAQ />
      <GetInTouch />
    </>
  );
};

export default About;
