import { RiArrowUpSLine, RiFacebookFill, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { ASSETS_URL } from '../assets'
import { LuArrowUpRight } from 'react-icons/lu'

export default function Footer() {

    return (
        <>
            <footer className='relative z-20 bg-dark pt-10 md:pt-16 px-4'>
                <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-white">
                    <aside className="space-y-4 md:col-span-2">
                        <div data-aos="fade-right" data-aos-delay="200" className="w-max p-2 bg-backdrop">
                            <Link to="/" className='flex items-center gap-2 w-[10rem]'>
                                <div className="h-10 rounded-full relative">
                                    <img src={ASSETS_URL['logo']} alt="flexipay logo" className="relative top-0 left-0 h-full bg-cover" />
                                </div>
                            </Link>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="500" className="md:max-w-sm text-sm text-backdrop/50 font-medium leading-loose">Choose the plan that best fits your financial needs and embark on your journey to land ownership</p>
                    </aside>
                    <aside className="space-y-1">
                        <h4 data-aos="fade-left" data-aos-delay="500" className="text-lg text-white font-semibold pb-2">Useful Links</h4>
                        <a data-aos="zoom-out" data-aos-delay="600" className='flex text-backdrop/70 hover:text-backdrop text-sm p-1' href={`/#about`}> About </a>
                        <a data-aos="zoom-out" data-aos-delay="800" className='flex text-backdrop/70 hover:text-backdrop text-sm p-1' href={`/#plan`}> Plans </a>
                        <a data-aos="zoom-out" data-aos-delay="1000" className='flex text-backdrop/70 hover:text-backdrop text-sm p-1' href={`/#contact`}> Contact </a>
                    </aside>
                    <aside className="space-y-1">
                        <h4 data-aos="fade-left" data-aos-delay="500" className="text-lg text-white font-semibold pb-2">Legal Links</h4>
                        <Link data-aos="zoom-up" data-aos-delay="700" className='flex text-backdrop/70 hover:text-backdrop text-sm p-1' to="/terms-and-conditions">Terms and Conditions</Link>
                        <Link data-aos="zoom-up" data-aos-delay="900" className='flex text-backdrop/70 hover:text-backdrop text-sm p-1' to="/privacy-policy">Privacy Policy</Link>
                        <Link data-aos="zoom-up" data-aos-delay="1100" className='flex gap-2 items-center text-backdrop/70 hover:text-backdrop text-sm p-1' to="https://oakyardproperties.com" target="_blank" rel="noopener noreferrer">Oakyard Properties <LuArrowUpRight className="text-xs" /></Link>
                    </aside>
                    <div className="col-start-1 -col-end-1 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 p-4 mt-6 border-t border-slate-50/10">
                        <p className="text-xs text-backdrop/40">&copy; {new Date().getFullYear()} FlexiPay. All rights reserved</p>
                        <div className="flex gap-2 w-max">
                            <Link className='h-5 w-5 flex justify-center items-center bg-backdrop/20 hover:bg-backdrop/10 text-backdrop/60 hover:text-backdrop/30 text-sm rounded' to="https://www.twitter.com/oakyard_properties" target="_blank" rel="noopener noreferrer"> <RiTwitterXLine /> </Link>
                            <Link className='h-5 w-5 flex justify-center items-center bg-backdrop/20 hover:bg-backdrop/10 text-backdrop/60 hover:text-backdrop/30 text-sm rounded' to="https://www.facebook.com/oakyard_properties" target="_blank" rel="noopener noreferrer"> <RiFacebookFill /> </Link>
                            <Link className='h-5 w-5 flex justify-center items-center bg-backdrop/20 hover:bg-backdrop/10 text-backdrop/60 hover:text-backdrop/30 text-sm rounded' to="https://www.instagram.com/oakyard_properties" target="_blank" rel="noopener noreferrer"> <RiInstagramLine /> </Link>
                        </div>
                    </div>
                </div>
            </footer>
            <a href={`./#root`} className="fixed right-4 bottom-4 z-50 bg-[#71869d1a] hover:bg-primary text-[#677788] hover:text-backdrop text-sm h-8 w-8 grid place-items-center rounded-full cursor-pointer">
                <RiArrowUpSLine />
            </a>
        </>
    )
}
