"use client";
import { Button } from "antd";
import { url } from "inspector";
import Image from "next/image";
import React from "react";
// import data  from "../../services/profile.service";
import { useState } from "react";

const ProfileUserComponent = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  return (
    <div className="flex items-center justify-center h-screen w-screen mt-10 bg-gray-100">
      <div className="bg-white rounded-md -md p-20 ">
        <h1 className=" text-2xl font-bold">Thông tin cá nhân</h1>
        <div className="flex justify-between ml-24">
          <div className="w-32 h-32 overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg"
              width={90}
              height={90}
              alt="Anonymous"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <Button className="bg-blue-600 text-white w-23  h-10 rounded-md mr-10  pr-3 mt-11 border flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16V7m-3 3h6"
              />
            </svg>
            Tải ảnh
          </Button>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Tên
            </label>
            <input
              type="text"
              className="text-black-800 border border-solid border-gray-600 pr-40 pb-2 rounded-md"
              value={name}
             onChange={(e)=> setName(e.target.value)}
             placeholder="Nhập tên...."
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Email
            </label>

            <input
              className="text-black-800 border border-solid border-gray-600 pr-40 pb-2 rounded-md"
              value={email}
             onChange={(e)=> setEmail(e.target.value)}
             placeholder="Nhập email..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Địa chỉ
            </label>

            <input
              className="text-black-800 border border-solid border-gray-600 pr-40 pb-2 rounded-md"
              value={address}
             onChange={(e)=> setAddress(e.target.value)}
             placeholder="Nhập địa chỉ"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Số điện thoại
            </label>

            <input
              className="text-black-800 border border-solid border-gray-600 pr-40 pb-2 rounded-md"
              value={phonenumber}
             onChange={(e)=> setPhonenumber(e.target.value)}
            />
          </div>

          <div className="flex">
            <Button className="flex items-center justify-center bg-white text-blue-600  px-6 py-2 rounded-md mr-10 border border-solid border-gray-700">
              Hủy
            </Button>
            <Button className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-md mr-10 border border-solid border-transparent">
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserComponent;
