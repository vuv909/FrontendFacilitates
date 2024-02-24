"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Toast } from "primereact/toast";
import { getCategory } from "../../services/category.api";
interface City {
  name: string;
  code: string;
}

const MAX_FILE_SIZE = 2000000;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const addCategorySchema = z.object({
  categoryName: z
    .string()
    .trim()
    .nonempty()
    .max(100, "Maximum character is 100 characters !!!")
    .refine((categoryName) => categoryName.trim().length > 0, {
      message: "Category name is required.",
    }),
});

type addCategorySchemaType = z.infer<typeof addCategorySchema>;

export default function CategoryComponent() {
  const [open, setOpen] = useState(false);

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("");
  const [shortTitle, setShortTitle] = useState<string>("");
  const [description, setDescription] = useState<string | null>("");
  const [categoryData , setCategoryData] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addCategorySchemaType>({
    resolver: zodResolver(addCategorySchema),
  });

  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const toastAddCategory = useRef<any>(null);

  const showErrorAddCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "error",
      summary: "Error",
      detail: msg,
      life: 3000,
    });
  };

  const handleSelectedFile = (e: FileUploadSelectEvent) => {
    const selectedFile = e.files;
    if (selectedFile.length > 0) {
      setImg(selectedFile[0]);
    } else {
      alert("Selected file size exceeds the limit of 2MB.");
    }
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

  //form
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    reset();
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };

  const onSubmit: SubmitHandler<addCategorySchemaType> = (data) => {
    console.log("====================================");
    console.log("data::", data);
    console.log("====================================");
    console.log("====================================");
    console.log("image::", img);
    console.log("====================================");
  };

  //call api 
  useEffect(()=>{
    getCategory().then((res)=>{
      setCategoryData(res.data)
    }).catch((err)=>{
      
    })
  },[])

  return (
    <>
      <div className="">
        <div>
          <div className="border flex flex-col justify-center">
            <div className="border text-center">
              <p className="text-2xl p-2 bg-blue-500 text-white font-semibold">
                Quản lý các thể loại dịch vụ
              </p>
            </div>
            <div className="flex justify-between bg-blue-100">
              <div className="py-2 flex items-center justify-end bg-blue-100">
                <Tooltip title="Tạo một dịch vụ mới">
                  <button
                    onClick={showModal}
                    className="ml-5 outline-none border border-gray-300 h-7 p-1 text-white  bg-blue-500 hover:bg-blue-300  "
                  >
                    <FontAwesomeIcon className="text-xl" icon={faPlus} />
                  </button>
                </Tooltip>

                <Tooltip title="Xuất dữ liệu bảng ra excel">
                  <p className="ml-5 cursor-pointer text-green-800 text-3xl hover:text-green-500">
                    <FontAwesomeIcon icon={faFileCsv} />
                  </p>
                </Tooltip>
              </div>
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
            </div>
            <table>
              <thead className="border">
                <tr>
                  <th className="p-5 border">#</th>
                  <th className="p-5 border">Tên</th>
                  <th className="p-5 border">Ảnh</th>
                  <th className="p-5 border">Thời gian tạo</th>
                  <th className="p-5 border">Thời gian cập nhập</th>
                  <th></th>
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
                    <p>Slot1</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>14h30-24/11/2022</p>
                  </td>
                  <td className="p-5 border text-center">
                    <p>18h-24/11/2022</p>
                  </td>

                  <td className="border">
                    <div className="flex flex-col items-center gap-2 w-full py-1">
                      <button
                        onClick={showModal}
                        className="bg-blue-400 hover:bg-blue-300 p-2 text-white rounded-full w-24"
                      >
                        Cập nhật
                      </button>
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
        <Toast ref={toastAddCategory} />
      </div>
      <Modal
        className="w-96"
        open={open}
        confirmLoading={false}
        onOk={handleOk}
        closeIcon={<></>}
        footer={[]}
      >
        <div>
          <h1 className="text-center font-bold mb-5 text-xl">
            Tạo một dịch vụ mới
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="name">Tên phòng,sân bóng</label>
            <input
              id="name"
              className={`w-full shadow-none p-3 border ${
                errors.categoryName ? "outline-red-300" : "outline-blue-300"
              }`}
              {...register("categoryName")}
            />
            {errors.categoryName && (
              <span className="text-red-500">
                {errors.categoryName.message}
              </span>
            )}
          </div>
          <div className="border mb-10 flex justify-content-center">
            <Tooltip title="Tải ảnh cho phòng, sân thể dục vào đây">
              <FileUpload
                id="img"
                onSelect={(e: FileUploadSelectEvent) => handleSelectedFile(e)}
                accept="image/*"
                maxFileSize={MAX_FILE_SIZE}
                disabled={false}
                uploadOptions={{
                  className: "hidden",
                }}
                emptyTemplate={
                  <p className="m-0">Tải ảnh cho phòng, sân thể dục vào đây</p>
                }
              />
            </Tooltip>
          </div>

          <div className="flex justify-end">
            <Button key="back" onClick={handleCancel}>
              Hủy
            </Button>
            <Button className="bg-blue-500 text-white" htmlType="submit">
              Thêm
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
