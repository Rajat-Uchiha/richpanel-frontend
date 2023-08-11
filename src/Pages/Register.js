import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://richpanelservices.onrender.com/auth/register`, {
        name,
        email,
        password,
      });
      alert("User registeration successfull now login");

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-full min-h-screen font-Nunito font-semibold flex flex-col justify-center items-center bg-blue-900">
      <form
        onSubmit={RegisterUser}
        className=" rounded-xl bg-white w-1/4 min-h-[70vh] mx-auto "
      >
        <div className="mt-10 mb-4">
          <h1 className="text-2xl text-gray-800 text-center">Create Account</h1>
        </div>
        <div className=" mx-6 flex flex-col space-y-3 text-lg">
          <div className="flex flex-col space-y-1 text-gray-900">
            <label htmlFor="Name">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border-2 border-gray-400 rounded-md p-1 "
              type="text"
            />
          </div>
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
            <button
              type="submit"
              className=" rounded-md bg-blue-700 text-white py-2 my-4"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="mx-6 text-center">
          <p>Already have an account?</p>
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
