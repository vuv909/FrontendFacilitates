import { Tooltip } from "antd";

export default function TableComponentBooked() {
  return (
    <>
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
    </>
  );
}
