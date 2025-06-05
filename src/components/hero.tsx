"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLooping, setIsLooping] = useState(false);
  
  // Store the ticker function reference for proper cleanup
  const tickerFunctionRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // STEP 1: Define the loop parameters
    let direction = 1; // 1 for forward, -1 for backward
    let loopStart = 0; // Will be set when video ends
    let loopEnd = 0;   // Will be set when video ends
    
    // STEP 2: Create the ticker function that will handle the back-and-forth loop
    const createTickerFunction = () => {
      return () => {
        // Only run if we're in looping mode and video exists
        if (!isLooping || !video) return;
        
        // STEP 3: Calculate the time increment (60fps = ~0.016 seconds per frame)
        const timeIncrement = 0.016;
        
        // STEP 4: Update video time based on direction
        video.currentTime += timeIncrement * direction;
        
        // STEP 5: Check boundaries and reverse direction when needed
        if (direction === 1 && video.currentTime >= loopEnd) {
          // Hit the end, reverse to go backward
          direction = -1;
          video.currentTime = loopEnd; // Clamp to exact end
        } else if (direction === -1 && video.currentTime <= loopStart) {
          // Hit the start, reverse to go forward
          direction = 1;
          video.currentTime = loopStart; // Clamp to exact start
        }
      };
    };

    // STEP 6: Handle when the video ends (plays completely for the first time)
    const handleVideoEnd = () => {
      console.log("Video ended, starting loop");
      
      // Set up loop boundaries (last 1 second of video)
      loopEnd = video.duration;           // End of video
      loopStart = video.duration - 2;     // 1 second before end
      
      // Ensure we don't go below 0
      if (loopStart < 0) loopStart = 0;
      
      // STEP 7: Position video at the start of loop section
      video.currentTime = loopStart;
      
      // STEP 8: Enable looping state
      setIsLooping(true);
      
      // STEP 9: Create and add the ticker function
      tickerFunctionRef.current = createTickerFunction();
      gsap.ticker.add(tickerFunctionRef.current);
      
      console.log(`Loop setup: start=${loopStart}s, end=${loopEnd}s`);
    };

    // STEP 10: Add event listener for video end
    video.addEventListener("ended", handleVideoEnd);

    // STEP 11: Cleanup function
    return () => {
      // Remove event listener
      video.removeEventListener("ended", handleVideoEnd);
      
      // Remove ticker function if it exists
      if (tickerFunctionRef.current) {
        gsap.ticker.remove(tickerFunctionRef.current);
        tickerFunctionRef.current = null;
      }
    };
  }, []); // Remove isLooping dependency to prevent re-running

  // STEP 12: Additional cleanup when component unmounts or isLooping changes
  useEffect(() => {
    return () => {
      if (tickerFunctionRef.current) {
        gsap.ticker.remove(tickerFunctionRef.current);
        tickerFunctionRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      {/* STEP 13: Video element with proper event handling */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        // Remove onEnded handler since we handle it in useEffect
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-auto object-cover rounded-lg"
      >
        <source src="/videos/bloomNew.mp4" type="video/mp4" />
      </video>

      {/* Overlay to ensure text visibility */}
      <div className='absolute inset-0 bg-radial-[at_50%_45%] from-transparent via-[#0E1A1C] to-[#040B09] to-90%'/>

      {/* Content container */}
      <div className="relative z-10 justify-center items-center text-white px-4 md:px-20 flex flex-col">
        {/* Title and sub title */}
        <span className="flex justify-center flex-col items-center">
          <h1 className="text-6xl text-gradient-to-br from-purple-700 to-purple-500 md:text-9xl mb-4 tracking-wider">
            Transitions
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-300 font-light max-w-xl">
            Guiding you through life&apos;s most delicate transitions with grace and dignity
          </p>
        </span>

        {/* CTA Buttons */}
        <div className="my-8 flex gap-10 font-semibold mt-10">
          <button className="bg-purple-700 hover:bg-purple-500 w-fit px-10 py-3 transition-colors duration-700 ease-in-out">
            Contact Us
          </button>
        </div>

        {/* Debug info (remove in production) */}
        {isLooping && (
          <div className="mt-4 text-sm text-gray-400">
            Loop active - Last second playing back and forth
          </div>
        )}
      </div>
    </div>
  );
}

