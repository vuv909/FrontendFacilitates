"use client";
import { Button, Modal, Space, Tooltip } from "antd";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { useEffect, useRef, useState } from "react";
import TableComponentBooked from "../TableComponentBooked";

const weeks = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const slots = [
  "Slot1",
  "Slot2",
  "Slot3",
  "Slot4",
  "Slot5",
  "Slot6",
  "Slot7",
  "Slot8",
];

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
  //booking
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  //booking slot
  const [bookslot, setBookSlot] = useState<string | null>(null);

  const [weekValue, setWeekValue] = useState<string>("");

  useEffect(() => {
    console.log("====================================");
    console.log("weekValue::", weekValue);
    if (!weekValue) {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const isoWeek = getISOWeek(currentDate);

      // Format the ISO week to "YYYY-Www"
      const formattedWeekValue = `${year}-W${isoWeek
        .toString()
        .padStart(2, "0")}`;

      setWeekValue(formattedWeekValue);
    }
    console.log("====================================");
  }, [weekValue]);

  useEffect(() => {
    console.log("====================================");
    console.log("bookslot::", bookslot);
    console.log("====================================");
  }, [bookslot]);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const isoWeek = getISOWeek(currentDate);

    // Format the ISO week to "YYYY-Www"
    const formattedWeekValue = `${year}-W${isoWeek
      .toString()
      .padStart(2, "0")}`;

    setWeekValue(formattedWeekValue);
  }, []);

  // Function to get ISO week number
  const getISOWeek = (date: Date) => {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  };

  const handleWeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeekValue(event.target.value);
  };

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
          <button
            onClick={showModal}
            className="bg-green-500 hover:bg-green-300 text-white font-semibold px-5 py-2 rounded-md"
          >
            Đặt phòng
          </button>
        </div>
      </div>

      {/* modal booking */}
      <Modal
        className="w-fit"
        open={open}
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
        <div>
          <div className="flex items-center justify-end gap-2 my-3">
            <span className="font-bold text-xl"> Tuần và năm </span>
            <input
              className="border border-black p-1 rounded-full"
              type="week"
              value={weekValue}
              onChange={handleWeekChange}
            />
          </div>
          <div className="flex justify-center">
            <table className="border">
              <thead>
                <tr>
                  <th className="p-2 border"></th>
                  {weeks.map((week, i) => {
                    return (
                      <th key={i} className="p-2 border">
                        {week}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot1</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => setBookSlot("Slot1#Monday#2024-W03")}
                      className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4"
                    >
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      onClick={() => {
                        console.log("====================================");
                        console.log("hello");
                        console.log("====================================");
                      }}
                      className={`p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4 ${
                        bookslot !== null && bookslot !== "" ? "bg-red-300" : ""
                      }`}
                      disabled={bookslot !== null && bookslot !== ""}
                    >
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      className={`p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4 ${
                        bookslot !== null && bookslot !== ""
                          ? "disabled:cursor-not-allowed"
                          : ""
                      } ${
                        bookslot !== null && bookslot !== "" ? "disabled" : ""
                      }`}
                    >
                      {" "}
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      className={`p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4 ${
                        bookslot !== null && bookslot !== ""
                          ? "disabled:cursor-not-allowed"
                          : ""
                      } ${
                        bookslot !== null && bookslot !== "" ? "disabled" : ""
                      }`}
                    >
                      {" "}
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      className={`p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4 ${
                        bookslot !== null && bookslot !== ""
                          ? "disabled:cursor-not-allowed"
                          : ""
                      } ${
                        bookslot !== null && bookslot !== "" ? "disabled" : ""
                      }`}
                    >
                      {" "}
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      className={`p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4 ${
                        bookslot !== null && bookslot !== ""
                          ? "disabled:cursor-not-allowed"
                          : ""
                      } ${
                        bookslot !== null && bookslot !== "" ? "disabled" : ""
                      }`}
                    >
                      {" "}
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button
                      className={`p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4 ${
                        bookslot !== null && bookslot !== ""
                          ? "disabled:cursor-not-allowed"
                          : ""
                      } ${
                        bookslot !== null && bookslot !== "" ? "disabled" : ""
                      }`}
                    >
                      {" "}
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot2</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot3</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot4</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot5</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot6</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot7</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot8</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border">
                    <Tooltip title="hello">
                      <div className="flex items-center gap-1">
                        {" "}
                        <p className="text-xl">Slot9</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                    </Tooltip>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                  <td className="p-2 border">
                    <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-300 text-white px-4">
                      Đặt
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
