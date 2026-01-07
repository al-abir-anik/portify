import { oswald } from "@/lib/fonts";
import Rating from "./Rating";
import Image from "next/image";

const Testimonial = () => {
  const rows = [
    [
      {
        type: "number",
        number: "50+",
        numberColor: "bg-secondary-gradient",
        text: "Client Projects Completed",
      },
      {
        type: "review",
        reviewerPhoto: "/images/reviewer1.png",
        rating: 5.0,
        review:
          "His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.",
      },
    ],
    [
      {
        type: "review",
        reviewerPhoto: "/images/reviewer2.png",
        rating: 5.0,
        review:
          "Duncan truly understood my vision and turned it into impactful designs, the results went beyond my expectations!",
      },
      {
        type: "number",
        number: "4X",
        numberColor: "bg-zinc400",
        text: "Happy Clients",
      },
    ],
    [
      {
        type: "number",
        number: "100%",
        numberColor: "bg-primary-gradient",
        text: "Projects Delivered",
      },
      {
        type: "review",
        reviewerPhoto: "/images/reviewer3.png",
        rating: 5.0,
        review:
          "As a small business owner, I appreciated how stress-free Duncan made the process.",
      },
    ],
  ];

  return (
    <section className="w-full px-[15px] sm:px-[30px] py-[120px]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-0">
        {/* heading */}
        <h2 className="w-fit font-medium text-5xl md:text-[64px] leading-[100%] lg:sticky lg:top-[196px]">
          Testimonials <br className="hidden lg:block" /> & KPI
        </h2>

        <div className="w-full lg:w-[570px] flex flex-col gap-5">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5">
              {row.map((card, index) =>
                card.type === "number" ? (
                  <div
                    key={index}
                    className="w-full lg:w-[230px] h-[275px] p-5 rounded-3xl bg-white flex flex-col justify-between"
                  >
                    <h5
                      className={`${oswald.className} ${card.numberColor} text-transparent bg-clip-text text-7xl font-medium leading-[100%]`}
                    >
                      {card.number}
                    </h5>
                    <p className="w-full leading-[130%]">{card.text}</p>
                  </div>
                ) : (
                  <div
                    key={index}
                    className="flex-1 w-full lg:w-[320px] h-[275px] p-5 rounded-3xl bg-white flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-3 shrink-0">
                      <figure className="w-[120px] h-[120px] rounded-lg relative overflow-hidden">
                        <Image
                          src={card.reviewerPhoto}
                          alt="reviewer photo"
                          fill
                          sizes="120px"
                          className="object-cover object-top"
                        />
                      </figure>
                      <Rating rating={`${card.rating}.0`} />
                    </div>
                    <p className="leading-[130%]">{card.review}</p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
