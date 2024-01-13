import Image from "next/image";
import LoginComponent from "../../components/LoginComponent";

export default function Login() {
  return (
    <div className="h-screen">
      <div className="relative bg-orange-500 h-full">
        <div className="rounded-full overflow-hidden">
          <Image
            src={"/ball.jpg"}
            width={60}
            height={60}
            alt="logo"
            className="mt-5 ml-5 left-2 top-2 rounded-full"
          />
        </div>

        <div
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ width: "67%" }}
        >
          <div className="text-center mb-10" style={{ width: "100%" }}>
            <h1 className="text-3xl font-bold text-white">
              Chúng tôi cung cấp các dịch vụ như{" "}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-20">
            <div className="relative h-60">
              <Image
                src={"/ball.jpg"}
                width={200}
                height={200}
                alt="bong da"
                className="mx-auto w-60 h-72 rounded-3xl filter brightness-50"
              />
              <p
                className="absolute text-center font-bold text-white left-1/2 transform -translate-x-1/2"
                style={{ top: "90%", width: "100%" }}
              >
                Đặt lịch sân bóng đá
              </p>
            </div>

            <div className="relative h-60">
              <Image
                src={"/bongro.jpg"}
                width={200}
                height={200}
                alt="bong da"
                className="mx-auto w-60 h-72 rounded-3xl"
              />
              <p
                className="absolute text-center font-bold text-white left-1/2 transform -translate-x-1/2"
                style={{ top: "90%", width: "100%" }}
              >
                Đặt lịch sân bóng rổ
              </p>
            </div>
            <div className="relative h-60">
              <Image
                src={"/class.jpg"}
                width={200}
                height={200}
                alt="bong da"
                className="mx-auto w-60 h-72 rounded-3xl filter brightness-50"
              />
              <p
                className="absolute text-center font-bold text-white left-1/2 transform -translate-x-1/2"
                style={{ top: "90%", width: "100%" }}
              >
                Đặt lịch phòng
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute h-screen bg-white rounded-l-3xl z-50 flex items-center justify-center"
          style={{ top: 0, right: 0, paddingLeft: "5%", paddingRight: "5%" }}
        >
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}
