'use client';
import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import Link from "next/link";

//TODO: add location icon

const job = {
    title: "Software Engineer",
    location: "San Francisco, CA",
    description: [
      "As a software engineer, you will be responsible for designing and implementing new features for our core products and services.",
      "You will troubleshoot issues, and collaborate with other teams to ensure seamless integration with other systems.",
      "Your contributions will play a critical role in improving our products and services and ultimately, enhancing our customers' experience.",
    ],
    requirements: [
      "2+ years of experience as a web developer",
      "Familiarity with HTML, CSS, JavaScript, and related technologies",
      "Strong problem-solving and debugging skills",
      "Ability to work independently and as part of a team",
    ],
  };
  
  const JobPage = () => {
    return (
        <div className="h-fit">
        <Navbar showAboutButton={false}/>
        <Container>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-4 text-black">{job.title}</h1>
                <h4 className="text-lg font-medium mb-2 text-black">{job.location}</h4>
                <h5 className="text-xl font-bold mt-6 mb- text-primary uppercase">Our {job.title} should: </h5>
                <ul className="list-none list-inside" style={{ listStylePosition: 'outside' }}>
                  {job.description.map((desc) => (
                    <li key={desc} className="text-gray-700 mb-2 ml-4 items-start" style={{ marginLeft: '1.5rem' }}>
                       <span className="mr-2">•</span>
                        <span className="break-keep">{desc}</span>
                    </li>
                  ))}
                </ul>
                <h5 className="text-xl font-bold mb-2 m text-primary uppercase mt-10">What you'll do:</h5>
                <ul className="list-none list-inside " style={{ listStylePosition: 'outside' }}>
                    {job.requirements.map((req) => (
                    <li key={req} className="text-gray-700 mb-2 ml-4">
                         <span className="mr-2">•</span>
                        <span className="break-all">{req}</span>
                    </li>
                    ))}
                </ul>
                <div className="absolute bottom-24 mb-4 mr-4">
                  <Link href="#" onClick={() => window.history.back()}>
                    <button className="px-24 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md mr-2">Back</button>
                  </Link>
                  <Link href="/personalinfo">
                    <button className="px-24 py-4 bg-primary hover:bg-red-700 text-white rounded-md">Apply</button>
                  </Link>
                </div>
              </div>
           
        </Container>
    </div>
    );
  }

  export default JobPage;