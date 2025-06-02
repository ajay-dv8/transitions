// import { About } from "@/components/about";
import About from "@/components/about";
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
    </div>
  );
}
