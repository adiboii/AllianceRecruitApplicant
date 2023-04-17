//TODO: Add location icon

import Link from "next/link";

export default function JobCard({ job, location }) {
  return (
    <div className="mx-12 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {job}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700">
        {location}
      </p>
      <Link href={'/jobs/jobdetails'}>
        <button className="inline-flex items-center px-8 py-2 text-sm font-bold text-center text-white bg-primary hover:bg-red-700 rounded-lg focus:ring-4 focus:outline-none">
          See Details
        </button>
      </Link>
     
    </div>
  );
}
