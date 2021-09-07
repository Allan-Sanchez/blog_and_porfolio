import React from "react";

export default function Menu() {
  return (
    <div  className="mb-10">
      <h2 className="text-4xl font-bold">My Projects</h2>
      <ul className="text-2xl mt-10 flex justify-start w-full overflow-x-auto category-menu">
        <li className="mr-10 text-yellow-600">
          <a href="#">All</a>
          <div className="h-1  w-11/12 mx-auto mt-3 bg-yellow-600"></div>
        </li>
        <li className="mr-10 text-gray-400">
          <a href="#">React</a>
        </li>
        <li className="mr-10 text-gray-400">
          <a href="#">Vue</a>
        </li>
        <li className="mr-10 text-gray-400">
          <a href="#">Javascript</a>
        </li>
        <li className="mr-10 text-gray-400">
          <a href="#">Node</a>
        </li>
        <li className="mr-10 text-gray-400">
          <a href="#">Flutter</a>
        </li>
        <li className="mr-10 text-gray-400">
          <a href="#">Graphql</a>
        </li>
      </ul>
      {/* <a id="emailMe" href="mailto:example@website.com">e-mail me</a> */}
    </div>
  );
}
