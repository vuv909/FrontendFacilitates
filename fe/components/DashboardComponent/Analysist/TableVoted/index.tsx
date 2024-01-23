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

const info = () => {
  Modal.info({
    title: "Thông tin chi tiết",
    content: (
      <div>
        <div className="flex  justify-between">
          <div className="py-2 flex justify-end ">
            <input
              type="text"
              className="outline-none border border-gray-300 h-7 p-1 rounded-l-full"
              placeholder="Điền kí tự để tìm kiếm ..."
            />
            <button className="bg-blue-500 px-2 h-7 hover:bg-blue-300 cursor-pointer rounded-r-full">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </button>
          </div>
        </div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    footer: (
      <div className="relative pb-8">
        <Button
          onClick={() => Modal.destroyAll()}
          className="absolute right-0 bottom-2 bg-blue-500 text-white hover:bg-blue-300"
        >
          OK
        </Button>
      </div>
    ),
  });
};

export default function TableVoted() {
  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <>
      <div className="">
        <div className="relative">
          <div className="absolute left-2">
            <Tooltip title="Xuất dữ liệu bảng ra excel">
              <p className="my-2 cursor-pointer bg-green-300 rounded-md text-green-800 text-3xl hover:text-green-500">
                <FontAwesomeIcon icon={faFileCsv} />
              </p>
            </Tooltip>
          </div>
          <div className="border flex flex-col justify-center">
            <div className="border text-center">
              <p className="text-2xl p-2 bg-blue-500 text-white font-semibold">
                Đánh giá của người dùng khi sử dụng xong
              </p>
            </div>

            <div className="flex bg-blue-100 justify-between">
              <div className="py-2 flex justify-end bg-blue-100">
                <input
                  type="text"
                  className="outline-none border border-gray-300 h-7 p-1 rounded-l-full"
                  placeholder="Điền kí tự để tìm kiếm ..."
                />
                <button className="bg-blue-500 px-2 h-7 hover:bg-blue-300 cursor-pointer rounded-r-full">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white"
                  />
                </button>
              </div>
              <div className="py-2 flex justify-end bg-blue-100">
                <Tooltip title="Button này có chức năng sắp xếp điểm và sắp xếp về lượt sử dụng ">
                  <select className="outline-none border border-gray-300 h-7 p-1 rounded-full">
                    <option value="default">Mặc định</option>
                    <option value="1">Điểm tăng dần</option>
                    <option value="-1">Điểm giảm dần</option>
                    <option value="1">Lượt sử dụng tăng dần</option>
                    <option value="-1">Lượt sử dụng giảm dần</option>
                  </select>
                </Tooltip>
              </div>
            </div>

            <table>
              <thead className="border">
                <tr>
                  <th className="p-5 border">#</th>
                  <th className="p-5 border">Tên phòng (sân)</th>
                  <th className="p-5 border">Phân loại</th>
                  <th className="p-5 border">Điểm đánh giá</th>
                  <th className="p-5 border">Số lượt sử dụng</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>DE222</span>
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
                    <p>Room</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>4/5</p>
                  </td>

                  <td className="p-5 border text-center">
                    <p>45</p>
                  </td>
                  <td className="border">
                    <div className="flex flex-col gap-2 w-full py-1">
                      <button
                        onClick={info}
                        className=" bg-blue-400 w-full hover:bg-blue-300 p-2 text-white rounded-full "
                      >
                        Xem chi tiết
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
                      <span>DE222</span>
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
                    <p>Room</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>4/5</p>
                  </td>

                  <td className="p-5 border text-center">
                    <p>45</p>
                  </td>
                  <td className="border">
                    <div className="flex flex-col gap-2 w-full py-1">
                      <button
                        onClick={info}
                        className=" bg-blue-400 w-full hover:bg-blue-300 p-2 text-white rounded-full "
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </td>
                </tr>{" "}
                <tr className="">
                  <td className="p-5 border text-center">
                    <p>1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                      <span>DE222</span>
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
                    <p>Room</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>4/5</p>
                  </td>

                  <td className="p-5 border text-center">
                    <p>45</p>
                  </td>
                  <td className="border">
                    <div className="flex flex-col gap-2 w-full py-1">
                      <button
                        onClick={info}
                        className=" bg-blue-400 w-full hover:bg-blue-300 p-2 text-white rounded-full "
                      >
                        Xem chi tiết
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
