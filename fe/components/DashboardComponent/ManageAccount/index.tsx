"use client";
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

import { Editor, EditorTextChangeEvent } from "primereact/editor";

import {
  FileUpload,
  FileUploadProps,
  FileUploadSelectEvent,
} from "primereact/fileupload";
import { classNames } from "primereact/utils";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Button, Modal, Pagination, PaginationProps, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCsv,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
interface City {
  name: string;
  code: string;
}

export default function ManageAccount() {
  const [open, setOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("");
  const [shortTitle, setShortTitle] = useState<string>("");
  const [description, setDescription] = useState<string | null>("");

  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const handleSelectedFile = (e: FileUploadSelectEvent) => {
    setImg(e.files[0]);
  };
  const data = new FormData();
  const handleAdd = () => {
    if (selectedCity?.name) {
      data.append("category", selectedCity.name);
    }
    data.append("name", textValue);
    if (img != null) {
      data.append("img", img);
    }
    data.append("location", location);
    data.append("shortTitle", shortTitle);
    if (description != null) {
      data.append("description", description);
    }

    const formDataEntries: [string, FormDataEntryValue][] = Array.from(
      data.entries()
    );

    for (const [key, value] of formDataEntries) {
      console.log(`${key}: ${value}`);
    }
  };

  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

 

  return (
    <>
      <div className="">
        <div>
          <div className="border flex flex-col justify-center">
            <div className="border text-center">
              <p className="text-2xl p-2 bg-blue-500 text-white font-semibold">
               Quản Lý Tài Khoản
              </p>
            </div>
            <div className="flex justify-end bg-blue-100">
             
              <div className="py-2 flex justify-end bg-blue-100">
                <input
                  type="text"
                  className="outline-none border border-gray-300 h-7 p-1 rounded-l-full"
                  placeholder="Tìm Kiếm..."
                />
                <button className="bg-blue-500 px-2 h-7 hover:bg-blue-300 cursor-pointer rounded-r-full">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white"
                  />
                </button>
              </div>
            </div>
            <table>
              <thead className="border">
                <tr>
                  <th className="p-5 border">STT</th>
                  <th className="p-5 border">Tên Tài Khoản </th>
                  <th className="p-5 border">Số điện thoại</th>
                  <th className="p-5 border">Email</th>
                  <th className="p-5 border">Địa chỉ</th>
                  <th className="p-5 border">Ngày tạo</th>
                  <th className="p-5 border">Trạng Thái</th>
                  <th className="p-5 border">Xóa</th>

                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Quân</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={10}
                        width={10}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>0987654321</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>quanbui@gmail.com</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>Hà Nội</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>11-11-2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>Active</span>
                     
                    </p>
                  </td>
                  <td className="p-5 border text-center">
                  <div className="flex flex-col gap-2 w-full py-1">
                      <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24">
                        Xóa
                      </button>
                    </div>
                  </td>
                  
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-center ">
              <Pagination
                defaultCurrent={6}
                total={500}
                onChange={onChangePage}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

