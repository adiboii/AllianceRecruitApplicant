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
        formState: { errors, isValid },
    } = useForm({mode: 'all'});
    
    const { attachment, setAttachment } = useApplicationContext();

    /** Input field component */
    const Input = ({label, name, required, type, placeholder, noBorder}) => (
        <div>
            <label className="block text-sm font-medium  mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input 
                {...register(name, { required })} 
                className= {noBorder ? "" : `w-[50%] h-10 border px-3 mb-4 rounded-md shadow-sm focus:border-gray-500 ${errors[label] ? 'border-red-400' : 'border-gray-300'}`}
                type={type} 
                placeholder={placeholder}
            />  
            {errors[label] && <span className="text-sm text-primary ml-4">Required</span>}
        </div>
    )

    useEffect(() => {
      }, [attachment]); 

      const [ photo, setPhoto] = useState(null);
      const handlePhotoUpload = (event) => {
        setPhoto(event.target.files[0]);
      }

      const [file, setFile] = useState(null);
      const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
      }

      const onAttachmentSubmit = (data) => {
        console.log("Resume:", file);
        console.log("Photo:", photo);
        formData.append("attachment.linkedin_url", data.linkedin_url);
        formData.append("attachment.portfolio_url", data.portfolio_url);
        formData.append("attachment.formal_photo", photo);
        formData.append("attachment.resume", file);
        setAttachment(formData);
        router.push("/review");
      };

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
                    
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 

                    <input  {...register('resume', { required: true })}  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400" type="file" name="resume" onChange={handleFileUpload}/>
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