"use client";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { Pagination } from "antd";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";

export default function SearchAll({ params }: { params: object }) {
  console.log("====================================");
  console.log(params);
  console.log("====================================");

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [fromDate, setFromDate] = useState<Nullable<Date>>(null);
  const [toDate, setToDate] = useState<Nullable<Date>>(null);
  const [status, setStatus] = useState(null);

  return (
    <div className="mx-20">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Kết quả tìm kiếm</h1>
      </div>
      <div className="flex items-center justify-center gap-20">
        <div>
          <div className="flex gap-3 mt-10 items-center justify-center flex-wrap">
            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <i className="pi pi-search p-1" />
              <InputText
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Điền kí tự tìm kiếm ..."
                tooltip="Điền kí tự tìm kiếm"
                tooltipOptions={{ position: "top" }}
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <i className="pi pi-calendar p-1" />
              <Calendar
                value={fromDate}
                onChange={(e) => setFromDate(e.value)}
                placeholder="Chọn thời gian bắt đầu ..."
                tooltip="Chọn thời gian bắt đầu"
                showTime
                hourFormat="24"
                tooltipOptions={{ position: "top" }}
                style={{ boxShadow: "none" }}
              />
              <i className="pi pi-times pr-1 cursor-pointer" onClick={()=>setFromDate(null)}></i>
            </div>

            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <i className="pi pi-calendar p-1" />
              <Calendar
                value={toDate}
                onChange={(e) => setToDate(e.value)}
                showTime
                hourFormat="24"
                placeholder="Chọn thời gian kết thúc ..."
                tooltip="Chọn thời gian kết thúc"
                tooltipOptions={{ position: "top" }}
                style={{ boxShadow: "none" }}
              />
              <i className="pi pi-times pr-1 cursor-pointer" onClick={()=>setToDate(null)}></i>
            </div>
          </div>

          <div className="flex gap-3 mt-5 items-center justify-center flex-wrap">
            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <Dropdown
                value={category}
                onChange={(e) => setCategory(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Phân loại"
                tooltip="Phân loại"
                tooltipOptions={{ position: "top" }}
                className="w-full px-5"
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <Dropdown
                value={status}
                onChange={(e) => setStatus(e.value)}
                options={cities}
                optionLabel="name"
                tooltip="Trạng thái"
                placeholder="Trạng thái"
                tooltipOptions={{ position: "top" }}
                className="w-full px-5"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
        </div>

        <div>
          <button className="px-10 py-4 text-white font-semibold rounded-md hover:bg-blue-400 bg-blue-600">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div>
        {/* products */}
        <div className="flex flex-wrap items-center justify-center mt-20 gap-10">
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
          <div className="basis-1/5  relative mb-5">
            <div className="flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                className="w-full h-72 rounded-md"
              />
              <p className="font-bold text-2xl bg-black text-white shadow-md rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                DE221
              </p>
              <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                Đặt phòng
              </button>
            </div>
          </div>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-center my-16">
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
}
