import { footer } from "@/data/data";
import Image from "next/image";

const SocialCard = () => {
  return (
    <div className="w-fit py-2.5 pl-2.5 pr-5 flex gap-5 bg-white rounded-3xl">
      {/* profile photo */}
      <div className="w-[136px] h-[178px] relative rounded-2xl shadow-primary overflow-hidden select-none">
        <Image
          src="/images/profile.png"
          alt="profile-pic"
          fill
          sizes="136px"
          className="object-cover object-top"
        />
      </div>

      {/* socials */}
      <div className="w-[121px] flex flex-col gap-1.5">
        {footer.socials.map((s) => (
          <button
            key={s.name}
            className="btn-motion w-fit py-2.5 pl-2.5 pr-5 bg-zinc50 outline-1 outline-zinc200 rounded-full"
          >
            <span className="flex items-center gap-2">
              <img
                src={s.icon}
                alt={s.name}
                className="w-5 h-5 object-cover rounded-full select-none"
              />
              <p className="font-medium text-zinc500">{s.name}</p>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialCard;
