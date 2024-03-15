"use client";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { statusFilter, weekOptions } from "../../../../data";
import { string } from "prop-types";
import { years } from "../../../../data";
import { getCurrentWeekTime } from "../../../../data";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { statisticStaticByYear } from "../../../../services/static.api";

// const dataByWeek = [
//   {
//     label: "Thống kê số lương đặt phòng sân phòng sân thể dục theo tuần",
//     data: [540, 325, 702, 620, 500, 800, 900],
//     backgroundColor: [
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//     ],
//     borderColor: [
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//     ],
//     borderWidth: 1,
//   },
// ];

// const dataByYear = [
//   {
//     label: "Thống kê số lương đặt phòng sân phòng sân thể dục theo năm",
//     data: [540, 325, 702, 620, 500, 800, 900, 500, 540, 450, 481, 125],
//     backgroundColor: [
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//       "rgba(255, 159, 64, 0.2)",
//     ],
//     borderColor: [
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//       "rgb(255, 159, 64)",
//     ],
//     borderWidth: 1,
//   },
// ];

const labelByYear = [
  "Tháng một",
  "Tháng hai",
  "Tháng ba",
  "Tháng tư",
  "Tháng năm",
  "Tháng sáu",
  "Tháng bảy",
  "Tháng tám",
  "Tháng chín",
  "Tháng mười",
  "Tháng mười một",
  "Tháng mười hai",
];

// const labelByWeak = [
//   "Thứ hai",
//   "Thứ ba",
//   "Thứ tư",
//   "Thứ năm",
//   "Thứ sáu",
//   "Thứ bảy",
//   "Chủ nhật",
// ];

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export default function BookingAnalysist() {
  const [searchByYear, setSearchByYear] = useState(false);

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const [status, setStatus] = useState<null | string>(null);
  const date = new Date();

  const [year, setYear] = useState<string>(String(date.getFullYear()));

  const [weekTime, setWeekTime] = useState<number | null>(getCurrentWeekTime());

  const [yearStatic, setYearStatic] = useState<any[]>([]);

  const [dataByYear, setDataByYear] = useState<any>();

  const [filterStatus, setFilterStatus] = useState<number>(0);

  console.log("getCurrentWeekTime::", getCurrentWeekTime());

  // useEffect(() => {
  //   if (searchByYear === true) {
  //     setWeekTime(null);
  //   }
  // }, [searchByYear]);

  useEffect(() => {
    statisticStaticByYear(Number(year), filterStatus).then(
      (res: any) => {
        console.log("====================================");
        console.log("static::", res.data);
        console.log("====================================");
        setYearStatic(res.data);
      },
      (error) => {}
    );
  }, []);

  useEffect(() => {
    setDataByYear([
      {
        label: "Thống kê số lương đặt phòng sân phòng sân thể dục theo năm",
        data: [540, 325, 702, 620, 500, 800, 900, 500, 540, 450, 481, 125],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
          "rgb(255, 159, 64)",
        ],
        borderWidth: 1,
      },
    ]);
  }, []);

  // useEffect(() => {
  //   const data = {
  //     // labels: searchByYear ? [...labelByYear] : [...labelByWeak],
  //     labels: labelByYear,

  //     // datasets: searchByYear ? [...dataByYear] : [...dataByWeek],
  //     datasets: dataByYear,
  //   };
  //   const options = {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   };

  //   setChartData(data);
  //   setChartOptions(options);
  // }, [searchByYear]);
  useEffect(() => {
    const data = {
      labels: labelByYear,
      datasets: [
        {
          label: "Thống kê số lượng đặt phòng sân thể dục theo năm",
          data: yearStatic, // Use the data for the selected year
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [yearStatic]);

  const handleSearchByYear = (year: any) => {
    setYear(year);
    statisticStaticByYear(Number(year), filterStatus).then(
      (res: any) => {
        console.log("====================================");
        console.log("static::", res.data);
        console.log("====================================");
        setYearStatic(res.data);
      },
      (error) => {}
    );
  };

  const handleSetStatus = (status: any) => {
    setFilterStatus(status);
    statisticStaticByYear(Number(year), status).then(
      (res: any) => {
        console.log("====================================");
        console.log("static::", res.data);
        console.log("====================================");
        setYearStatic(res.data);
      },
      (error) => {}
    );
  };

  return (
    <div className="w-full border rounded-md">
      <div className="flex justify-between">
        {/* <div>
          <div className="flex items-center justify-start gap-2">
            <input
              type="radio"
              name="searchInFaci"
              onChange={() => setSearchByYear(true)}
              checked={searchByYear === true}
            />
            <p>Lọc theo năm</p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <input
              type="radio"
              name="searchInFaci"
              onChange={() => setSearchByYear(false)}
              checked={searchByYear === false}
            />
            <p>Lọc theo tuần</p>
          </div>
          <div className="flex justify-start">
            <Tooltip title="Xuất dữ liệu bảng ra excel">
              <p className="my-2 cursor-pointer text-green-800 text-3xl hover:text-green-500">
                <FontAwesomeIcon icon={faFileCsv} />
              </p>
            </Tooltip>
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          {/* {searchByYear === false && (
            <div className="flex-1">
              <Tooltip title="Chọn thời gian tuần bạn muốn lọc">
                <select
                  onChange={(e) => setWeekTime(Number(e.target.value))}
                  className="border border-gray-300 p-1 outline-none rounded-md"
                >
                  {weekOptions.map((option, index) => {
                    return (
                      <option
                        key={index}
                        value={option}
                        selected={weekTime === index}
                      >
                        {option}
                      </option>
                    );
                  })}
                </select>
              </Tooltip>
            </div>
          )} */}
          <div className="flex-1">
            <Tooltip title="Chọn năm mà bạn muốn lọc">
              <select
                onChange={(e) => handleSearchByYear(e.target.value)}
                className="w-full border border-gray-300 p-1 outline-none rounded-md"
              >
                {years().map((option, index) => {
                  return (
                    <option
                      key={index}
                      value={option}
                      selected={year === option}
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
            </Tooltip>
          </div>

          <div className="flex-1">
            <Tooltip title="Trạng thái">
              <select
                onChange={(e) => handleSetStatus(e.target.value)}
                value={filterStatus}
                className="w-full border border-gray-300 p-1 outline-none rounded-md"
              >
                <option key={0} value={0}>
                  Trạng thái
                </option>
                {statusFilter.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option === 1 && "Pending"}
                      {option === 2 && "Accept"}
                      {option === 3 && "Reject"}
                      {option === 4 && "Expired"}
                    </option>
                  );
                })}
              </select>
            </Tooltip>
          </div>
        </div>
      </div>

      <Chart type="bar" height="100" data={chartData} options={chartOptions} />
    </div>
  );
}
