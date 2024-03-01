<<<<<<< HEAD
"use client"
=======
"use client";
>>>>>>> 7a08291b40cf57172ea608409b212aa662ea3c06
import InfomationDetailComponent from "../../../../../components/InformationDetailComponent";
import CommentComponent from "../../../../../components/DetailComponent/CommentComponent";
import CarouselTopComponent from "../../../../../components/CarouselTopComponent";
import FooterComponent from "../../../../../components/FooterComponent";
import CarouselDetailComponent from "../../../../../components/CarouselDetailComponent";
import { Metadata } from "next";
import { Spin } from "antd";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { facilityById } from "../../../../../services/facilities.api";
import Image from "next/image";
import { Toast } from "primereact/toast";

<<<<<<< HEAD

=======
export default function DetailPage({ params }: { params: { id: string } }) {
  const [isGettingData, setIsGettingData] = useState(false);
  const [detailData, setDetailData] = useState<any>(null);
  const toastAddCategory = useRef<any>(null);

  const showErrorCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "error",
      summary: "Error",
      detail: msg,
      life: 3000,
    });
  };
>>>>>>> 7a08291b40cf57172ea608409b212aa662ea3c06

  const showSuccessCategory = (msg: string) => {
    toastAddCategory.current.show({
      severity: "success",
      summary: "Success",
      detail: msg,
      life: 3000,
    });
  };
  useLayoutEffect(() => {
    setIsGettingData(true);
    facilityById(params.id)
      .then((res) => {
        setIsGettingData(false);
        console.log("res::", res.data.data);
        setDetailData(res.data.data);
      })
      .catch((err) => {
        setIsGettingData(false);
      });
  }, []);

  return (
    <>
      <Spin size="large" spinning={isGettingData} fullscreen={isGettingData}>
        <div>
          <div className="relative h-screen">
            <img
              src={detailData?.image}
              className="w-screen h-screen rounded-md object-center"
            />

            <div>
              <div className="absolute right-20 top-1/2 transfrom -translate-y-1/2 z-50 bg-gray-200 p-5 shadow-xl rounded-lg">
                <InfomationDetailComponent detailData={detailData} showSuccessCategory={showSuccessCategory} showErrorCategory={showErrorCategory} />
              </div>

              {/* comment */}
              <div className="flex justify-center pt-10">
                <CommentComponent />
              </div>
              <div>
                <div className="text-center font-bold text-4xl">
                  <p>Các đề xuất dành cho bạn</p>
                </div>
                <div>
                  <CarouselDetailComponent />
                </div>
                <div className="bg-gray-400">
                  <FooterComponent />
                </div>
              </div>
            </div>
          </div>
          <Toast ref={toastAddCategory} />
        </div>
      </Spin>
    </>
  );
}
