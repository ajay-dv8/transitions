'use client';
import React, { JSX } from 'react';
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Enterprise Funeral Services (EFSG) trading as Transitions is a full funeral service providing company with the aim of providing Everything Funeral in Ghana.From our Iconic and state of the art funeral home located at Haatso, we bring to your doorstep a bouquet of funeral products and solutions which span pre-funeral services, funeral arranging and post funeral activities. With a funeral insurance plan designed to offer comfort at the moment of need provides services instead of receiving a cash pay-out in the event of a claim. The pay-out takes the form of world class funeral services ranging from state-of-the-art Mortuary and undertaking services, stylish hearses, caskets, Chapel & Reception facility in a heavily discounted package, supported by signature legendary customer service provided by the leading funeral services provider in the country, Transitions – The Funeral People. With a Team of internationally trained and skilled staff, we take away the stress of planning and arranging a funeral and ensure that your loved one gets a befitting burial. Enjoy your time on our website… Your Advantage Transitions-The Funeral People";

export default function About() {

  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {          // Split the phrase into words and then letters
          // and animate each letter
          splitWords(phrase)
        }
      </div>
    </main>
  )
}













// import React from 'react'
// import { About } from '@/components/about';

// export const About = () => {
//   return (
//     <div>
//       <h2>About</h2>
//       <p>This is the about section.</p>

//       <div className="">
//         <p>
//           Enterprise Funeral Services (EFSG) trading as Transitions is a full funeral service providing company with the aim of providing Everything Funeral in Ghana.

//           From our Iconic and state of the art funeral home located at Haatso, we bring to your doorstep a bouquet of funeral products and solutions which span pre-funeral services, funeral arranging and post funeral activities.

//           With a funeral insurance plan designed to offer comfort at the moment of need provides services instead of receiving a cash pay-out in the event of a claim. The pay-out takes the form of world class funeral services ranging from state-of-the-art Mortuary and undertaking services, stylish hearses, caskets, Chapel & Reception facility in a heavily discounted package, supported by signature legendary customer service provided by the leading funeral services provider in the country, Transitions – The Funeral People.  

//           With a Team of internationally trained and skilled staff, we take away the stress of planning and arranging a funeral and ensure that your loved one gets a befitting burial.

//           Enjoy your time on our website… Your Advantage Transitions-The Funeral People
//         </p>
//       </div>
//     </div>
//   )
// }
