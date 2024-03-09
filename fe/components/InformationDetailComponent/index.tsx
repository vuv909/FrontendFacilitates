"use client";
import { Button, Modal, Space, Tooltip } from "antd";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { useEffect, useRef, useState } from "react";
import TableComponentBooked from "../TableComponentBooked";
import { StorageService } from "../../services/storage";
import { Toast } from "primereact/toast";
import { addBooking, calendarBooking } from "../../services/booking.api";
import {
  checkValidSlotFriday,
  checkValidSlotMonday,
  checkValidSlotSaturday,
  checkValidSlotSunday,
  checkValidSlotThursday,
  checkValidSlotTuesday,
  checkValidSlotWednesday,
  getCurrentDate,
  getCurrentDay,
  getCurrentWeek,
  getStartAndEndDate,
} from "../../utils";
import { current } from "@reduxjs/toolkit";
import {
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  WEDNESDAY,
} from "../../constant";

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

const info = (data: any) => {
  Modal.info({
    title: "Thông tin chi tiết",
    content: <div dangerouslySetInnerHTML={{ __html: data }}></div>,
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

export default function InfomationDetailComponent({
  detailData,
  showSuccessCategory,
  showErrorCategory,
}: {
  detailData: any;
  showSuccessCategory: any;
  showErrorCategory: any;
}) {
  //booking
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const currentDay = getCurrentDay();

  //booking slot
  const [bookslot, setBookSlot] = useState<string | null>(null);
  const [weekValue, setWeekValue] = useState<string>("");
  const [disableButtonsMonday, setDisableButtonsMonday] =
    useState<boolean>(false);
  const [disableButtonsTuesday, setDisableButtonsTuesday] =
    useState<boolean>(false);
  const [disableButtonsWendsday, setDisableButtonsWendsday] =
    useState<boolean>(false);
  const [disableButtonsThurday, setDisableButtonsThurday] =
    useState<boolean>(false);
  const [disableButtonsFriday, setDisableButtonsFriday] =
    useState<boolean>(false);
  const [disableButtonsSaturday, setDisableButtonsSaturday] =
    useState<boolean>(false);
  const [disableButtonsSunday, setDisableButtonsSunday] =
    useState<boolean>(false);
  const [listBooking, setListBooking] = useState<any>(null);
  const currentWeek: string = getCurrentWeek();

  useEffect(() => {
    console.log("====================================");
    console.log("valid day::", checkValidSlotThursday("Slot8", listBooking));
    console.log("====================================");
    console.log("====================================");
    console.log("current day::", currentDay);
    console.log("====================================");
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
    if (currentWeek === weekValue) {
      if (currentDay === MONDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(false);
        setDisableButtonsWendsday(false);
        setDisableButtonsThurday(false);
        setDisableButtonsFriday(false);
        setDisableButtonsSaturday(false);
        setDisableButtonsSunday(true);
      } else if (currentDay === TUESDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(false);
        setDisableButtonsThurday(false);
        setDisableButtonsFriday(false);
        setDisableButtonsSaturday(false);
        setDisableButtonsSunday(false);
      } else if (currentDay === WEDNESDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(true);
        setDisableButtonsThurday(false);
        setDisableButtonsFriday(false);
        setDisableButtonsSaturday(false);
        setDisableButtonsSunday(false);
      } else if (currentDay === THURSDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(true);
        setDisableButtonsThurday(true);
        setDisableButtonsFriday(false);
        setDisableButtonsSaturday(false);
        setDisableButtonsSunday(false);
      } else if (currentDay === FRIDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(true);
        setDisableButtonsThurday(true);
        setDisableButtonsFriday(true);
        setDisableButtonsSaturday(false);
        setDisableButtonsSunday(false);
      } else if (currentDay === SATURDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(true);
        setDisableButtonsThurday(true);
        setDisableButtonsFriday(true);
        setDisableButtonsSaturday(true);
        setDisableButtonsSunday(false);
      } else if (currentDay === SUNDAY) {
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(true);
        setDisableButtonsThurday(true);
        setDisableButtonsFriday(true);
        setDisableButtonsSaturday(true);
        setDisableButtonsSunday(true);
      }
    } else {
      // If weekValue is more than two weeks ahead of the current week, disable all buttons
      const currentYear = parseInt(currentWeek.substring(0, 4), 10);
      const currentWeekNum = parseInt(currentWeek.substring(6), 10);
      const targetYear = parseInt(weekValue.substring(0, 4), 10);
      const targetWeekNum = parseInt(weekValue.substring(6), 10);

      // Calculate the difference in weeks
      const weekDifference =
        (targetYear - currentYear) * 52 + (targetWeekNum - currentWeekNum);

      if (weekDifference > 2) {
        // If the difference is greater than 2 weeks, disable all buttons
        setDisableButtonsMonday(true);
        setDisableButtonsTuesday(true);
        setDisableButtonsWendsday(true);
        setDisableButtonsThurday(true);
        setDisableButtonsFriday(true);
        setDisableButtonsSaturday(true);
        setDisableButtonsSunday(true);
      }
    }
  }, [weekValue]);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const isoWeek = getISOWeek(currentDate);

    // Format the ISO week to "YYYY-Www"
    const formattedWeekValue = `${year}-W${isoWeek
      .toString()
      .padStart(2, "0")}`;

    setWeekValue(formattedWeekValue);

    calendarBooking(currentWeek)
      .then((res) => {
        setListBooking(res.data?.booking);
      })
      .catch((err: Error) => {
        console.log("====================================");
        console.log("err::", err);
        console.log("====================================");
      });
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
    const selectedWeek = event.target.value;
    calendarBooking(event.target.value)
      .then((res) => {
        setListBooking(res.data?.booking);
      })
      .catch((err: Error) => {
        console.log("====================================");
        console.log("err::", err);
        console.log("====================================");
      });
    setWeekValue(selectedWeek);

    const selectedWeekNumber = parseInt(
      selectedWeek.split("-")[1].substring(1),
      10
    );
    const currentWeekNumber = parseInt(
      currentWeek.split("-")[1].substring(1),
      10
    );

    if (selectedWeekNumber < currentWeekNumber) {
      setDisableButtonsMonday(true);
      setDisableButtonsTuesday(true);
      setDisableButtonsWendsday(true);
      setDisableButtonsThurday(true);
      setDisableButtonsFriday(true);
      setDisableButtonsSaturday(true);
      setDisableButtonsSunday(true);

      console.log("Buttons Disabled");
    } else {
      setDisableButtonsMonday(false);
      setDisableButtonsTuesday(false);
      setDisableButtonsWendsday(false);
      setDisableButtonsThurday(false);
      setDisableButtonsFriday(false);
      setDisableButtonsSaturday(false);
      setDisableButtonsSunday(false);
      console.log("Buttons Enabled");
    }
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

  const handleBooking = (data: string) => {
    const arrayBooking = data.split("#");
    const userId = StorageService.getUser()?.id ?? null;
    const day = getCurrentDate(arrayBooking[1], arrayBooking[2]);
    const { startDate, endDate } = getStartAndEndDate(
      day,
      arrayBooking[0],
      arrayBooking[1],
      arrayBooking[2]
    );
    const bookingBody = {
      slot: arrayBooking[0],
      weekdays: arrayBooking[1],
      weeks: arrayBooking[2],
      facilityId: detailData?._id,
      startDate,
      endDate,
      booker: userId,
      status: 1,
    };
    addBooking(bookingBody)
      .then((res) => {
        showSuccessCategory("Booking successfully !!!");
        calendarBooking(weekValue)
      .then((res) => {
        setListBooking(res.data?.booking);
      })
      .catch((err: Error) => {
        console.log("====================================");
        console.log("err::", err);
        console.log("====================================");
      });
      })
      .catch((err) => {
        showErrorCategory("Booking failed !!!");
      });
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-10 items-center">
        <div className="font-bold text-5xl">{detailData?.name}</div>
        <div>
          <span className="font-bold">Phân loại :</span>{" "}
          {detailData?.category?.categoryName}
        </div>
        <div>
          <Button
            className="bg-blue-400 text-white font-semibold"
            onClick={() => info(detailData?.description)}
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
          <div className="flex gap-2 justify-end mb-3">
            <Tooltip title="Đã có người đặt">
              <div className="w-1 h-4 bg-red-500"></div>
            </Tooltip>
            <Tooltip title="Chưa có ai đặt">
              <div className="w-1 h-4 bg-blue-500"></div>
            </Tooltip>
            <Tooltip title="Không thể đặt thời gian quá khứ">
              <div className="w-1 h-4 bg-gray-400"></div>
            </Tooltip>
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
                {Array.from({ length: 9 }, (_, i) => (
                  <tr key={`slot_${i}_Slot1`}>
                    <td className="p-2 border">
                      <Tooltip title="hello">
                        <div className="flex items-center gap-1">
                          {" "}
                          <p className="text-xl">Slot{i + 1}</p>
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
                        disabled={
                          disableButtonsMonday
                            ? true
                            : checkValidSlotMonday(`Slot${i + 1}`, listBooking)
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Monday#${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotMonday(`Slot${i + 1}`, listBooking) ===
                          true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotMonday(`Slot${i + 1}`, listBooking) ===
                            false && disableButtonsMonday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        Đặt
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        disabled={
                          disableButtonsTuesday
                            ? true
                            : checkValidSlotTuesday(`Slot${i + 1}`, listBooking)
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Tuesday# ${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotTuesday(`Slot${i + 1}`, listBooking) ===
                          true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotTuesday(`Slot${i + 1}`, listBooking) ===
                            false && disableButtonsTuesday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        Đặt
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        disabled={
                          disableButtonsWendsday
                            ? true
                            : checkValidSlotWednesday(
                                `Slot${i + 1}`,
                                listBooking
                              )
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Wednesday# ${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotWednesday(
                            `Slot${i + 1}`,
                            listBooking
                          ) === true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotWednesday(
                            `Slot${i + 1}`,
                            listBooking
                          ) === false && disableButtonsWendsday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        {" "}
                        Đặt
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        disabled={
                          disableButtonsThurday
                            ? true
                            : checkValidSlotThursday(
                                `Slot${i + 1}`,
                                listBooking
                              )
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Thursday#${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotThursday(
                            `Slot${i + 1}`,
                            listBooking
                          ) === true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotThursday(
                            `Slot${i + 1}`,
                            listBooking
                          ) === false && disableButtonsThurday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        {" "}
                        Đặt
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        disabled={
                          disableButtonsFriday
                            ? true
                            : checkValidSlotFriday(`Slot${i + 1}`, listBooking)
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Friday#${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotFriday(`Slot${i + 1}`, listBooking) ===
                          true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotFriday(`Slot${i + 1}`, listBooking) ===
                            false && disableButtonsFriday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        {" "}
                        Đặt
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        disabled={
                          disableButtonsSaturday
                            ? true
                            : checkValidSlotSaturday(
                                `Slot${i + 1}`,
                                listBooking
                              )
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Saturday#${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotSaturday(
                            `Slot${i + 1}`,
                            listBooking
                          ) === true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotSaturday(
                            `Slot${i + 1}`,
                            listBooking
                          ) === false && disableButtonsSaturday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        {" "}
                        Đặt
                      </button>
                    </td>
                    <td className="p-2 border">
                      <button
                        disabled={
                          disableButtonsSunday
                            ? true
                            : checkValidSlotSunday(`Slot${i + 1}`, listBooking)
                        }
                        onClick={() =>
                          handleBooking(`Slot${i + 1}#Sunday#${weekValue}`)
                        }
                        className={`p-2 rounded-full text-white px-4 
                        ${
                          checkValidSlotSunday(`Slot${i + 1}`, listBooking) ===
                          true
                            ? "bg-red-500 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }
                        ${
                          checkValidSlotSunday(`Slot${i + 1}`, listBooking) ===
                            false && disableButtonsSunday
                            ? "bg-gray-400 cursor-not-allowed opacity-50"
                            : "bg-blue-500 hover:bg-blue-300"
                        }`}
                      >
                        {" "}
                        Đặt
                      </button>
                    </td>
                  </tr>
                ))}
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
