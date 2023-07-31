import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 .75a9.25 9.25 0 110 18.5 9.25 9.25 0 010-18.5zM8.94 15.3l-3.96-3.97a.75.75 0 011.06-1.06L10 12.69l3.97-3.96a.75.75 0 111.06 1.06L11.06 13l3.97 3.97a.75.75 0 11-1.06 1.06L10 14.06l-3.97 3.97a.75.75 0 11-1.06-1.06L8.94 15.3z"
          clipRule="evenodd"
        />
      </svg>
      <div className="">
      <p className="text-gray-500 text-lg text-center">
        Oooops!!! The item you are looking for is not available at the moment.
        Please refine your search.
      </p>
    </div>
    </div>
  );
};

export default NotFound;
