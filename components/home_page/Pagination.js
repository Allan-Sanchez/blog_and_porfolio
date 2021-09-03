import React from 'react'

export default function Pagination() {
    return (
        <div className="flex justify-center items-center mt-5">
            <div className="w-14 h-14 mx-2 bg-gray-600 rounded-xl flex justify-center items-center border-2 border-yellow-600">
              1
            </div>
            <div className="w-14 h-14 mx-2 bg-gray-600 rounded-xl flex justify-center items-center">
              2
            </div>
            <div className="w-14 h-14 mx-2 bg-gray-600 rounded-xl flex justify-center items-center">
              3
            </div>
            <div className="w-14 h-14 mx-2 bg-gray-600 rounded-xl flex justify-center items-center">
              4
            </div>
            <div className="w-14 h-14 mx-2 bg-gray-600 rounded-xl flex justify-center items-center">
              5
            </div>
            ...
            <div className="w-14 h-14 mx-2 bg-gray-600 rounded-xl flex justify-center items-center">
              80
            </div>
          </div>
    )
}
