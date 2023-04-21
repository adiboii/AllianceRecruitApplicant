'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react";

const PersonalInfo = () => {

    const { 
        register, 
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({mode: 'all'});


    /** Input field component */
    const Input = ({label, required, type, placeholder, noBorder}) => (
        <div>
            <label className="block text-sm font-medium  mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input 
                {...register(label, { required })} 
                className= {noBorder ? "" : `w-[50%] h-10 border px-3 mb-4 rounded-md shadow-sm focus:border-gray-500 ${errors[label] ? 'border-red-400' : 'border-gray-300'}`}
                type={type} placeholder={placeholder}
            />  
            {errors[label] && <span className="text-sm text-primary ml-4">Required</span>}
        </div>
    )

        const FileInput = ({label, required, type, placeholder, noBorder}) => (
            <div>
                <label className="block text-sm font-medium  mb-2">
                    {label} {required && <span className="text-primary">*</span>}
                </label>
                <input 
                    {...register(label, { required })} 
                    className= {noBorder ? "" : `w-[50%] h-10 border px-3 mb-4 rounded-md shadow-sm focus:border-gray-500 ${errors[label] ? 'border-red-400' : 'border-gray-300'}`}
                    type={type} placeholder={placeholder}
                />  
                {errors[label] && <span className="text-sm text-primary ml-4">Required</span>}
            </div>
        )

    const LegalName = () =>(
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Legal Name</h5>
            <Input required label="First Name" type="text" placeholder="First Name"/>
            <Input required label="Middle Name" type="text" placeholder="Middle Name"/>
            <Input required label="Last Name" type="text" placeholder="Last Name"/>
        </div>
    )

    const BasicInformation = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Basic Information</h5>
            <Input required label="Sex" type="text" placeholder="Sex"/>
            <Input required label="Date of Birth" type="date" placeholder="dd/mm/yyyy"/>
        </div>
    )

    const Address = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Address</h5>
            <Input required label="Country" type="text" placeholder="Country"/>
            <Input required label="Province" type="text" placeholder="Province"/>
            <Input required label="City" type="text" placeholder="City"/>
            <Input required label="Zip Code" type="text" placeholder="Zip Code"/>
            <Input required label="Addess Line 1" type="text" placeholder="Address Line 1"/>
            <Input label="Address Line 2" type="text" placeholder="Address Line 2"/>
        </div>
    )

    const Contact = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Contact</h5>
            <Input required label="Email Address" type="text" placeholder="Email Address"/>
            <Input required label="Phone Number" type="text" placeholder="Phone Number"/>
        </div>
    )

    const [step, setStep] = useState(0)

    const onPersonalInfoSubmit = (personalInfoData) => {
        console.log("Personal Info Data:", personalInfoData)
        !isValid ? console.log("Invalid form") : setStep(step + 1)
        reset()
    }
    const onAttachmentSubmit = (attachmentData) => {
        console.log("Attachment Data:", attachmentData)
    }

    const PersonalInformation = () => (
        <form onSubmit={handleSubmit(onPersonalInfoSubmit)}>   
            <h1 className="text-2xl font-bold mb-4 text-black">Personal Information</h1>
            <p className="text-sm mb-2 text-black"> <span className="text-primary">*</span> 
                Indicates a required field
            </p>
            <LegalName/>
            <BasicInformation/>
            <Address/>
            <Contact/>
            <div className="mt-24 max-w-4xl mx-auto">
                <div className="flex justify-start">
                    <div>
                        <Link href="#" onClick={() => window.history.back()}>
                            <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">
                                Back
                            </button>
                        </Link>
                        <button type="submit" className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )

    const Attachment = () => (
        <form onSubmit={handleSubmit(onAttachmentSubmit)}>
             <h1 className="text-2xl font-bold mb-4 text-black">Attachment</h1>
                <p className="text-sm mb-2 text-black"> <span className="text-primary">*</span> 
                    Indicates a required field
                </p>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">LinkedIn</h5>
            <Input label="Profile URL" type="text" placeholder="Profile URL"/>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Portfolio</h5>
            <Input label="Portfolio URL" type="text" placeholder="Portfolio URL"/>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold first-line:mb-2">Formal Photo</h5>
            <Input required label="Formal Photo" type="file" placeholder="Upload a formal photo"/>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold first-line:mb-2">Resume</h5>
            <Input required label="Resume" type="file" placeholder="Upload your Resume/CV"/>
            {/* <input required type="file" placeholder="Upload your Resume/CV"/>  */}
            <div className="mt-24 max-w-4xl mx-auto">
                <div className="flex justify-start">
                    <button onClick={() => {setStep(step - 1)}} className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">
                        Back
                    </button>
                    <button type="submit" className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
   
    const formGroups =[
        <PersonalInformation/>,
        <Attachment/>
    ]

    return (
        <div className="h-fit">
        <Navbar showAboutButton={false}/>
        <Container>
            <div className="max-w-4xl mx-auto">
                {formGroups[step]}
            </div>
        </Container>
        </div>
    );
}

export default PersonalInfo;