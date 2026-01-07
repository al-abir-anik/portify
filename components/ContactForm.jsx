"use client";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      budget: "$5K - $20K",
    },
  });

  const clientBudget = ["- $5K", "$5K - $20K", "$20K - $30k", "$30k+"];
  const selectedBudget = watch("budget");

  return (
    <form className="w-full py-12 px-[30px] flex flex-col gap-11 bg-zinc800 rounded-4xl shadow-[0_282px_78.75px_0_rgba(0,0,0,0),0_180.75px_72px_0_rgba(0,0,0,0.01),0_101.25px_60.75px_0_rgba(0,0,0,0.05),0_45px_45px_0_rgba(0,0,0,0.09),0_11.25px_24.75px_0_rgba(0,0,0,0.10)]">
      {/* budget */}
      {/* <div className="space-y-4">
        <p className="text-zinc500">Your Budget</p>
        <div className="w-full flex items-center gap-3">
          {clientBudget.map((budget) => (
            <label
              key={budget}
              className={`w-fit h-12 py-2.5 pl-4 pr-6 font-medium flex justify-center items-center gap-2 outline-2 rounded-full cursor-pointer ${
                selectedBudget === budget
                  ? "outline-[#7290FF]"
                  : "text-zinc600 bg-zinc50 outline-zinc100"
              }`}
            >
              <input
                type="radio"
                value={budget}
                {...register("budget", { required: true })}
                className="hidden"
              />

              <span className="w-5 h-5 grid place-items-center">
                <span
                  className={`w-4 h-4 rounded-full ${
                    selectedBudget === budget
                      ? "bg-secondary-gradient shadow-secondary"
                      : "bg-transparent outline-[1.5px] outline-zinc300"
                  }`}
                ></span>
              </span>

              <span className="whitespace-nowrap">{budget}</span>
            </label>
          ))}
        </div>
      </div> */}

      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full pb-5 bg-transparent placeholder:text-zinc500 text-white outline-none border-b border-b-zinc600 focus:border-b-white transition-colors duration-500"
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full pb-5 bg-transparent placeholder:text-zinc500 text-white outline-none border-b border-b-zinc600 focus:border-b-white transition-colors duration-500"
      />
      <textarea
        rows={5}
        placeholder="Tell me a bit about your project…"
        required
        className="w-full pb-5 bg-transparent placeholder:text-zinc500 text-white outline-none border-b border-b-zinc600 focus:border-b-white transition-colors duration-500"
      ></textarea>

      {/* submit btn */}
      <div className="w-full flex flex-col items-center gap-5">
        <button
          type="submit"
          className="btn-motion w-full h-14 px-[30px] py-2.5 font-medium rounded-full bg-primary-gradient shadow-primary"
        >
          <span className="flex items-center justify-center gap-5">
            <p className="text-white">Submit</p>
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
          </span>
        </button>
        <p className="text-zinc400">
          **We will reach out to you within 24hrs**
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
