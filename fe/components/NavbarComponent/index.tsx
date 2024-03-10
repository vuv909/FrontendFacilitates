"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/icons8-logo.svg";
import Image from "next/image";
import { Badge } from "primereact/badge";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { StorageService } from "../../services/storage";
import { addUser } from "@/redux/slices/storeUserSlice";
import { useDispatch } from "react-redux";
import { Menu } from "primereact/menu";

interface NavbarComponentProps {
  colorNavbarOne: string;
  colorNavbarTwo: string;
}
const NavbarComponent: React.FC<NavbarComponentProps> = ({
  colorNavbarOne,
  colorNavbarTwo,
}) => {
  const dispatch = useDispatch();
  const [scrolling, setScrolling] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => (state as any).userInfo);
  const menuLeft = useRef(null);
  const menuRight = useRef(null);
  const toast = useRef(null);

  useEffect(() => {
    if (
      StorageService.getUser() === "" ||
      StorageService.isLoggedIn() === false
    ) {
      setIsLogin(false);
    } else if (
      StorageService.getUser() !== "" &&
      StorageService.isLoggedIn() === true
    ) {
      dispatch(addUser(StorageService.getUser()));
      setIsLogin(StorageService.isLoggedIn());
    }
  }, []);

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

  let items = [
    {
      label: "Hồ sơ của tôi",
      icon: "pi pi-cog",
      command: (event: any) => router.push("/profile"),
    },
    {
      label: "Đăng xuất",
      icon: "pi pi-sign-out",
      command: (event: any) => {
        StorageService.signout();
        router.push("/login");
      },
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "3vh",
          paddingBottom: "3vh",
          transition: "0.5s ease-in-out", // Optional: Add a transition effect
        }}
        className={`${scrolling ? colorNavbarOne : colorNavbarTwo} h-20 w-full`}
      >
        <div
          style={{ marginLeft: "3vw", zIndex: 100 }}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
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
              <button
                className="bg-gray-950 hover:bg-gray-800 p-2 text-white rounded-lg"
                onClick={() => router.push("/login")}
              >
                Đăng nhập
              </button>
            </div>
          )}
          {isLogin && (
            <div className="flex gap-14 items-center justify-center">
              <div className="cursor-pointer flex items-center">
                <i
                  className="pi pi-bell p-overlay-badge"
                  style={{ fontSize: "1.5rem" }}
                >
                  <Badge value="2"></Badge>
                </i>
              </div>
              <div
                className="cursor-pointer h-12 w-12 relative"
                onMouseEnter={(event) => (menuLeft as any).current.toggle(event)}
                onMouseLeave={(event) => (menuLeft as any).current.hide(event)}
                aria-controls="popup_menu_left"
                aria-haspopup
              >
                <img
                  src={`${user.value.avatar}`}
                  className="h-full w-full rounded-full"
                />
                <Menu model={items} popup ref={menuLeft} id="popup_menu_left" className="fix" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default NavbarComponent;
