import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./MyAccount/FormInput";
import RadioButton from "./MyAccount/RadioButton";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

      const response = await axios.post("http://localhost:5000/user/register", formData);
      console.log(response.data);  // Success response
    } catch (err) {
      console.error('Error in registration:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="flex flex-col items-center px-20 pt-24 pb-60 border border-t max-md:px-5 max-md:py-24 max-md:max-w-full">
      <form className="flex flex-col mb-0 max-w-full w-[470px] max-md:mb-2.5" onSubmit={handleSubmit}>
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

        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}

        <button className="px-12 py-4 mt-9 text-sm font-bold tracking-tight leading-3 text-center text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
