import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <section className="flex flex-col items-center px-20 pt-28 pb-60 mt-6 border border-t max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-16 max-w-full w-[470px] max-md:mb-2.5">
        <div className="flex gap-8 self-center max-w-full text-3xl font-semibold whitespace-nowrap w-[209px]">
          <h1 className="text-gray-900">Login</h1>
          <Link to="/myaccount">
            <span className="grow shrink text-gray-400 w-[94px]">Register</span>
          </Link>
        </div>

        <p className="self-center mt-10 text-sm text-center text-gray-950">
          If you have an account, sign in with your username or email address.
        </p>
        <form>
          <div className="mt-4">
            <label htmlFor="username" className="text-sm text-gray-950">
              Username or email address *
            </label>
            <input
              type="text"
              id="username"
              className="flex shrink-0 mt-3 bg-white rounded-lg border border-gray-300 border-solid h-[42px] shadow-[0px_1px_2px_rgba(0,0,0,0.047)] max-md:max-w-full w-full"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-sm text-gray-950">
              Password *
            </label>
            <input
              type="password"
              id="password"
              className="flex shrink-0 mt-3 bg-white rounded-lg border border-gray-300 border-solid h-[42px] shadow-[0px_1px_2px_rgba(0,0,0,0.047)] max-md:max-w-full w-full"
              required
            />
          </div>
          <div className="flex gap-10 mt-4 w-full max-md:max-w-full">
            <label className="flex flex-1 gap-2.5 text-xs text-gray-950">
              <input
                type="checkbox"
                className="shrink-0 w-4 h-4 bg-white rounded border border-gray-300 border-solid shadow-[0px_1px_2px_rgba(0,0,0,0.047)]"
              />
              <span className="my-auto">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-700">
              Lost your password?
            </a>
          </div>
          <button
            type="submit"
            className="px-12 py-4 mt-6 text-sm font-bold tracking-tight leading-3 text-center text-white bg-purple-800 rounded-lg max-md:px-5 max-md:max-w-full w-full"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
