// import { About } from "@/components/about";
import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ZoomParallax from "@/components/zoomParallax";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <div className={""}>
        <ZoomParallax />
      </div>
      <Footer/>
    </div>
  );
}
