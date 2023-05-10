import React from "react";

const navbar = () => {
  return (
    <nav className="bg-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a
                href="/"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
