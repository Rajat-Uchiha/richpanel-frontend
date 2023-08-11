import React, { useState } from "react";

const Pricetable = () => {
  const monthlyPrice = [100, 200, 500, 700];
  const yearlyPrice = [1000, 2000, 5000, 7000];

  const [selectedArr, setselectedArr] = useState(monthlyPrice);
  const [planSelected, setPlanSelected] = useState("Standard");

  return (
    <section className=" mx-20 flex justify-center items-center flex-col font-Nunito ">
      <table className="table-auto font-bold my-5 w-3/4">
        <thead>
          <tr>
            <th className=" text-center flex items-center justify-center">
              <div className="flex my-2 justify-center items-center">
                <button
                  onClick={() => {
                    setselectedArr(monthlyPrice);
                  }}
                  className="rounded-md bg-blue-800 text-white py-2 px-4 font-semibold mr-2"
                >
                  Monthly Plans
                </button>
                <button
                  onClick={() => {
                    setselectedArr(yearlyPrice);
                  }}
                  className="rounded-md bg-blue-800 text-white py-2 px-4 font-semibold mr-2"
                >
                  Yearly Plans
                </button>
              </div>
            </th>
            <th
              className={
                planSelected === "Mobile"
                  ? "text-center bg-blue-900  text-white "
                  : "ext-center hover:bg-blue-900 bg-blue-500 text-white hover:text-white hover:rounded-md transition-all"
              }
            >
              <button
                onClick={() => {
                  setPlanSelected("Mobile");
                }}
                className="h-20 w-full underline underline-offset-8 hover:underline-offset-2 transition-all "
              >
                Mobile
              </button>
            </th>
            <th
              className={
                planSelected === "Basic"
                  ? "text-center bg-blue-900  text-white "
                  : "ext-center hover:bg-blue-900 bg-blue-500 text-white hover:text-white hover:rounded-md transition-all"
              }
            >
              <button
                onClick={() => {
                  setPlanSelected("Basic");
                }}
                className="h-20 w-full underline underline-offset-8 hover:underline-offset-2 transition-all "
              >
                Basic
              </button>
            </th>
            <th
              className={
                planSelected === "Standard"
                  ? "text-center bg-blue-900  text-white "
                  : "ext-center hover:bg-blue-900 bg-blue-500 text-white hover:text-white hover:rounded-md transition-all"
              }
            >
              <button
                onClick={() => {
                  setPlanSelected("Standard");
                }}
                className="h-20 w-full underline underline-offset-8 hover:underline-offset-2 transition-all "
              >
                Standard
              </button>
            </th>
            <th
              className={
                planSelected === "Premimum"
                  ? "text-center bg-blue-900  text-white "
                  : "ext-center hover:bg-blue-900 bg-blue-500 text-white hover:text-white hover:rounded-md transition-all"
              }
            >
              <button
                onClick={() => {
                  setPlanSelected("Premimum");
                }}
                className="h-20 w-full underline underline-offset-8 hover:underline-offset-2 transition-all "
              >
                Premium
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="py-3 px-4 text-center  ">Monthly price</td>
            <td className=" py-3 px-4 text-center ">
              &#x20B9;{selectedArr[0]}
            </td>
            <td className=" py-3 px-4 text-center ">
              &#x20B9;{selectedArr[1]}
            </td>
            <td className=" py-3 px-4 text-center ">
              &#x20B9;{selectedArr[2]}
            </td>
            <td className=" py-3 px-4 text-center ">
              &#x20B9;{selectedArr[3]}
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 text-center  ">Video Quality</td>
            <td className=" py-3 px-4 text-center ">Good</td>
            <td className=" py-3 px-4 text-center ">Good</td>
            <td className=" py-3 px-4 text-center ">Better</td>
            <td className=" py-3 px-4 text-center ">Best</td>
          </tr>
          <tr>
            <td className="x-4 text-center  ">Resolution</td>
            <td className=" py-3 px-4 text-center ">480p</td>
            <td className=" py-3 px-4 text-center ">480p</td>
            <td className=" py-3 px-4 text-center ">1080p</td>
            <td className=" py-3 px-4 text-center ">4K+HDR</td>
          </tr>
          <tr>
            <td className="x-4 text-center  ">Devices you can use to watch</td>
            <td className=" py-3 px-4 text-center ">Phone</td>
            <td className=" py-3 px-4 text-center ">Phone</td>
            <td className=" py-3 px-4 text-center ">Phone</td>
            <td className=" py-3 px-4 text-center ">Phone</td>
          </tr>
          <tr>
            <td className="x-4 text-center  "></td>
            <td className=" py-3 px-4 text-center ">Tablet</td>
            <td className=" py-3 px-4 text-center ">Tablet</td>
            <td className=" py-3 px-4 text-center ">Tablet</td>
            <td className=" py-3 px-4 text-center ">Tablet</td>
          </tr>
          <tr>
            <td className="x-4 text-center  "></td>
            <td className=" py-3 px-4 text-center "></td>
            <td className=" py-3 px-4 text-center ">Computer</td>
            <td className=" py-3 px-4 text-center ">Computer</td>
            <td className=" py-3 px-4 text-center ">Computer</td>
          </tr>
          <tr>
            <td className="x-4 text-center  "></td>
            <td className=" py-3 px-4 text-center "></td>
            <td className=" py-3 px-4 text-center "></td>
            <td className=" py-3 px-4 text-center ">TV</td>
            <td className=" py-3 px-4 text-center">TV</td>
          </tr>
        </tbody>
      </table>
      <div className=" w-1/5 mb-20  ">
        <button className="py-2 rounded-lg text-center w-full font-bold text-xl text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900">
          Next
        </button>
      </div>
    </section>
  );
};

export default Pricetable;
