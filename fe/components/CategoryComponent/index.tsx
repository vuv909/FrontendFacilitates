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
import { Toast } from "primereact/toast";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "../../services/category.api";
interface City {
  name: string;
  code: string;
}
interface DataUpdateType {
  _id: string;
  categoryName: string;
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

const updateCategorySchema = z.object({
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
type updateCategorySchemaType = z.infer<typeof updateCategorySchema>;

export default function CategoryComponent() {
  const refAdd = useRef<FileUpload | null>(null);
  const refUpdate = useRef<FileUpload | null>(null);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOnOpenUpdate] = useState(false);
  const [isLoadingAddFormCategory, setIsLoadingAddFormCategory] =
    useState(false);
  const [isLoadingUpdateFormCategory, setisLoadingUpdateFormCategory] =
    useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [textValue, setTextValue] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [imgUpdate, setImgUpdate] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("");
  const [shortTitle, setShortTitle] = useState<string>("");
  const [description, setDescription] = useState<string | null>("");
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [activePage, setActivePage] = useState<null | number>(1);
  const [dataUpdate, setDataUpdate] = useState<DataUpdateType | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<addCategorySchemaType>({
    resolver: zodResolver(addCategorySchema),
  });

  const {
    register: update,
    handleSubmit: submitUpdate,
    formState: { errors: errorUpdate },
    reset: resetUpdate,
  } = useForm<updateCategorySchemaType>({
    resolver: zodResolver(updateCategorySchema),
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
    const selectedFile = e.files;
    if (selectedFile.length > 0) {
      setImg(selectedFile[0]);
    } else {
      alert("Selected file size exceeds the limit of 2MB.");
    }
  };

  const handleSelectedFileUpdate = (e: FileUploadSelectEvent) => {
    const selectedFile = e.files;
    if (selectedFile.length > 0) {
      setImgUpdate(selectedFile[0]);
    } else {
      alert("Selected file size exceeds the limit of 2MB.");
    }
  };

  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    if (pageNumber !== activePage) {
      setActivePage(pageNumber);
    }
  };

  //form
  const handleOk = () => {
    setOpen(false);
  };

  const handleOkUpdate = () => {
    setOnOpenUpdate(false);
  };

  const handleCancelUpdate = () => {
    setImgUpdate(null);
    if (refUpdate.current && refUpdate.current.setFiles) {
      refUpdate.current.setFiles([]);
    }
    setOnOpenUpdate(false);
  };

  const handleCancel = () => {
    setImg(null);
    if (refAdd.current && refAdd.current.setFiles) {
      refAdd.current.setFiles([]);
    }
    reset();
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    deleteCategory(id)
      .then((res) => {
        showSuccessCategory("Delete Category successfully !!!");
        getCategory()
          .then((res) => {
            setCategoryData(res.data.item);
            setTotalPage(res.data.totalPage);
            setActivePage(res.data.activePage);
          })
          .catch((err) => {
            showErrorCategory("Error occurred !!!");
          });
      })
      .catch((err) => {
        showErrorCategory("Error occurred when delete category !!!");
      });
  };

  const showModalUpdate = (data: any) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    setOnOpenUpdate(true);
    setDataUpdate(data);
  };

  const onSubmitUpdate: SubmitHandler<updateCategorySchemaType> = (data) => {
    setisLoadingUpdateFormCategory(true);
    if (Object.keys(errorUpdate).length === 0 ) {
      const formData = new FormData();
      formData.append("id", dataUpdate?._id || "");
      formData.append("categoryName", data.categoryName);
      if(imgUpdate){
      formData.append("img", imgUpdate);
      }
      editCategory(formData)
        .then((res) => {
          showSuccessCategory("Update Category successfully !!!");
          resetUpdate();
          handleCancelUpdate();
          if (typeof activePage === "number" && activePage > 0) {
            getCategory(activePage)
              .then((res) => {
                setCategoryData(res.data.item);
                setTotalPage(res.data.totalPage);
                reset();
                handleCancel();
                setisLoadingUpdateFormCategory(false);
              })
              .catch((err) => {
                setisLoadingUpdateFormCategory(false);
                showErrorCategory("Error occurred !!!");
                handleCancel();
                reset();
              });
          } else {
            getCategory()
              .then((res) => {
                setCategoryData(res.data.item);
                setTotalPage(res.data.totalPage);
                setActivePage(res.data.activePage);
                reset();
                handleCancel();
                setisLoadingUpdateFormCategory(false);
              })
              .catch((err) => {
                setisLoadingUpdateFormCategory(false);
                showErrorCategory("Error occurred !!!");
                handleCancel();
                reset();
              });
          }
        })
        .catch((err) => {
          setisLoadingUpdateFormCategory(false);
          showErrorCategory(
            err.response.data[0]?.msg || "Error updating category !!!"
          );
        });
    } else {
      showErrorCategory("Please input category name!!");
      setisLoadingUpdateFormCategory(false);
    }
  };

  const onSubmit: SubmitHandler<addCategorySchemaType> = (data) => {
    setIsLoadingAddFormCategory(true);
    if (Object.keys(errorUpdate).length === 0 && img) {
      const formData = new FormData();
      formData.append("categoryName", data.categoryName);
      formData.append("img", img);
      addCategory(formData)
        .then((res) => {
          showSuccessCategory("Add Category successfully !!!");
          if (typeof activePage === "number" && activePage > 0) {
            getCategory(activePage)
              .then((res) => {
                setCategoryData(res.data.item);
                setTotalPage(res.data.totalPage);
                reset();
                handleCancel();
                setIsLoadingAddFormCategory(false);
              })
              .catch((err) => {
                setIsLoadingAddFormCategory(false);
                showErrorCategory("Error occurred !!!");
                handleCancel();
                reset();
              });
          } else {
            getCategory()
              .then((res) => {
                setCategoryData(res.data.item);
                setTotalPage(res.data.totalPage);
                setActivePage(res.data.activePage);
                reset();
                handleCancel();
                setIsLoadingAddFormCategory(false);
              })
              .catch((err) => {
                setIsLoadingAddFormCategory(false);
                showErrorCategory("Error occurred !!!");
                handleCancel();
                reset();
              });
          }
        })
        .catch((err) => {
          setIsLoadingAddFormCategory(false);
          showErrorCategory("Error adding category !!! ");
        });
    } else {
      showErrorCategory("Image must be less than 2MB and not empty !!");
      setIsLoadingAddFormCategory(false);
    }
  };

  //call api
  useEffect(() => {
    if (activePage !== null && activePage > 0) {
      getCategory(activePage)
        .then((res) => {
          setCategoryData(res.data.item);
          setTotalPage(res.data.totalPage);
          setActivePage(res.data.activePage);
        })
        .catch((err) => {
          setCategoryData([]);
          setTotalPage(null);
          setActivePage(null);
          showErrorCategory("Error occurred !!!");
        });
    } else {
      getCategory()
        .then((res) => {
          setCategoryData(res.data.item);
          setTotalPage(res.data.totalPage);
          setActivePage(res.data.activePage);
        })
        .catch((err) => {
          setCategoryData([]);
          setTotalPage(null);
          setActivePage(null);
          showErrorCategory("Error occurred !!!");
        });
    }
  }, [activePage]);

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
                {Array.isArray(categoryData) &&
                  categoryData.length > 0 &&
                  categoryData.map((c, index) => (
                    <tr key={index} className="">
                      <td className="p-5 border text-center">
                        <p>{index + 1}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                          <span>{c?.categoryName}</span>
                        </p>
                      </td>
                      <td className="p-5 border text-center flex justify-center">
                        <img className="h-32 w-32" src={c.image} alt="" />
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
                            onClick={() => showModalUpdate(c)}
                            className="bg-blue-400 hover:bg-blue-300 p-2 text-white rounded-full w-24"
                          >
                            Cập nhật
                          </button>
                          <button
                            className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full w-24"
                            onClick={() => handleDelete(c._id)}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {!(Array.isArray(categoryData) && categoryData.length > 0) && (
              <div className="text-center">
                <h1 className="font-bold text-3xl my-10">No data</h1>
              </div>
            )}

            {totalPage != null && totalPage > 0 && activePage != null && (
              <div className="flex items-center justify-center ">
                <Pagination
                  defaultCurrent={activePage}
                  total={Number(totalPage + "0")}
                  onChange={onChangePage}
                  showSizeChanger={false}
                />
              </div>
            )}
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
        <Spin tip="Loading" size="large" spinning={isLoadingAddFormCategory}>
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
                  ref={refAdd}
                  onClear={() => setImg(null)}
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

      <Modal
        className="w-96"
        open={openUpdate}
        confirmLoading={false}
        onOk={handleOkUpdate}
        closeIcon={<></>}
        footer={[]}
      >
        <Spin tip="Loading" size="large" spinning={isLoadingUpdateFormCategory}>
          <div>
            <h1 className="text-center font-bold mb-5 text-xl">Cập nhập</h1>
          </div>
          <form onSubmit={submitUpdate(onSubmitUpdate)}>
            <div className="mb-2">
              <label htmlFor="name">Tên phòng,sân bóng</label>
              <input
                id="name"
                defaultValue={dataUpdate?.categoryName || ""}
                className={`w-full shadow-none p-3 border ${
                  errorUpdate.categoryName
                    ? "outline-red-300"
                    : "outline-blue-300"
                }`}
                {...update("categoryName")}
              />

              {errorUpdate.categoryName && (
                <span className="text-red-500">
                  {errorUpdate.categoryName.message}
                </span>
              )}
            </div>
            <div className="border mb-10 flex justify-content-center">
              <Tooltip title="Tải ảnh cho phòng, sân thể dục vào đây">
                <FileUpload
                  id="img"
                  onSelect={(e: FileUploadSelectEvent) =>
                    handleSelectedFileUpdate(e)
                  }
                  ref={refUpdate}
                  onClear={() => setImgUpdate(null)}
                  accept="image/*"
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

            <div className="flex justify-end">
              <Button key="back" onClick={handleCancelUpdate}>
                Hủy
              </Button>
              <Button className="bg-blue-500 text-white" htmlType="submit">
                Cập nhập
              </Button>
            </div>
          </form>
        </Spin>
      </Modal>
    </>
  );
}
