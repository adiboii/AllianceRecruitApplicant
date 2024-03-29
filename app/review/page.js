"use client";
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useApplicationContext } from "../context/data-provider";
import { postPersonalInfo, postAttachment, postApplication } from "./utils";
import { useRouter } from 'next/navigation';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary, CloudinaryImage} from "@cloudinary/url-gen";


const ReviewPage = () => {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const { jobId, attachment, personalInfo } = useApplicationContext();

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'da1sdiduo'
        }
      }); 

    const formalPhoto = cld.image(attachment?.get("formal_photo"));
    const resume = cld.image(attachment?.get("resume")+".jpg");
      
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
        </div>
    )   

    const Attachment = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">LinkedIn</h5>
            <p>{attachment?.get('linkedin_url')}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Portfolio</h5>
            <p>{attachment?.get('portfolio_url')}</p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Formal Picutre</h5>
            <AdvancedImage cldImg={formalPhoto}/>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Resume</h5>
            <AdvancedImage cldImg={resume}/>
        </div>
    )

    const handleOnClick = async () => {
        const personalInfoId = await postPersonalInfo(JSON.stringify(personalInfo));    
        
        const attachmentId = await postAttachment({
            "linkedin_url": attachment?.get('linkedin_url'),
            "portfolio_url": attachment?.get('portfolio_url'),
            "formal_photo": attachment?.get('formal_photo'),
            "resume": attachment?.get('resume'),
        });

        await postApplication({
            "job_id": jobId,
            "personal_information_id": personalInfoId,
            "attachmentId": attachmentId,
            "status": "Pre-screened",
            "dateTimeApplied": new Date(),
        })

        router.push("/finish");
    }

    const reviewPages = [
        <PersonalInformation/>,
        <Attachment/>
    ]

    const Navigation = () => {
        if(step == 0){
            return(
            <div className="flex justify-between mb-4 mt-10">
                <div className="flex justify-start">
                    <Link href="#" onClick={() => window.history.back()}>
                        <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">
                            Back
                        </button>
                    </Link>
                    <button onClick={() => setStep(step + 1)} className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">
                        Next
                    </button>
                </div>
            </div>
            )
        }else{
            return(
            <div className="flex justify-between mb-4 mt-10">
                <div className="flex justify-start">
                    <button onClick={() => {setStep(step - 1)}} className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">
                        Back
                    </button>
                    <button type="submit" onClick={handleOnClick} className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">
                        Submit
                    </button>
                </div>
            </div>
            )
        }
    }
        
  return (
    <div className="h-fit">
      <Navbar showAboutButton={false}/>
       <Container>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-black">Review Application</h1>
                {reviewPages[step]}
                <Navigation/>
            </div>         
      </Container> 
    </div>
  );
}

export default ReviewPage;