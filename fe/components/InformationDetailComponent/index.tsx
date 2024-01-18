"use client";
import { Button, Modal, Space } from "antd";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { useState } from "react";

const info = () => {
  Modal.info({
    title: "Thông tin chi tiết",
    content: (
      <div>
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

export default function InfomationDetailComponent() {
  //checkedbook
  const [bookedDate, setBookedDate] = useState<Nullable<Date>>(new Date());

  //datebooking
  const [fromDate, setFromDate] = useState<Nullable<Date>>(null);
  const [toDate, setToDate] = useState<Nullable<Date>>(null);

  //booking
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  //check
  const [openCheck, setOpenCheck] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const showModalCheck = () => {
    setOpenCheck(true);
  };

  const handleCancelCheck = () => {
    setOpenCheck(false);
  };

  return (
    <>
      <div className="flex flex-col gap-10 items-center">
        <div className="font-bold text-5xl">DE122</div>
        <div>
          <span className="font-bold">Phân loại :</span> Phòng học
        </div>
        <div>
          <span className="font-bold">Trạng thái :</span> Còn giờ trống
        </div>
        <div>
          <Button
            className="bg-blue-400 text-white font-semibold"
            onClick={info}
          >
            Xem thông tin chi tiết
          </Button>
        </div>
        <div>
          <Button
            className="bg-blue-400 text-white font-semibold"
            onClick={showModalCheck}
          >
            Xem thông tin về thời gian phòng đã được đặt
          </Button>
        </div>
        <div>
          <button
            onClick={showModal}
            className="bg-green-500 hover:bg-green-300 text-white font-semibold px-5 py-2 rounded-md"
          >
            Đặt phòng
          </button>
        </div>
      </div>

      {/* modal checked */}
      <Modal
        open={openCheck}
        title="Thông tin về thời gian phòng đã được đặt"
        footer={<></>}
        onCancel={handleCancelCheck}
      >
        <div className="my-5">
          <div className="border border-solid border-gray-300 rounded-md w-72">
            <i className="pi pi-calendar p-1" />
            <Calendar
              value={bookedDate}
              onChange={(e) => setBookedDate(e.value)}
              dateFormat="dd/mm/yy"
              inputClassName="shadow-none"
            />
          </div>
          <div className="my-3">
            <div className="flex items-center justify-start gap-2">
              <div>
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                />
              </div>
              <p>
                <span className="font-bold">Minh</span> đã đặt phòng từ 10h đến
                13h
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* modal booking */}
      <Modal
        open={open}
        title="Nhập thời gian đặt"
        onOk={handleOk}
        closeIcon={<></>}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            className="bg-blue-500 text-white"
            loading={loading}
            onClick={handleOk}
          >
            Đặt
          </Button>,
        ]}
      >
        <div className="flex gap-5 my-10">
          <div className="border border-solid border-gray-300 py-2 rounded-lg flex items-center ">
            <i className="pi pi-calendar p-1" />
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value)}
              placeholder="Chọn thời gian bắt đầu ..."
              tooltip="Chọn thời gian bắt đầu"
              showTime
              hourFormat="24"
              tooltipOptions={{ position: "top" }}
              className="shadow-none"
            />
            <i
              className="pi pi-times pr-1 cursor-pointer"
              onClick={() => setFromDate(null)}
            ></i>
          </div>

          <div className="border border-solid border-gray-300 py-2 rounded-lg flex items-center ">
            <i className="pi pi-calendar p-1" />
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value)}
              showTime
              hourFormat="24"
              placeholder="Chọn thời gian kết thúc ..."
              tooltip="Chọn thời gian kết thúc"
              tooltipOptions={{ position: "top" }}
              className="shadow-none"
            />
            <i
              className="pi pi-times pr-1 cursor-pointer"
              onClick={() => setToDate(null)}
            ></i>
          </div>
        </div>
      </Modal>
    </>
  );
}
