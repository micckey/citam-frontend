import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SignOut() {
  return (
    <div className="p-4">
      <div className="flex">
        <Link
          to={"/"}
          className="bg-purple-900 text-white px-4 py-1 rounded-lg w-fit"
        >
          <BsArrowLeft size={30} />
        </Link>
      </div>

      <h1 className="text-3xl my-4 text-center">Sign Out</h1>

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto md:w-2/5">
        <h3 className="text-2xl">Are you sure you want to Sign Out?</h3>
        <button className="p-4 bg-red-600 text-white m-8 w-fit rounded-md">
          Yes, Sign Out
        </button>
      </div>
    </div>
  );
}
