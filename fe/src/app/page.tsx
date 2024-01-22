"use client";
import React, { useEffect, useState } from "react";
import CarouselComponent from "../../components/CarouselComponent";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import Image from "next/image";
import { Tooltip } from "primereact/tooltip";
import { InputText } from "primereact/inputtext";
import CarouselTopComponent from "../../components/CarouselTopComponent";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-transparent";
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
          className="w-full filter brightness-100 h-screen object-cover"
        />
        <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center">
          <InputText
            className="outline-none p-3 shadow-none w-96 md:rounded-l-lg"
            placeholder="Điền tên thông tin bạn muốn tìm kiếm..."
            tooltip="Hello world"
            tooltipOptions={{ position: "top" }}
          />
          <button
            onClick={() => router.push("/search")}
            className="bg-blue-500 hover:bg-blue-300 p-3 md:rounded-r-lg"
          >
            <span className="pi pi-search text-white h-full"></span>
          </button>
        </div>
      </div>

      <div>
        <div className="text-center mt-12 font-bold text-2xl">
          <h1>Phân loại dịch vụ đặt trước</h1>
        </div>
        <CarouselComponent />
      </div>

      <div className="mt-10 text-center">
        <h1 className="ml-7 font-bold text-lg">
          Top các phòng , sân thể dục được sử dụng nhiều
        </h1>
        <CarouselTopComponent />
      </div>

      <FooterComponent />
    </div>
  );
}
