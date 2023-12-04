import { useState } from "react";

export default function Register() {
  const [childName, setChildName] = useState("");
  const [parentNme, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [currentClass, setCurrentClass] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="flex justify-center items-center  w-4/5 min-h-screen mx-auto">
      <div className="bg-white rounded-lg p-8 shadow-2xl w-full  text-center">
        <h1 className="text-2xl font-bold my-6">Registration Form</h1>
        <hr className="mb-5" />
        <div>
          <div className="my-5 flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label className="text-xl mr-4 text-gray-500">Childs Name</label>
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
              <label className="text-xl mr-4 text-gray-500">
                Parent/Guardian Name
              </label>
              <input
                value={parentNme}
                onChange={(e) => {
                  setParentName(e.target.value);
                }}
                type="text"
                className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col flex-1 mt-4 md:mt-0">
              <label className="text-xl mr-4 text-gray-500">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="my-5 flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label className="text-xl mr-4 text-gray-500">Age</label>
              <input
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="text"
                className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col flex-1 mt-4 md:mt-0">
              <label className="text-xl mr-4 text-gray-500">Class</label>
              <input
                value={currentClass}
                onChange={(e) => {
                  setCurrentClass(e.target.value);
                }}
                type="text"
                className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
              />
            </div>
            <div className="flex flex-col flex-1 mt-4 md:mt-0">
              <label className="text-xl mr-4 text-gray-500">Phone Number</label>
              <input
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                type="text"
                className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="my-5 flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label className="text-xl mr-4 text-gray-500">Password</label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
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
            <div className="flex flex-col flex-1 mt-4 md:mt-0">
              <label className="text-xl mr-4 text-gray-500">
                Childs Gender
              </label>
              <input
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="text"
                className="border-2 border-gray-500 px-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>

        <div className="inline-block md:flex md:flex-auto text-center md:flex-row justify-center mb-5">
          <button className="bg-black text-white p-4 rounded-md w-40 mr-3">
            Register
          </button>
          <p className="text-blue-500 items-center justify-center flex">
            Already Have an account? Login
          </p>
        </div>
        <hr className="mb-5" />
      </div>
    </div>
  );
}
