"use client";
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useApplicationContext } from "../context/data-provider";
import { postPersonalInfo, postAttachment } from "./utils";

//TODO: add location icon

const ReviewPage = () => {
    const [step, setStep] = useState(0);
    const { jobId, attachment, personalInfo } = useApplicationContext();
    console.log(JSON.stringify(personalInfo)); 
    console.log("Attachments:", attachment);
    console.log("Photo File:", attachment.get('attachment.formal_photo'));
    console.log("Resume File:", attachment.get('attachment.resume'));
    
    const LegalName = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Legal Name</h5>
            <label className="block text-sm font-medium">First Name</label>
            <p className="mb-4">{personalInfo.first_name}</p>
            <label className="block text-sm font-medium">Middle Name</label>
            <p className="mb-4">{personalInfo.middle_name}</p>
            <label className="block text-sm font-medium">Last Name</label>
            <p className="mb-4">{personalInfo.last_name}</p>
        </div>
    )

    const BasicInformation = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Basic Information</h5>
            <label className="block text-sm font-medium">Sex</label>
            <p className="mb-4">{personalInfo.sex}</p>
            <label className="block text-sm font-medium">Date of Birth</label>
            <p className="mb-4">{personalInfo.date_of_birth}</p>
        </div>
    )

    const Address = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Address</h5>
            <label className="block text-sm font-medium">Country</label>
            <p className="mb-4">{personalInfo.country}</p>
            <label className="block text-sm font-medium">Province</label>
            <p className="mb-4">{personalInfo.province}</p>
            <label className="block text-sm font-medium">City</label>
            <p className="mb-4">{personalInfo.city}</p>
            <label className="block text-sm font-medium">Zip Code</label>
            <p className="mb-4">{personalInfo.zip_code}</p>
            <label className="block text-sm font-medium">Address Line 1</label>
            <p className="mb-4">{personalInfo.address_line_1}</p>
            <label className="block text-sm font-medium">Address Line 2</label>
            <p className="mb-4">{personalInfo.address_line_2}</p>
        </div>
    ) 

    const Contact = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Contact</h5>
            <label className="block text-sm font-medium">Email</label>
            <p>{personalInfo.email_address}</p>
            <label className="block text-sm font-medium">Phone Number</label>
            <p>{personalInfo.phone_number}</p>
        </div>
    )
    
    const PersonalInformation = () => (
        <div>
            <LegalName/>
            <BasicInformation/>
            <Address/>
            <Contact/>

            <div className="mt-24 max-w-4xl mx-auto">
                <div className="flex justify-start">
                <Link href="#" onClick={() => window.history.back()}>
                    <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">Back</button>
                </Link>
                </div>
            </div>
        </div>
    )

    const Attachment = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">LinkedIn</h5>
            <p>{attachment.get('attachment.linkedin_url')}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Portfolio</h5>
            <p>{attachment.get('attachment.portfolio_url')}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Formal Picutre</h5>
            <p>{attachment.get('attachment.formal_photo').name}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Resume</h5>
            <p>{attachment.get('attachment.resume').name}</p>
            <div className="mt-24 max-w-4xl mx-auto">
                <div className="flex justify-start">
                <Link href="#" onClick={() => window.history.back()}>
                    <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">Back</button>
                </Link>
                <button onClick={handleOnClick} className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">Finish Review</button>
                </div>
            </div>
        </div>
    )

    const handleOnClick = () => {
        //postPersonalInfo(JSON.stringify(personalInfo.personalInfo));    
        postAttachment({
            "linkedin_url": attachment.get('attachment.linkedin_url'),
            "portfolio_url": attachment.get('attachment.portfolio_url'),
            "formal_photo": attachment.get('attachment.formal_photo').name,
            "resume": attachment.get('attachment.resume').name,
        });
    }

    const reviewPages = [
        <PersonalInformation/>,
        <Attachment/>
    ]

    const Navigation = () => (
        <div className="mx-auto">
            <div 
            class="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            role="group">
            <button
                type="button"
                class="inline-block rounded-l bg-primary px-8 py-4 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-0 active:bg-red-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => setStep(0)}>
                Personal Information
            </button>
            <button
                type="button"
                class="inline-block rounded-r bg-primary px-8 py-4 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-red-600 focus:outline-none focus:ring-0 active:bg-red-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => setStep(1)}>
                Attachments
            </button>
            </div>
        </div>
    )
        
  return (
      <div className="h-fit">
      <Navbar showAboutButton={false}/>
       <Container>
            <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-black">Review Application</h1>
                <Navigation/>
                {reviewPages[step]}
            </div>         
      </Container> 
  </div>
  );
}

export default ReviewPage;