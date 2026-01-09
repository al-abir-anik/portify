import RequirementForm from "@/components/RequirementForm";
import StartProject from "@/components/StartProject";
import SocialCard from "@/components/cards/SocialCard";
import FormSlider from "@/components/sliders/FormSlider";
import { telephoneIcon } from "@/data/icons";
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      {/* lets stay connected */}
      <section className="w-full max-w-[1200px] pt-[196px] px-[30px] pb-[30px] mx-auto">
        <div className="w-[740px] mx-auto flex flex-col items-center gap-12 border-2 border-zinc100 rounded-3xl">
          {/* header */}
          <div className="flex flex-col items-center gap-6">
            <h2 className="w-fit font-medium text-5xl">
              Let&apos;s Stay Connected
            </h2>
            <p className="w-[535px] text-xl leading-[150%] text-center text-zinc500">
              Got questions or want to collaborate? Feel free to reach out — We
              are open to new projects or just a casual chat!
            </p>
          </div>

          <SocialCard />

          {/* footer */}
          <div className="w-full p-2.5 flex justify-between outline outline-white rounded-full">
            <span className="flex items-center gap-5">
              <figure className="w-14 h-14 relative overflow-hidden rounded-full shadow-primary">
                <Image
                  src="/images/profile.png"
                  alt="profile-pic"
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                />
              </figure>
              <p className="text-2xl font-medium">Prefer to book a call?</p>
            </span>

            <button className="w-fit h-14 px-[30px] py-2.5 rounded-full bg-secondary-gradient shadow-secondary">
              <span className="flex justify-center items-center gap-2">
                {telephoneIcon}
                <p className="font-medium text-white whitespace-nowrap">
                  Book a call now
                </p>
              </span>
            </button>
          </div>
        </div>
      </section>

      <StartProject />

      <div className="w-full max-w-[1200px] px-[30px] py-[120px] mx-auto flex flex-col gap-12">
        {/* section title */}
        <h2 className="w-fit font-medium text-[64px] leading-[80%]">
          Get in touch
        </h2>

        <div className="flex justify-between items-end">
          {/* left */}
          <div className="w-[595px]">
            <RequirementForm />
          </div>

          {/* right */}
          <div className="w-[535px] h-fit flex flex-col gap-8">
            <div className="w-full p-5 flex items-center justify-center bg-white/40 outline outline-white rounded-3xl">
              <div className="flex flex-col gap-2">
                <p className="w-fit font-medium">(312) 888-5678</p>
                <p className="w-fit text-2xl font-medium">hello@mushfq.com</p>
              </div>
            </div>
            <FormSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
