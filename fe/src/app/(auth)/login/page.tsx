import Image from "next/image";
import LoginComponent from "../../../../components/LoginComponent";
import Link from "next/link";
import Logo from '../../../../public/icons8-logo.svg'
export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="h-screen">
      <div className=" bg-orange-500 h-full">
        <Image
          src="/fpt.jpg"
          alt="fptu"
          layout="fill"
          className="opacity-80"
        />

        <div className="rounded-full overflow-hidden">
          <Link href={"/"}>
            <Image
              src={Logo}
              width={60}
              height={60}
              alt="logo"
              className="mt-5 ml-5 rounded-full cursor-pointer text-red-500"
              style={{ zIndex: 100, position: "absolute", top: 0, left: 0 }}
            />
          </Link>
        </div>

        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <div className="text-center mb-10" style={{ width: "100%" }}>
            <h1 className="text-6xl font-bold text-white filter brightness-200">
              Chúng tôi có các dịch vụ như{" "}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-20">
            <div className="relative h-60 cursor-pointer">
              <Image
                src={"/ball.jpg"}
                width={200}
                height={200}
                alt="bong da"
                className="mx-auto w-60 h-72 rounded-3xl filter brightness-75 object-cover"
              />
              <p
                className="absolute text-center font-bold text-white left-1/2 transform -translate-x-1/2"
                style={{ top: "90%", width: "100%" }}
              >
                Đặt lịch sân bóng đá
              </p>
            </div>

            <div className="relative h-60 cursor-pointer">
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
            <div className="relative h-60 cursor-pointer">
              <Image
                src={"/class.jpg"}
                width={200}
                height={200}
                alt="bong da"
                className="mx-auto w-60 h-72 rounded-3xl filter brightness-75"
              />
              <p
                className="absolute text-center font-bold text-white left-1/2 transform -translate-x-1/2"
                style={{ top: "90%", width: "100%" }}
              >
                Đặt lịch phòng
              </p>
            </div>
          </div>
          <div>
            <LoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
}