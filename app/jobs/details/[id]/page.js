"use client";
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";
import { getJobDetails } from "../../utils";
import { useState, useEffect } from "react";
import { useApplicationContext } from "@component/app/context/data-provider";
//TODO: add location icon

const JobDetailsPage = ({params}) => {
  
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJob = async () => {
      const res = await getJobDetails(params.id)
      console.log(res); 
      console.log("Job:", res.JobTitle);
      setJob(res);
    }
    getJob();
  }, []);


  const { jobId, setJobId } = useApplicationContext();

  return (
    job && (
      <div className="h-fit">
      <Navbar showAboutButton={false}/>
       <Container>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold mb-4 text-black">{job.JobTitle}</h1>
              <h4 className="text-lg font-medium mb-2 text-black">{job.Location}</h4>
              <h5 className="text-xl font-bold mt-6 mb- text-primary uppercase">Our {job.JobTitle} should: </h5>
              <ul className="list-none list-outside">
                {job?.JobDescriptions?.map((desc) => (
                  <li key={desc} className="text-gray-700 mb-2 ml-4 items-start" style={{ marginLeft: '1.5rem' }}>
                      <span className="mr-2">•</span>
                      <span className="break-keep">{desc.Description}</span>
                  </li>
                ))}
              </ul>
              <h5 className="text-xl font-bold mb-2 text-primary uppercase mt-10">What you'll do:</h5>
              <ul className="list-none list-inside">
                  {job.JobRequirements.map((req) => (
                  <li key={req} className="text-gray-700 mb-2 ml-4">
                        <span className="mr-2">•</span>
                      <span className="break-all">{req.Requirement}</span>
                  </li>
                  ))}
              </ul>
              <div className="absolute bottom-24 mb-4 mr-4">
                <Link href="#" onClick={() => window.history.back()}>
                  <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">Back</button>
                </Link>
                <Link href="/application-form/personal-info" onClick={() => {setJobId(job.Id)}}>
                  <button className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">Apply</button>
                </Link>
              </div>
            </div>
      </Container> 
  </div>
    )
     
  );
}

export default JobDetailsPage;