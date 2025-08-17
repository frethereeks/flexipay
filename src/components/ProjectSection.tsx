import { ASSETS_URL } from '../assets'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.css"
import { Link } from 'react-router-dom'


export default function ProjectSection() {
    
    const slides = [
        {
            id: "80z720zsdgxy70",
            title: "Kyami",
            price: 17300000,
            location: "FCT Abuja",
            address: "Airport Road, Lugbe",
            image: ASSETS_URL["oakyard_kyami"],
            link: "https://oakyardproperties.com/properties/kyami"
        },
        {
            id: "80z720zsdgxy71",
            title: "Orchid Vista",
            price: 35000000,
            location: "FCT Abuja",
            address: "Katampe Extension, Off Jahi Road",
            image: ASSETS_URL["oakyard_orchid_vista"],
            link: "https://oakyardproperties.com/properties/orchid-vista"
        },
        {
            id: "80z720zsdgxy72",
            title: "Tulip Estate",
            price: 7500000,
            location: "FCT Abuja",
            address: "Idu Industrial Area, Off Karimo Road",
            image: ASSETS_URL["oakyard_tulip"],
            link: "https://oakyardproperties.com/properties/tulip-estate"
        },
    ]

    return (
        <section className='bg-backdrop py-10 sm:py-12 px-4 relative overflow-hidden'>
            <aside className="space-y-2 text-center max-w-2xl mx-auto my-4">
                <h4 data-aos="fade-down" data-aos-delay="300" className="text-dark text-2xl md:text-4xl font-bold">Other Ongoing Projects</h4>
                {/* <p data-aos="fade-up" data-aos-delay="600" className="text-base text-text font-normal sm:px-10 md:px-20 leading-snug">Our portfolio of projects is full of incredible varieties of deals that are impossible to resist.</p> */}
                <p data-aos="fade-up" data-aos-delay="600" className="text-base text-text font-normal sm:px-10 md:px-20 leading-snug">We are constantly on the lookout for smart opportunities to provide varieties to both our current and prospective customers</p>
            </aside>
            <aside data-aos="fade-up" data-aos-delay="800" className="py-10 relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        760: { slidesPerView: 3, spaceBetween: 10 },
                    }}
                    direction='horizontal'
                    modules={[Autoplay]}
                    className='w-full h-full justify-center items-stretch'
                >
                    {
                        slides.map(el => (
                            <SwiperSlide key={el.id} className='relative w-full h-full'>
                                <Link to={`${el.link}`} target="_blank" rel="noopener noreferrer" className='flex flex-col gap-2'>
                                    <div className="relative h-40 md:h-52 rounded-md overflow-hidden">
                                        <img src={el.image} alt={el.title} className='object-cover absolute top-0 left-0 w-full h-full' />
                                        <div className="absolute top-3 right-3 py-1 px-3 rounded-full bg-primary text-white">
                                            <p className='text-white text-sm'>&#8358;{el.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="px-2 flex items-center gap-2 md:gap-4">
                                        <div className="flex-1">
                                            <h5 className='text-xl md:text-2xl text-dark font-semibold md:font-bold leading-snug'>{el.title}</h5>
                                            <div className="flex items-center gap-2 text-primary">
                                                <p className='text-xs md:text-sm text-text opacity-90'>{el.location}</p>
                                                •
                                                <p className='text-xs md:text-sm text-text opacity-90'>{el.address}</p>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </aside>
        </section>
    )
}
