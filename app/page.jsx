import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ClientSlider from "@/components/sliders/ClientSlider";
// import FAQ from "@/components/FAQ";
// import GetInTouch from "@/components/GetInTouch";
// import Process from "@/components/home-sections/Process";
// import Service from "@/components/home-sections/Service";
// import Projects from "@/components/home-sections/Projects";
// import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <ClientSlider />
      {/* <Projects />
      <Testimonial />
      <Process />
      <Service />
      <FAQ />
      <GetInTouch /> */}
    </div>
  );
};

export default Home;
