import React from "react";
import { useSelector } from "react-redux";

const AppliedSuccess = () => {
  const formData = useSelector((state) => state.apply);

  return (
    <div div className="p-4 ">
      <p className="text-4xl font-semibold text-center text-white">
        Thank you for applying....
      </p>

      <div className="flex flex-col  w-[100%]">
        <form className="flex flex-col w-[90%] md:w-[40%] mx-auto py-10">
          <p className="font-semibold text-2xl text-white pb-5">
            Your Details
          </p>
          <label htmlFor="name" className="font-medium pb-2 text-white">
            Full Name
          </label>
          <input
            className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
            type="text "
            placeholder="Elon Musk"
            readOnly
            required
            value={formData.name}
          />
          <label htmlFor="email" className="font-medium pb-2 text-white">
            Email
          </label>
          <input
            className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
            type="email "
            placeholder="abc123@gmail.com"
            readOnly
            required
            value={formData.email}
          />
          <label htmlFor="contact" className="font-medium pb-2 text-white">
            Contact No.
          </label>
          <input
            className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
            type="number "
            placeholder="797979XXXX"
            readOnly
            required
            value={formData.contact}
          />

          <label htmlFor="currentCompany" className="font-medium pb-2 text-white">
            Current Organization
          </label>
          <input
            className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
            type="text"
            placeholder="meta"
            readOnly
            required
            value={formData.currentCompany}
          />
<label htmlFor="salary" className="font-medium pb-2 text-white">
          Expected Salary
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="number"
          placeholder="$ 10000 - 20000"
          readOnly
          required
          value={formData.salary}
        />

          <label htmlFor="skill" className="font-medium pb-2 text-white">
            Skills
          </label>
          <input
            className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
            type="text "
            placeholder="C/C++, ReactJS"
            readOnly
            required
            value={formData.skills}
          />


        </form>
      </div>
    </div>
  );
};

export default AppliedSuccess;
