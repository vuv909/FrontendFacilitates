import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pagination, PaginationProps } from "antd";

export default function ManageBookingRequest() {
  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <div>
      <div>
        <div className="border flex flex-col justify-center">
          <div className="border text-center">
            <p className="text-2xl p-2 bg-blue-500 text-white font-semibold">
              Các yêu cần đang chờ xử lí
            </p>
          </div>
          <div className="py-2 flex justify-end bg-blue-100">
            <input
              type="text"
              className="outline-none border border-gray-300 h-7 p-1 rounded-l-full"
              placeholder="Điền kí tự để tìm kiếm ..."
            />
            <button className="bg-blue-500 px-2 h-7 hover:bg-blue-300 cursor-pointer rounded-r-full">

              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </button>
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
                <th></th>
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
                  <p>Đang chờ xử lí</p>
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
                <td className="">
                  <div className="flex flex-col gap-2 w-full py-1">
                    <button className="bg-green-400 hover:bg-green-300 p-2 text-white rounded-full">
                      Chấp nhận
                    </button>
                    <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full">
                      Hủy
                    </button>
                  </div>
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
                  <p>Đang chờ xử lí</p>
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
                <td className="">
                  <div className="flex flex-col gap-2 w-full py-1">
                    <button className="bg-green-400 hover:bg-green-300 p-2 text-white rounded-full">
                      Chấp nhận
                    </button>
                    <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full">
                      Hủy
                    </button>
                  </div>
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
                  <p>Đang chờ xử lí</p>
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
                <td className="">
                  <div className="flex flex-col gap-2 w-full py-1">
                    <button className="bg-green-400 hover:bg-green-300 p-2 text-white rounded-full">
                      Chấp nhận
                    </button>
                    <button className="bg-red-400 hover:bg-red-300 p-2 text-white rounded-full">
                      Hủy
                    </button>
                  </div>
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
      <div className="mt-10">
        <div className="border flex flex-col justify-center">
          <div className="border text-center bg-green-400 py-2">
            <p className="text-2xl text-white font-semibold">
              Các yêu cầu đã được duyệt
            </p>
          </div>
          <div className="py-2 flex justify-end bg-green-100">
            <input
              type="text"
              className="outline-none border border-gray-300 h-7 p-1 rounded-l-full"
              placeholder="Điền kí tự để tìm kiếm ..."
            />
            <button className="bg-blue-500 px-2 h-7 hover:bg-blue-300 cursor-pointer rounded-r-full">

              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </button>
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
          <div className="py-2 flex justify-end bg-red-100">
            <input
              type="text"
              className="outline-none border border-gray-300 h-7 p-1 rounded-l-full"
              placeholder="Điền kí tự để tìm kiếm ..."
            />
            <button className="bg-blue-500 px-2 h-7 hover:bg-blue-300 cursor-pointer rounded-r-full">

              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            </button>
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
      </div>
    </div>
  );
}