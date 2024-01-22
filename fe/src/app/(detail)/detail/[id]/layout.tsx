import type { Metadata } from "next";
import NavbarComponent from "../../../../../components/NavbarComponent";
import FooterComponent from "../../../../../components/FooterComponent";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorNavbarOne: string = "bg-gray-300";
  const colorNavbarTwo: string = "bg-gray-300";
  return (
    <div>
      <NavbarComponent
        colorNavbarOne={colorNavbarOne}
        colorNavbarTwo={colorNavbarTwo}
      />
      <div>{children}</div>
    </div>
  );
}
