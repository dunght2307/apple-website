import React from "react";

const Button = ({ text }) => {
  return (
    <div className="flex-center md:mt-16 mt-12">
      <button className=" max-w-max group flex justify-between items-center gap-6 py-3 px-5 bg-gray-300 backdrop-blur rounded-full font-semibold">
        <span className="md:text-lg text-sm">{text}</span>
        <span className="rounded-full w-9 h-9 bg-blue opacity-90 group-hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              fill="#f5f5f7"
              id="_art"
              className="st1"
              d="M25.5,16.5l-5.9,0l0-5.9C19.6,9.7,18.9,9,18,9c-0.9,0-1.5,0.7-1.5,1.5l0,5.9l-5.9,0h0
            C9.7,16.4,9,17.1,9,18c0,0.9,0.7,1.5,1.5,1.5l5.9,0l0,5.9c0,0.9,0.7,1.5,1.5,1.5c0.9,0,1.5-0.7,1.5-1.5l0-5.9l5.9,0h0
            c0.9,0,1.5-0.7,1.5-1.5C27,17.2,26.3,16.5,25.5,16.5L25.5,16.5z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
