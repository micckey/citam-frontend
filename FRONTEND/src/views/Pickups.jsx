export default function Pickups() {
  return (
    <div className=" mx-4 md:ml-[400px] md:mr-10 lg:ml-[400px] lg:mr-10 h-screen flex justify-between items-center ">
      <div className=" w-full">
        <h1 className="text-5xl mb-20">PICKUPS & DROP</h1>

        <h2 className="text-xl text-gray-400 my-5">PICKUPS & DROP</h2>
        {/*Classes table */}
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">#</th>
              <th className="border border-slate-600 rounded-md">
                Driver name
              </th>
              <th className="border border-slate-600 rounded-md">
                Seat Number
              </th>
              <th className="border border-slate-600 rounded-md">Pickup</th>
              <th className="border border-slate-600 rounded-md">
                Pickup Time/Date
              </th>
              <th className="border border-slate-600 rounded-md">
                Bus Reg Number
              </th>
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
