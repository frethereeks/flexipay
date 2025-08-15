import { ArrowDownOutlined } from '@ant-design/icons'
import { ASSETS_URL } from '../assets'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'

export default function HeroSection() {
    return (
        <>
            <div className="relative flex flex-col-reverse md:grid md:grid-cols-5 gap-10 py-10 px-4">
                <aside className="flex-1 col-span-2 md:py-20">
                    <div className="md:max-w-xl space-y-4 md:space-y-8">
                        <h2 data-aos="fade-down" className="font-sans text-xl sm:text-3xl md:text-5xl font-bold text-primary">Masters <span className="text-dark">of Consistency and</span> Quality</h2>
                        <p data-aos="fade-right" data-aos-delay="500" className="text-base md:text-lg text-text">Flexipay simplifies land acquisition with flexible monthly payment plans, making property ownership accessible and secure for everyone to start building for the future from today.</p>
                        <div className="flex gap-4 md:gap-8">
                            <Link data-aos="fade-left" data-aos-delay="1000" to={"/donation"} className="relative flex gap-2 items-center self-center w-max whitespace-nowrap px-4 md:px-10 py-2 h-max border border-dark bg-dark text-white text-base font-semibold rounded-sm">Learn More <LuArrowUpRight className="text-xs" /></Link>
                            <Link data-aos="fade-up" data-aos-delay="1500" to={"/donation"} className="relative flex gap-2 items-center self-center w-max px-8 md:px-8 py-2 h-max border border-primary bg-transparent hover:bg-primary text-primary hover:text-white text-base font-semibold rounded-sm">Contact Us <ArrowDownOutlined className="text-xs -rotate-45 translate-y-1" /></Link>
                        </div>
                    </div>
                </aside>
                <aside className="col-span-3 flex-1 relative mt-8 md:mt-0 py-0 min-h-56">
                    <aside className="flex-1 md:hidden relative min-h-60 md:h-auto overflow-hidden rounded-bl-4xl md:rounded-bl-[25%]">
                        <img src={ASSETS_URL['building']} alt="building" className="object-cover object-center absolute h-full w-full top-0 left-0" />
                    </aside>
                    <figure className="flex-1 hidden md:block absolute w-full h-full -top-1/4 right-0 pr-0 ie-main-hero scale-100" >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
                            <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
              c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"/>
                            <defs>
                                <path id="mainHeroSVG1" d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z" />
                            </defs>
                            <clipPath id="mainHeroSVG2">
                                <use xlinkHref="#mainHeroSVG1" />
                            </clipPath>
                            <g transform="matrix(1 0 0 1 0 0)" clip-path="url(#mainHeroSVG2)">
                                <image width="750" height="750" xlinkHref={ASSETS_URL['building']} transform="matrix(1.4462 0 0 1.4448 52.8755 0)"></image>
                            </g>
                        </svg>
                    </figure>
                </aside>
            </div>
        </>
    )
}
