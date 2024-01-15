import React, { useEffect, useState } from "react";
import CarouselComponent from "../../components/CarouselComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import Image from "next/image";
import { Tooltip } from "primereact/tooltip";
import { InputText } from "primereact/inputtext";
import CarouselTopComponent from "../../components/CarouselTopComponent";

export default function Home() {
  const colorNavbarOne : string= "bg-gray-300";
  const colorNavbarTwo : string= "bg-transparent";
  return (
    <div>
      <NavbarComponent
        colorNavbarOne={colorNavbarOne}
        colorNavbarTwo={colorNavbarTwo}
      />

      {/* search bar */}
      <div className="relative">
        <img
          src="/bannerfpt.jpg"
          alt="loading..."
          className="w-full filter brightness-100"
          style={{ height: "500px", objectFit: "fill" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <InputText
            className="outline-none p-3 pr-8 rounded-l-lg"
            placeholder="Điền tên thông tin bạn muốn tìm kiếm..."
            tooltip="Hello world"
            tooltipOptions={{ position: "top" }}
            style={{boxShadow:'none'}}
          />
          <button className="bg-blue-500 hover:bg-blue-300 p-3 rounded-r-lg">
            <span className="pi pi-search text-white h-full"></span>
          </button>
        </div>
      </div>

      <div>
        <CarouselComponent />
      </div>

      <div className="mt-10">
        <h1 className="ml-7 text-lg">Top sân bóng đá được sử dụng nhiều</h1>
        <CarouselTopComponent />
      </div>

      <div className="mt-10">
        <h1 className="ml-7 text-lg">Top sân bóng rổ được sử dụng nhiều</h1>
        <CarouselTopComponent />
      </div>

      <div className="mt-10">
        <h1 className="ml-7 text-lg">Top phòng học được sử dụng nhiều</h1>
        <CarouselTopComponent />
      </div>

      <FooterComponent />
    </div>
  );
}
