import React from "react";
import { Link, Outlet } from "react-router-dom";
import FormInput from "./MyAccount/FormInput";
import RadioButton from "./MyAccount/RadioButton";

function RegistrationForm() {
  const formInputs = [
    { label: "Username *", id: "username" },
    { label: "Email address *", id: "email", type: "email" },
    { label: "Password *", id: "password", type: "password" },
  ];

  const radioOptions = [
    { label: "I am a customer", checked: true },
    { label: "I am a vendor", checked: false },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center px-20 pb-28 mt-6 w-full border border-t max-md:px-5 max-md:pb-14 max-md:mt-6 max-md:max-w-full">
        <div className="flex flex-col items-center px-20 pt-28 pb-80 mt-6 border border-t max-md:px-5 max-md:py-24 max-md:max-w-full">
          <form className="flex flex-col mb-0 max-w-full w-[470px] max-md:mb-2.5">
            <div className="flex gap-8 self-center max-w-full text-3xl font-semibold tracking-tight whitespace-nowrap w-[209px]">
              <Link to="login">
                <div className="text-gray-400">Login</div>
              </Link>
              {/* <Link to="registration"> */}
              <div className="grow shrink text-gray-900 w-[94px]">Register</div>
              {/* </Link> */}
            </div>
            <p className="self-center mt-11 text-sm tracking-tight leading-5 text-center text-gray-950 max-md:mt-10 max-md:max-w-full">
              There are many advantages to creating an account: the payment process is{" "}
              <br /> faster, shipment tracking is possible and much more.
            </p>
            {formInputs.map((input) => (
              <FormInput key={input.id} {...input} />
            ))}
            {radioOptions.map((option, index) => (
              <RadioButton key={index} {...option} />
            ))}
            <p className="mt-7 text-sm tracking-tight leading-5 text-gray-950 max-md:max-w-full">
              Your personal data will be used to support your experience throughout
              this <br /> website, to manage access to your account, and for other
              purposes described in <br /> our{" "}
              <span className="text-purple-800">privacy policy</span>.
            </p>
            <button className="px-12 py-4 mt-9 text-sm font-bold tracking-tight leading-3 text-center text-white whitespace-nowrap bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full">
              Register
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default RegistrationForm;
