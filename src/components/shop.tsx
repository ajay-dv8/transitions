"use client"

import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Shop() {
  const featuredRef = useRef(null)
  const secondGridRef = useRef(null)
  // const thirdGridRef = useRef(null)

  const isFeaturedInView = useInView(featuredRef, { amount: 0.2 })
  const isSecondGridInView = useInView(secondGridRef, { amount: 0.2 })
  // const isThirdGridInView = useInView(thirdGridRef, { amount: 0.2 })

  return (
    <div>
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          {/* Shop Section */}
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <motion.h2 
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="text-[#131118] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5"
              >
                Featured Items
              </motion.h2>
              
              <motion.div 
                ref={featuredRef}
                variants={containerVariants}
                initial="hidden"
                animate={isFeaturedInView ? "visible" : "hidden"}
                className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
              >
                {/* Product items */}
                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7ennm347gweFNDLckrHsUvfF3QEZUe7PgJxYyMTHTgqgFstZxBDyWqcYEoCmPpZnifHaBrwFgCbRvOKs7fa9UxhGmRNaV39spz1zFpRPUmYG2Z_yxUq5cLEqU9RaPfG8Yc-yi8kfvSfkAWUg4DT0x7__e4DCUcUyOPBPNonKGxYZNitUw_ebiG2fJEYsQpCF7bJXVyQOkkLTsFHgdrVWFkFixBkMYqp7yD2zPXY11sFIUZdet1G4SvufNbE7l05bH3DImCcDhLEWR")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Elegant Mahogany Casket</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A timeless choice for a dignified farewell.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYFA8XvGOtiXHjpZV8zXxUnw_rfNsf5Ix-Fo_qZARiFclwxOxSic41YB2S-dfTTLmTeq4nt_Iwqu7aKB0wjX8Ebg_DOg40NIUkYHLMMUw9CZjParC9vKaVEMeW6axmlRIWAmHiAdRSUZROxN_y8-FYrTWP9eXjK1Gypyvc530FN0TGHeyRf9fYay3wDXYYkwSmWTE2NxzZfxVQypeMF0pfb2muOwKoCW9o_Af4_FajVUWYcoZb4qqzwOByEKp1_yOae69cq75boHyx")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Classic Bronze Urn</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A beautiful resting place for cherished memories.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB2PTth-UeMMGeFwAhYzX3EQ4gKaE9zBoZuyuODjRbSbJtVxOHW3E6wimhdT0J6HQ-PjOHPTLqA-wXH40CIh575_Uhk5z6orSGQDonA340UIFvKCx7loXHWtzpoPSDfqy4M-qw-NPajeJAGzrdsZBdJw5TcRZJQIputgaa1h90lDxULUdd6cc5M3FBpdxIxAx18cOPPhXoI6laHIowld-swPDP98NMuIQwYNQhVnRhdsdF1ww2_Spf5xb7-t7QH60STPNf7BO0RiLS")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Serene White Lily Arrangement</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Express your condolences with this peaceful arrangement.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-XBT7KeS2qS5C33N8ZOtCxE4H9fYwP41Nx4PS5LZN_bncvBWR1rYxfzafXyyFPhUy9cLDLnWJeE66e6PyIQi-bT9ZkZnAcfp3JS_WTCpcyfwoW518EZB3N29WRD5vwDqaCF7hve6EQpdiIB9cBlWi_PhxCRJtAl7rnMZtoiak-mOt0Kf1uml0Op2gaX2KaGJTt9ofecYeLi7XosMMxqLu2jF7PFEXMWc1vsrXWQfMa42yE1cYfVu1LA81H2yF8p7r8WudopS_fZ2F")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Personalized Memorial Plaque</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Honor their memory with a custom-engraved plaque.</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                initial="hidden"
                animate={isFeaturedInView ? "visible" : "hidden"}
                className="text-[#6e608a] text-sm font-normal leading-normal pb-3 pt-1 px-4"
              >
                $2,499.00
              </motion.p>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isFeaturedInView ? "visible" : "hidden"}
                className="flex px-4 py-3 justify-start"
              >
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5f16f2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Add to Cart</span>
                </button>
              </motion.div>

              {/* Second Grid */}
              <motion.div 
                ref={secondGridRef}
                variants={containerVariants}
                initial="hidden"
                animate={isSecondGridInView ? "visible" : "hidden"}
                className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
              >
                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiLHouqIvs5UeOB7arRx7N0O0_8tlAs7lbdiWgODu9dBUhmH4t_Mq9Ud9EgeLXKG_rnzD7zMAz4n4bUfkJu4iHwZfKfqOLqg_XqGq-CbJG4Bz2RePFdqkptAtNr_tpUR6ZpDSMgoAIN5cWVY6kuwdnTXjS0EDHbnK7a6NdX6JYoTmCkqwkta1iI0TlI_k06NQ1OUf05pokg6Q-485qLIgOlEHWV9NO2jwL-ajq20Ch2yrPT6UQdsL58X2IY-gWA8lYNzxj783Ymbxv")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Heartfelt Sympathy Card</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Offer comfort and support with a thoughtful card.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFIslrIPp3nRkkPLoTU1CWgZAU78fW1BEkrIkG_C8Xj0m_wy8Gv-PNVC2INa3Pz1TApraxmyaU84sox1J3KrrXB_pOnb8zZMs5faInmygnPItLSNNso-K4YRmBiaSLNoQ6BTeO6tVwhvqTJGiRQ0BS57pBSwWs-SbNzX4j6s2XtWCqd0-6dQVFz9OmtAgOpa4FBI7i843n5xgG0K0lROXMB_bAEXrYmc9bDWtkg83tXyW6xHYGLR_J8HsK_8YOFU9Zr07WNGpbJW0T")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Rustic Pine Casket</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A natural and eco-friendly option for a peaceful goodbye.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW0XYlUW2LRa1KntgvKGP5oDkfbFoBES5sP4fidqBOgBbgF4oxyBhlxKCD26aFGwVvGmSdAsyYrfqemTbYISBMU9w8WsFRTjyYc3GJej5l1ScHHSApcYUBD6KQTTRHp4PaXMmE7T0jr3YOtDuZ7vwXL53N0-JtAP2DsMv7FfFVu4jhaIOndBEpBR4QKxshlFRWNFsXM0SiB9F-b78POfF-Z8DEfeN5qfeKW-wg68IsEGHTME075-gdTQ-xjREHehMElNgbD7moY2qu")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Modern Ceramic Urn</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A contemporary urn for a modern memorial.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_WYGgtEbDm3kZXQucCENRRMDkACX_8345ppBU7awWOKxBIY9kriixg3T4s_aeq8FLztQEKeT63JPZQO5QMjBaRDwSAiyxxy44Dt44TMdKYesGZgyCE6ioQ0LItKUWjHSxEfiho7F6YyoGqQbTzU4lmLpVwa5riLrAeEjlLZq2CoRYIR2E2pTqNL_8GQPEjaOwcEH-Mn0iVHimgxQKYjN3FPXA2ixq6KOSTachGTWv7U8ntoKGgRlalstgKEstW-HfG7nSHPoUiXrp")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Vibrant Rose Bouquet</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Express your sympathy with a simple, heartfelt card.</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                initial="hidden"
                animate={isSecondGridInView ? "visible" : "hidden"}
                className="text-[#6e608a] text-sm font-normal leading-normal pb-3 pt-1 px-4"
              >
                $1,899.00
              </motion.p>

              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isSecondGridInView ? "visible" : "hidden"}
                className="flex px-4 py-3 justify-start"
              >
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5f16f2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Add to Cart</span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
