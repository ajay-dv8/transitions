import React from 'react'

export default function Shop() {
  return (
    <div>
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f0f5] px-10 py-3">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-[#131118]">
                <div className="size-4">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em]">Transitions</h2>
              </div>
              <div className="flex items-center gap-9">
                <a className="text-[#131118] text-sm font-medium leading-normal" href="#">Caskets</a>
                <a className="text-[#131118] text-sm font-medium leading-normal" href="#">Urns</a>
                <a className="text-[#131118] text-sm font-medium leading-normal" href="#">Flowers</a>
                <a className="text-[#131118] text-sm font-medium leading-normal" href="#">Memorial Items</a>
                <a className="text-[#131118] text-sm font-medium leading-normal" href="#">Sympathy Cards</a>
              </div>
            </div>

            <div className="flex flex-1 justify-end gap-8">
              <label className="flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#6e608a] flex border-none bg-[#f1f0f5] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131118] focus:outline-0 focus:ring-0 border-none bg-[#f1f0f5] focus:border-none h-full placeholder:text-[#6e608a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
              <div className="flex gap-2">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f0f5] text-[#131118] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Sign In</span>
                </button>
                <button
                  className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f1f0f5] text-[#131118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                  <div className="text-[#131118]" data-icon="Heart" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                      ></path>
                    </svg>
                  </div>
                </button>
                <button
                  className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f1f0f5] text-[#131118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                  <div className="text-[#131118]" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </header> */}

          {/* Shop Section */}
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <h2 className="text-[#131118] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Featured Items</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7ennm347gweFNDLckrHsUvfF3QEZUe7PgJxYyMTHTgqgFstZxBDyWqcYEoCmPpZnifHaBrwFgCbRvOKs7fa9UxhGmRNaV39spz1zFpRPUmYG2Z_yxUq5cLEqU9RaPfG8Yc-yi8kfvSfkAWUg4DT0x7__e4DCUcUyOPBPNonKGxYZNitUw_ebiG2fJEYsQpCF7bJXVyQOkkLTsFHgdrVWFkFixBkMYqp7yD2zPXY11sFIUZdet1G4SvufNbE7l05bH3DImCcDhLEWR")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Elegant Mahogany Casket</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A timeless choice for a dignified farewell.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYFA8XvGOtiXHjpZV8zXxUnw_rfNsf5Ix-Fo_qZARiFclwxOxSic41YB2S-dfTTLmTeq4nt_Iwqu7aKB0wjX8Ebg_DOg40NIUkYHLMMUw9CZjParC9vKaVEMeW6axmlRIWAmHiAdRSUZROxN_y8-FYrTWP9eXjK1Gypyvc530FN0TGHeyRf9fYay3wDXYYkwSmWTE2NxzZfxVQypeMF0pfb2muOwKoCW9o_Af4_FajVUWYcoZb4qqzwOByEKp1_yOae69cq75boHyx")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Classic Bronze Urn</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A beautiful resting place for cherished memories.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB2PTth-UeMMGeFwAhYzX3EQ4gKaE9zBoZuyuODjRbSbJtVxOHW3E6wimhdT0J6HQ-PjOHPTLqA-wXH40CIh575_Uhk5z6orSGQDonA340UIFvKCx7loXHWtzpoPSDfqy4M-qw-NPajeJAGzrdsZBdJw5TcRZJQIputgaa1h90lDxULUdd6cc5M3FBpdxIxAx18cOPPhXoI6laHIowld-swPDP98NMuIQwYNQhVnRhdsdF1ww2_Spf5xb7-t7QH60STPNf7BO0RiLS")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Serene White Lily Arrangement</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Express your condolences with this peaceful arrangement.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-XBT7KeS2qS5C33N8ZOtCxE4H9fYwP41Nx4PS5LZN_bncvBWR1rYxfzafXyyFPhUy9cLDLnWJeE66e6PyIQi-bT9ZkZnAcfp3JS_WTCpcyfwoW518EZB3N29WRD5vwDqaCF7hve6EQpdiIB9cBlWi_PhxCRJtAl7rnMZtoiak-mOt0Kf1uml0Op2gaX2KaGJTt9ofecYeLi7XosMMxqLu2jF7PFEXMWc1vsrXWQfMa42yE1cYfVu1LA81H2yF8p7r8WudopS_fZ2F")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Personalized Memorial Plaque</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Honor their memory with a custom-engraved plaque.</p>
                  </div>
                </div>
              </div>
              <p className="text-[#6e608a] text-sm font-normal leading-normal pb-3 pt-1 px-4">$2,499.00</p>
              <div className="flex px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5f16f2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Cart</span>
                </button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiLHouqIvs5UeOB7arRx7N0O0_8tlAs7lbdiWgODu9dBUhmH4t_Mq9Ud9EgeLXKG_rnzD7zMAz4n4bUfkJu4iHwZfKfqOLqg_XqGq-CbJG4Bz2RePFdqkptAtNr_tpUR6ZpDSMgoAIN5cWVY6kuwdnTXjS0EDHbnK7a6NdX6JYoTmCkqwkta1iI0TlI_k06NQ1OUf05pokg6Q-485qLIgOlEHWV9NO2jwL-ajq20Ch2yrPT6UQdsL58X2IY-gWA8lYNzxj783Ymbxv")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Heartfelt Sympathy Card</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Offer comfort and support with a thoughtful card.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFIslrIPp3nRkkPLoTU1CWgZAU78fW1BEkrIkG_C8Xj0m_wy8Gv-PNVC2INa3Pz1TApraxmyaU84sox1J3KrrXB_pOnb8zZMs5faInmygnPItLSNNso-K4YRmBiaSLNoQ6BTeO6tVwhvqTJGiRQ0BS57pBSwWs-SbNzX4j6s2XtWCqd0-6dQVFz9OmtAgOpa4FBI7i843n5xgG0K0lROXMB_bAEXrYmc9bDWtkg83tXyW6xHYGLR_J8HsK_8YOFU9Zr07WNGpbJW0T")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Rustic Pine Casket</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A natural and eco-friendly option for a peaceful goodbye.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW0XYlUW2LRa1KntgvKGP5oDkfbFoBES5sP4fidqBOgBbgF4oxyBhlxKCD26aFGwVvGmSdAsyYrfqemTbYISBMU9w8WsFRTjyYc3GJej5l1ScHHSApcYUBD6KQTTRHp4PaXMmE7T0jr3YOtDuZ7vwXL53N0-JtAP2DsMv7FfFVu4jhaIOndBEpBR4QKxshlFRWNFsXM0SiB9F-b78POfF-Z8DEfeN5qfeKW-wg68IsEGHTME075-gdTQ-xjREHehMElNgbD7moY2qu")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Modern Ceramic Urn</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">A contemporary urn for a modern memorial.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_WYGgtEbDm3kZXQucCENRRMDkACX_8345ppBU7awWOKxBIY9kriixg3T4s_aeq8FLztQEKeT63JPZQO5QMjBaRDwSAiyxxy44Dt44TMdKYesGZgyCE6ioQ0LItKUWjHSxEfiho7F6YyoGqQbTzU4lmLpVwa5riLrAeEjlLZq2CoRYIR2E2pTqNL_8GQPEjaOwcEH-Mn0iVHimgxQKYjN3FPXA2ixq6KOSTachGTWv7U8ntoKGgRlalstgKEstW-HfG7nSHPoUiXrp")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Vibrant Rose Bouquet</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Brighten their day with a beautiful bouquet of roses.</p>
                  </div>
                </div>
              </div>
              <p className="text-[#6e608a] text-sm font-normal leading-normal pb-3 pt-1 px-4">$1,899.00</p>
              <div className="flex px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5f16f2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Cart</span>
                </button>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgy06apjwzkWahQ7AXZKGNYLQ53GT_ycECVFxULxP6p1Xne29I_BIuyNKSM5AJNzXfuFC0pzA9oLoBtt9UaOPc_c7AIff4B_sqvCw683eHOASQoQX45bwmawA_HlyMqOWAI8K3bwQkvdSxmg1BSvhFZYlhy6c2qx8I9JaaiNnZgZPhOGp7stc5lNzu7jngRQi_xeIqBekmR6gN-9T_UBsB3FKA3MSYcSbzq--opBrDAfRZb02ceSRYdLFFoyGw4pCrVJkZWkHO6ve0")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Photo Memorial Frame</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Display a cherished photo in this elegant frame.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCW5lTuZkgu-MEf9kF2B_CAL74TU7bKuYgOizRD9sdkKT8dgF-VeijPl6C5Ly5-4ZSqBgqL8s02XzeonDtfFyrMArV3GjUdySHcCMo5aaooaG5NEecrsv7uqdO-igJE866uY7s_JO8oMoXd9gO3kHLHAccddrb__XmKmo4fd9wj6aAQCHwZDGD9fZJae6G_PmzUDPRghKmMcgfFKWgXUge-7-ZCUAlZk5mZLZJGzEuy7bUnEoQPGCne4b4VylPJPtTnN0L9AAUSJx-h")` }}
                  ></div>
                  <div>
                    <p className="text-[#131118] text-base font-medium leading-normal">Simple Condolence Card</p>
                    <p className="text-[#6e608a] text-sm font-normal leading-normal">Express your sympathy with a simple, heartfelt card.</p>
                  </div>
                </div>
              </div>
              <p className="text-[#6e608a] text-sm font-normal leading-normal pb-3 pt-1 px-4">$1,899.00</p>
              <div className="flex px-4 py-3 justify-start">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#5f16f2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
