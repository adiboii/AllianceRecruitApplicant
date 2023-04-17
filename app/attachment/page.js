'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";

const Attachment = () => {
    return (
        <div className="h-fit">
        <Navbar showAboutButton={false}/>
        <Container>
            <form className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-black">Attachment</h3>
                <p className="text-sm mb-2 text-black"> <span className="text-primary">*</span> Indicates a required field</p>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">LinkedIn</h5>
                <div className="mb-4">
                <label htmlFor="first-name" className="block text-sm font-medium  mb-2">Profile URL </label>
                <input type="text" name="profile-url" id="profile-url" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Portfolio</h5>
                <div className="mb-4">
                <label htmlFor="first-name" className="block text-sm font-medium  mb-2">Portfolio URL </label>
                <input type="text" name="portfolio-url" id="portfolio-url" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Formal Photo</h5>
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">Upload Formal Photo<span className="text-primary">*</span></label>
                    <input type="file" name="photo" id="photo" className="w-[50%] border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
                </div>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Resume/CV</h5>
                <div className="mb-4">
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Upload Resume/CV<span className="text-primary">*</span></label>
                    <input type="file" name="resume" id="resume" className="w-[50%] border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"/>
                </div>
                
            </form>
            <div className="mt-24 max-w-4xl mx-auto">
                <div className="flex justify-start">
                <Link href="#" onClick={() => window.history.back()}>
                    <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">Back</button>
                </Link>
                <Link href="/finish">
                    <button className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">Continue</button>
                </Link>
                </div>
            </div>
        </Container>
        </div>
    );
}

  export default Attachment;