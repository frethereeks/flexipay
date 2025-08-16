import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <main className='flex flex-col'>
        <section className="relative bg-white px-4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full scale-200 -scale-y-200">
            <path fill="#f7faff" d="M48.4,-39.5C53.1,-32.8,40.4,-13.2,31.7,0.1C22.9,13.3,18,20.3,10.9,24.5C3.7,28.7,-5.7,30.1,-14.8,27.1C-23.9,24.1,-32.6,16.8,-32.5,9.6C-32.4,2.4,-23.5,-4.6,-16.6,-11.9C-9.8,-19.1,-4.9,-26.5,8.5,-33.3C21.9,-40.1,43.8,-46.3,48.4,-39.5Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1/4 left-0 w-full h-full scale-200 -scale-y-200">
            <path fill="#34C8EA51" d="M21.4,-34.4C34.7,-24.7,57.4,-30.6,67.8,-25.7C78.1,-20.8,76.2,-5.1,72.7,9.6C69.2,24.3,64.3,37.8,55.1,47C46,56.1,32.6,60.8,20.9,58.6C9.1,56.3,-1,47.1,-9.9,41.1C-18.7,35.1,-26.4,32.3,-29.1,26.6C-31.8,20.9,-29.6,12.4,-27.1,6.1C-24.6,-0.3,-21.8,-4.5,-23.9,-15.6C-26.1,-26.7,-33.2,-44.7,-30,-59C-26.9,-73.3,-13.4,-84,-4.7,-76.7C4,-69.3,8,-44,21.4,-34.4Z" transform="translate(100 100)" />
          </svg>
          <div className="container mx-auto min-h-screen relative flex flex-col-reverse md:flex-row gap-6">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center gap-2 md:gap-3 max-w-screen-sm text-white">
                  <p className="bg-primary text-center py-1.5 px-6 rounded-full w-max mx-auto text-backdrop text-sm font-semibold relative">This is Flexipay!</p>
                <h2 className="font-bold text-center text-dark leading-snug text-3xl md:text-4xl">Oop! An ERROR has occured</h2>
                <p className="text-text text-center text-base pb-2">We are so sorry but it appears there has been a problem. The page you are looking for may not exist or has been moved. Please, use the link below to return to the home page to enjoy our best offers. Thank you.</p>
                <Link to={"/"} className="group flex items-center gap-2 bg-dark text-white hover:translate-y-1 transition-all duration-300 rounded-lg w-max py-2 px-6 text-sm md:text-base font-medium mx-auto"><IoArrowBackOutline className='text-xs md:text-sm pt-0.5' /> Back to Home Page</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
