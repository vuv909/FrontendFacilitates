"use client";
import Link from "next/link";
import useFetch from "../hooks/useFetch.js";
import { useEffect } from "react";


const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5152/users/login"
  );

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "758829022930-q3bkt63smaurogtn5q3434tmef88r4mm.apps.googleusercontent.com",
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        {/* <Link to="/">Go Back</Link> */}
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Login to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
      </main>
      <footer></footer>
    </>
  );
};

export default Login;