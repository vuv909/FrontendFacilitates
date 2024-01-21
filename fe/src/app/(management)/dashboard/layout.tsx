import type { Metadata } from "next";
import FooterComponent from "../../../../components/FooterComponent";
import NavbarComponent from "../../../../components/NavbarComponent";

export const metadata: Metadata = {
  title: "quản lý",
};

export default function SearchtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-gray-300";
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent
        colorNavbarOne={colorNavbarOne}
        colorNavbarTwo={colorNavbarTwo}

      />
      <div className="mt-20 flex-grow">{children}</div>
      <div className="bg-gray-400">
        <FooterComponent />
      </div>
    </div>
  );
}
