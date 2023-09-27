import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("searchText", searchText);
    navigate(`/jobs?searchText=${searchText}`);
  };
  useEffect(() => {});

  return (
    <div className="flex flex-col items-center py-10 gap-10 ">
      <p style={{color:'white'}} className="text-6xl font-semibold">Job SearchHub</p>
      <form
        onSubmit={handleSubmit}
        className="relative md:w-[40vw] w-[90vw]  border-2 rounded-lg border-gray-400"
      >
        <input
          type="text"
          id="Search"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for Open Positions: Software Engineer, ReactJS Developer...."
          className="w-full rounded-md border border-blue-300 py-6 pe-10 shadow-lg text-2xl sm:text-xl pl-4"
/>

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="submit" className="text-gray-800 hover:text-gray-800">
         
          </button>
        </span>
      </form>
    </div>
  );
};

export default Home;
