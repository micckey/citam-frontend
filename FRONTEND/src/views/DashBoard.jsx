import { useState } from "react";

export default function DashBoard() {
  const [selectedClass, setSelectedClass] = useState("");

  return (
    <div className=" mx-4 md:ml-[400px] md:mr-10 lg:ml-[400px] lg:mr-10 h-screen flex justify-between items-center ">
      <div className=" w-full">
        <h1 className="text-5xl">ALL CLASSES</h1>
        <div className="mt-14 flex-auto flex flex-col items-center sm:flex-row sm:items-start">
          <input
            value={selectedClass}
            onChange={(e) => {
              setSelectedClass(e.target.value);
            }}
            type="text"
            placeholder="-----Class type-----"
            className="border-2 rounded-md border-gray-300 px-4 py-2 w-full sm:w-2/5 mb-4 sm:mb-0 sm:mr-4"
          />
          <button className="bg-purple-800 text-white p-3 rounded-lg">
            Confirm Selection
          </button>
        </div>
        <h2 className="text-xl text-gray-400 my-5">CLASS</h2>
        {/*Classes table */}
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">#</th>
              <th className="border border-slate-600 rounded-md">Venue</th>
              <th className="border border-slate-600 rounded-md">Date</th>
              <th className="border border-slate-600 rounded-md">
                Presided by
              </th>
              <th className="border border-slate-600 rounded-md">Duration</th>
              <th className="border border-slate-600 rounded-md">Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 rounded-md text-center">
                1
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                LT3
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                30-11-2023
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                Janet Shee
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                30 minutes
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                Junior
              </td>
            </tr>
            <tr>
              <td className="border border-slate-700 rounded-md text-center">
                1
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                LT5
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                30-11-2023
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                Erick Majengo
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                45 minutes
              </td>
              <td className="border border-slate-700 rounded-md text-center ">
                Angel
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
