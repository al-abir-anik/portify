import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ClientSlider from "@/components/sliders/ClientSlider";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import Testimonial from "@/components/Testimonial";
import Service from "@/components/home/Service";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <ClientSlider />
      <Projects />
      <Testimonial />
      <Process />
      <Service />
      <FAQ />
      <GetInTouch />
    </div>
  );
};

export default Home;
