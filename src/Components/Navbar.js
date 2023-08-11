import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const naviagate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    naviagate("/login");
  };
  return (
    <>
      <nav className=" text-xl font-Nunito flex space-x-12 font-bold bg-inherit text-blue-800 px-20 py-5 ">
        {!cookies.access_token ? (
          <>
            <Link
              className="hover:underline-offset-4 hover:underline"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="hover:underline-offset-4 hover:underline"
              to="/login"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={logout}
              className="border-4 border-red-600  px-4 bg-red-600 text-white"
            >
              Logout
            </button>
          </>
        )}

        <Link
          className="hover:underline-offset-4 hover:underline"
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link className="hover:underline-offset-4 hover:underline" to="/plans">
          Plans
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
