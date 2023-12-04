import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen w-4/5 mx-auto">
      <div className="bg-white rounded-lg p-8 shadow-2xl w-full  text-center">
        <h1 className="text-2xl font-bold my-6">User Login</h1>
        <hr className="mb-5" />
        <div className="mx-0 md:mx-48 mb-8">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email"
            className="border-2 rounded-md border-gray-300 px-4 py-2 w-full mb-6  "
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="email"
            className="border-2 rounded-md border-gray-300 px-4 py-2 w-full  "
          />
        </div>
        <div className="inline-block md:flex md:flex-auto text-center md:flex-row justify-center mb-5">
          <button className="bg-black text-white p-4 rounded-md w-40 mr-3">
            Login
          </button>
          <p className="text-blue-500 items-center justify-center flex">
            Dont Have an account? Register
          </p>
        </div>
        <hr className="mb-5" />
      </div>
    </div>
  );
}
