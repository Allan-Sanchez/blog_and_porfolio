import React from "react";
import Email from "../svg/email";

export default function ContactHero() {
  return (
    <div className="w-full h-48 my-10 rounded-3xl bg-yellow-500 flex flex-col md:flex-row justify-center md:justify-around items-center  px-20">
      <h3 className="text-2xl md:text-4xl text-center pb-5 font-semibold">
        {" "}
        Interested working with me?
      </h3>
      <div className="bg-gray-100 w-40 flex justify-center items-center text-gray-900 font-normal  py-4 text-xl rounded-xl">
        <Email className="hidden sm:block w-5 md:w-7  fill-current" />
        <a href="#" className="sm:ml-3">
          Mail Me
        </a>
      </div>
    </div>
  );
}
