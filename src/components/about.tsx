import SectionTitle from "./sectionTitle";
import { TextReveal } from "./ui/text-reveal";

export function About() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white pt-20">
      <SectionTitle
        topTitle="About"
        title="what to know about Transitions"
      />
      <TextReveal>
        Enterprise Funeral Services (EFSG) trading as Transitions is a full
        funeral service providing company with the aim of providing Everything
        Funeral in Ghana.From our Iconic and state of the art funeral home
        located at Haatso, we bring to your doorstep a bouquet of funeral
        products and solutions which span pre-funeral services, funeral
        arranging and post funeral activities. With a funeral insurance plan
        designed to offer comfort at the moment of need provides services
        instead of receiving a cash pay-out in the event of a claim. The pay-out
        takes the form of world class funeral services ranging from
        state-of-the-art Mortuary and undertaking services, stylish hearses,
        caskets, Chapel & Reception facility in a heavily discounted package,
        supported by signature legendary customer service provided by the
        leading funeral services provider in the country, Transitions – The
        Funeral People. With a Team of internationally trained and skilled
        staff, we take away the stress of planning and arranging a funeral and
        ensure that your loved one gets a befitting burial. Enjoy your time on
        our website… Your Advantage Transitions-The Funeral People
      </TextReveal>
    </div>
  );
}





















// "use client"
// import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface ScrollRevealProps {
//   children: ReactNode;
//   scrollContainerRef?: RefObject<HTMLElement>;
//   enableBlur?: boolean;
//   baseOpacity?: number;
//   baseRotation?: number;
//   blurStrength?: number;
//   containerClassName?: string;
//   textClassName?: string;
//   rotationEnd?: string;
//   wordAnimationEnd?: string;
// }

// const ScrollReveal: React.FC<ScrollRevealProps> = ({
//   children,
//   scrollContainerRef,
//   enableBlur = true,
//   baseOpacity = 0.1,
//   baseRotation = 3,
//   blurStrength = 4,
//   containerClassName = "",
//   textClassName = "",
//   rotationEnd = "bottom bottom",
//   wordAnimationEnd = "bottom bottom",
// }) => {
//   const containerRef = useRef<HTMLHeadingElement>(null);

//   const splitText = useMemo(() => {
//     const text = typeof children === "string" ? children : "";
//     return text.split(/(\s+)/).map((word, index) => {
//       if (word.match(/^\s+$/)) return word;
//       return (
//         <span className="inline-block" key={index}>
//           {word}
//         </span>
//       );
//     });
//   }, [children]);

//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const scroller =
//       scrollContainerRef && scrollContainerRef.current
//         ? scrollContainerRef.current
//         : window;

//     gsap.fromTo(
//       el,
//       { transformOrigin: "0% 50%", rotate: baseRotation },
//       {
//         ease: "none",
//         rotate: 0,
//         scrollTrigger: {
//           trigger: el,
//           scroller,
//           start: "top bottom",
//           end: rotationEnd,
//           scrub: true,
//         },
//       }
//     );

//     const wordElements = el.querySelectorAll<HTMLElement>(".word");

//     gsap.fromTo(
//       wordElements,
//       { opacity: baseOpacity, willChange: "opacity" },
//       {
//         ease: "none",
//         opacity: 1,
//         stagger: 0.05,
//         scrollTrigger: {
//           trigger: el,
//           scroller,
//           start: "top bottom-=20%",
//           end: wordAnimationEnd,
//           scrub: true,
//         },
//       }
//     );

//     if (enableBlur) {
//       gsap.fromTo(
//         wordElements,
//         { filter: `blur(${blurStrength}px)` },
//         {
//           ease: "none",
//           filter: "blur(0px)",
//           stagger: 0.05,
//           scrollTrigger: {
//             trigger: el,
//             scroller,
//             start: "top bottom-=20%",
//             end: wordAnimationEnd,
//             scrub: true,
//           },
//         }
//       );
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [
//     scrollContainerRef,
//     enableBlur,
//     baseRotation,
//     baseOpacity,
//     rotationEnd,
//     wordAnimationEnd,
//     blurStrength,
//   ]);

//   return (
//     <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
//       <p
//         className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
//       >
//         {splitText}
//       </p>
//     </h2>
//   );
// };

// export const About = () => {
//   return(
//     <div className="">
//       <ScrollReveal
//         baseOpacity={0}
//         enableBlur={true}
//         baseRotation={5}
//         blurStrength={10}
//       >
//         When does a man die? When he is hit by a bullet? No! When he suffers a disease?
//         No! When he ate a soup made out of a poisonous mushroom?
//         No! A man dies when he is forgotten!
//       </ScrollReveal>
//     </div>
//   )
// }

// 'use client';
// import React, { JSX } from 'react';
// import styles from './page.module.css'
// import { useRef, useEffect } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';

// const phrase = "Enterprise Funeral Services (EFSG) trading as Transitions is a full funeral service providing company with the aim of providing Everything Funeral in Ghana.From our Iconic and state of the art funeral home located at Haatso, we bring to your doorstep a bouquet of funeral products and solutions which span pre-funeral services, funeral arranging and post funeral activities. With a funeral insurance plan designed to offer comfort at the moment of need provides services instead of receiving a cash pay-out in the event of a claim. The pay-out takes the form of world class funeral services ranging from state-of-the-art Mortuary and undertaking services, stylish hearses, caskets, Chapel & Reception facility in a heavily discounted package, supported by signature legendary customer service provided by the leading funeral services provider in the country, Transitions – The Funeral People. With a Team of internationally trained and skilled staff, we take away the stress of planning and arranging a funeral and ensure that your loved one gets a befitting burial. Enjoy your time on our website… Your Advantage Transitions-The Funeral People";

// export default function About() {

//   const refs = useRef<(HTMLSpanElement | null)[]>([]);
//   const bodyy = useRef(null);
//   const container = useRef(null);

//   useEffect( () => {
//     gsap.registerPlugin(ScrollTrigger);
//     createAnimation();
//   }, [])

//   const createAnimation = () => {
//       gsap.to(refs.current, {
//         scrollTrigger: {
//             trigger: container.current,
//             scrub: true,
//             start: `top`,
//             end: `+=${window.innerHeight / 1.5}`,
//         },
//         opacity: 1,
//         ease: "none",
//         stagger: 0.1
//     })
//   }

//   const splitWords = (phrase: string) => {
//     const body: JSX.Element[] = [];
//     phrase.split(" ").forEach( (word, i) => {
//       const letters = splitLetters(word);
//       body.push(<p key={word + "_" + i}>{letters}</p>)
//     })
//     return body
//   }

//   const splitLetters = (word: string) => {
//     const letters: JSX.Element[] = []
//     word.split("").forEach( (letter, i) => {
//       letters.push(<p key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</p>)
//     })
//     return letters;
//   }

//   return (
//     <main ref={container} className={`flex items-end justify-center h-[100vh] mb-[100vh] ${styles.main}`}>
//       <div ref={bodyy} className={`w-[90%] text-black flex flex-wrap font-light ${styles.bodyy}`} style={{ opacity: 0 }}>
//         {          // Split the phrase into words and then letters
//           // and animate each letter
//           splitWords(phrase)
//         }
//       </div>
//     </main>
//   )
// }
