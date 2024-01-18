import { Metadata } from "next";
import InfomationDetailComponent from "../../../../../components/InformationDetailComponent";
import CommentComponent from "../../../../../components/DetailComponent/CommentComponent";
import CarouselTopComponent from "../../../../../components/CarouselTopComponent";
import FooterComponent from "../../../../../components/FooterComponent";
import CarouselDetailComponent from "../../../../../components/CarouselDetailComponent";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Detail ${params.id}`);
    }, 100);
  });

  return {
    title: `${title}`,
  };
};

export default function DetailPage() {
  return (
    <>
      <div>
        <div className="relative h-screen">
          <img
            src="https://picsum.photos/200/300"
            className="w-full h-screen rounded-md object-fill"
          />
          <div>
            <div className="absolute right-20 top-1/2 transfrom -translate-y-1/2 z-50 bg-gray-200 p-5 shadow-xl rounded-lg">
              <InfomationDetailComponent />
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
      </div>
    </>
  );
}
