"use client";
import useFetch from "../hooks/useFetch.js";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Toast } from "primereact/toast";
import { useRouter } from "next/navigation.js";
const LoginComponent = () => {
  const router = useRouter();
  const { handleGoogle, loading, error, setError } = useFetch(
    "http://localhost:5152/users/login"
  );

  const toast = useRef(null);

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Login failed",
      life: 3000,
    });
  };

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

  useEffect(() => {
    if (error !== "") {
      showError();
      console.log("====================================");
      console.log("errorLogin: " + error);
      console.log("====================================");
      setError("");
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        className="rounded-l-3xl"
        style={{ height: "100vh", width: "32vw", objectFit: "cover" }}
      >
        <source src={`/cloud.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="absolute text-center z-50 bg-white"
        style={{ padding: "30px", borderRadius: 10 }}
      >
        <div
          className="bg-white z-50 shadow-lg"
          style={{ borderRadius: "50px" }}
        >
          <p style={{ marginTop: "-40px", padding: "5px" }}>
            Sinh viên, Giảng viên ĐH-FPT HOLA
          </p>
        </div>
        <div
          id="loginDiv"
          className="flex justify-center"
          style={{ marginTop: "10px" }}
        ></div>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default LoginComponent;
