import React from "react";

export default function Navigation() {
  return (
    <nav className="hidden md:flex justify-between mx-20 my-5">
      <h2 className="font-bold text-2xl">Allan Sanchez</h2>
      <ul className="flex">
        <li className=" font-medium mx-5 text-yellow-600">
          <a href="#">Home</a>
        </li>
        <li className="font-medium mx-5">
          <a href="#">About</a>
        </li>
        <li className="font-medium mx-5">
          <a href="#">Projects</a>
        </li>
        <li className="font-medium mx-5">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
