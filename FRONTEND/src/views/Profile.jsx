import { useState } from "react";

export default function Profile() {
  const [childName, setChildName] = useState("");
  const [chilAge, setChildAge] = useState("");
  const [childGender, setChildGender] = useState("");
  const [childSchool, setChildSchool] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhoneNo, setParentPhoneNo] = useState("");
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="mx-4 md:ml-[400px] md:mr-10 lg:ml-[400px] lg:mr-10 min-h-screen mb-4 flex justify-between items-center ">
      <div className="w-full">
        <div className="mb-8">
          <h1 className="font-bold text-4xl">JAMES KOECH</h1>
          <p>
            NAIROBI, <span className="underline">0712345678, </span>
            <span className="underline text-purple-500">
              JAMESKOECH@GMAIL.COM
            </span>
          </p>
        </div>
        <hr />

        {/* ----CHILD'S FORM ------ */}

        <h1 className="text-xl my-5">Child Details</h1>
        <hr />
        <div className="my-5 flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col flex-1">
            <label className="text-xl mr-4 text-gray-500">Name</label>
            <input
              value={childName}
              onChange={(e) => {
                setChildName(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">Age</label>
            <input
              value={chilAge}
              onChange={(e) => {
                setChildAge(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">Gender</label>
            <input
              value={childGender}
              onChange={(e) => {
                setChildGender(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">School</label>
            <input
              value={childSchool}
              onChange={(e) => {
                setChildSchool(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>
        <hr />

        {/* -----GUARDIAN'S FORM------- */}

        <h1 className="text-xl my-5">Parent/Guardian Details</h1>
        <hr />
        <div className="my-5 flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col flex-1">
            <label className="text-xl mr-4 text-gray-500">Name</label>
            <input
              value={parentName}
              onChange={(e) => {
                setParentName(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">email</label>
            <input
              value={parentEmail}
              onChange={(e) => {
                setParentEmail(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">Phone Number</label>
            <input
              value={parentPhoneNo}
              onChange={(e) => {
                setParentPhoneNo(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">Location</label>
            <input
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>
        <div className="my-5 flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col flex-1">
            <label className="text-xl mr-4 text-gray-500">Image</label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-black file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-gray-700 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              id="formFileLg"
              type="file"
              value={selectedFile}
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">Old Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col flex-1 mt-4 md:mt-0">
            <label className="text-xl mr-4 text-gray-500">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="text"
              className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
            />
          </div>
        </div>

        {/* -----SUBMIT BUTTON----- */}

        <button className="bg-purple-900 text-white p-4 rounded-md mt-5 mx-auto flex w-64 ">
          Update All
        </button>
      </div>
    </div>
  );
}
