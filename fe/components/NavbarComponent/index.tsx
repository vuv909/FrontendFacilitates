"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../public/icons8-logo.svg";
import Image from "next/image";
interface NavbarComponentProps {
  colorNavbarOne: string;
  colorNavbarTwo: string;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({
  colorNavbarOne,
  colorNavbarTwo,
}) => {
  const [scrolling, setScrolling] = useState(false);

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
      <div style={{ marginLeft: "3vw", zIndex: 100 }}>
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
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </div>
    </div>
  );
};
export default NavbarComponent;
