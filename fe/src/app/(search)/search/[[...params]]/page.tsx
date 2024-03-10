"use client";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Empty, Pagination, PaginationProps, Tooltip } from "antd";
import { getCategory } from "../../../../../services/category.api";
import {
  getFacilities,
  searchFacility,
} from "../../../../../services/facilities.api";

export default function SearchAll({ params }: { params: object }) {
  console.log("====================================");
  console.log(params);
  console.log("====================================");
  const toastAddCategory = useRef<any>(null);
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [status, setStatus] = useState(null);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<0>(0);
  const [facilityData, setFacilityData] = useState<any[]>([]);

  const showErrorCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "error",
      summary: "Error",
      detail: msg,
      life: 3000,
    });
  };

  const handleSearch = () => {
    console.log(category);
    console.log(text);
    searchFacility(text.trim(), category)
      .then((res) => {
        setFacilityData(res.data.items);
        setActivePage(res.data.activePage);
        setTotalPage(res.data.totalPage);
      })
      .catch((err) => {
        setFacilityData([]);
        setActivePage(1);
        setTotalPage(0);
        showErrorCategory("Error occurred !!!");
      });
  };

  const showSuccessCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "success",
      summary: "Success",
      detail: msg,
      life: 3000,
    });
  };

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
  };

  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    if(pageNumber !== activePage){
      getFacilities(pageNumber)
      .then((res) => {
        setFacilityData(res.data.items);
        setActivePage(res.data.activePage);
        setTotalPage(res.data.totalPage);
      })
      .catch((err) => {
        setFacilityData([]);
        setActivePage(1);
        setTotalPage(0);
        showErrorCategory("Error occurred !!!");
      });
    }
  };

  useEffect(() => {
    getCategory()
      .then((res) => {
        console.log(res.data.item);
        setCategoryData(res.data.item);
      })
      .catch((err) => {
        setCategoryData([]);
        showErrorCategory("Error occurred !!!");
      });
    getFacilities()
      .then((res) => {
        setFacilityData(res.data.items);
        setActivePage(res.data.activePage);
        setTotalPage(res.data.totalPage);
      })
      .catch((err) => {
        setFacilityData([]);
        setActivePage(1);
        setTotalPage(0);
        showErrorCategory("Error occurred !!!");
      });
  }, []);

  return (
    <div className="mx-20">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Kết quả tìm kiếm</h1>
      </div>
      <div className="flex items-center justify-center gap-20">
        <div>
          <div className="flex gap-3 mt-10 items-center justify-center flex-wrap">
            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <i className="pi pi-search p-1" />
              <InputText
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Điền kí tự tìm kiếm ..."
                tooltip="Điền kí tự tìm kiếm"
                tooltipOptions={{ position: "top" }}
                className="shadow-none py-2"
              />
            </div>

            <div className="border border-solid border-gray-300 py-2 rounded-lg">
              <Dropdown
                value={category}
                onChange={(e) => setCategory(e.value)}
                options={[
                  { label: "Select an option", value: "" }, 
                  ...categoryData.map((item) => ({
                    label: item.categoryName,
                    value: item._id,
                  })),
                ]}
                optionLabel="label"
                placeholder="Phân loại"
                tooltip="Phân loại"
                tooltipOptions={{ position: "top" }}
                className="w-full px-5"
                style={{ boxShadow: "none" }}
              />
            </div>
            <div>
              <button
                className="px-10 py-4 text-white font-semibold rounded-md hover:bg-blue-400 bg-blue-600"
                onClick={handleSearch}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* products */}
        <div className="flex flex-wrap items-center justify-center mt-20 gap-10">
          {facilityData &&
            facilityData.map((f, index) => (
              <div className="basis-1/5  relative mb-5 shadow-xl">
                <div className="flex items-center justify-center">
                  <img src={f?.image} className="w-full h-72 rounded-md" />
                  <Tooltip title={f?.name}>
                  <p className="font-bold text-2xl bg-black text-white w-1/2 shadow-md rounded-b-md text-ellipsis overflow-hidden text-center absolute top-0 left-1/2 transform -translate-x-1/2">
                    {f?.name}
                  </p>
                  </Tooltip>
                  <button className="absolute bottom-5 bg-green-500 hover:bg-green-300 text-white font-semibold p-1 rounded-md">
                    Đặt phòng
                  </button>
                </div>
              </div>
            ))}
          {facilityData.length === 0 && <Empty />}
        </div>

        {/* pagination */}
        {totalPage > 0 && (
          <div className="flex items-center justify-center my-16">
            <Pagination
              defaultCurrent={activePage}
              total={Number(totalPage + "0")}
              onChange={onChangePage}
              showSizeChanger={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
