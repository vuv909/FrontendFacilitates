import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";
import { faciStatic } from "../../../../services/static.api";

export default function AmountFacilitateAnlalysist() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    faciStatic()
      .then((res) => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
          labels: Object.keys(res.data.data),
          datasets: [
            {
              data: Object.values(res.data.data),
              backgroundColor: [
                documentStyle.getPropertyValue("--blue-500"),
                documentStyle.getPropertyValue("--yellow-500"),
                documentStyle.getPropertyValue("--green-500"),
              ],
              hoverBackgroundColor: [
                documentStyle.getPropertyValue("--blue-400"),
                documentStyle.getPropertyValue("--yellow-400"),
                documentStyle.getPropertyValue("--green-400"),
              ],
            },
          ],
        };
        const options = {
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
              },
            },
          },
        };

        setChartData(data);
        setChartOptions(options);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="relative basis-1/2 h-96 border">
      <div className="absolute">
        <Tooltip title="Export data to Excel">
          <p className="my-2 cursor-pointer text-green-800 text-3xl hover:text-green-500">
            <FontAwesomeIcon icon={faFileCsv} />
          </p>
        </Tooltip>
      </div>
      <p className="font-bold text-center mb-5">
        Thống kê số lượng từng loại
      </p>
      <div className="flex justify-center">
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className=""
        />
      </div>
    </div>
  );
}
