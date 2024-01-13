"use client";
import useFetch from "../hooks/useFetch.js";
import { useEffect } from "react";
import Image from "next/image";
const LoginComponent = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5152/users/login"
  );

  useEffect(() => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GG_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        theme: "filled_blue",
        text: "signin_with",
        shape: "pill",
      });
    }
  }, [handleGoogle]);

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Image
        src="/clound.jpg"
        alt="Picture of the author"
        layout="fill"
        className="z-40 rounded-l-3xl"
        style={{ opacity: 0.7 }}
      />
      <div
        className="text-center z-50 bg-white"
        style={{ padding: "30px", borderRadius: 10 }}
      >
        <div className="bg-white z-50" style={{ borderRadius: "50px" }}>
          <p style={{ marginTop: "-40px", padding: "5px" }}>
            Sinh viên, Giảng viên ĐH-FPT
          </p>
        </div>
        <div
          id="loginDiv"
          className="flex justify-center"
          style={{ marginTop: "10px" }}
        ></div>
      </div>
    </div>
  );
};

export default LoginComponent;
