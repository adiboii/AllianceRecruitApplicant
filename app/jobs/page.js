import Container from "@component/components/Container";
import Navbar from "@component/components/Navbar";
import JobCard from "@component/components/JobCard";


export default function JobsPage(){
    const jobList = [
        { title: "Software Engineer", location: "San Francisco, CA" },
        { title: "Marketing Manager", location: "New York, NY" },
        { title: "Product Designer", location: "Los Angeles, CA" },
        { title: "Data Analyst", location: "Chicago, IL" },
        { title: "Sales Representative", location: "Austin, TX" },
        { title: "Software Engineer", location: "San Francisco, CA" },
        { title: "Marketing Manager", location: "New York, NY" },
        { title: "Product Designer", location: "Los Angeles, CA" },
        { title: "Data Analyst", location: "Chicago, IL" },
        { title: "Sales Representative", location: "Austin, TX" },
    ];

    const numJobs = jobList.length;
    const halfNumJobs = Math.ceil(numJobs / 2);
  
    const leftJobs = jobList.slice(0, halfNumJobs);
    const rightJobs = jobList.slice(halfNumJobs);

    return (
        <div className="h-fit">
            <Navbar showAboutButton={false}/>
            <Container>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-medium text-black ml-12">Select your Preferred Job</h2>
                    <hr className="my-4 mx-12 border-gray-300"/>
                    <div className="grid grid-cols-2 ">
                    <div className="w-full mx-auto">
                        {leftJobs.map((job) => (
                        <div className="mb-4">
                            <JobCard job={job.title} location={job.location} />
                        </div>
                        ))}
                    </div>
                    <div className="w-full mx-auto">
                        {rightJobs.map((job) => (
                        <div className="mb-4">
                            <JobCard job={job.title} location={job.location} />
                        </div>
                        ))}
                        </div>
                    </div>
                </div>  
            </Container>
        </div>
    );
}