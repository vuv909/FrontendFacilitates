"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import {
  Button,
  Modal,
  Pagination,
  PaginationProps,
  Spin,
  Tooltip,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCsv,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { addFacility, getFacilities } from "../../../services/facilities.api";
import { getCategory } from "../../../services/category.api";
import { Toast } from "primereact/toast";

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

const addFacilitySchema = z.object({
  name: z
    .string()
    .trim()
    .max(100, "Maximum character is 100 characters !!!")
    .refine((categoryName) => categoryName.trim().length > 0, {
      message: "Name is required.",
    }),
  shortName: z
    .string()
    .trim()
    .max(50, "Maximum character is 50 characters !!!")
    .refine((categoryName) => categoryName.trim().length > 0, {
      message: "Short name is required.",
    }),
  category: z
    .string()
    .trim()
    .max(100, "Maximum character is 100 characters !!!")
    .refine((categoryName) => categoryName.trim().length > 0, {
      message: "Category is required.",
    }),
  address: z
    .string()
    .trim()
    .max(300, "Maximum character is 300 characters !!!")
    .refine((categoryName) => categoryName.trim().length > 0, {
      message: "Address is required.",
    }),
});

type addFacilitySchemaType = z.infer<typeof addFacilitySchema>;

export default function ManageFacilities() {
  const [open, setOpen] = useState(false);
  const refAdd = useRef<FileUpload | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("");
  const [shortTitle, setShortTitle] = useState<string>("");
  const [description, setDescription] = useState<string | null>("");
  const [listCategory, setListCategory] = useState<any>();
  const [listFacility, setListFacility] = useState<any[]>([]);
  const [isLoadingAddFormCategory, setIsLoadingAddFormCategory] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addFacilitySchemaType>({
    resolver: zodResolver(addFacilitySchema),
  });

  const toastAddCategory = useRef<any>(null);

  const showErrorCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "error",
      summary: "Error",
      detail: msg,
      life: 3000,
    });
  };

  const showSuccessCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "success",
      summary: "Success",
      detail: msg,
      life: 3000,
    });
  };

  const handleSelectedFile = (e: FileUploadSelectEvent) => {
    setImg(e.files[0]);
  };

  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  //form
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setDescription("");
    setImg(null);
    reset();
    refAdd.current?.setFiles([]);
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };

  //add submit
  const onSubmit = (data: any) => {
    setIsLoadingAddFormCategory(true);
    if (description && description.trim().length === 0) {
      showErrorCategory("Description must not be empty.");
      setIsLoadingAddFormCategory(false);
    } else if (description && description.trim().length > 700) {
      showErrorCategory(
        "Description must be less than or equal to 700 characters."
      );
      setIsLoadingAddFormCategory(false);
    } else if (Object.keys(errors).length === 0 && img) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("location", data.address);
      formData.append("description", description || "");
      formData.append("img", img);
      addFacility(formData)
        .then((res) => {
          handleCancel();
          reset();
          showSuccessCategory("Add facility successfully !!!");
          setIsLoadingAddFormCategory(false);
        })
        .catch((err) => {
          handleCancel();
          showErrorCategory("Error add facility !!!");
          setIsLoadingAddFormCategory(false);
        });
    } else {
      showErrorCategory("Image must be less than 2MB and not empty !!");
      setIsLoadingAddFormCategory(false);
    }
  };

  useLayoutEffect(() => {
    getCategory()
      .then((res) => {
        setListCategory(res.data.item);
      })
      .catch((error) => {
        console.log(error);
      });
    getFacilities().then(
      (res) => {
        setListFacility(res.data.items);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      <div className="">
        <div>
          <div className="border flex flex-col justify-center">
            <div className="border text-center">
              <p className="text-2xl p-2 bg-blue-500 text-white font-semibold">
                Quản lý phòng , sân thể dục
              </p>
            </div>
            <div className="flex justify-between bg-blue-100">
              <div className="py-2 flex items-center justify-end bg-blue-100">
                <Tooltip title="Tạo một phòng hoặc sân bóng mới">
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
                  <th className="p-5 border">Tên phòng (sân)</th>
                  <th className="p-5 border">Địa chỉ</th>
                  <th className="p-5 border">Thời gian tạo</th>
                  <th className="p-5 border">Thời gian cập nhập</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* Uncomment this part if categoryData is supposed to be used */}
                {Array.isArray(listFacility) &&
                  listFacility.length > 0 &&
                  listFacility.map((c, index) => (
                    <tr className="" key={index}>
                      <td className="p-5 border text-center">
                        <p>{index+1}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                          <span>{c?.name}</span>
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
                        <p>{c?.location}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p>{c && new Date(c.createdAt).toLocaleString()}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p>{c && new Date(c.updatedAt).toLocaleString()}</p>
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
                  ))}
              </tbody>
            </table>
            {!(Array.isArray(listFacility) && listFacility.length > 0) && (
              <div className="text-center">
                <h1 className="font-bold text-3xl my-10">No data</h1>
              </div>
            )}
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
        footer={<></>}
      >
        <Spin tip="Loading" size="large" spinning={isLoadingAddFormCategory}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1 className="text-center font-bold mb-5 text-xl">
                Tạo 1 phòng , sân thể dục mới
              </h1>
            </div>
            <div className="mb-2">
              <label htmlFor="name">Tên phòng,sân bóng</label>
              <input
                id="name"
                className={`w-full shadow-none p-3 border ${
                  errors.name ? "outline-red-300" : "outline-blue-300"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="shortName">Tiêu đề ngắn</label>
              <input
                id="shortName"
                className={`w-full shadow-none p-3 border ${
                  errors.shortName ? "outline-red-300" : "outline-blue-300"
                }`}
                {...register("shortName")}
              />
              {errors.shortName && (
                <span className="text-red-500">{errors.shortName.message}</span>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="category">Phân loại</label>
              <select
                id="category"
                className={`w-full shadow-none p-3 border ${
                  errors.category ? "outline-red-300" : "outline-blue-300"
                }`}
                {...register("category")}
              >
                {listCategory &&
                  listCategory.map((item: any, index: number) => (
                    <option key={index} value={item._id}>
                      {item.categoryName}
                    </option>
                  ))}
              </select>

              {errors.category && (
                <span className="text-red-500">{errors.category.message}</span>
              )}
            </div>

            <div className="border mb-10 flex justify-content-center">
              <Tooltip title="Tải ảnh cho phòng, sân thể dục vào đây">
                <FileUpload
                  id="img"
                  onSelect={(e: FileUploadSelectEvent) => handleSelectedFile(e)}
                  onClear={() => setImg(null)}
                  accept="image/*"
                  ref={refAdd}
                  maxFileSize={MAX_FILE_SIZE}
                  disabled={false}
                  uploadOptions={{
                    className: "hidden",
                  }}
                  emptyTemplate={
                    <p className="m-0">
                      Tải ảnh cho phòng, sân thể dục vào đây
                    </p>
                  }
                />
              </Tooltip>
            </div>
            <div className="mb-2">
              <label htmlFor="address">Địa chỉ</label>
              <input
                id="address"
                className={`w-full shadow-none p-3 border ${
                  errors.address ? "outline-red-300" : "outline-blue-300"
                }`}
                {...register("address")}
              />

              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>
            <div>
              <p className="text-center font-bold">Thông tin chi tiết</p>
              <div className="border mb-10 flex justify-content-center">
                <span className="p-float-label w-full">
                  <Editor
                    id="description"
                    value={description ? description : ""}
                    onTextChange={(e: EditorTextChangeEvent) =>
                      setDescription(e.htmlValue)
                    }
                    style={{ height: "320px" }}
                  />
                </span>
              </div>
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
        </Spin>
      </Modal>
    </>
  );
}
