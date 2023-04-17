'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";

const PersonalInfo = () => {
    return (
        <div className="h-fit">
        <Navbar showAboutButton={false}/>
        <Container>
            <form className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-black">Personal Information</h1>
                <p className="text-sm mb-2 text-black"> <span className="text-primary">*</span> Indicates a required field</p>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Legal Name</h5>
                <div className="mb-4">
                <label htmlFor="first-name" className="block text-sm font-medium  mb-2">First Name<span className="text-primary">*</span> </label>
                <input type="text" name="first-name" id="first-name" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                <label htmlFor="middle-name" className="block text-sm font-medium text-gray-700 mb-2">Middle Name<span className="text-primary">*</span> </label>
                <input type="text" name="middle-name" id="middle-name" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">Last Name<span className="text-primary">*</span> </label>
                <input type="text" name="last-name" id="last-name" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Basic Information</h5>
                <div className="mb-4">
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-2">Sex<span className="text-primary">*</span> </label>
                <input type="text" name="sex" id="sex" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                <label htmlFor="date-of-birth" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth<span className="text-primary">*</span> </label>
                <input type="date" name="date-of-birth" id="date-of-birth" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Address</h5>
                <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country<span className="text-primary">*</span> </label>
                <input type="text" name="country" id="country" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">Province<span className="text-primary">*</span> </label>
                    <input type="text" name="province" id="province" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City<span className="text-primary">*</span> </label>
                    <input type="text" name="city" id="city" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                    <input type="text" name="zipcode" id="zipcode" className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-2">Address Line 1<span className="text-primary">*</span> </label>
                <input type="text" name="addressLine1" id="addressLine1" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-2">Address Line 2</label>
                    <input type="text" name="addressLine2" id="addressLine2" className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <hr className="my-4 border-b-1 border-gray-400" />
                <h5 className="text-base font-bold mb-2">Contact</h5>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address<span className="text-primary">*</span> </label>
                    <input type="email" name="email" id="email" required className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>
                <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number<span className="text-primary">*</span> </label>
                <input type="text" name="phoneNumber" id="phoneNumber" className="w-[50%] h-10 border border-gray-300 rounded-md shadow-sm focus:border-gray-500"/>
                </div>

            </form>
            <div className="mt-24 max-w-4xl mx-auto">
                <div className="flex justify-start">
                <Link href="#" onClick={() => window.history.back()}>
                    <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">Back</button>
                </Link>
                <Link href="/attachment">
                    <button className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">Continue</button>
                </Link>
                </div>
            </div>
        </Container>
        </div>
    );
}

  export default PersonalInfo;