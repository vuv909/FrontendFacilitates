import {
  faFileCsv,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, PaginationProps, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { getAllBooking } from "../../services/booking.api";

export default function ManageBookingRequestReject() {
  const [bookingData, setBookingData] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(0);

  useEffect(() => {
    getAllBooking(3)
      .then((res) => {
        setBookingData(res?.data?.booking);
        setTotalPage(res?.data?.totalPage);
        setActivePage(res?.data?.activePage);
      })
      .catch((err) => {
        setBookingData([]);
        setTotalPage(0);
        setActivePage(0);
      });
  }, []);

  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    getAllBooking(3, null, pageNumber)
      .then((res) => {
        setBookingData(res?.data?.booking);
        setTotalPage(res?.data?.totalPage);
        setActivePage(res?.data?.activePage);
      })
      .catch((err) => {
        setBookingData([]);
        setTotalPage(0);
        setActivePage(0);
      });
  };

  return (
    <div>
      <div>
        <div className="border flex flex-col justify-center">
          <div className="border text-center">
            <p className="text-2xl p-2 bg-blue-500 text-white font-semibold">
              Các yêu cầu bị từ chối
            </p>
          </div>
          <div className="py-2 flex justify-between bg-blue-100">
            <Tooltip title="Xuất dữ liệu bảng ra excel">
              <p className="ml-5 cursor-pointer text-green-800 text-3xl hover:text-green-500">
                <FontAwesomeIcon icon={faFileCsv} />
              </p>
            </Tooltip>

            <div>
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
                <th className="p-5 border">Slot</th>
                <th className="p-5 border">Thời gian bắt đầu</th>
                <th className="p-5 border">Thời gian kết thúc</th>
                <th className="p-5 border">Trạng thái</th>
                <th className="p-5 border">Người đặt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookingData?.map((b, index) => {
                const status = b?.status;

                if (status === 3) {
                  return (
                    <tr className="border">
                      <td className="p-5 border text-center">
                        <p>{index + 1}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                          <span>{b?.facilityId?.name}</span>
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
                        <p>{b?.slot}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p>{b && new Date(b?.startDate).toLocaleString()}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p>{b && new Date(b?.endDate).toLocaleString()}</p>
                      </td>
                      <td className="p-5 border text-center">
                        <p>Bị từ chối </p>
                      </td>
                      <td className="p-5 border text-center">
                        <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
                          <span>{b?.booker?.name}</span>
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
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          {totalPage > 0 && (
            <div className="flex items-center justify-center ">
              <Pagination
                defaultCurrent={activePage}
                total={Number(`${totalPage}0`)}
                onChange={onChangePage}
                showSizeChanger={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mt-10">
<div className="border flex flex-col justify-center">
  <div className="border text-center bg-green-400 py-2">
    <p className="text-2xl text-white font-semibold">
      Các yêu cầu đã được duyệt
    </p>
  </div>
  <div className="py-2 flex justify-between bg-green-100">
    <Tooltip title="Xuất dữ liệu bảng ra excel">
      <p className="ml-5 cursor-pointer text-green-800 text-3xl hover:text-green-500">
        <FontAwesomeIcon icon={faFileCsv} />
      </p>
    </Tooltip>

    <div>
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
        <th className="p-5 border">Slot</th>
        <th className="p-5 border">Thời gian bắt đầu</th>
        <th className="p-5 border">Thời gian kết thúc</th>
        <th className="p-5 border">Trạng thái</th>
        <th className="p-5 border">Người đặt</th>
        <th className="p-5 border">Thời gian đặt</th>
        <th className="p-5 border">Người phê duyệt</th>
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
        <td className="p-5 border text-center">
          <p>Đặt thành công</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Minh</span>
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
          <p>18h-20-11-2022</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Thai</span>
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
      </tr>
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
        <td className="p-5 border text-center">
          <p>Đặt thành công</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Minh</span>
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
          <p>18h-20-11-2022</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Thai</span>
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
      </tr>
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
        <td className="p-5 border text-center">
          <p>Đặt thành công</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Minh</span>
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
          <p>18h-20-11-2022</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Thai</span>
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
<div className="mt-10 mb-10">
<div className="border flex flex-col justify-center">
  <div className="border text-center bg-red-400">
    <p className="text-2xl text-white font-semibold py-2">
      Các yêu cầu đã hủy
    </p>
  </div>
  <div className="py-2 flex justify-between bg-red-100">
  <Tooltip title="Xuất dữ liệu bảng ra excel">
        <p className="ml-5 cursor-pointer text-green-800 text-3xl hover:text-green-500">
          <FontAwesomeIcon icon={faFileCsv} />
        </p>
      </Tooltip>

      <div>
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
        <th className="p-5 border">Slot</th>
        <th className="p-5 border">Thời gian bắt đầu</th>
        <th className="p-5 border">Thời gian kết thúc</th>
        <th className="p-5 border">Trạng thái</th>
        <th className="p-5 border">Người đặt</th>
        <th className="p-5 border">Thời gian đặt</th>
        <th className="p-5 border">Người phê duyệt</th>
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
        <td className="p-5 border text-center">
          <p>Đã hủy yêu cầu</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Minh</span>
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
          <p>18h-20-11-2022</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Thai</span>
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
      </tr>
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
        <td className="p-5 border text-center">
          <p>Đã hủy yêu cầu</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Minh</span>
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
          <p>18h-20-11-2022</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Thai</span>
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
      </tr>
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
        <td className="p-5 border text-center">
          <p>Đã hủy yêu cầu</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Minh</span>
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
          <p>18h-20-11-2022</p>
        </td>
        <td className="p-5 border text-center">
          <p className="cursor-pointer hover:text-gray-400 flex items-center justify-center gap-1">
            <span>Thai</span>
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
</div> */
}
