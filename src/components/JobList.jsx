import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobList = () => {
  const [jobList, setJobList] = useState(null);
  const [loading, setLoading] = useState(false);
  const search = sessionStorage.getItem("searchText");

  const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&results_per_page=20&what=${search}%20developer&content-type=application/json`;

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setJobList(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [search]);

  return (
    <>
      <div className="p-5 md:p-2 w-[80vw] ">
        <p  style={{color:'white'}} className="text-3xl text-center pb-10 pt-4 text-blue-800">
        Results....
        </p>
        {loading && (
          <div style={{color:'white'}} className="text-2xl text-center text-gray-600 py-4">
            Searching....
          </div>
        )}
        {jobList?.results?.map((job) => (
          <Link
            to={`/jobs/apply/${job.adref}`}
            style={{ border: '1px solid #D3D3D3' }}
            className="flex md:flex-row flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 hover:bg-purple-300 cursor-pointer transition-colors duration-700 delay-75 w-[100%]"
            key={job.adref}
          >
            <div className="md:w-[70%]">
              <p className="text-xxl text-purple-700 font-bold">{job.title}</p>
              <p className="font-semibold text-gray-700">
                <span className="font-medium text-gray-800">
                  Company:&nbsp;
                </span>
                {job?.company?.display_name}
              </p>
              <p className="hidden md:contents">
                {" "}
                <span className="text-xxl font-bold text-gray-800">
                  Job Description:
                </span>{" "}
               <span className="text-gray-800"> {job.description.slice(0, 200)}... </span> 
              </p>
            </div>

            <div className="flex flex-col justify-between md:items-end items-start">
              <div className="flex">
                <p className="font-bold text-gray-800">Salary: &nbsp;</p>
                <p className="text-gray-800"> ${job.salary_min}</p>
                <p> - </p>
                <p className="text-gray-800"> ${job.salary_max}</p>
                <p className="text-purple-700 font-bold">&nbsp; Per Annum</p>
              </div>
              <p>
                {" "}
                <span className="font-bold text-gray-800">
                  Job Type:
                </span>{" "}
               <span className="text-gray-800"> {job?.contract_type}</span>
              </p>

              <p>
                <span className="font-bold text-gray-800">Location:</span>{" "}
               <span className="text-gray-800">{job?.location?.area[0]}, {job?.location?.area[1]} </span>
              </p>
              <p className="md:hidden">
                {" "}
                <span className="text-xl font-bold">
                  Job Description:
                </span>{" "}
                {job.description.slice(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      
      </div>
    </>
  );
};

export default JobList;
