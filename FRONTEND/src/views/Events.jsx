export default function Events() {
  return (
    <div className=" mx-4 mt-20 md:ml-[400px] md:mr-10 lg:ml-[400px] lg:mr-10 h-screen flex justify-between items-center ">
      <div className=" w-full">
        <h1 className="text-5xl font-bold mb-16">NEWS & EVENTS</h1>
        <div className="flex flex-auto flex-row gap-3 mb-10">
          <div className="flex flex-auto flex-col bg-slate-200 p-5 shadow-sm">
            <h2 className="font-black mb-3">UNIVERSITY OF COLORADO BOULDER</h2>
            <h3 className="text-gray-800 mb-5">BACHELOR OF SCIENCE</h3>
            <p className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non
              magnam similique facilis voluptatum perspiciatis reprehenderit
              laudantium, amet omnis fugit maxime repellat, deserunt quaerat!
              Eum ducimus minima omnis distinctio pariatur?
            </p>
            <p className="text-gray-400">Posted on: 12/11/2023</p>
          </div>
          <div className="flex flex-auto flex-col bg-slate-200 p-5 shadow-sm">
            <h2 className="font-black mb-3">JAMES BUCHANAN HIGH SCHOOL</h2>
            <h3 className="text-gray-800 mb-5">TECHNOLOGY MAGNET PROGRAM</h3>
            <p className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non
              magnam similique facilis voluptatum perspiciatis reprehenderit
              laudantium, amet omnis fugit maxime repellat, deserunt quaerat!
              Eum ducimus minima omnis distinctio pariatur?
            </p>
            <p className="text-gray-400">Posted on: 12/11/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
