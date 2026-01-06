const ClientSlider = () => {
  const companyLogos = [
    "/brands/brand1.png",
    "/brands/brand2.png",
    "/brands/brand3.png",
    "/brands/brand4.png",
    "/brands/brand5.png",
    "/brands/brand6.png",
  ];

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <section className="w-full px-[30px]">
        <div className="w-full max-w-[1140px] p-[50px] md:p-[70px] mx-auto bg-zinc50 rounded-full flex items-center justify-center overflow-hidden">
          <div className=" relative select-none overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-zinc50 to-transparent" />
            <div
              className="marquee-inner flex will-change-transform min-w-[200%]"
              style={{ animationDuration: "15s" }}
            >
              <div className="h-[62px] flex items-center gap-[120px]">
                {[...companyLogos, ...companyLogos].map((company, index) => (
                  <img
                    key={index}
                    src={company}
                    alt="company logo"
                    className="w-full h-[40px] object-contain"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-zinc50 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSlider;
