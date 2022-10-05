import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-bg-dark3 text-white h-screen w-screen flex flex-col py-20 px-4">
      <h1 className="text-center text-2xl mb-10">
        Get started with FilmiLearn
      </h1>
      <h2 className="text-center">
        Already have an account?
        <Link to="/signin" className="text-text-primary font-bold">
          {" "}
          Sing in
        </Link>
      </h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form
            className="flex flex-col my-3"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <input
              id="email"
              className="bg-bg-dark4 h-14 my-2 rounded-lg border-transparent focus:outline-none ring-0 px-3"
              placeholder="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <div className="flex flex-row bg-bg-dark4 h-14 my-2 rounded-lg px-3">
              <input
                id="password"
                className=" bg-bg-dark4 border-transparent focus:outline-none w-full"
                placeholder="Create Password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center"
                onClick={handleShowPassword}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <button
              className="bg-text-primary h-14 rounded-3xl mt-5"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        )}
      </Formik>
      <div className="flex flex-col mt-auto">
        <p className="text-center">Or</p>
        <button className="bg-white h-14 rounded-3xl mt-5 text-black flex flex-row justify-center items-center px-2 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="35px"
            height="35px"
            className="absolute left-2"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          <p className="mx-auto font-bold">Continue With Google</p>
        </button>
      </div>
    </div>
  );
}
