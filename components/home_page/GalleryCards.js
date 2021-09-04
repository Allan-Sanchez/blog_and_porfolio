import React, { useState } from "react";
import Image from "next/image";

export default function GalleryCards() {
  const [imageList, SetImageList] = useState([
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1600718338/Screenshot_2020-09-20_exam2_1_v87tnz.png",
      width: 325,
      height: 200,
      name: "Ecommerce",
    },
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1596949151/page-1_apfedz.png",
      width: 325,
      height: 200,
      name: "Cake",
    },
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1598061973/screenshot-exam1-web-developer-2020.netlify.app-2020.08.21-20_04_16_lgill3.png",
      width: 325,
      height: 200,
      name: "Task Form",
    },
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1629847504/flutter/home_page_cus1vx.jpg",
      width: 325,
      height: 700,
      name: "Cookie",
    },
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1588006191/screenshot-todo-firebase.now.sh-2020.04.27-10_48_56_qf8lkh.png",
      width: 325,
      height: 200,
      name: "CRUD House",
    },
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1591379422/inventory_system/Screenshot_2020-05-28_Laravel_3_kpjndc.png",
      width: 325,
      height: 180,
      name: "Sistema de Inverario",
    },
    {
      url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1606928946/react-proyect/tinder-clone_o4khsl.png",
      width: 325,
      height: 200,
      name: "Tinder Clone",
    },
    // {
    //   url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1591379425/inventory_system/Screenshot_2020-05-28_Laravel_4_qlmrfn.png",
    //   width: 325,
    //   height: 180,
    //   name: "Inventory Sistem",
    // },
    // {
    //   url: "https://res.cloudinary.com/dx9n8tsyu/image/upload/v1600718336/Screenshot_2020-09-20_exam2_2_y6hea9.png",
    //   width: 325,
    //   height: 110,
    //   name: "Ecommerce Stock",
    // },
  ]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
      {/* card 1 */}
      {imageList.map((data, index) => (
        <div
          className="cardContainer h-80 w-96 p-5 bg-gray-800 rounded-2xl  cursor-pointer"
          key={index}
        >
          <div className=" cardImageContainer h-52 w-full bg-gray-600 rounded-xl flex justify-center relative">
            <Image
              src={data.url}
              alt={data.name}
              width={data.width}
              height={data.height}
              objectFit="contain"
            />
          </div>
          <h3 className="mt-3 font-bold text-xl">{data.name}.</h3>
          <div className="w-full flex justify-end">
            <div className="h-10 bg-yellow-600 px-5 rounded-3xl flex justify-center items-center">
              <h4>View Project</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
