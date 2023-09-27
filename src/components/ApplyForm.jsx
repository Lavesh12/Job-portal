import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setForm } from "../store/applySlice";
import toast from "react-hot-toast";
const initialState = {
  name: "",
  email: "",
  contact: "",
  currentCompany: "",
  salary: "",
  skills: "",
};

const ApplyForm = () => {
  const username = useSelector((state) => state.username.username);
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const SubmitForm = (e) => {
    console.log("hehe");
    e.preventDefault();
    dispatch(setForm(formData));
    toast.loading("Applying");
    setTimeout(() => {
      navigate("/jobs/applied");
      toast.remove();
    }, 2000);
  };
  return (
    <div className="flex flex-col  w-[100%]">
      <form
        onSubmit={SubmitForm}
        className="flex flex-col w-[90%] md:w-[40%] mx-auto py-10"
      >
        <label htmlFor="name" className="font-medium pb-2 text-white">
          Full Name
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="text "
          placeholder="Elon Musk"
          onChange={handleChange}
          name="name"
          required
        />
        <label htmlFor="email" className="font-medium pb-2 text-white">
          Email
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="email "
          placeholder="abc123@gmail.com"
          onChange={handleChange}
          name="email"
          required
        />
            <label htmlFor="contact" className="font-medium pb-2 text-white">
          Contact No.
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="number"
          placeholder="797979XXXX"
          onChange={handleChange}
          name="contact"
          required
        />
        <label htmlFor="currentCompany" className="font-medium pb-2 text-white">
          Current Organization
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="text "
          placeholder="Meta"
          onChange={handleChange}
          name="currentCompany"
          required
        />
        <label htmlFor="salary" className="font-medium pb-2 text-white">
          Expected Salary
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="number"
          placeholder="$ 10000 - 20000"
          onChange={handleChange}
          name="salary"
          required
        />
        <label htmlFor="skill" className="font-medium pb-2 text-white">
          Skills
        </label>
        <input
          className="border rounded-lg border-black px-2 py-2 text-black shadow-sm mb-5"
          type="text "
          placeholder="C/C++, ReactJS"
          onChange={handleChange}
          name="skills"
          required
        />

<           button
            type="submit"
            to="jobs/applied"
            style={{background: "rgb(113, 5, 130)"}}
            className="rounded-lg py-2 text-white font-medium text-center border-white"
          >
            Apply
          </button>

        {/* {username !== null ? (
          <button
            type="submit"
            to="jobs/applied"
            style={{background: "rgb(113, 5, 130)"}}
            className="rounded-lg py-2 text-white font-medium text-center border-white"
          >
            Apply
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 rounded-lg py-2 text-white font-medium text-center"
          >
            Login to Apply
          </Link>
        )} */}
      </form>
    </div>
  );
};

export default ApplyForm;
