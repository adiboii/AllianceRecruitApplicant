'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react";
import { useApplicationContext } from "@component/app/context/data-provider";
import { useRouter } from 'next/navigation';

const PersonalInfo = () => {
    const router = useRouter();
    const { 
        register, 
        handleSubmit,
        getValues,
        formState: { errors, isValid },
    } = useForm({mode: 'all'});

    const { jobId, personalInfo, setPersonalInfo  } = useApplicationContext();

    /** Input field component */
    const Input = ({label, name, required, type, placeholder, noBorder, value}) => (
        <div>
            <label className="block text-sm font-medium  mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input 
                {...register(`personalInfo.${name}`, { required })} 
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
            <Input required label="First Name" name="first_name" type="text" placeholder="First Name"/>
            <Input required label="Middle Name" name="middle_name" type="text" placeholder="Middle Name"/>
            <Input required label="Last Name" name="last_name" type="text" placeholder="Last Name"/>
        </div>
    )

    const BasicInformation = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Basic Information</h5>
            <Input required label="Sex" name="sex" type="text" placeholder="Sex"/>
            <Input required label="Date of Birth" name="date_of_birth" type="date" placeholder="dd/mm/yyyy"/>
        </div>
    )

    const Address = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Address</h5>
            <Input required label="Country" name="country" type="text" placeholder="Country"/>
            <Input required label="Province" name="province" type="text" placeholder="Province"/>
            <Input required label="City" name="city" type="text" placeholder="City"/>
            <Input required label="Zip Code" name="zip_code" type="text" placeholder="Zip Code"/>
            <Input required label="Addess Line 1" name="address_line_1" type="text" placeholder="Address Line 1"/>
            <Input label="Address Line 2" name="address_line_2" type="text" placeholder="Address Line 2"/>
        </div>
    )

    const Contact = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Contact</h5>
            <Input required label="Email Address" name="email_address" type="text" placeholder="Email Address"/>
            <Input required label="Phone Number" name="phone_number" type="text" placeholder="Phone Number"/>
        </div>
    )

    useEffect(() => {
        // code here will run on mount and when personalInfo changes
        console.log("Personal Info Use Effect:", personalInfo);
      }, [personalInfo]); 

    const onPersonalInfoSubmit = (personalInfoData) => {
        console.log("Personal Info Data:", getValues)
        setPersonalInfo(getValues());
        console.log("Personal Info Context:", personalInfo);
        router.push('/application-form/attachment');
    }

    return (
        <div className="h-fit">
            <Navbar showAboutButton={false}/>
            <Container>
                <div className="max-w-4xl mx-auto">
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
                </div>
            </Container>
        </div>
    );
}

export default PersonalInfo;