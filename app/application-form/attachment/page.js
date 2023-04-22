'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react";
import { useApplicationContext } from "@component/app/context/data-provider";
import { useRouter } from 'next/navigation';

const Attachment = () => {
    const router = useRouter();
    const formData = new FormData();
    const { 
        register, 
        handleSubmit,
        getValues,
        formState: { errors, isValid },
    } = useForm({mode: 'all'});
    
    const { attachment, setAttachment, personalInfo } = useApplicationContext();

    /** Input field component */
    const Input = ({label, name, required, type, placeholder, noBorder}) => (
        <div>
            <label className="block text-sm font-medium  mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input 
                {...register(`attachment.${name}`, { required })} 
                className= {noBorder ? "" : `w-[50%] h-10 border px-3 mb-4 rounded-md shadow-sm focus:border-gray-500 ${errors[label] ? 'border-red-400' : 'border-gray-300'}`}
                type={type} 
                placeholder={placeholder}
            />  
            {errors[label] && <span className="text-sm text-primary ml-4">Required</span>}
        </div>
    )

    const FileInput = ({label, name, required, type, placeholder, noBorder, onChange}) => (
        <div>
            <label className="block text-sm font-medium  mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input 
                {...register(`attachment.${name}`, { required })} 
                className= {noBorder ? "" : `w-[50%] h-10 border px-3 mb-4 rounded-md shadow-sm focus:border-gray-500 ${errors[label] ? 'border-red-400' : 'border-gray-300'}`}
                type={type} 
                placeholder={placeholder}
                onChange={onChange ? onChange : null}
            />  
            {errors[label] && <span className="text-sm text-primary ml-4">Required</span>}
        </div>
    )

    useEffect(() => {
        // code here will run on mount and when personalInfo changes
        console.log("Attachment Use Effect:", attachment);
      }, [attachment]); 


      const onAttachmentSubmit = (data) => {
        formData.append("attachment.linkedin_url", data.attachment.linkedin_url);
        formData.append("attachment.portfolio_url", data.attachment.portfolio_url);
        formData.append("attachment.formal_photo", photo);
        formData.append("attachment.resume", file);
        setAttachment(formData);
        console.log("Personal Info Context:", personalInfo);
        console.log("Attachment Context:", data);
        console.log("Attachment FormData:", formData);
        router.push("/review");
      };

      const [ photo, setPhoto] = useState(null);
      const handlePhotoUpload = (event) => {
        console.log("HELO:", event.target.files[0]);
        setPhoto(event.target.files[0]);
      }

      const [file, setFile] = useState(null);
      const handleFileUpload = (event) => {
        console.log("HEY:",event.target.files[0]);
        setFile(event.target.files[0]);
      }

    return (
        <div className="h-fit">
        <Navbar showAboutButton={false}/>
        <Container>
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit(onAttachmentSubmit)}>
                    <h1 className="text-2xl font-bold mb-4 text-black">Attachment</h1>
                        <p className="text-sm mb-2 text-black"> <span className="text-primary">*</span> 
                            Indicates a required field
                        </p>
                    <hr className="my-4 border-b-1 border-gray-400" />
                    <h5 className="text-base font-bold mb-2">LinkedIn</h5>
                    <Input label="Profile URL" name="linkedin_url" type="text" placeholder="Profile URL"/>
                    <hr className="my-4 border-b-1 border-gray-400" />
                    <h5 className="text-base font-bold mb-2">Portfolio</h5>
                    <Input label="Portfolio URL" name="portfolio_url" type="text" placeholder="Portfolio URL"/>
                    <hr className="my-4 border-b-1 border-gray-400" />
                    <h5 className="text-base font-bold first-line:mb-2">Formal Photo</h5>
                    <label className="block text-sm font-medium  mb-2"> Uplaod a formal photo<span className="text-primary">*</span></label>
                    <input  {...register('formal_photo', { required: true })}  type="file" name="resume" onChange={handlePhotoUpload}/>
                    <hr className="my-4 border-b-1 border-gray-400" />
                    <h5 className="text-base font-bold first-line:mb-2">Resume</h5>
                    <label className="block text-sm font-medium  mb-2">Upload your Resume/CV<span className="text-primary">*</span></label>
                    <input  {...register('resume', { required: true })}  type="file" name="resume" onChange={handleFileUpload}/>
                    <div className="mt-24 max-w-4xl mx-auto">
                        <div className="flex justify-start">
                            <Link href="#" onClick={() => window.history.back()}>
                                <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">
                                    Back
                                </button>
                            </Link>
                            <button type="submit" className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
        </div>
    );
}

export default Attachment;