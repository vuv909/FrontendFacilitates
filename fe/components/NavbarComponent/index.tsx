"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../public/icons8-logo.svg";
import Image from "next/image";
import { Badge } from "primereact/badge";
import { useRouter } from "next/navigation";

interface NavbarComponentProps {
  colorNavbarOne: string;
  colorNavbarTwo: string;
}
const NavbarComponent: React.FC<NavbarComponentProps> = ({
  colorNavbarOne,
  colorNavbarTwo,
}) => {
  const [scrolling, setScrolling] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100vw",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "3vh",
        paddingBottom: "3vh",
        transition: "0.5s ease-in-out", // Optional: Add a transition effect
      }}
      className={`${scrolling ? colorNavbarOne : colorNavbarTwo}`}
    >
      <div style={{ marginLeft: "3vw", zIndex: 100 }} className="cursor-pointer" onClick={() => router.push("/")}>
        <Image src={Logo} width={50} height={50} alt="logo" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          marginRight: "3vw",
          zIndex: 100,
        }}
      >
        {!isLogin && (
          <div>
            <button className="bg-gray-950 hover:bg-gray-800 p-2 text-white rounded-lg" onClick={() => router.push("/login")}>
              Đăng nhập
            </button>
          </div>
        )}
        {isLogin && (
          <div className="flex gap-14 items-center justify-center">
            <div className="cursor-pointer">
              <i
                className="pi pi-bell p-overlay-badge"
                style={{ fontSize: "1.5rem" }}
              >
                <Badge value="2"></Badge>
              </i>
            </div>
            <div className="cursor-pointer">
              <img
                src="https://picsum.photos/200/300"
                className="h-50px w-50px rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavbarComponent;