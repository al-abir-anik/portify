import { footer } from "@/data/data";
import { upArrowGradientIcon } from "@/data/icons";
import SocialCard from "./cards/SocialCard";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1200px] px-[15px] sm:px-[30px] mx-auto bg-zinc100">
      <div className="w-full py-20 flex flex-col lg:flex-row lg:justify-between gap-12">
        {/* newsletter */}
        <div className="w-full sm:w-[370px] flex flex-col gap-10">
          <h3 className="pl-[5px] text-xl font-medium">Newsletter</h3>
          <div className="w-full flex flex-col gap-8">
            <p className="pl-[5px] text-zinc500">
              Subscribe to get early access to special offers, design discounts,
              and exclusive project updates.
            </p>
            <form className="w-full py-2.5 flex items-center gap-2 bg-transparent border-b border-b-zinc300 focus:border-b-white transition-colors duration-500 overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="w-full bg-transparent placeholder:text-zinc400 text-zinc800 outline-none"
              />
              <button
                type="submit"
                className="group w-16 p-2.5 grid place-items-center bg-white rounded-full"
              >
                <span className="rotate-45 duration-500 ease-in-out">
                  {upArrowGradientIcon}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Social & services */}
        <div className="flex flex-wrap gap-12 sm:gap-5">
          {/* Socials */}
          <div className="w-[307px] flex flex-col gap-10">
            <h3 className="pl-[5px] text-xl font-medium">Socials</h3>
            <SocialCard />
          </div>

          {/* Services */}
          <div className="w-[182px] flex flex-col gap-10">
            <h3 className="pl-[5px] text-xl font-medium">Services</h3>
            <div className="w-full py-6 px-5 flex flex-col gap-5 bg-white rounded-3xl">
              {footer.services.map((s) => (
                <button
                  key={s}
                  className="w-fit font-medium text-zinc500 hover:text-orange transition-colors ease-in-out duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="w-[121px] flex flex-col gap-10">
            <h3 className="pl-[5px] text-xl font-medium">Explore</h3>
            <div className="w-full py-6 px-5 flex flex-col gap-5 bg-white rounded-3xl">
              {footer.explore.map((e) => (
                <button
                  key={e}
                  className="w-fit font-medium text-zinc500 hover:text-orange transition-colors ease-in-out duration-200"
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="w-full my-4 py-5 px-[30px] flex flex-wrap justify-center sm:justify-between items-center gap-[30px] text-zinc500 bg-white/40 rounded-[20px] outline outline-white">
        <p className="w-[151px] text-center ">© 2025</p>
        <span className="flex gap-8">
          <a
            href="#"
            className="hover:text-orange transition-colors ease-in-out duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-orange transition-colors ease-in-out duration-300"
          >
            Terms of Service
          </a>
        </span>
        <span className="flex items-center gap-2">
          <p>Created by</p>
          <a
            href="https://alabiranik.vercel.app/"
            target="_blank"
            className="font-semibold leading-6 bg-secondary-gradient text-transparent bg-clip-text"
          >
            Al Abir Anik
          </a>
        </span>
      </div>

      
    </footer>
  );
};

export default Footer;
