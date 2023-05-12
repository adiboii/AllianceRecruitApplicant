'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import { useState, useEffect } from "react";
import { useApplicationContext } from "@component/app/context/data-provider";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Loading from "@component/components/Loading";

const Attachment = () => {
    const router = useRouter();
    const formData = new FormData();
    const { attachment, setAttachment } = useApplicationContext();
    const [isLoading, setIsLoading] = useState(false);

    const imageFormats = ['image/jpg', 'image/jpeg', 'image/png'];
    const pdfFormats = ['application/pdf'];
    
    const schema = yup.object().shape({
      linkedin_url: yup.string().optional(),
      portfolio_url: yup.string().optional(),
      formal_photo: yup
        .mixed()
        .required("Formal Photo is required")
        .test("fileType", "File is required", () =>{
            return photo != null ?  true : false;
        })
        .test("fileType", "The file format is invalid", () => {
            return imageFormats.includes(photo?.type);
          }),
      resume: yup
        .mixed()
        .required()
        .test("fileType", "File is required", () =>{
            return file != null ?  true : false;
        })
        .test("fileType", "The file format is invalid", () => {
            return pdfFormats.includes(file?.type);
        }),
    });
    

    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: yupResolver(schema)});
        
    /** Input field component */
    const Input = ({label, name, required, type, placeholder, noBorder, value}) => (
        <div>
            <label className="block text-sm font-medium  mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input 
                {...register(name, { required })} 
                className= {noBorder ? "" : `w-[50%] h-10 border px-3 mb-4 rounded-md shadow-sm focus:border-gray-500 ${errors[name]?.message ? 'border-red-400' : 'border-gray-300'}`}
                type={type} 
                placeholder={placeholder} 
                defaultValue={value}
            />  
            {errors[name]?.message ? <span className="text-sm text-primary ml-4">{errors[name]?.message}</span> : null }
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

    const onAttachmentSubmit = async (data) => {
        setIsLoading(true);
        const photoForm = new FormData();   
        const fileForm = new FormData();
        photoForm.append("file", photo);
        photoForm.append("upload_preset", "alliance");
        photoForm.append("folder", "alliance");
        fileForm.append("file", file);
        fileForm.append("upload_preset", "alliance");
        fileForm.append("folder", "alliance");

        const formalPhoto = await axios.post(
            "https://api.cloudinary.com/v1_1/da1sdiduo/image/upload",
            photoForm
        ).then((response) => {
            console.log("Photo URL:", response.data.public_id);
            return response.data.public_id;
        });

        const resume = await axios.post(
            "https://api.cloudinary.com/v1_1/da1sdiduo/upload",
            fileForm
        ).then((response) => {
            console.log("File URL:", response.data.public_id);
            return response.data.public_id;
        });
        console.log("PHOTO URL:", formalPhoto);
        formData.append("linkedin_url", data.linkedin_url);
        formData.append("portfolio_url", data.portfolio_url);
        formData.append("formal_photo", formalPhoto);
        formData.append("resume", resume);
        setAttachment(formData);
        setIsLoading(false);
        router.push("/review");
    };

    return (
        <div className="h-fit">
        <Navbar showAboutButton={false}/>
        <Container>
            {
                isLoading ? 
                <Loading/>
                :
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
                    <input  {...register('formal_photo')}  type="file" name="resume" onChange={handlePhotoUpload}/>
                    {errors.formal_photo?.message ? <span className="text-sm text-primary ml-4">{errors.formal_photo?.message}</span> : null }
                    <hr className="my-4 border-b-1 border-gray-400" />
                    <h5 className="text-base font-bold first-line:mb-2">Resume</h5>
                    <label className="block text-sm font-medium  mb-2">Upload your Resume/CV<span className="text-primary">*</span></label>
                    <input  {...register('resume')} type="file" name="resume" onChange={handleFileUpload}/>
                    {errors.resume?.message ? <span className="text-sm text-primary ml-4">{errors.resume?.message}</span> : null }
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
            }           
        </Container>
        </div>
    );
}

export default Attachment;