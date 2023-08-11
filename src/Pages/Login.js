import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const Response = await axios.post(
        `https://richpanelservices.onrender.com/auth/login`,
        {
          email,
          password,
        }
      );

      alert("User logged in, check your plans");
      setCookies("access_token", Response.data.token);
      window.localStorage.setItem("userID", Response.data.userId);

      navigate("/plans");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="w-full min-h-screen font-Nunito font-semibold flex flex-col justify-center items-center bg-blue-900">
      <form
        onSubmit={LoginUser}
        className=" rounded-xl bg-white w-1/4 min-h-[60vh] mx-auto "
        action="submit"
      >
        <div className="mt-10 mb-4">
          <h1 className="text-2xl text-gray-800 text-center">
            Login to your Account
          </h1>
        </div>
        <div className=" mx-6 flex flex-col space-y-3 text-lg">
          <div className="flex flex-col space-y-1 text-gray-900">
            <label htmlFor="Email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-2 border-gray-400 rounded-md p-1 "
              type="email"
            />
          </div>
          <div className="flex flex-col space-y-1 text-gray-900">
            <label htmlFor="Password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-2 border-gray-400 rounded-md p-1 "
              type="password"
            />
          </div>
          <div className="flex flex-col text-gray-900">
            <button className=" rounded-md bg-blue-700 text-white py-2 my-4">
              Login
            </button>
          </div>
        </div>
        <div className="mx-6 text-center">
          <p>Don't have an account?</p>
          <Link
            className="text-blue-600 underline underline-offset-1"
            to="/login"
          >
            Register here
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
