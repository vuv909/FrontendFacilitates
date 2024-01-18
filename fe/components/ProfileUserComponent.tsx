import { url } from "inspector";
import Image from "next/image";
import React from "react";

const ProfileUserComponent = () => {
  return (
    <div className="bg-white  p-6 rounded-md shadow-md">
      {/* Avatar */}
      <div className="w-20 h-20 overflow-hidden">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg"
    width={50}
    height={50}
    alt="Anonymous"
    className="object-cover w-full h-full rounded-full"
  />

</div>



      <div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Tên
          </label>
        
          <input
            className="text-gray-800 border border-solid"
            value={"Bùi Anh Quân"}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          
          <input
            className="text-gray-800  border-blue"
            value={"quandeptrai.@gmail.com"}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Địa chỉ
          </label>
         
          <input className="text-gray-800  border-blue" value={"Hà Nội"} />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Số điện thoại
          </label>
      
          <input className="text-gray-800  border-blue" value={"0987654321"} />
        </div>
      </div>
    </div>
  );
};

export default ProfileUserComponent;
