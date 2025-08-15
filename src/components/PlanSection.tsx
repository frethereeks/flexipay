import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function PlanSection() {
    return (
        <section className='bg-backdrop py-20 md:py-32 px-4 relative overflow-hidden'>
            {/* <div className="h-60 w-60 md:h-96 md:w-96 rounded-full bg-[#eef0f7] opacity-20 scale-x-125 absolute left-[80%] bottom-[75%]"></div> */}
            <div className="space-y-2 text-center max-w-2xl mx-auto">
                <h4 data-aos="fade-down" data-aos-delay="300" className="text-dark text-2xl md:text-4xl font-bold">Flexy Payment Plans</h4>
                <p data-aos="fade-up" data-aos-delay="600" className="text-base text-text font-medium sm:px-10 md:px-20 leading-loose">Choose the plan that best fits your financial needs and embark on your journey to land ownership</p>
            </div>
            <div className="py-10 md:pt-16 flex flex-col md:flex-row md:items-center gap-4 md:max-w-5xl mx-auto">
                <aside data-aos="fade-right" data-aos-delay="1000" className="flex-1 px-4 md:px-6 py-6 bg-white relative border-2 border-primary hover:border-dark/50 rounded-md drop-shadow-xs shadow-primary hover:shadow-text hover:shadow-[0_0_12px_-4px_#0004] before:absolute before:h-10 before:w-10 before:rounded-full before:top-4 before:left-7 before:bg-primary/50 after:absolute after:h-12 after:w-12 after:rounded-full after:top-4 after:left-10 after:bg-primary/50">
                    <p className="text-dark text-lg md:text-xl text-center font-semibold">Standard Plans</p>
                    <h3 className="text-dark text-3xl md:text-4xl font-bold pb-4 pt-6 border-b border-b-text/20 flex justify-center items-center">&#8358;75,000 <span className="font-light skew-2">/</span> <span className="text-sm">month</span></h3>
                    <p className="w-max py-2 px-3 rounded-b-md bg-dark/10 mx-auto text-base text-text text-center font-semibold">monthly for 24 months</p>
                    <div className="pt-6 pb-4 divide-y divide-slate-100 text-center text-sm md:text-base text-text">
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> 200sqm Land Plot</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Basic Documentation</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Dedicated Support</p>
                    </div>
                    <Link to={`https://wa.me/2349088888733?text=Hi%20I%20want%20to%20get%20started%20with%20the%20flexipay%20standard%20plan`}  target="_blank" rel="noopener noreferrer" className="flex w-max mx-auto py-2 px-6 md:px-10 bg-primary hover:bg-dark text-white text-sm text-center font-semibold cursor-pointer rounded-sm">Get Started</Link>
                </aside>
                <aside data-aos="zoom-out" data-aos-delay="1300" className="flex-1 px-4 md:px-6 py-10 md:pt-12 bg-white relative border-2 border-dark/60 hover:border-dark/50 rounded-md drop-shadow-xs shadow-primary hover:shadow-text hover:shadow-[0_0_12px_-4px_#0004] before:absolute before:h-10 before:w-10 before:rounded-full before:top-4 before:left-7 before:bg-primary/50 after:absolute after:h-12 after:w-12 after:rounded-full after:top-4 after:left-10 after:bg-primary/50">
                    <p className="text-dark text-lg md:text-xl text-center font-semibold">Executive Plans</p>
                    <h3 className="text-dark text-3xl md:text-4xl font-bold pb-4 pt-6 border-b border-b-text/20 flex justify-center items-center">&#8358;150,000 <span className="font-light skew-2">/</span> <span className="text-sm">month</span></h3>
                    <p className="w-max py-2 px-3 rounded-b-md bg-dark/10 mx-auto text-base text-text text-center font-semibold">monthly for 24 months</p>
                    <div className="pt-6 pb-4 divide-y divide-slate-100 text-center text-sm md:text-base text-text">
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> 400sqm Land Plot</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Expedited Documentation</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> 24/7 Premium Support</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Personalized Consultation</p>
                    </div>
                    <Link to={`https://wa.me/2349088888733?text=Hi%20I%20want%20to%20get%20started%20with%20the%20flexipay%20premium%20plan`}  target="_blank" rel="noopener noreferrer" className="flex w-max mx-auto py-2 px-6 md:px-10 hover:bg-primary bg-dark text-white text-sm text-center font-semibold cursor-pointer rounded-sm">Get Started</Link>
                </aside>
                <aside data-aos="fade-left" data-aos-delay="1500" className="flex-1 py-10 px-4 md:p-6 bg-white relative border-2 border-primary hover:border-dark/50 rounded-md drop-shadow-xs shadow-primary hover:shadow-text hover:shadow-[0_0_12px_-4px_#0004] before:absolute before:h-10 before:w-10 before:rounded-full before:top-4 before:right-7 before:bg-primary/50 after:absolute after:h-12 after:w-12 after:rounded-full after:top-4 after:right-10 after:bg-primary/50">
                    <p className="text-dark text-lg md:text-xl text-center font-semibold">Premium Plans</p>
                    <h3 className="text-dark text-3xl md:text-4xl font-bold pb-4 pt-6 border-b border-b-text/20 flex justify-center items-center">&#8358;100,000 <span className="font-light skew-2">/</span> <span className="text-sm">month</span></h3>
                    <p className="w-max py-2 px-3 rounded-b-md bg-dark/10 mx-auto text-base text-text text-center font-semibold">monthly for 24 months</p>
                    <div className="pt-6 pb-4 divide-y divide-slate-100 text-center text-sm md:text-base text-text">
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> 300sqm Land Plot</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Full Documentation</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Priority Support</p>
                        <p className="flex items-center gap-2 md:gap-3 px-2 py-1.5"><RiCheckboxCircleFill className="text-xs text-success" /> Site Visit Included</p>
                    </div>
                    <Link to={`https://wa.me/2349088888733?text=Hi%20I%20want%20to%20get%20started%20with%20the%20flexipay%20executive%20plan`}  target="_blank" rel="noopener noreferrer" className="flex w-max mx-auto py-2 px-6 md:px-10 bg-primary hover:bg-dark text-white text-sm text-center font-semibold cursor-pointer rounded-sm">Get Started</Link>
                </aside>
            </div>
        </section>
    )
}
