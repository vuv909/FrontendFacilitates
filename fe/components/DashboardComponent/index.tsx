"use client";
import React, { useState } from "react";
import { Button, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LeftOutlined,
  RightOutlined,
  LineChartOutlined,
  CarryOutOutlined,
  UserOutlined,
  FileZipOutlined,
} from "@ant-design/icons";
import Analysist from "./Analysist";
import ManageFacilites from "./ManageFacilities";
import ManageBookingRequest from "./ManageBookingRequest";
import ManageAccount from "./ManageAccount";
import RecycleFacilities from "./Recycle";

const { SubMenu } = Menu;

const items = [
  { key: "1", label: "Thống kê", icon: <LineChartOutlined /> },
  { key: "2", label: "Quản lý phòng , sân bóng", icon: <AppstoreOutlined /> },
  {
    key: "3",
    label: "Duyệt yêu cầu đặt sân , phòng",
    icon: <CarryOutOutlined />,
  },
  { key: "4", label: "Quản lý tài khoản", icon: <UserOutlined /> },
  {
    key: "5",
    label: "Thùng rác phòng và sân thể dục đã xóa",
    icon: <FileZipOutlined />,
  },
];

const DashboardComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState<string>("1");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleItemClick = (key: string) => {
    console.log("Clicked on menu item with key:", key);
    setKey(key);
  };

  return (
    <div className="flex">
      <div className="flex flex-col border-r-2 border-b-2 w-fit min-h-screen bg-gray-100">
        {/* <Button
          onClick={toggleCollapsed}
          className={` bg-blue-300 text-white font-bold z-50 flex items-center justify-center  ${
            !collapsed ? "absolute -right-11" : "absolute -right-11"
          }`}
        >
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </Button> */}

        <Button
          onClick={toggleCollapsed}
          className={` bg-blue-300 text-white font-bold z-50 flex items-center justify-end  ${
            collapsed === true ? "block" : "hidden"
          } `}
        >
         <RightOutlined />
        </Button>
        <Button
          onClick={toggleCollapsed}
          className={` bg-blue-300 text-white font-bold z-50 flex items-center justify-end  ${
            collapsed === false ? "block" : "hidden"
          }`}
        >
          <LeftOutlined />
        </Button>
        <Menu
          style={{ width: collapsed ? 50 : 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          className="border-none bg-gray-100"
          items={items}
          inlineCollapsed={collapsed}
          onClick={({ key }) => handleItemClick(key)}
        />
      </div>
      <div className="flex-grow">
        {key === "1" && <Analysist />}
        {key === "2" && <ManageFacilites />}
        {key === "3" && <ManageBookingRequest />}
        {key === "4" && <ManageAccount />}
        {key === "5" && <RecycleFacilities />}
      </div>
    </div>
  );
};

export default DashboardComponent;
