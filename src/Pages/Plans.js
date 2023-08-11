// Will comtain all the information related to plans
import React from "react";
import Pricetable from "../Components/Pricetable";
const Plans = () => {
  return (
    <>
      <section className="py-10 px-20 bg-blue-800 text-white">
        <h1 className="font-Nunito text-5xl font-bold">Available Plans</h1>
      </section>
      <section className="font-Nunito font-bold px-20 my-4">
        <div className="my-6">
          <h1 className="text-4xl text-center text-gray-800">
            Choose the right plan for you
          </h1>
        </div>
      </section>
      <Pricetable />
    </>
  );
};

export default Plans;
