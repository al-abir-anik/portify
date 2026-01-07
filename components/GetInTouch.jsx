import ContactForm from "./ContactForm";
import FormSlider from "./sliders/FormSlider";

const GetInTouch = () => {
  return (
    <section className="w-full text-zinc800">
      <div className="w-full max-w-[1200px] px-[15px] sm:px-[30px] py-[120px] mx-auto flex flex-col gap-12">
        {/* section title */}
        <h2 className="w-fit font-medium text-5xl sm:text-[64px] leading-[80%]">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-[30px] lg:gap-[70px]">
          {/* left */}
          <div className="min-w-[290px]">
            <ContactForm />
          </div>

          {/* right */}
          <div className="min-w-[290px] h-fit flex flex-col gap-8">
            <div className="w-full p-5 flex items-center justify-center bg-white/40 outline outline-white rounded-3xl">
              <div className="flex flex-col gap-2">
                <p className="w-fit font-medium">(312) 888-5678</p>
                <p className="w-fit text-2xl font-medium">alabiranik56@gmail.com</p>
              </div>
            </div>
            <FormSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
