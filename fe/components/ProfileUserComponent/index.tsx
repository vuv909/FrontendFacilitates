"use client";
import { Button } from "antd";
import { url } from "inspector";
import React, { use, useEffect } from "react";
import data  from "../../services/profile.service";
import { useState } from "react";
import { getProfile, updateProfile } from "../../services/user.api";
import { log } from "console";
import { set } from "react-hook-form";

const ProfileUserComponent = () => {
  const [image,setImage] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");;
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let item = null;
  let userId: string = ''; // Khai báo biến userId ở ngoài phạm vi của block



const validation = () =>{
  if(!name || ! address){
    alert('Vui lòng không để trống;');
    return false;
  }
  if (!/^\d{10}$/.test(phoneNumber) || !phoneNumber.startsWith('0')) {
    alert("Số điện thoại không hợp lệ.");
    return false;
}

return true;
}  
const fetchData = async () => {
  try {
      const response : any= await getProfile(userId);
      setImage(response.data.avatar);
      setName(response.data.name);
      setEmail(response.data.email);
      setAddress(response.data.address);
      setRole(response.data.roleId.roleName);
      setPhoneNumber(response.data.phoneNumber);
      console.log(response.data);
      
  } catch (error) {
      console.error('Error:', error);
  }
};

  useEffect(() => {
    item = localStorage.getItem('user');
    
    if (item !== null) {
      const user: { _id: string } = JSON.parse(item);
      userId = user._id; // Gán giá trị user._id vào biến userId
      console.log(userId);
  }
  fetchData();
}, [userId]);


  const handleSave = async() => {
    const isValid = validation();
    if(isValid) {
    try {
      item = localStorage.getItem('user');
    
      if (item !== null) {
        const user: { _id: string } = JSON.parse(item);
        userId = user._id; // Gán giá trị user._id vào biến userId
        console.log(userId);
    }
    updateProfile(userId, {name, address,phoneNumber});
      console.log("success");
      alert("Thay đổi thông tin thành công");
      
    } catch (error) {
      console.log("error", error);
      alert( error);
    }   
  };
}
  const handleReject = () => {
   fetchData();

  };
  return (
    <div className="flex items-center justify-center h-screen w-screen mt-10 bg-gray-100 overflow-x-hidden">
      <div className="bg-white rounded-md p-10 pl-20 pr-20 border border-gray-200 overflow-hidden">
        <h1 className=" text-2xl font-bold">Thông tin cá nhân</h1>
        <div className="flex justify-center m-2">
          <div className="w-32 h-32 overflow-hidden ">
            <img
              src={image}
              width={100}
              height={100}
              alt="Anonymous"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="items-center justify-center ">
            <h3 className="text-center font-bold">{role}</h3>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Tên
            </label>
            <input
              type="text"
              className="text-black-800 border border-solid border-gray-600 pr-40 pb-2 pl-1 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên...."
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Email
            </label>

            <input
              className="text-black-800 w-96 border border-solid border-gray-600 pr-40 pb-2 pl-1  rounded-md disabled"
              value={email}
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Địa chỉ 
            </label>

            <input
              className="text-black-800 w-96 border border-solid border-gray-600 pr-40 pb-2 pl-1  rounded-md "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Nhập địa chỉ..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-black-600 text-sm font-semibold mb-2">
              Số điện thoại
            </label>

            <input
              className="text-black-800 border border-solid border-gray-600 pr-40 pb-2 pl-1  rounded-md"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Nhập số điện thoại..."
            />
          </div>

          <div className="flex">
            <Button className="flex items-center justify-center bg-white text-blue-600  px-6 py-4 rounded-md mr-10 border border-solid border-gray-700" onClick={handleReject}>
              Hủy
            </Button>
            <Button className="flex items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-md mr-10 border border-solid border-transparent" onClick={handleSave}>
              Lưu
            </Button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ProfileUserComponent;
