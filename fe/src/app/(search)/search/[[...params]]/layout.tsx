import type { Metadata } from "next";
import NavbarComponent from "../../../../../components/NavbarComponent";
import FooterComponent from "../../../../../components/FooterComponent";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-gray-300";
  return (
    <>
      <NavbarComponent
        colorNavbarOne={colorNavbarOne}
        colorNavbarTwo={colorNavbarTwo}
      />
      <div className="mt-32">{children}</div>
      <div className="bg-gray-400">
        <FooterComponent />
      </div>
    </>
  );
}
