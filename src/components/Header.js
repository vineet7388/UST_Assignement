import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="bg-amber-200 shadow-lg mb-2 sm:bg-red-200 h-12">
        <button
          type="button"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
          className="text-white float-right hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
         {btnName}
        </button>
    </div>
  );
};

export default Header;
