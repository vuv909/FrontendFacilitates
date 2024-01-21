"use client";
import { faCheck, faClose, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Empty,
  Modal,
  Pagination,
  PaginationProps,
  Tooltip,
} from "antd";
import { useRouter } from "next/navigation";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export default function HistoryBookingPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [valueInput, setValueInput] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [date, setDate] = useState("");

  const statusValue = [{ name: "pending" }, { name: "success" }];

  const showModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="font-bold text-4xl">
            Danh sách sân thể dục , phòng học đã đặt trước
          </h1>
        </div>

        {/* <div className="my-36">
        <Empty description="Chưa có phòng nào được đặt trước" />
      </div> */}

        <div className="flex items-center justify-center flex-wrap mt-14 gap-3">
          <div>
            <InputText
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              placeholder="Điền kí tự tìm kiếm ..."
              tooltip="Điền kí tự tìm kiếm"
              tooltipOptions={{ position: "top" }}
              className="border border-solid border-gray-300 py-4 rounded-lg shadow-none"
            />
          </div>

          <div className="">
            <Tooltip title="Điền kí tự tìm kiếm">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Chọn ngày ..."
                className="shadow-none border border-solid border-gray-300 py-4 px-2 rounded-lg outline-none"
              />
            </Tooltip>
          </div>

          <div>
            <Dropdown
              value={status}
              onChange={(e) => setStatus(e.value)}
              options={statusValue}
              optionLabel="name"
              placeholder="Phân loại"
              tooltip="Phân loại"
              tooltipOptions={{ position: "top" }}
              className="border border-solid border-gray-300 py-2 rounded-lg"
              style={{ boxShadow: "none" }}
            />
          </div>

          <div>
            <button className="px-10 py-4 text-white font-semibold rounded-md hover:bg-blue-400 bg-blue-600">
              Tìm kiếm
            </button>
          </div>
        </div>
        <div className="mb-8">
          <div className="w-full relative">
            <div className="absolute right-28">
              <span className="flex items-center">
                <FontAwesomeIcon icon={faSpinner} spin />
                <span>&nbsp;:&nbsp;Đang chờ xử lí</span>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div className="w-full relative">
            <div className="absolute right-28">
              <span className="flex items-center">
                <FontAwesomeIcon className=" text-red-600" icon={faClose} />
                <span>&nbsp;:&nbsp;Bị từ chối yêu cầu đặt phòng</span>
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full relative">
            <div className="absolute right-28">
              <span className="flex items-center">
                <FontAwesomeIcon
                  className="text-xl text-green-600"
                  icon={faCheck}
                />
                <span>&nbsp;:&nbsp;Thành công</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 flex items-center justify-center flex-wrap gap-10 pb-10">
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon className="text-4xl" icon={faSpinner} spin />
            </div>
            <div className="absolute -right-2 -top-2 z-50">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  showModal(e)
                }
                className="bg-red-500 hover:bg-red-300 flex items-center justify-center text-white p-1 rounded-full"
              >
                <Tooltip title="Delete">
                  <i className="pi pi-times" style={{ fontSize: "1.5rem" }}></i>
                </Tooltip>
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon className="text-4xl" icon={faSpinner} spin />
            </div>
            <div className="absolute -right-2 -top-2 z-50">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  showModal(e)
                }
                className="bg-red-500 hover:bg-red-300 flex items-center justify-center text-white p-1 rounded-full"
              >
                <Tooltip title="Delete">
                  <i className="pi pi-times" style={{ fontSize: "1.5rem" }}></i>
                </Tooltip>
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon className="text-4xl" icon={faSpinner} spin />
            </div>
            <div className="absolute -right-2 -top-2 z-50">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  showModal(e)
                }
                className="bg-red-500 hover:bg-red-300 flex items-center justify-center text-white p-1 rounded-full"
              >
                <Tooltip title="Delete">
                  <i className="pi pi-times" style={{ fontSize: "1.5rem" }}></i>
                </Tooltip>
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-black shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon className="text-4xl" icon={faSpinner} spin />
            </div>
            <div className="absolute -right-2 -top-2 z-50">
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  showModal(e)
                }
                className="bg-red-500 hover:bg-red-300 flex items-center justify-center text-white p-1 rounded-full"
              >
                <Tooltip title="Delete">
                  <i className="pi pi-times" style={{ fontSize: "1.5rem" }}></i>
                </Tooltip>
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-red-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-red-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon
                className="text-5xl text-red-600"
                icon={faClose}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon
                className="text-5xl text-green-600"
                icon={faCheck}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon
                className="text-5xl text-green-600"
                icon={faCheck}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon
                className="text-5xl text-green-600"
                icon={faCheck}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon
                className="text-5xl text-green-600"
                icon={faCheck}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
          <div
            onClick={() => router.push("/detail/2")}
            className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer"
            style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
          >
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              DE222
            </p>
            <p className="absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold bg-green-600 shadow-xl text-white pb-2 px-2 rounded-b-xl z-50">
              Slot1-20/1/2024
            </p>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <FontAwesomeIcon
                className="text-5xl text-green-600"
                icon={faCheck}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
          </div>
        </div>
        {/* pagination */}
        <div className="flex items-center justify-center my-16">
          <Pagination
            defaultCurrent={6}
            total={500}
            onChange={onChangePage}
            showSizeChanger={false}
          />
        </div>

        {/* deleteModal */}
      </div>
      <Modal
        className="w-fit"
        open={open}
        title="Bạn có chắc chắn muốn hủy"
        onOk={handleOk}
        closeIcon={<></>}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Không
          </Button>,
          <Button className="bg-blue-500 text-white" onClick={handleOk}>
            Có
          </Button>,
        ]}
      ></Modal>
    </>
  );
}
