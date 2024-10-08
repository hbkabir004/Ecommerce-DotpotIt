import axios from "axios";
import React, { useState } from "react";
import { toast } from 'react-hot-toast'; // Import react-hot-toast
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./MyAccount/FormInput";
import RadioButton from "./MyAccount/RadioButton";

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const formInputs = [
    { label: "Username *", id: "username" },
    { label: "Email address *", id: "email", type: "email" },
    { label: "Password *", id: "password", type: "password" },
  ];

  const radioOptions = [
    { label: "I am a customer", checked: true },
    { label: "I am a vendor", checked: false },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const response = await axios.post("https://dotpot-user-auth.vercel.app/api/register", formData);
      toast.success(`${response?.data?.message} Redirecting to login...`, { duration: 2000 });
      // Redirect to the login page after 2 seconds
      setTimeout(() => navigate('/login'), 2000);

    } catch (err) {
      const errorMessage = err.response ? err.response.data : err.message;
      toast.error(`${errorMessage.message}`); // Show error toast
    }
  };

  return (
    <div className="flex flex-col items-center px-20 pt-24 pb-60 border border-t max-md:px-5 max-md:py-24 max-md:max-w-full">
      <form onSubmit={handleSubmit} className="flex flex-col mb-0 max-w-full w-[470px] max-md:mb-2.5">
        <div className="flex gap-8 self-center max-w-full text-3xl font-semibold tracking-tight whitespace-nowrap w-[209px]">
          <Link to="/login">
            <div className="text-gray-400">Login</div>
          </Link>
          <div className="grow shrink text-gray-900 w-[94px]">Register</div>
        </div>
        <p className="self-center mt-11 text-sm tracking-tight leading-5 text-center text-gray-950 max-md:mt-10 max-md:max-w-full">
          There are many advantages to creating an account...
        </p>

        {formInputs.map((input) => (
          <FormInput key={input.id} {...input} onChange={handleChange} />
        ))}
        {radioOptions.map((option, index) => (
          <RadioButton key={index} {...option} />
        ))}
        <p className="mt-7 text-sm tracking-tight leading-5 text-gray-950 max-md:max-w-full">
          Your personal data will be used...
        </p>

        <button className="px-12 py-4 mt-9 text-sm font-bold tracking-tight leading-3 text-center text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
