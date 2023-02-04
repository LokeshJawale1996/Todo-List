import React from "react";
import Logo from './images/logo2.jpg'
function Navbar() {
  return (
   <nav className="bg-blue-100 border-red-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 text-center">
      <div className="container mx-auto flex justify-center">

      <a href="https://flowbite.com/" className="flex items-center">
        <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">Todo App</span>
    </a>
      </div>
    </nav>
  );
}
export default Navbar;
