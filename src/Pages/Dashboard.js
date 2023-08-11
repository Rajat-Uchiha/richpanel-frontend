// Which plan you currently have
import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full min-h-screen font-Nunito font-semibold flex flex-col justify-center items-center bg-blue-900">
      <div className="border-2 border-white px-10 py-5 rounded-3xl bg-white ">
        <div className="">
          <h1 className="text-2xl">Current Plan Details</h1>
        </div>
        <div className="my-2">
          <p className="text-gray-700">Basic</p>
          <p className="text-gray-700">Phone+Tablet</p>
        </div>
        <div className="my-2">
          <p className="text-4xl"> &#x20B9; 2000/yr</p>
        </div>
        <div className="my-6">
          <button className="border-2 border-blue-800 text-blue-800 py-2 px-4 rounded-lg">
            Change Plan
          </button>
        </div>
        <div className="my-2">
          <p className="text-gray-700">
            Your subsciption has started on{" "}
            <span className="font-extrabold text-gray-900">11 june 2022</span>{" "}
            and will auto renew on
            <span className="font-extrabold text-gray-900"> 12 June 2023.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
