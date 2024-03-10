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
import {
  getFacilities,
  getFacilityDetail,
} from "../../services/facilities.api";
import { getCategory } from "../../services/category.api";
import { Socket } from "socket.io-client";
import io from "socket.io-client";
import { changeConfirmLocale } from "antd/es/modal/locale";
import { chat, getListUserMessage } from "../../services/chat.api";
interface Message {
  text: string;
  sender: "left" | "right";
}

interface User {
  email: string;
  _id: string;
}
const host = "http://localhost:5152";

export default function Home() {
  const router = useRouter();
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-transparent";
  const [faci, setFaci] = useState([]);
  const [cate, setCate] = useState([]);

  // Bắt đầu chat to admin - TrungNQ
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [showChat, setShowChat] = useState(false);
  const [socket, setSocket] = useState<Socket>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getCategory()
      .then((response) => {
        setCate(response.data.item);
      })
      .catch((error) => console.error("Error fectching Category"));

    getFacilities()
      .then((response) => {
        setFaci(response.data.items);
      })
      .catch((error) => console.error("Error fetching Facilities"));

    getListUserMessage()
      .then((response) => {
        const data = response.data;
        if (data.statusCode === 1) {
          console.log(data.data, "hi");

          const newMessages = data.data.map((message: any) => ({
            text: message.content,
            sender: message.type === "user" ? "left" : "right",
          }));
          setMessages(newMessages);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(cate);
    // console.log(faci);
  }, []);

  useEffect(() => {
    const newSocket = io(host);
    setSocket(newSocket);

    socket?.on("connect", () => {
      console.log("Connected to the server");
    });
    const storedData = localStorage.getItem("user");
    if (storedData) {
      try {
        const user = JSON.parse(storedData);
        newSocket.emit("storeUserId", user._id);
        setUser(user);
        setShowChat(true);
      } catch (error) {
        console.error(error);
      }
    }
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("privateMessage", (data) => {
        if (data) {
          const newMessage: Message = {
            text: data.message,
            sender: "left",
          };
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      });
    }
  }, [socket]);

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    setMessages([
      ...messages,
      {
        text: inputText.trim(),
        sender: "right",
      },
    ]);
    setInputText("");
    if (user) {
      chat({ userId: user?._id, type: "user", content: inputText })
        .then((response) => {
          socket?.emit("privateMessage", {
            sender: user?._id,
            message: inputText,
          });
        })
        .catch((error) => {
          console.error("Error when chat: ", error);
        });
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  // Kết thúc chat to admin- TrungNQ

  if (!faci || !cate) {
    return <div>loading...</div>;
  }

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
        <CarouselComponent data={cate} />
      </div>

      <div className="mt-10 text-center">
        <h1 className="ml-7 font-bold text-lg">
          Top các phòng , sân thể dục được sử dụng nhiều
        </h1>
        <CarouselTopComponent data={faci} />
      </div>
      <i
        className="pi pi-bell font-medium text-blue-500 text-3xl cursor-pointer fixed top-3/4 right-10"
        onClick={() => setShowChat(!showChat)}
      ></i>
      {showChat && (
        <div
          className="fixed bottom-5 right-20 bg-white p-4 border border-gray-300 overflow-y-auto"
          style={{ maxHeight: "400px" }}
        >
          <h2 className="text-lg font-semibold mb-2">Chat Box</h2>
          <div className="flex flex-col space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  message.sender === "right"
                    ? "bg-blue-100 self-end"
                    : "bg-gray-100 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {showChat ? (
            <div className="flex space-x-2 mt-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow p-2 border border-gray-300 rounded-lg"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
               <i className="pi pi-send" style={{ fontSize: '1rem' }}></i>
              </button>
            </div>
          ) : (
            <span>Đăng nhập để chat</span>
          )}
        </div>
      )}

      <FooterComponent />
    </div>
  );
}
