'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { useForm, useController } from 'react-hook-form'
import { useEffect } from "react";
import { useApplicationContext } from "@component/app/context/data-provider";
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Select from 'react-select';

const PersonalInfo = () => {
    const router = useRouter();
    const { personalInfo, setPersonalInfo  } = useApplicationContext();
    const schema = yup.object().shape({
        first_name: yup
          .string()
          .matches(/^[A-Za-z ]+$/, 'First name must contain only letters')
          .required('First name is required'),
        middle_name: yup
          .string()
          .matches(/^[A-Za-z ]+$/, 'Middle name must contain only letters')
          .required('Middle name is required'),
        last_name: yup
          .string()
          .matches(/^[A-Za-z ]+$/, 'Last name must contain only letters')
          .required('Last name is required'),
        sex: yup
            .string()
            .required("Sex is required"),
        date_of_birth: yup
            .string()
            .required("Date of Birth is required"),
        country: yup
            .string()
            .matches(/^[A-Za-z ]+$/, 'Country must contain only letters')
            .required("Country is required"),
        province: yup
            .string()
            .matches(/^[A-Za-z ]+$/, 'Province must contain only letters')
            .required("Province is required"),
        city: yup
            .string()
            .matches(/^[A-Za-z ]+$/, 'City must contain only letters')
            .required("City is required"),
        address_line_1: yup
            .string()
            .required("Address Line 1 is required"),
        address_line_2: yup
            .string()
            .optional(),
        zip_code: yup
            .number()
            .typeError("Zip Code must contain only numbers")
            .required("Zip Code is required"),
        email_address: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is required"),
        phone_number: yup
            .string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(11, 'Phone Number should be 11 digits')
            .max(11, 'Phone Number should be 11 digits')
            .required("Phone Number is required"),
    });

    const { 
        register, 
        control,
        handleSubmit,
        getValues,
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

    const LegalName = () =>(
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Legal Name</h5>
            <Input required label="First Name" name="first_name" type="text" placeholder="First Name" value={personalInfo?.first_name}/>
            <Input required label="Middle Name" name="middle_name" type="text" placeholder="Middle Name" value={personalInfo?.middle_name}/>
            <Input required label="Last Name" name="last_name" type="text" placeholder="Last Name" value={personalInfo?.last_name}/>
        </div>
    )

    
    const sexOptions = [
        {value: "Male", label: "Male"},
        {value: "Female", label: "Female"},
        {value: "preferNotToSay", label: "Prefer Not To Say"},
    ]

    const { field } = useController({name: "sex", control})

    const handleSelectChange = (option) => {
        field.onChange(option.value)
    };

    const BasicInformation = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Basic Information</h5>
            <label className="block text-sm font-medium">Sex<span className="text-primary">*</span></label>
            <Select
                className="w-[50%] h-10 mb-4"
                {...register('sex')}
                placeholder="Select Sex"
                value={sexOptions.find(({value}) => value === field.value)}
                onChange={handleSelectChange}
                options={sexOptions}
                defaultValue={sexOptions.find(({value}) => value === personalInfo?.sex)}
            />
            <Input required label="Date of Birth" name="date_of_birth" type="date" placeholder="dd/mm/yyyy" value={personalInfo?.date_of_birth}/>
        </div>
    )

    const Address = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Address</h5>
            <Input required label="Country" name="country" type="text" placeholder="Country" value={personalInfo?.country}/>
            <Input required label="Province" name="province" type="text" placeholder="Province" value={personalInfo?.province}/>
            <Input required label="City" name="city" type="text" placeholder="City" value={personalInfo?.city}/>
            <Input required label="Zip Code" name="zip_code" type="text" placeholder="Zip Code" value={personalInfo?.zip_code}/>
            <Input required label="Addess Line 1" name="address_line_1" type="text" placeholder="Address Line 1" value={personalInfo?.address_line_1}/>
            <Input label="Address Line 2" name="address_line_2" type="text" placeholder="Address Line 2" value={personalInfo?.address_line_2}/>
        </div>
    )

    const Contact = () => (
        <div>
            <hr className="my-4 border-b-1 border-gray-400" />
            <h5 className="text-base font-bold mb-2">Contact</h5>
            <Input required label="Email Address" name="email_address" type="text" placeholder="Email Address" value={personalInfo?.email_address}/>
            <Input required label="Phone Number" name="phone_number" type="text" placeholder="Phone Number" value={personalInfo?.phone_number}/>
        </div>
    )

    useEffect(() => {
      }, [personalInfo]); 

    const onPersonalInfoSubmit = () => {
        setPersonalInfo(getValues());
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