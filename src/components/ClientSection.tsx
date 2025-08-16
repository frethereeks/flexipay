import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.css";

export default function ClientSection() {
  return (
    <article className="relative py-14 px-4 bg-dark">
      <figure className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 mb-11">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25rem" height="25rem" viewBox="0 0 8 8" xmlSpace="preserve">
          <path fill="#fff" opacity=".025" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
                C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
                c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
                C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"></path>
        </svg>
      </figure>
      <div className="relative max-w-lg mx-auto gap-6 md:gap-8">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 8000,
          }}
          direction='horizontal'
          modules={[Autoplay]}
          className='w-full h-full justify-center items-stretch'
        >
          <SwiperSlide className='relative w-full h-full'>
            <aside className="sm:col-span-2 md:col-span-3 flex-1 sm:py-10 space-y-8 text-center">
              <p data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop font-medium leading-relaxed py-4">"Me and my husband have been on the lookout for a good opportunity to tap into the real estate market, oakyard properties availed us that opportunity and they made it so seemless."</p>
              <div className="space-y-0">
                <h5 data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop/70 font-medium leading-tight">Mrs. Amaka Agunwa</h5>
                <p data-aos="fade-up" data-aos-delay="1000" className="text-xs text-text font-medium leading-relaxed">Katampe Extension Plan Beneficiary</p>
              </div>
            </aside>
          </SwiperSlide>
          <SwiperSlide className='relative w-full h-full'>
            <aside className="sm:col-span-2 md:col-span-3 flex-1 sm:py-10 space-y-8 text-center">
              <p data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop font-medium leading-relaxed py-4">"Nobody likes to be cheated out of their money so, I was skeptical when I first invested with Oakyard Properties but after coming through excellently the 4th time of doing business with them, I knew these guys are not joking around."</p>
              <div className="space-y-0">
                <h5 data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop/70 font-medium leading-tight">Engr. Andrew Adeiza</h5>
                <p data-aos="fade-up" data-aos-delay="1000" className="text-xs text-text font-medium leading-relaxed">Kyami Housing Plan</p>
              </div>
            </aside>
          </SwiperSlide>
          <SwiperSlide className='relative w-full h-full'>
            <aside className="sm:col-span-2 md:col-span-3 flex-1 sm:py-10 space-y-8 text-center">
              <p data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop font-medium leading-relaxed py-4">"I can confidently say the best decision of my life is partnering with oakyard properties on the Jahi Resettlement Plan, I not only became a land owner but a house owner too!"</p>
              <div className="space-y-0">
                <h5 data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop/70 font-medium leading-tight">Mr. Chibuzo Ikechukwu</h5>
                <p data-aos="fade-up" data-aos-delay="1000" className="text-xs text-text font-medium leading-relaxed">Katampe Extension Plan Beneficiary</p>
              </div>
            </aside>
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  )
}





// import { ASSETS_URL } from "../assets";

// export default function ClientSection() {
//   return (
//     <article className="relative py-14 px-4 bg-dark">
//       <figure className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 mb-11">
//         <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25rem" height="25rem" viewBox="0 0 8 8" xmlSpace="preserve">
//           <path fill="#fff" opacity=".025" d="M3,1.3C2,1.7,1.2,2.7,1.2,3.6c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5
//                 C1.4,6.9,1,6.6,0.7,6.1C0.4,5.6,0.3,4.9,0.3,4.5c0-1.6,0.8-2.9,2.5-3.7L3,1.3z M7.1,1.3c-1,0.4-1.8,1.4-1.8,2.3
//                 c0,0.2,0,0.4,0.1,0.5c0.2-0.2,0.5-0.3,0.9-0.3c0.8,0,1.5,0.6,1.5,1.5c0,0.9-0.7,1.5-1.5,1.5c-0.7,0-1.1-0.3-1.4-0.8
//                 C4.4,5.6,4.4,4.9,4.4,4.5c0-1.6,0.8-2.9,2.5-3.7L7.1,1.3z"></path>
//         </svg>
//       </figure>
//       <div className="relative max-w-md mx-auto gap-6 md:gap-8">
//         {/* <figure className="relative w-full md:col-span-2 h-36 md:h-auto mx-auto md:mx-0 rounded-sm overflow-hidden">
//           <img src={ASSETS_URL['coinstack']} alt="coinstack" className="object-cover object-center absolute h-full w-full top-0 left-0" />
//         </figure> */}
//         <aside className="sm:col-span-2 md:col-span-3 flex-1 sm:py-10 space-y-8 text-center">
//           <p data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop font-medium leading-relaxed py-4">We are geared towards elevating the real-estate standard, house ownership plans by providing comprehensive solutions tailored to your unique project needs to ensure quality, efficient and an incredible level of client satisfaction every step of the way.</p>
//           <div className="space-y-0">
//             <h5 data-aos="fade-up" data-aos-delay="1000" className="text-base text-backdrop/70 font-medium leading-tight">Mrs. Amaka Agunwa</h5>
//             <p data-aos="fade-up" data-aos-delay="1000" className="text-xs text-text font-medium leading-relaxed">Katampe Plan Beneficiary</p>
//           </div>
//         </aside>
//       </div>
//     </article>
//   )
// }
