"use client";
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";

//TODO: add location icon

const JobDetailsPage = () => {

    const dummy = 'Dummy Data';

    const LegalName = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Legal Name</h5>
            <label className="block text-sm font-medium">First Name</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Middle Name</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Last Name</label>
            <p className="mb-4">{dummy}</p>
        </div>
    )

    const BasicInformation = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Basic Information</h5>
            <label className="block text-sm font-medium">Sex</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Date of Birth</label>
            <p className="mb-4">{dummy}</p>
        </div>
    )

    const Address = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Address</h5>
            <label className="block text-sm font-medium">Country</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Province</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">City</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Zip Code</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Address Line 1</label>
            <p className="mb-4">{dummy}</p>
            <label className="block text-sm font-medium">Address Line 2</label>
            <p className="mb-4">{dummy}</p>
        </div>
    ) 

    const Contact = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Contact</h5>
            <label className="block text-sm font-medium">Email</label>
            <p>{dummy}</p>
            <label className="block text-sm font-medium">Phone Number</label>
            <p>{dummy}</p>
        </div>
    )
    
    const PersonalInformation = () => (
        <div>
            <LegalName/>
            <BasicInformation/>
            <Address/>
            <Contact/>
        </div>
    )

    const Attachment = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">LinkedIn</h5>
            <p>{dummy}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Portfolio</h5>
            <p>{dummy}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Formal Picutre</h5>
            <p>{dummy}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Resume</h5>
            <p>{dummy}</p>
        </div>
    )


    const reviewPages = [
        <PersonalInformation/>
        <Attachment/>
    ]
  return (
      <div className="h-fit">
      <Navbar showAboutButton={false}/>
       <Container>
            <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-black">Review Application</h1>
                <PersonalInformation/>
                <Attachment/>
            </div>         
      </Container> 
  </div>
  );
}

export default JobDetailsPage;