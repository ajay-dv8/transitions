"use client"
import { About } from "@/components/about";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Shop from "@/components/shop";
import dynamic from 'next/dynamic';

const Testimonials = dynamic(
  () => import('@/components/testimonials'),
  { ssr: false }
);
// import Testimonials from "@/components/testimonials";
import ZoomParallax from "@/components/zoomParallax";

export default function Home() {
  return (
    <div className="">
      <Hero /> 
      <About />
      <Services />
      <div className={""}>
        <ZoomParallax />
      </div>
      <Shop />
      <Cta/>
      <Testimonials />
      <Footer />
    </div>
  );
}
