"use client";
import {
  faCheck,
  faClose,
  faHourglass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
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
import { useEffect, useState } from "react";
import { getBookingByUserId } from "../../../../services/booking.api";
import { StorageService } from "../../../../services/storage";
import { convertWeekDateToDate, formatDate } from "../../../../utils";

export default function HistoryBookingPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [valueInput, setValueInput] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [date, setDate] = useState("");
  const [data, setData] = useState<any[]>([]);
  const statusValue = [{ name: "pending" }, { name: "success" }];

  useEffect(() => {
    getBookingByUserId(StorageService.getUser()?.id)
      .then((res) => {
        setData(res.data?.booking);
      })
      .catch((err) => {});
  }, []);

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

        <div className="flex items-center justify-center flex-wrap mt-14 gap-3">
          <div>
            <InputText
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
              placeholder="Điền kí tự tìm kiếm ..."
              tooltip="Điền kí tự tìm kiếm"
              tooltipOptions={{ position: "top" }}
              className="border border-solid border-gray-300 py-3 rounded-lg shadow-none"
            />
          </div>

          <div>
            <button className="px-10 py-3 text-white font-semibold rounded-md hover:bg-blue-400 bg-blue-600">
              Tìm kiếm
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-5 my-11">
          <div className="">
            {/* <div className="w-full relative">
            <div className="absolute right-28"> */}
            <span className="flex items-center">
              <FontAwesomeIcon icon={faHourglass} color="grey" spin />
              <span>&nbsp;:&nbsp;Qúa hạn xử lí</span>
            </span>
            {/* </div>
          </div> */}
          </div>
          <div className="">
            {/* <div className="w-full relative"> */}
            {/* <div className="absolute right-28"> */}
            <span className="flex items-center">
              <FontAwesomeIcon icon={faSpinner} spin />
              <span>&nbsp;:&nbsp;Đang chờ xử lí</span>
            </span>
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="">
            {/* <div className="w-full relative">
            <div className="absolute right-28"> */}
            <span className="flex items-center">
              <FontAwesomeIcon className=" text-red-600" icon={faClose} />
              <span>&nbsp;:&nbsp;Bị từ chối yêu cầu đặt phòng</span>
            </span>
            {/* </div>
          </div> */}
          </div>

          <div className="">
            {/* <div className="w-full relative">
            <div className="absolute right-28"> */}
            <span className="flex items-center">
              <FontAwesomeIcon
                className="text-xl text-green-600"
                icon={faCheck}
              />
              <span>&nbsp;:&nbsp;Thành công</span>
            </span>
            {/* </div>
          </div> */}
          </div>
        </div>

        <div className="mx-56 mt-5 flex items-center justify-center flex-wrap gap-10 pb-10">
          {data?.map((d, index) => {
            const status = d?.status;
            const color =
              status === 1
                ? "bg-black"
                : status === 2
                ? "bg-green-600"
                : status === 3
                ? "bg-red-500"
                : status === 4
                ? "bg-gray-500"
                : undefined;

            return (
              <div
                key={d?._id}
                onClick={() => router.push(`/detail/${d?.facilityId?._id}`)}
                className="relative bg-no-repeat bg-cover h-72 w-72 rounded-lg cursor-pointer shadow-lg border"
                style={{
                  backgroundImage: `url("${d?.facilityId?.image}")`,
                }}
              >
                <p
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 text-xl font-bold ${color} shadow-xl text-white pb-2 px-2 rounded-b-xl z-50`}
                >
                  {d?.facilityId?.name}
                </p>
                <p className={`absolute bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 text-xl font-bold ${color}  shadow-xl text-white pb-2 px-2 rounded-b-lg z-50`}>
                  {d?.slot}-
                  {formatDate(d?.startDate)}
                </p>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                  {status === 1 && (
                    <FontAwesomeIcon
                      className="text-4xl"
                      icon={faSpinner}
                      spin
                    />
                  )}
                  {status === 2 && (
                    <FontAwesomeIcon
                      className="text-5xl text-green-600"
                      icon={faCheck}
                    />
                  )}
                  {status === 3 && (
                    <FontAwesomeIcon
                      className="text-5xl text-red-600"
                      icon={faClose}
                    />
                  )}
                  {status === 4 && (
                    <FontAwesomeIcon
                      className="text-4xl"
                      icon={faHourglass}
                      color="grey"
                      spin
                    />
                  )}
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 rounded-lg"></div>
              </div>
            );
          })}
        </div>
        {/* pagination */}
        {/* <div className="flex items-center justify-center my-16">
          <Pagination
            defaultCurrent={6}
            total={500}
            onChange={onChangePage}
            showSizeChanger={false}
          />
        </div> */}

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
