import Navbar from '@component/components/Navbar'
import illustration1 from "../public/illustration1.svg";
import Image from 'next/image';
import Link from 'next/link';


export default function LandingPage() {

  return (
    <div className='bg-white h-screen'>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[80%]">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:w-4/5 xl:w-3/5">
          <div className="md:w-1/2">
            <Image src={illustration1} alt="Illustration 1" />
          </div>
          <div className="md:w-1/2 md:pl-8 xl:pl-16">
            <h4 className="text-sm md:text-md lg:text-xl text-primary mb-4 uppercase">
              Welcome to Alliance Recruit!
            </h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Let us be your <br/>career ally!
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6">
              Join us in making a positive impact by creating software that empowers people and drives meaningful change.
            </p>
            <Link href="/jobs" passHref legacyBehavior>
              <button className="bg-primary text-white font-bold py-4 px-10 rounded-lg transition duration-200 transform hover:translate-x-1">
                GET STARTED  
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
